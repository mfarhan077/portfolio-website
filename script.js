// 1. Form submit par alert show karwana
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // page reload na ho
  alert("Thank you, Farhan bhai! Your message has been sent.");
});

// 2. Scroll par Skills section highlight karwana
window.addEventListener("scroll", function () {
  const skills = document.getElementById("skills");
  const position = skills.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (position < screenHeight - 100) {
    skills.style.transform = "scale(1.05)";
    skills.style.transition = "all 0.5s ease";
  } else {
    skills.style.transform = "scale(1)";
  }
});

// 3. Bonus: Night Mode toggle (optional)
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

const toggleBtn = document.getElementById("darkModeToggle");

let darkMode = false;

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  darkMode = !darkMode;
  toggleBtn.textContent = darkMode ? "🔆" : "🌙";
});
// 4. Profile picture change on hover
const profilePic = document.querySelector(".profile-pic");          
profilePic.addEventListener("mouseover", function () {
  this.src = "edit.jpg"; // New image on hover
});
profilePic.addEventListener("mouseout", function () {
  this.src = "myphoto.jpg"; // Original image on mouse out
});
// 5. Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
        });
    });
    }   
);
// 6. Responsive navigation toggle
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("nav ul");
navToggle.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});
// 7. Highlight active section in navigation
window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");
    
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight) {
        navLinks.forEach(link => link.classList.remove("active"));
        navLinks[index].classList.add("active");
        }
    });
    }
);
// 8. Form validation
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;

  if (name && email && message) {
    alert("Thank you, " + name + "! Your message has been sent.");
  } else {
    alert("Please fill out all fields.");
  }
});
// 9. Image gallery lightbox effect
const galleryImages = document.querySelectorAll(".gallery img");
galleryImages.forEach(image => {
  image.addEventListener("click", function () {
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    const img = document.createElement("img");
    img.src = this.src;
    lightbox.appendChild(img);
    document.body.appendChild(lightbox);

    lightbox.addEventListener("click", function () {
      document.body.removeChild(lightbox);
    });
  });
});
