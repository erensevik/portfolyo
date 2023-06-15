document.addEventListener("scroll", () => {
    let nav = document.getElementById("nav");
    if (window.scrollY > 0) {
        nav.classList.add("nav-scrolled");
    }
    else {
        nav.classList.remove("nav-scrolled");
    }
});