// Плавное появление блоков

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll("section, .card, .service-card, .portfolio-item, .review-card, .advantage-card").forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});



// Кнопка наверх

const topButton = document.getElementById("toTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.style.display = "flex";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



// Активный пункт меню

const sections = document.querySelectorAll("section[id]");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (window.scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});



// Небольшой эффект для карточек

document.querySelectorAll(".card, .service-card, .advantage-card, .portfolio-item").forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.background = `radial-gradient(circle at ${x}px ${y}px,#2a2a2a,#1a1a1a)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "#1a1a1a";

    });

});



// Текущий год

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}

console.log("Site loaded successfully.");
