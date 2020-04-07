<template>
	<div class="animation">
		{{page}}
		<div class="anim__buttons">
			<button v-on:click="changeCurrentSlide('about')" class="link">Эбаут</button>
			<button v-on:click="changeCurrentSlide('newindex')" class="link index" :key="currentSlide">Ньюиндекс</button>
			<button v-on:click="closeAnimation()">Закрыть</button>
		</div>
	</div>
</template>


<script>
	import { mapState } from 'vuex';
	import { TimelineMax } from 'gsap';
	
    
    import * as THREE from 'three';
    import VTKLoader  from '~/lib/vtkloader.js';
    var OrbitControls = require('three-orbit-controls')(THREE);
    
	
	export default {
		data(){
			return {
				state: [],
				material: {},
				geometry: {},
				currentSlideLocal: ''
			}
		},
		props: {
			webgl: {
				type: Boolean,
				default: true
			},
			currentSlide: {
				type: String,
			},
		},
        computed: mapState(['page']),
		//middleware: 'animation',
		methods: {
			changeCurrentSlide(ctx) {
				this.currentSlideLocal=ctx
				this.$emit("update:changeCurrentSlide", ctx)
			},
			closeAnimation() {
				
				this.$emit("closeAnimation", false)
			}
		},
		watch: {
            currentSlideLocal: function(newValue,oldValue) {
				let vm = this;
				console.log(newValue,oldValue, 'ЗДАРОВА');
				vm.geometry.attributes.target = vm.state[newValue];
				vm.geometry.needsUpdate = true;
				let tl = new TimelineMax({onComplete: function(){
					vm.material.uniforms.blend.value = 0;
					vm.geometry.attributes.source = vm.geometry.attributes.target;
					vm.geometry.verticesNeedUpdate = true;
				}});
				tl
				.to(vm.material.uniforms.blend,2,{value:1},0);
			},
			currentSlide: function(newValue,oldValue) {
				console.log(newValue,oldValue, 'ЗДАРОВА');
				this.currentSlideLocal='newindex'
				this.$emit("update:changeCurrentSlide", newValue)
			}
		},
		mounted(){
			var camera, pos, controls, scene, renderer, geometry, geometry1, material;
			let vm = this;

			function init() {
			  scene = new THREE.Scene();
			  //scene.background = new THREE.Color(0x000000, 0);
			  renderer = new THREE.WebGLRenderer({ alpha: true });
			  
			  let vtkFilesArray=['newindex','about']

			  for (var i = 0; i < vtkFilesArray.length; i++) {
					//Пошло замыкание
     			(function(fileName) {
					let loader = new THREE.VTKLoader();
					let file=vtkFilesArray[i]
					let states = [];
					loader.load(`/${file}.vtk`,function(mesh) {
						vm.geometry = new THREE.BufferGeometry();
						let numVertices = mesh.vertices.length; 
						let source = new Float32Array(numVertices*3);
						let target = new Float32Array(numVertices*3);
						let cube = new Float32Array(numVertices*3);
						let sphere = new Float32Array(numVertices*3);
						let positions = new Float32Array(numVertices*3);
						vm.geometry.setAttribute('position', new THREE.BufferAttribute(positions,3));
						vm.geometry.setAttribute('target', new THREE.BufferAttribute(positions,3));
						vm.geometry.attributes.position.copyVector3sArray(mesh.vertices);
						
						let temp = new THREE.BufferAttribute(positions,3);
						states.push(temp.copyVector3sArray(mesh.vertices));
						vm.state[file] = temp.copyVector3sArray(mesh.vertices);

						//vm.geometry.verticesNeedUpdate = true;
						
						//vm.geometry.attributes.target = vm.state['newindex'];
						
						vm.material = new THREE.RawShaderMaterial( {
							uniforms: {
								color: { value: new THREE.Color( 0xffffff ) },
								dot: { type: 't', value: new THREE.TextureLoader().load('/reddot.png') },
								blend: { type: 'f', value: 0 },
								size: { type: 'f', value: 5 }
							},
							vertexShader: `
								precision highp float;
								attribute vec3 position;
								attribute vec3 source;
								attribute vec3 target;
								attribute vec3 positions;
								uniform mat4 modelViewMatrix;
								uniform mat4 projectionMatrix;
								uniform float size;
								uniform float blend;
								uniform sampler2D sourceTex;
								uniform sampler2D targetTex;
								uniform vec2 dimensions;
								varying vec3 vColor;
								void main() {
									vec3 result = source*(1. - blend) + blend*target;
									vColor = normalize(result);
									vec4 mvPosition = modelViewMatrix * vec4( result, 1. );
									gl_PointSize = size * ( 1. / -mvPosition.z );
									gl_Position = projectionMatrix * mvPosition;
								}`,
							fragmentShader: `
								precision highp float;
								varying vec3 vColor;
								uniform vec3 color;
								uniform sampler2D dot;
								void main() {
									
									vec4 color = texture2D( dot, gl_PointCoord );
									gl_FragColor = color;
									
								}
							`,
							alphaTest: 0.5,
							transparent: true
						});

						let points = new THREE.Points(vm.geometry,vm.material);
						scene.add(points);
						points.position.y = 30;
						points.position.x = -30;
						points.rotation.y = 1.54;
					});
			  }(i));
			  	
			  }
				
				renderer.setPixelRatio(window.devicePixelRatio);
				renderer.setSize(window.innerWidth, window.innerHeight);
				var container = vm.$el;
				container.appendChild(renderer.domElement);
				camera = new THREE.PerspectiveCamera(
				80,
				window.innerWidth / window.innerHeight,
				0.001, 500
				);
				camera.position.set( 0, 0, 50 );
				controls = new OrbitControls(camera, renderer.domElement);
				resize();
			    
			 
			}
			function onWindowResize() {
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight);
			}
			function resize() {
			  var w = window.innerWidth;
			  var h = window.innerHeight;
			  renderer.setSize( w, h );
			  camera.aspect = w / h;
			  camera.updateProjectionMatrix();
			}
			let time = 0;
			function animate() {
			  time++;
			  requestAnimationFrame(animate);
			  render();
			}
			
			function render() {
				controls.update();
				renderer.setRenderTarget( null );
				renderer.clear();
				renderer.render( scene, camera );
				
			}
			init();
			animate();
		}
	}
</script>

<style>
	.animation{
		position: fixed;
        z-index: 9998;
		x: 0;
		y: 0;
	}
	.anim__buttons{
		position: fixed;
		width: 100px;
		color: red;
		height: 20px;
        z-index: 9999;
		display: flex;
		flex-direction: row;
	}

</style>