
// var scrollAnimationElm = document.querySelectorAll('.fadeIn');
// var scrollAnimationFunc = function() {
//   for(var i = 0; i < scrollAnimationElm.length; i++) {
//     var triggerMargin = 300;
//     if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
//       scrollAnimationElm[i].classList.add('show');
//     }
//   }
// }
// window.addEventListener('load', scrollAnimationFunc);
// window.addEventListener('scroll', scrollAnimationFunc);

const hamburger_menu=document.querySelector(".hamburger-menu");
const header_list=document.querySelector(".header-list");
const first_display=document.querySelector(".first-display");
const title_logo=document.querySelector(".title-logo");
const site_introduct=document.querySelector(".site-introduct");
const body=document.querySelector("body");
const html=document.querySelector("html");

const work_link=document.querySelector(".work-link");
const about=document.querySelector(".about");
const Blog=document.querySelector(".Blog");
const contact=document.querySelector(".contact");
const line1=document.querySelector(".line1");
const line2=document.querySelector(".line2");
const line3=document.querySelector(".line3");

hamburger_menu.addEventListener("click",()=>{
  header_list.classList.toggle("click");
  first_display.classList.toggle("click");
  title_logo.classList.toggle("click");
  site_introduct.classList.toggle("click");
  body.classList.toggle("click");
  html.classList.toggle("click");
  line1.classList.toggle("click");
  line2.classList.toggle("click");
  line3.classList.toggle("click");
})

work_link.addEventListener("click",()=>{
  html.classList.toggle("click");
  body.classList.toggle("click");  
  header_list.classList.toggle("click");
  first_display.classList.toggle("click");
  title_logo.classList.toggle("click");
  site_introduct.classList.toggle("click");
})

about.addEventListener("click",()=>{
  html.classList.toggle("click");
  body.classList.toggle("click");  
  header_list.classList.toggle("click");
  first_display.classList.toggle("click");
  title_logo.classList.toggle("click");
  site_introduct.classList.toggle("click");
})


Blog.addEventListener("click",()=>{
  html.classList.toggle("click");
  body.classList.toggle("click");  
  header_list.classList.toggle("click");
  first_display.classList.toggle("click");
  title_logo.classList.toggle("click");
  site_introduct.classList.toggle("click");
})

contact.addEventListener("click",()=>{
  html.classList.toggle("click");
  body.classList.toggle("click");  
  header_list.classList.toggle("click");
  first_display.classList.toggle("click");
  title_logo.classList.toggle("click");
  site_introduct.classList.toggle("click");
})