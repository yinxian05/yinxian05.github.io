
toggleButton = document.getElementById("menu-toggle");
const menu = document.querySelector(".section"); // Target the element with the class 'section'

toggleButton.addEventListener("click", () => {
    menu.classList.toggle("active"); // Toggle the 'active' class on the menu

    // Change icon
    if (menu.classList.contains("active")) {
        toggleButton.innerHTML = "&times;"; // × (cross)
    } else {
        const
            toggleButton.innerHTML = "&#9776;"; // ☰ (hamburger)
    }
});