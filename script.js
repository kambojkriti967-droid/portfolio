// ===============================
// Typing Animation
// ===============================

const typingElement = document.getElementById("typing");

const words = [
    "Frontend Developer",
    "Web Developer",
    "BCA Student",
    "Full Stack Learner"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    let currentWord = words[wordIndex];

    if (!deleting) {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 120);
}

typeEffect();


// ===============================
// Dark / Light Mode
// ===============================

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {

    if(document.body.classList.contains("dark-mode")){

        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");

        themeBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

    }

    else{

        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");

        themeBtn.innerHTML =
        '<i class="fa-solid fa-moon"></i>';

    }

});
       

       

// ===============================
// Scroll Animation
// ===============================

const cards = document.querySelectorAll(".card,.project-card");

function revealCards() {

    cards.forEach(card => {

        const position = card.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (position < windowHeight - 100) {

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }

    });

}

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.8s";

});

window.addEventListener("scroll", revealCards);

revealCards();


// ===============================
// Active Navbar Link
// ===============================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
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


// ===============================
// Scroll To Top Button
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "25px";
topBtn.style.right = "25px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.borderRadius = "50%";
topBtn.style.border = "none";
topBtn.style.background = "#38bdf8";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "1000";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


