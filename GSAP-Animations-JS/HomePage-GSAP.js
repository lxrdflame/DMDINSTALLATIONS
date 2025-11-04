document.addEventListener('DOMContentLoaded', () => {

    gsap.from(".Company-name", { x: -600, duration: 1.5, ease: "power2.out" });
    gsap.to(".Company-name", { x: 0, duration: 1.5, ease: "power2.out" });

    gsap.from(".slogan", { x: 600, duration: 1.5, ease: "power2.out" });
    gsap.to(".slogan", { x: 0, duration: 1.5, ease: "power2.out" });

    gsap.from(".about-us", { y: 600, duration: 1.5, ease: "power2.out" });
    gsap.to(".about-us", { x: 0, duration: 1.5, ease: "power2.out" });

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".Company-name", {
      scale: 0.5, // shrink to half size
      scrollTrigger: {
        trigger: ".Company-name",     // element that triggers the effect
        start: "top center", // when top of box hits center of screen
        end: "bottom top",   // when bottom of box leaves top of screen
        scrub: true,         // smooth, linked to scroll position
      }
    });

    gsap.to(".slogan", {
      scale: 0.5, // shrink to half size
      scrollTrigger: {
        trigger: ".slogan",     // element that triggers the effect
        start: "top center", // when top of box hits center of screen
        end: "bottom top",   // when bottom of box leaves top of screen
        scrub: true,         // smooth, linked to scroll position
      }
    });


});