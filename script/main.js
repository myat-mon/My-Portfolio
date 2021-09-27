'use strict';

$(function() {
  console.log( "ready!" );
  AOS.init();
});

function myFunction() {
  var x = document.getElementById("mobile-demo");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function scrollToTargetElement(elementId) {
  $('html, body').animate({
    scrollTop: $(`#${elementId}`).offset().top
  }, 500);
}
