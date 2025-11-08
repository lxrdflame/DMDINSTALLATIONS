document.addEventListener('DOMContentLoaded', () => {



const arrow = document.querySelector(".arrow-image");

// Register plugins
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

// Set initial position
gsap.set(".arrow-image", { x: 800, y: -500 });

// Create motion path - this replicates your original movement
const motionPath = [
  { x: 800, y: -500 },
  {x: 900, y: -400},
  {x: 900, y: -450},
  { x: 0, y: 0 }       // End position (same as your gsap.to)
];

// Scroll-triggered motion path animation
gsap.to(".arrow-image", {
  motionPath: {
    path: motionPath,
    align: ".arrow-image",
    alignOrigin: [0.5, 0.5]
  },
  duration: 1,
  ease: "none",
  scrollTrigger: {
    trigger: ".arrow-image",
    start: "bottom bottom",
    end: "bottom top",
    scrub: true,
    markers: false,
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