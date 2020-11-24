// JavaScript Document

// Variabelen navbar
var navbar = document.querySelector("nav")
var hamburger = document.querySelector(".header-toggle")
var close = document.querySelector(".showClose")
// Eind variabelen navbar

// Variabelen zwart achtergrond
var blackBackground = document.querySelector(".blackBackground")
var blackBackgroundOff = document.querySelector(".blackBackgroundOn")
// Eind variabelen zwart achtergrond

hamburger.addEventListener("click", toggleHamburgerOn)
close.addEventListener("click", toggleHamburgerOff)

function toggleHamburgerOn(){
	navbar.classList.toggle("showNav");
	blackBackground.classList.toggle("blackbackgroundOn");
}

function toggleHamburgerOff(){
	navbar.classList.remove("showNav");
	blackBackground.classList.remove("blackbackgroundOn");
}

// BRON : https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0