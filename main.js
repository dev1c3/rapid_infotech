var nav_links = document.getElementsByClassName("nav-links");
var lis = document.getElementsByClassName("nav-link");

for (var i = 0; i < lis.length; i++) {
  lis[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}