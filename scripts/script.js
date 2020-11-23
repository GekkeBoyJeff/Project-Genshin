// JavaScript Document

var navbar = document.querySelector(".navbar");
var hamburger = document.querySelector(".header-toggle");

hamburger.addEventListener("click", toggleHamburger);

function toggleHamburger(){
  	navbar.classList.toggle("showNav");
  	hamburger.ClassList.toggle("showClose");
}