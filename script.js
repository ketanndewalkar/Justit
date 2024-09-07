
var menu = document.querySelector("#menu_logo");
var main = document.querySelector("#main");
var close = document.querySelector("#close_logo")
menu.addEventListener(("click"),()=>{
  gsap.to("#main",{
    opacity:1,
    right:0,
    duration:0.5,
    delay:0.2,
  })
});

close.addEventListener("click",()=>{
  gsap.to(main,{
    right:"-204px",
    opacity:0,
    duration:0.5,
    delay:0.2,
  })
});

