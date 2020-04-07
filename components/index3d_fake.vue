<template>
	<div class="animation">
		{{page}}
		<a v-on:click="changeSlide('about')" class="link">Эбаут</a>
		<a v-on:click="changeSlide('newindex')" class="link someindex">Ньюиндекс</a>
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
				currentSlide: 'newindex'
			}
		},
        computed: mapState(['page']),
		//middleware: 'animation',
		methods: {
			changeSlide(ctx) {
				this.currentSlide=ctx
			}
		},
		watch: {
            currentSlide: function(newValue,oldValue) {
				let vm = this;
				
				console.log(`Переход на ${newValue}`)
				vm.geometry.attributes.target = vm.state[newValue];
				vm.geometry.needsUpdate = true;
				let tl = new TimelineMax({onComplete: function(){
					vm.material.uniforms.blend.value = 0;
					vm.geometry.attributes.source = vm.geometry.attributes.target;
					vm.geometry.needsUpdate = true;
				}});
				tl
				.to(vm.material.uniforms.blend,2,{value:1},0);
			}
		},
		mounted(){
			var camera, pos, controls, scene, renderer, geometry, geometry1, material;
			let vm = this;
			function init() {
				
				scene = new THREE.Scene();
				scene.background = new THREE.Color(0xF7F7F7);
				renderer = new THREE.WebGLRenderer();
				let states = [];
				let vtkFilesArray=['newindex','about']
				console.log(vtkFilesArray)
				for (var i = 0; i < vtkFilesArray.length; i++) {
					//Пошло замыкание
     				(function(fileName) {
						
						let file=vtkFilesArray[i]
						console.log(file)
						let loader = new THREE.VTKLoader();
						loader.load(`/${file}.vtk`, function(mesh) {
							console.log(file,`HAI ${i}`)
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
							//console.log(positions, i)
							let temp = new THREE.BufferAttribute(positions,3);
							console.log(temp)
							states.push(temp.copyVector3sArray(mesh.vertices));
							//console.log(vm.geometry.attributes.position)
							vm.state[file] = temp.copyVector3sArray(mesh.vertices);
						 /* for (var i = 0; i <= numVertices*3; i=i+3) {
							cube[i] = Math.random()*2;
							cube[i+1] = Math.random()*2 + 1;
							cube[i+2] = Math.random()*2 -1;
							}	
							vm.geometry.setAttribute('source', new THREE.BufferAttribute(cube,3));
							states.push(new THREE.BufferAttribute(cube,3));
							vm.state['another'] = new THREE.BufferAttribute(cube,3);
							console.log(vm.state,'VM STATE'); 	
							let teta,z;
							
							 for (var i = 0; i < numVertices*3; i=i+3) {
								teta = Math.random()*2*Math.PI;
								z = 2*Math.random()*2 - 1;
								sphere[i] = 100*Math.sqrt(1 - z*z)*Math.cos(teta) ;
								sphere[i+1] = 100*Math.sqrt(1 - z*z)*Math.sin(teta) + 2;
								sphere[i+2] = 100*z;
							} */
						
							
							//vm.state['about'] = new THREE.BufferAttribute( sphere, 3 );
							// 	console.log($nuxt.$route.name,'HAPPINESSS');
							
							vm.geometry.attributes.source = 'newindex';
							vm.material = new THREE.RawShaderMaterial( 
								{
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
							console.log(scene, `СЦЕНА ДЛЯ ${file}`)
						 	points.position.y = 30;
							points.position.x = -20;
							points.rotation.y = 1.6; 
						} );
					}(i));
				}
			  renderer.setPixelRatio(window.devicePixelRatio);
			  renderer.setSize(window.innerWidth, window.innerWidth);
			  var container = vm.$el;
			  container.appendChild(renderer.domElement);
			  camera = new THREE.PerspectiveCamera(
			    70,
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

				renderer.setSize( window.innerWidth, window.innerHeight );

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
        z-index: 9998	
	}
	.link{
		position: fixed;
		width: 100px;
		color: red;
		height: 20px;
        z-index: 9999
	}
	.someindex {
		margin-left: 60px
	}
</style>