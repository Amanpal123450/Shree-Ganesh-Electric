// main.js

// Load Navbar
fetch('navbar.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;

    // Toggle Menu After Navbar is Loaded
    const toggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");

    if (toggle && mobileMenu) {
      toggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });
    }
  });

// Load Footer





   document.getElementById("serviceForm").addEventListener("submit", function (e) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const date = document.getElementById("date").value;

    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    let errorMessages = [];

    if (!nameRegex.test(name)) {
      errorMessages.push("Please enter a valid name (only letters).");
    }

    if (!emailRegex.test(email)) {
      errorMessages.push("Please enter a valid email.");
    }

    if (!phoneRegex.test(phone)) {
      errorMessages.push("Please enter a valid 10-digit phone number.");
    }

    if (!date) {
      errorMessages.push("Please select a date.");
    }

    if (errorMessages.length > 0) {
      e.preventDefault();
      alert(errorMessages.join("\n"));
    }
  });
