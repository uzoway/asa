// Calling the cloudinary responsive method
var cl = cloudinary.Cloudinary.new({cloud_name: "dp20bvzhn"}); 
cl.responsive();


// Register scrolltrigger plugin
gsap.registerPlugin(ScrollTrigger);


// initialize and set up Lenis smooth scroll
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
})

function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


// Function to run the gsap animations only when the page is done loading
function initializeAnimations() {
    // Hero animation using matchmedia
    let mm = gsap.matchMedia();

    mm.add({ isDesktop: "(min-width: 280px) and (prefers-reduced-motion: no-preference)"}, (context) => {
        let { isDesktop } = context.conditions;

        let heroTl = gsap.timeline()
        .to(".preloader__block", {
            y: isDesktop ? "100vh" : "0",
            stagger: {
                each: 0.1,
                from: "end"
            },
            delay: 1.5,
            ease: "expo.out",
            duration: 1.6
        })
        .to(".hero__navigation--logoImage", {
            scale: 1,
            transformOrigin: "0 0",
            duration: 2,
            ease: "expo.out",
        }, "<0.4")
        .from(".navigation__list", { 
            y: isDesktop ?  "-4rem" : "0", 
            opacity: isDesktop ? "0" : "1",
            ease: "expo.out", 
            duration: 1.2
        }, "-=1.1")
        .from(".hero__heading--text", { 
            y: isDesktop ?  "-5vh" : "0", 
            ease: "expo.out", 
            duration: 1.2 
        }, "-=1")
        .from(".hero__videoPreview--paragraph, .hero__videoPreview--image", { 
            y: isDesktop ?  "5vh" : "0",
            opacity: isDesktop ? "0" : "1", 
            ease: "expo.out", 
            duration: 1.2 
        }, "-=1")
    })
}






window.addEventListener("load", initializeAnimations);


