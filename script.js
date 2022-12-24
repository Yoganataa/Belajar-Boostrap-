const links = document.querySelectorAll("nav a");

links.forEach(link => {
  link.addEventListener("mouseenter", event => {
    event.target.style.backgroundColor = "#ddd";
    event.target.style.color = "#000";
  });
  link.addEventListener("mouseleave", event => {
    event.target.style.backgroundColor = "";
    event.target.style.color = "#fff";
  });
});

window.onload = function() {
  var preloader = document.getElementById("preloader");
  preloader.classList.add("visible");
  setTimeout(function() {
    preloader.classList.remove("visible");
  }, 5000);
};
