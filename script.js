
// =========================
// MOBILE MENU
// =========================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
// =========================
// STICKY HEADER
// =========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }

});



// =========================
// SCROLL ANIMATION
// =========================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

sections.forEach(section => {
    observer.observe(section);
});
// =========================
// ACTIVE NAV LINK
// =========================

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(link => {

    link.addEventListener("click", () => {

        navItems.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});
