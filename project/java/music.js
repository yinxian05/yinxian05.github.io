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
    }

    $(document).ready(function () { // Keep this if other parts of your code rely on jQuery's ready
        $('.container-music').slick({
            autoplay: true,
            autoplaySpeed: 2000,
            infinite: true,
            dots: true,
            /* check here for more setting options: http://kenwheeler.github.io/slick/ */
        });
    });

    const musicItems = gsap.utils.toArray(".music-item");
    const chillKillSection = document.querySelector(".chill-kill");
    const chillKillImage = document.querySelector(".chill-kill-image");
    const chillKillText = document.querySelector(".chill-kill-text");

    // ... (rest of your existing GSAP code for .music-item) ...

    if (chillKillSection) {
        gsap.to(chillKillSection, {
            scrollTrigger: {
                trigger: chillKillSection,
                start: "top center",
                end: "bottom top",
                scrub: true,
                // markers: true,
            },
            ease: "none"
        });
        gsap.from(chillKillImage, {
            scrollTrigger: {
                trigger: chillKillSection,
                start: "top center",
                end: "center center",
                scrub: true,
            },
            x: -5000, // Start from the left
            opacity: 0,
            scale: 0.9,
        });
        gsap.from(chillKillText, {
            scrollTrigger: {
                trigger: chillKillSection,
                start: "top center",
                end: "center center",
                scrub: true,
            },
            y: 5000, // Start from the right
            opacity: 0,
            scale: 0.9,
            duration: 20, // Optional duration (scrub overrides this in a way)
            ease: "power2.out"
        });
    }

    musicItems.forEach(item => {
        gsap.to(item, {
            scrollTrigger: {
                trigger: item,
                start: "top center",
                toggleClass: { targets: item, className: "active" }
            }
        });
        const img = item.querySelector("img");
        const info = item.querySelector(".info");

        if (img) {
            gsap.from(img, {
                x: -300,
                scrollTrigger: {
                    trigger: item,
                    scrub: true,
                    toggleClass: { targets: item, className: "active" }
                },
                ease: "power2.out"
            });
        }
        if (info) {
            gsap.from(info, {
                x: -300,
                duration: 3
            });
        }
    });
});