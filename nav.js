const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (scrollY >= top) {
            current = section.id;
        }
    });

    links.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

});