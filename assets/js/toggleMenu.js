function toggleMenu() {
  const hamburger = document.getElementById("hamburger");
  const main = document.getElementById("main");
  const footer = document.getElementById("footer");

  if (hamburger.classList.contains("active")) {
    main.style.display = "none";
    footer.style.display = "none";
    document.getElementById("open-nav-menu-wrapper").style.display = "block";
  } else {
    main.style.display = "block";
    footer.style.display = "block";
    document.getElementById("open-nav-menu-wrapper").style.display = "none";
  }
}
