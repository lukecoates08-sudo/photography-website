const images = document.querySelectorAll(".gallery img");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

images.forEach(image => {
    image.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = image.src;
    });
});

lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});

let lastScroll = 0;

const navbar = document.querySelector(".bar");

window.addEventListener("scroll", () => {

    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll && currentScroll > 100) {
        // scrolling down
        navbar.style.transform = "translateY(-100%)";
    } else {
        // scrolling up
        navbar.style.transform = "translateY(0)";
    }

    lastScroll = currentScroll;

});