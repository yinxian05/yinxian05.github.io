document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);

    const toggleButton = document.getElementById("menu-toggle");
    const menu = document.querySelector(".section"); // Target the element with the class 'section'

    if (toggleButton && menu) {
        toggleButton.addEventListener("click", () => {
            menu.classList.toggle("active"); // Toggle the 'active' class on the menu

            // Change icon
            if (menu.classList.contains("active")) {
                toggleButton.innerHTML = "&times;"; // × (cross)
            } else {
                toggleButton.innerHTML = "&#9776;"; // ☰ (hamburger)
            }
        });
    });
