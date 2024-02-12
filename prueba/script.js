// For more information, see greensock.com/docs/v3/Plugins/ScrollTrigger
gsap.registerPlugin(ScrollTrigger);


// You can use a ScrollTrigger in a tween or timeline

// Astronauta: pin
ScrollTrigger.create({
  trigger: "#astronauta",
  start: "top 150", 
  end: "+=300",
  pin: "#astronauta",
  scrub: true,
  markers: true,
  id: "nasa"
});  

// Caja: mover con scroll
var ani_x = gsap.to(".caja", {
  
   scale: 0.3,
   duration: 3,
  
  scrollTrigger: {
    trigger: ".caja",
    start: "top 30%",
    end: "top -=200px",
    scrub: true,
    markers: true,
    id: "box-1"
  } 
  
});