document.addEventListener('DOMContentLoaded', () => {
gsap.registerPlugin(ScrollTrigger);

// Animate from top drop
gsap.from(".Page-Heading", { 
  y: -600, 
  duration: 1.5, 
  ease: "power2.out" 
});



});