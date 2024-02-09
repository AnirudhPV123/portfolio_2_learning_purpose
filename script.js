// navbar start
document.getElementById("menu-icon").addEventListener("click", function () {
  this.classList.toggle("active-menu-icon");
});

let open = false;

let menu_icon = document.querySelector(".menu-icon");
// let nav_links = document.querySelector(".nav-links");

menu_icon.onclick = function(){
    if (open == false) {
    document.getElementById("nav-links").style.right = 0;
    open = true;
  } else {
    document.getElementById("nav-links").style.right = "-65vw";
    open = false;
  }
}

document.onclick = function(e){
  if (!menu_icon.contains(e.target)) {
    document.getElementById("nav-links").style.right = "-65vw";
    open = false;
  }
}

// navbar end




