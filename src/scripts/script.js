//Begin to nvy
//ustom scripts go here


const nvy = console.log("This project is just beginning to be nvy'd. Consult the Readme and project instructions for the steps to activate the full nvy.")
nvy;

//wordBlink script
let wordBlink = document.querySelectorAll(".wordFlash");

console.log(wordBlink);

//onscroll show sticky
/*
<element onscroll="myScript">
object.onscroll = function(){myScript};
object.addEventListener("scroll", myScript); */


let banner = document.querySelector(".banner");
let bannerHide = banner.style.display = "none";
banner.onscroll = function(){
  banner.style.display = "none";
}


//on click show sticky 

