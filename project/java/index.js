<><script>
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
</script><script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script><script src="js/lightbox.js"></script><script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"></script><script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js"></script><script>
        document.addEventListener("DOMContentLoaded", (event) => {
            gsap.registerPlugin(ScrollTrigger);

        const musicItems = gsap.utils.toArray(".music-item");
        const chillKillSection = document.querySelector(".chill-kill");
        const chillKillImage = document.querySelector(".chill-kill-image");
        const chillKillText = document.querySelector(".chill-kill-text");
        const introSection = document.querySelector(".intro");
        const introText = document.querySelector(".intro-text");
        const introImage = document.querySelector(".intro-image");

        // ... (rest of your existing GSAP code) ...

        if (introSection) {gsap.to(introText, {
            scrollTrigger: {
                trigger: introSection,
                start: "top top", // Start when the top of the intro hits the top of the viewport
                end: "bottom top", // End when the bottom of the intro hits the top of the viewport
                scrub: true,
            },
            x: -200, // Move the text up by 20% of its height
            ease: "none"
        })};
        gsap.to(introImage, {
            scrollTrigger: {
            trigger: introSection,
        start: "top top",
        end: "bottom top",
        scrub: true,
                },
        x: 200, // Move the image down by 10% of its height (slower than text)
        ease: "none"
            });
        });
    </script></>