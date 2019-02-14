window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var h = 0.75 * window.innerHeight;
  if (document.body.scrollTop > h || document.documentElement.scrollTop > h) {
    document.getElementById("home-btn").style.display = "block";
  } else {
    document.getElementById("home-btn").style.display = "none";
  }
}
