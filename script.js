// =============================
// Typing Animation
// =============================

const text = "B.E Computer Science Engineering Student";
let i = 0;

const typingElement = document.getElementById("typing");

function typingEffect() {
  if (typingElement && i < text.length) {
    typingElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(typingEffect, 70);
  }
}

window.onload = typingEffect;

// =============================
// Greeting
// =============================

const hour = new Date().getHours();
let greeting = "";

if (hour < 12) {
  greeting = "🌞 Good Morning!";
} else if (hour < 17) {
  greeting = "☀ Good Afternoon!";
} else {
  greeting = "🌙 Good Evening!";
}

const greet = document.getElementById("greeting");

if (greet) {
  greet.innerHTML = greeting;
}

// =============================
// Smooth Scroll
// =============================

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// =============================
// Active Navigation
// =============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") == "#" + current) {
      link.classList.add("active");
    }
  });
});

// =============================
// Scroll Reveal
// =============================

const reveal = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  reveal.forEach((sec) => {
    const position = sec.getBoundingClientRect().top;

    const screen = window.innerHeight;

    if (position < screen - 120) {
      sec.classList.add("show");
    }
  });
});

// =============================
// Scroll To Top
// =============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.onclick = () => {
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
};

// =============================
// Skill Hover Animation
// =============================

const skills = document.querySelectorAll(".box div");

skills.forEach((skill) => {
  skill.addEventListener("mouseenter", () => {
    skill.style.transform = "scale(1.1)";
  });

  skill.addEventListener("mouseleave", () => {
    skill.style.transform = "scale(1)";
  });
});
