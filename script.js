document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector(".fade-up-text");

    setTimeout(() => {
        textElement.style.opacity = "1";
        textElement.style.transform = "translateY(0)";
    }, 1000);
});
