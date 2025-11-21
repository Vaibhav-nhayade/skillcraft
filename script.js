// DARK MODE
const toggle = document.getElementById("themeToggle");
let dark = false;

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    dark = !dark;
    document.querySelector(".theme-icon").src = dark ? "skillcraft/moon.svg" : "skillcraft/sun.svg";
});

// MOBILE MENU
const menuBtn = document.getElementById("mobileMenuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});
