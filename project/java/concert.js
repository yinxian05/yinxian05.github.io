
const toggleButton = document.getElementById("menu-toggle");
const menu = document.querySelector(".section"); // Target the element with the class 'section'

toggleButton.addEventListener("click", () => {
    menu.classList.toggle("active"); // Toggle the 'active' class on the menu

    // Change icon
    if (menu.classList.contains("active")) {
        toggleButton.innerHTML = "&times;"; // × (cross)
    } else {
        toggleButton.innerHTML = "&#9776;"; // ☰ (hamburger)
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const closeButton = document.querySelector('.close-button');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    let currentImageIndex = 0;
    let imagesArray = [];

    galleryItems.forEach((item, index) => {
        imagesArray.push(item.href);
        item.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default link behavior
            currentImageIndex = index;
            lightboxImage.src = imagesArray[currentImageIndex];
            lightbox.classList.add('active');
        });
    });

    closeButton.addEventListener('click', function () {
        lightbox.classList.remove('active');
    });

    lightbox.addEventListener('click', function (event) {
        // Close lightbox if clicked outside the image
        if (event.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', function () {
            currentImageIndex = (currentImageIndex - 1 + imagesArray.length) % imagesArray.length;
            lightboxImage.src = imagesArray[currentImageIndex];
        });

        nextButton.addEventListener('click', function () {
            currentImageIndex = (currentImageIndex + 1) % imagesArray.length;
            lightboxImage.src = imagesArray[currentImageIndex];
        });
    }
});

