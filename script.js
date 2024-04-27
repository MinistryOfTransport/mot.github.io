window.addEventListener("load", () => {
    const loader = document.querySelector(".css-1ltj605");

    loader.classList.add("css-1ltj605-hidden");

    loader.addEventListener("transitionend", () => {
        document.body.removeChild("loader");
    })
})