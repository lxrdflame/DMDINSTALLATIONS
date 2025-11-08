document.addEventListener('DOMContentLoaded', () => {



  const arrow = document.querySelector(".arrow-image");

 gsap.registerPlugin(ScrollTrigger);

 gsap.set(".arrow-image", {x:800 , y: -500})
gsap.to(".arrow-image", {
  x: 0,          
  y: 0,         
  duration: 1,
  delay:1,
  ease: "none",
  scrollTrigger: {
    trigger: ".arrow-image",
    start: "bottom bottom",   // 🔹 when arrow’s center hits viewport center
    end: "bottom top",        // when it scrolls out of view
    scrub: true,              // smooth scroll link
    markers: false,           // set true for testing
  }
});

  function arrowShoot()
  {
     gsap.from(".arrow-image", { x: 800, y: -900, duration: 0.5 });
    gsap.to(".arrow-image", { x: 0, duration: 0.5 });
  }

   
  arrow.addEventListener('click', arrowShoot);

// Start with the pages folded
gsap.set(".right-page", {
  rotateY: 0,
  transformOrigin: "left center"
});

gsap.set(".left-page", {
  rotateY: 0,
  transformOrigin: "right center"
});

// Start pages folded
gsap.set(".right-page", { rotateY: -90, transformOrigin: "left center" });
gsap.set(".left-page", { rotateY: 90, transformOrigin: "right center" });

// Animate unfolding as scrolls through the section
gsap.to(".right-page", {
  rotateY: 0,
  duration: 1,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".book",
    start: "top center",    // when the top of book hits center
    end: "bottom center",   // until the bottom of book reaches center
    scrub: true,            // ties animation to scroll position
    markers: false
  }
});

gsap.to(".left-page", {
  rotateY: 0,
  duration: 1,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".book",
    start: "top center",
    end: "bottom center",
    scrub: true,
    markers: false
  }
});



gsap.registerPlugin(ScrollTrigger);

// Initial state (plugs together)
gsap.set(".right-plug", { x: 100, transformOrigin: "left center" });
gsap.set(".left-plug", { x: -100, transformOrigin: "right center" });

// Animate plugs moving apart as the section scrolls through center
gsap.to(".right-plug", {
  x: 0, // move right plug outwards
  duration: 2,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".plugs",
    start: "top center",
    end: "bottom center",
    scrub: true,
    markers: false
  }
});

gsap.to(".left-plug", {
  x: 0, // move left plug outwards
  duration: 2,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".plugs",
    start: "top center",
    end: "bottom center",
    scrub: true,
    markers: false
  }
});



//add the heart hands annimation
// Initial state (plugs together)
gsap.set(".right-hand", { x: 100, transformOrigin: "left center" });
gsap.set(".left-hand", { x: -100, transformOrigin: "right center" });
gsap.set(".heart", {scale: 0})

// Animate plugs moving apart as the section scrolls through center
gsap.to(".right-hand", {
  x: 0, // move right plug outwards
  duration: 2,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".heart-hands",
    start: "top center",
    end: "bottom center",
    scrub: true,
    markers: false
  }
});

gsap.to(".left-hand", {
  x: 0, // move left plug outwards
  duration: 2,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".heart-hands",
    start: "top center",
    end: "bottom center",
    scrub: true,
    markers: false
  }

  
});

gsap.to(".heart", {
  scale: 1, // move left plug outwards
  duration: 2,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".heart-hands",
    start: "top center",
    end: "bottom center",
    scrub: true,
    markers: false
  }

  
});



});