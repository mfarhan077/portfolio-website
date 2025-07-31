// 🟢 Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// 🟢 Active Navbar Link Highlight on Scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// 🌙 Dark Mode Toggle
const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Toggle icon change
  if (document.body.classList.contains("dark")) {
    toggle.textContent = "☀️";
  } else {
    toggle.textContent = "🌙";
  }
});

// ✅ Form Submit to Google Sheet via SheetDB
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      };

      fetch("https://sheetdb.io/api/v1/abc123xyz456", {  // 👉 Replace with your real API URL
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: data }),
      })
        .then((response) => {
          alert("✅ Message sent successfully!");
          form.reset();
        })
        .catch((error) => {
          alert("❌ Failed to send message.");
          console.error(error);
        });
    });
  }
});
