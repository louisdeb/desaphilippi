var duration = 300;

$(document).ready(function() {
  $('.menu-button').click(show);
  $('.menu-button-close').click(hide);
});

function show(elem) {
  $(".menu").show(duration);
  $(".menu-button").hide(duration);
}

function hide(elem) {
  $(".menu").hide(duration);
  $(".menu-button").show(duration);
}
