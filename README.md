# Portfolio
# AIM
To design and develop a personal portfolio website using HTML to showcase personal information, educational qualifications, technical skills, projects, certifications, and contact details.



# ALGORITHM
1. Start the program.
2. Open Visual Studio Code and create a project folder.
3. Create an HTML file named index.html.
4. Write the HTML code to design the personal portfolio.
5. Add personal details, profile picture, skills, projects, education, certifications, and contact information.
6. Save the HTML file.
7. Create a GitHub account and log in.
8. Create a new repository named my-portfolio.
9. Upload the index.html file and profile image to the repository.
10. Open the repository settings and select Pages.
11. Choose the main branch and / (root) folder as the deployment source.
12. Click Save to publish the website.
13. Open the generated GitHub Pages URL to view the portfolio.
14. Stop the program.

#PROGRAM
HTML
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Danaseelan G| Portfolio</title>

    <link rel="stylesheet" href="portfolio.css">

    <!-- Font Awesome Icons -->
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
</head>

<body>

    <!-- Navigation -->

    <header>

        <nav>

            <h2 class="logo">Portfolio</h2>

            <ul>

                <li><a href="#home">Home</a></li>

                <li><a href="#about">About</a></li>

                <li><a href="#education">Education</a></li>

                <li><a href="#skills">Skills</a></li>

                <li><a href="#projects">Projects</a></li>

                <li><a href="#certificates">Certificates</a></li>

                <li><a href="#contact">Contact</a></li>

            </ul>

        </nav>

    </header>



    <!-- Hero Section -->

    <section id="home" class="hero">

        <div class="hero-left">

            <h3 id="greeting"></h3>

            <h1>Hello, I'm</h1>

            <h2>Danaseelan G</h2>

            <h3 id="typing"></h3>

            <p>
                Passionate Computer Science Engineering student with a strong interest
                in Programming, Web Development, Cloud Computing, AI and Problem Solving.
            </p>

            <div class="buttons">

                <a href="#contact" class="btn">Hire Me</a>

                <a href="#" class="btn2">Download Resume</a>

            </div>

        </div>

        <div class="hero-right">

            <img src="profile.jpg" alt="Profile">

        </div>

    </section>



    <!-- About -->

    <section id="about">

        <h2 class="title">About Me</h2>

        <div class="about-container">

            <div>

                <p>

                    I am pursuing my Bachelor of Engineering in Computer Science Engineering
                    at Saveetha Engineering College.

                    I enjoy learning new technologies and improving my programming skills every day.

                    Currently, I am focusing on C Programming, HTML, CSS, JavaScript,
                    AWS, Cloud Computing and Unity.

                </p>

            </div>

        </div>

    </section>



    <!-- Education -->

    <section id="education">

        <h2 class="title">Education</h2>

        <div class="education-card">

            <h3>B.E Computer Science Engineering</h3>

            <h4>Saveetha Engineering College</h4>

            <p>Currently Pursuing</p>

        </div>

    </section>



    <!-- Skills -->

    <section id="skills">

        <h2 class="title">Skills</h2>

        <div class="skills-grid">

            <div class="skill-card">
                <i class="fa-solid fa-c"></i>
                <h3>C Programming</h3>
            </div>

            <div class="skill-card">
                <i class="fa-brands fa-html5"></i>
                <h3>HTML5</h3>
            </div>

            <div class="skill-card">
                <i class="fa-brands fa-css3-alt"></i>
                <h3>CSS3</h3>
            </div>

            <div class="skill-card">
                <i class="fa-brands fa-js"></i>
                <h3>JavaScript</h3>
            </div>

            <div class="skill-card">
                <i class="fa-brands fa-aws"></i>
                <h3>AWS</h3>
            </div>

            <div class="skill-card">
                <i class="fa-solid fa-cloud"></i>
                <h3>Cloud Computing</h3>
            </div>

            <div class="skill-card">
                <i class="fa-brands fa-github"></i>
                <h3>GitHub</h3>
            </div>

            <div class="skill-card">
                <i class="fa-solid fa-gamepad"></i>
                <h3>Unity</h3>
            </div>

        </div>

    </section>



    <!-- Projects -->

    <section id="projects">

        <h2 class="title">Projects</h2>

        <div class="project-container">

            <div class="project-card">

                <i class="fa-solid fa-user"></i>

                <h3>Portfolio Website</h3>

                <p>

                    Designed and developed a responsive personal portfolio using
                    HTML, CSS and JavaScript.

                </p>

            </div>

            <div class="project-card">

                <i class="fa-solid fa-heart"></i>

                <h3>HeartOS Website</h3>

                <p>

                    A creative webpage developed using HTML, CSS and JavaScript.

                </p>

            </div>

            <div class="project-card">

                <i class="fa-solid fa-cloud"></i>

                <h3>AWS Cloud Labs</h3>

                <p>

                    Performed AWS EC2, EBS, S3 and Cloud Computing practical experiments.

                </p>

            </div>

        </div>

    </section>



    <!-- Certificates -->

    <section id="certificates">

        <h2 class="title">Certificates</h2>

        <div class="certificate-card">

            <ul>

                <li>NPTEL - Big Data Computing</li>

                <li>AWS Cloud Computing Laboratory</li>

                <li>LeetCode Problem Solving</li>

                <li>Hackathon Participant</li>

            </ul>

        </div>

    </section>



    <!-- Contact -->

    <section id="contact">

        <h2 class="title">Contact Me</h2>

        <div class="contact-box">

            <p><i class="fa-solid fa-envelope"></i>dhanaseelan421@gmail.com</p>

            <p><i class="fa-brands fa-github"></i> github.com/dhanu-seelan</p>

            <p><i class="fa-brands fa-linkedin"></i> linkedin.com/in/Danaseelan G</p>

            <h3 id="clock"></h3>

        </div>

    </section>



    <!-- Scroll Button -->

    <button id="topBtn" onclick="topFunction()">

        <i class="fa-solid fa-arrow-up"></i>

    </button>



    <!-- Footer -->

    <footer>

        <h3>Follow Me</h3>

        <div class="social">

            <a href="#"><i class="fab fa-github"></i></a>

            <a href="#"><i class="fab fa-linkedin"></i></a>

            <a href="#"><i class="fab fa-instagram"></i></a>

        </div>

        <p>© 2026 Danaseelan G | All Rights Reserved.</p>

    </footer>



    <script src="script.js"></script>

</body>

</html>
```

css
```
/* =========================
   Google Font
========================= */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

/* =========================
   Reset
========================= */
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Poppins',sans-serif;
    scroll-behavior:smooth;
}

body{
    background:linear-gradient(135deg,#0f172a,#1e3a8a,#4f46e5);
    color:#fff;
    overflow-x:hidden;
}

/* =========================
   Navigation
========================= */

header{
    position:fixed;
    width:100%;
    top:0;
    z-index:1000;
    background:rgba(255,255,255,0.08);
    backdrop-filter:blur(12px);
    box-shadow:0 5px 20px rgba(0,0,0,.25);
}

nav{
    width:90%;
    margin:auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:18px 0;
}

.logo{
    color:#38bdf8;
    font-size:30px;
    font-weight:700;
}

nav ul{
    display:flex;
    list-style:none;
}

nav ul li{
    margin-left:30px;
}

nav ul li a{
    color:white;
    text-decoration:none;
    font-weight:500;
    transition:.3s;
}

nav ul li a:hover{
    color:#38bdf8;
}

/* =========================
   Hero
========================= */

.hero{
    min-height:100vh;
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:90%;
    margin:auto;
    padding-top:120px;
    gap:60px;
}

.hero-left{
    flex:1;
}

.hero-left h1{
    font-size:40px;
}

.hero-left h2{
    font-size:60px;
    color:#38bdf8;
    margin:10px 0;
}

.hero-left h3{
    font-size:24px;
    color:#facc15;
}

.hero-left p{
    margin-top:20px;
    line-height:1.8;
    font-size:18px;
    color:#e2e8f0;
}

.buttons{
    margin-top:35px;
}

.btn,
.btn2{
    display:inline-block;
    text-decoration:none;
    padding:14px 30px;
    border-radius:50px;
    font-weight:600;
    margin-right:15px;
    transition:.4s;
}

.btn{
    background:#38bdf8;
    color:#fff;
}

.btn:hover{
    background:#0284c7;
    transform:translateY(-5px);
}

.btn2{
    border:2px solid #38bdf8;
    color:white;
}

.btn2:hover{
    background:#38bdf8;
    transform:translateY(-5px);
}

.hero-right{
    flex:1;
    text-align:center;
}

.hero-right img{
    width:360px;
    height:360px;
    object-fit:cover;
    border-radius:50%;
    border:6px solid #38bdf8;
    box-shadow:0 20px 40px rgba(0,0,0,.4);
    transition:.5s;
}

.hero-right img:hover{
    transform:scale(1.05);
}

/* =========================
   Sections
========================= */

section{
    width:90%;
    margin:70px auto;
}

.title{
    text-align:center;
    font-size:40px;
    color:#38bdf8;
    margin-bottom:40px;
}

/* =========================
   About
========================= */

.about-container{
    background:rgba(255,255,255,.08);
    backdrop-filter:blur(15px);
    border-radius:20px;
    padding:40px;
    line-height:2;
    font-size:18px;
    box-shadow:0 10px 25px rgba(0,0,0,.3);
}

/* =========================
   Education
========================= */

.education-card{
    background:white;
    color:#222;
    border-radius:20px;
    padding:35px;
    text-align:center;
    transition:.4s;
}

.education-card:hover{
    transform:translateY(-10px);
}

.education-card h3{
    color:#1e3a8a;
}

/* =========================
   Skills
========================= */

.skills-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
    gap:25px;
}

.skill-card{
    background:rgba(255,255,255,.08);
    backdrop-filter:blur(12px);
    border-radius:20px;
    padding:35px;
    text-align:center;
    transition:.4s;
}

.skill-card i{
    font-size:55px;
    color:#38bdf8;
    margin-bottom:20px;
}

.skill-card:hover{
    transform:translateY(-12px);
    background:#38bdf8;
}

.skill-card:hover i,
.skill-card:hover h3{
    color:white;
}

/* =========================
   Projects
========================= */

.project-container{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
    gap:30px;
}

.project-card{
    background:white;
    color:#222;
    padding:30px;
    border-radius:20px;
    text-align:center;
    transition:.4s;
}

.project-card i{
    font-size:60px;
    color:#2563eb;
    margin-bottom:20px;
}

.project-card:hover{
    transform:translateY(-12px);
    box-shadow:0 20px 30px rgba(0,0,0,.3);
}

/* =========================
   Certificates
========================= */

.certificate-card{
    background:rgba(255,255,255,.08);
    padding:35px;
    border-radius:20px;
    backdrop-filter:blur(12px);
}

.certificate-card ul{
    list-style:none;
}

.certificate-card li{
    padding:15px 0;
    border-bottom:1px solid rgba(255,255,255,.15);
    font-size:18px;
}

/* =========================
   Contact
========================= */

.contact-box{
    background:white;
    color:#222;
    padding:35px;
    border-radius:20px;
    text-align:center;
}

.contact-box p{
    margin:20px 0;
    font-size:18px;
}

.contact-box i{
    color:#2563eb;
    margin-right:10px;
}

/* =========================
   Scroll Button
========================= */

#topBtn{
    position:fixed;
    right:30px;
    bottom:30px;
    width:55px;
    height:55px;
    border:none;
    border-radius:50%;
    background:#38bdf8;
    color:white;
    cursor:pointer;
    display:none;
    font-size:22px;
    transition:.3s;
}

#topBtn:hover{
    background:#0284c7;
}

/* =========================
   Footer
========================= */

footer{
    background:#020617;
    padding:40px 20px;
    text-align:center;
    margin-top:70px;
}

footer h3{
    margin-bottom:20px;
}

.social a{
    display:inline-block;
    margin:10px;
    width:50px;
    height:50px;
    line-height:50px;
    border-radius:50%;
    background:#38bdf8;
    color:white;
    font-size:22px;
    transition:.3s;
}

.social a:hover{
    transform:translateY(-6px);
    background:#2563eb;
}

footer p{
    margin-top:25px;
    color:#cbd5e1;
}

/* =========================
   Responsive
========================= */

@media(max-width:900px){

.hero{
    flex-direction:column-reverse;
    text-align:center;
}

.hero-left h2{
    font-size:45px;
}

.hero-right img{
    width:280px;
    height:280px;
}

nav{
    flex-direction:column;
}

nav ul{
    flex-wrap:wrap;
    justify-content:center;
    margin-top:15px;
}

nav ul li{
    margin:10px;
}

.title{
    font-size:32px;
}

}
```

Javascript
```
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

```

#Output
<img width="1877" height="911" alt="Screenshot 2026-11-03 095929" src="https://github.com/user-attachments/assets/dfcd9021-5473-4f97-bafe-9703e9a83e02" />
<img width="1797" height="812" alt="Screenshot 2026-11-03 095946" src="https://github.com/user-attachments/assets/7a97f62e-4e25-425f-b0d6-12d1fbdc4b41" />
<img width="1806" height="836" alt="Screenshot 2026-11-03 100004" src="https://github.com/user-attachments/assets/16566e3a-ebd0-47ed-98c3-1427fbf6b98d" />
<img width="1832" height="796" alt="Screenshot 2026-11-03 100015" src="https://github.com/user-attachments/assets/02cb4ea9-00f8-4193-a174-9b99b974f306" />
