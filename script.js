// Mobile Menu Toggle
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Typing Effect
const textElement = document.querySelector(".typing-text");
const texts = ["Full Stack Java Developer", "Python Enthusiast", "Aspiring IT Professional"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let isDeleting = false;

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];

    if (isDeleting) {
        letter = currentText.slice(0, --index);
    } else {
        letter = currentText.slice(0, ++index);
    }

    textElement.textContent = letter;

    let typeSpeed = 100;

    if (isDeleting) {
        typeSpeed /= 2;
    }

    if (!isDeleting && letter.length === currentText.length) {
        typeSpeed = 2000; // Pause at end
        isDeleting = true;
    } else if (isDeleting && letter.length === 0) {
        isDeleting = false;
        count++;
        typeSpeed = 500; // Pause before new word
    }

    setTimeout(type, typeSpeed);
})();

// Scroll Reveal Animation
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

document.querySelectorAll('section, .card, .hero-content').forEach((el) => {
    el.classList.add('hidden');
    observer.observe(el);
});

// Theme Toggle Logic
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const icon = themeToggle.querySelector(".icon");

// Check for saved theme preference
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "light") {
    body.classList.add("light-mode");
    icon.textContent = "??";
}

themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {
        icon.textContent = "??";
        localStorage.setItem("theme", "light");
    } else {
        icon.textContent = "??";
        localStorage.setItem("theme", "dark");
    }
});
