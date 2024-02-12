// For more information, see greensock.com/docs/v3/Plugins/ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Linea de tiempo auxiliar
GSDevTools.create(); 
// You can use a ScrollTrigger in a tween or timeline



/*
ScrollTrigger.create({
  trigger: "#x1",
  start: "center top", 
  end: "+=500",
  pin: ".x",
  scrub: true,
  markers: true,
  id: "XX"
});  
*/

var ani_x = gsap.to(".x", {
   opacity: 0.3,
   x: 400,
   duration: 2,
  /*
  scrollTrigger: {
    trigger: ".x",
    start: "bottom 400px",
    end: "top 100px",
    scrub: true,
    markers: true,
    id: "Y"
  } 
  */
});

var ani_y = gsap.to(".y", {
  x: 400,
  scale: 0.5,
  ease: "elastic.out(1, 0.3)",
  duration: 3,
  
  /*
  scrollTrigger: {
    trigger: ".y",
    start: "bottom 400px",
    end: "top 100px",
    scrub: true,
    markers: true,
    id: "Y"
  } 
  */
});


// Or you can attach a tween or timeline to a ScrollTrigger later
var ani_z = gsap.to(".z", {
  x: 400,
  rotation: 360,
  duration: 6
});



function restart() {
  ani_x.restart();
  ani_y.restart();
  ani_z.restart();
}