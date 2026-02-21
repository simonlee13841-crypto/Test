// Button alert
function showAlert() {
    alert("Button works!");
}

// Dark mode toggle
const darkBtn = document.getElementById("darkBtn");
if(darkBtn){
    darkBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    });
}

// Form validation
const form = document.getElementById("contactForm");
if(form){
    form.addEventListener("submit", function(event){
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if(!name || !email || !message){
            alert("Please fill in all fields.");
            return;
        }
        alert("Form submitted successfully!");
        form.reset();
    });
}

// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");
if(menuToggle){
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}
