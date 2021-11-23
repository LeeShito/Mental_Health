

// $("#webapp_cover").click(function () {
//   $('.menu').toggleClass('open') 
//   $('navlist').toggleClass('open')  
// })


const menu = document.querySelector(".ham");
const navlist = document.querySelector(".navlist");
menu.addEventListener("click", morph);

function morph() {
  menu.classList.toggle("open");
  navlist.classList.toggle("open");
}

