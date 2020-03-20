import { TimelineMax } from 'gsap'
import { gsap, CSSPlugin } from 'gsap'
export default {
    
    
/*     transition: {
        name: 'slidemenu',
        css: false,
        mode: 'out-in',
        enter: function (el, done) {
            //console.log(el)
            let tl = new TimelineMax({ onComplete: done });
            let page=document.querySelector('.page')
            tl.fromTo(page,1, {x:-100, opacity:0}, {x:0, opacity:1})
            done();
        },
        links: ['index','about','items','connect'],
        leave: function (el, done) {
            console.log('TO:')
            console.log($nuxt.$route.name)
            console.log('FROM:')
            console.log($nuxt.data.location.name)
            let to = $nuxt.$route.name
            links: ['index','about','items','connect']
            let tl = new TimelineMax({ onComplete: done });
            let menu = document.querySelectorAll('.nav__block')
            let cur_menu = document.querySelector('.nav__block_current')
            tl.fromTo(el,1, {x:0, opacity:1}, {x:100, opacity:0})
            tl.fromTo(menu, 1, { x: 0, opacity: 1 }, { x: 100, opacity: 0 })
            tl.fromTo(cur_menu,1, {x:0, opacity:1}, {x:100, opacity:0})
        },
    } */
    transition(to, from) {
        
        return {
            name: 'slidemenu',
            css: false,
            mode: 'out-in',
            enter: function (el, done) {
                gsap.registerPlugin(CSSPlugin)
                let tl = new TimelineMax({ onComplete: done });
                if (from.name !== undefined) {
                    let page = document.querySelector('.page')
                    let links = ['index', 'about', 'items', 'connect']
                    let cur_menu = document.querySelector('.nav__link_current')
                    let offset = document.querySelector('body').clientWidth-4*40
                    let n_to = links.indexOf(to.name), n_from = links.indexOf(from.name)
                    if (n_to > n_from) {
                        tl.fromTo(cur_menu, 0, { opacity: 0, x: -offset  }, { opacity: 0, x: 0 })
                        console.log('n_to>n_from')
                    }
                    if (n_to < n_from) {
                        tl.fromTo(cur_menu, 0, { opacity: 0, x: offset}, { opacity: 0, x: 0 })
                        console.log('n_t<n_from')
                    }
                    tl.fromTo(page, .5, { x: (n_to < n_from) ? 100 : -100, opacity: 0 }, { x: 0, opacity: 1 })
                    
                }
            },
            leave: function (el, done) {
                if (from.name !== undefined) {
                    gsap.registerPlugin(CSSPlugin)
                    let cur_menu = document.querySelector('.nav__link_current')
                    let links = ['index', 'about', 'items', 'connect']
                    console.log(cur_menu)
                    let page = document.querySelector('.page')
                    let tl = new TimelineMax({ onComplete: done });
                    let n_to = links.indexOf(to.name), n_from = links.indexOf(from.name)
                    tl.fromTo(page, .3, { x: 0, opacity: 1 }, { x: (n_to < n_from) ? 100 : -100, opacity: 0 })
                    tl.fromTo(cur_menu, .1, { opacity: 0 }, { opacity: 1 })
                    if (n_to > n_from) {
                        let trans_links=links.slice(n_from, n_to+1)
                        let str_menu = trans_links.map((link) => '.' + link).join(', ')
                        console.log(str_menu)
                        console.log(links)
                        let menu = document.querySelectorAll(str_menu)
                        let offset = (document.querySelector('body').clientWidth-links.length*40)*2
                        console.log(offset)
                        console.log(menu)
                        tl.fromTo(menu, 1, { x: 0, opacity: 1 }, { x: -offset, opacity: 1 })
                    }
                    else if (n_to < n_from) {
                        let trans_links=links.slice(n_to, n_from)
                        let str_menu = trans_links.map((link) => '.' + link).join(', ')
                        console.log(str_menu)
                        console.log(links)
                        let menu = document.querySelectorAll(str_menu)
                        let offset = (document.querySelector('body').clientWidth-links.length*40)*1.8
                        console.log(offset)
                        console.log(menu)
                        tl.fromTo(menu, 1, { x: 0, opacity: 1 }, { x: offset, opacity: 0 })
                    }
                }                    
            },
        }
    }
}