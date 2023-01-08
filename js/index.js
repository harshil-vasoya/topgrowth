

// nav active on scroll

window.addEventListener("scroll", () => {
  let a = document.getElementsByClassName("navbar")[0];
  a.classList.toggle("navbar-scroll-active", window.scrollY > 5);
});

function nav_toggle_fun() {
  var a = document.getElementsByClassName("navbar-mobile")[0];

  if (a.style.display == "flex") {
    a.style.display = "none";
  } else {
    a.style.display = "flex";
  }
}

function go_back() {
  var a = document.getElementsByClassName("navbar-mobile")[0];
  a.style.display = "none";
}

// home btn link

// var home_btn = document.getElementsByClassName("about")[0];

// home_btn.addEventListener("click", function(){
//     document.location.href = "https://www.google.com/?client=safari";
// });


