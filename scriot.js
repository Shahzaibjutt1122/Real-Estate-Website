// ==============================
// EstateLux Premium Script
// ==============================

// Sticky Header
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.style.background = "rgba(0,0,0,0.95)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";
    } else {
        header.style.background = "rgba(0,0,0,0.75)";
        header.style.boxShadow = "none";
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Scroll Animation
const elements = document.querySelectorAll(
    ".property-card, .feature-box, .agent-card, .testimonial"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

}, {
    threshold: 0.2
});

elements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "0.8s ease";

    observer.observe(el);

});

// Contact Form
const form = document.querySelector(".contact-form");

if (form) {

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        alert("Thank You! Your message has been sent successfully.");

        form.reset();

    });

}

// Search Button
const searchForm = document.querySelector(".search form");

if (searchForm) {

    searchForm.addEventListener("submit", function(e) {

        e.preventDefault();

        alert("Search feature will be connected to a database later.");

    });

}

// Current Year in Footer (optional)
const year = document.querySelector("#year");

if (year) {
    year.textContent = new Date().getFullYear();
}

console.log("EstateLux Website Loaded Successfully");