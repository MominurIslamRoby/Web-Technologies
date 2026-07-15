const themeButton = document.getElementById("themeBtn");
const greeting = document.getElementById("greeting");
const clock = document.getElementById("clock");
const contactForm = document.getElementById("contactForm");

initialize();

function initialize()
{
    updateGreeting();
    updateClock();

    setInterval(updateClock, 1000);

    themeButton.addEventListener("click", toggleTheme);
    contactForm.addEventListener("submit", validateForm);
}

function toggleTheme() 
{

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) 
    {
        themeButton.innerHTML = "Light Mode";
    }
    else 
    {
        themeButton.innerHTML = "Dark Mode";
    }

}

function updateGreeting() 
{

    let currentHour = new Date().getHours();

    if (currentHour < 12) 
    {
        greeting.innerHTML = "Good Morning!";
    }
    else if (currentHour < 18) 
    {
        greeting.innerHTML = "Good Afternoon!";
    }
    else 
    {
        greeting.innerHTML = "Good Evening!";
    }

}

function updateClock() 
{

    let currentTime = new Date();

    clock.innerHTML = currentTime.toLocaleTimeString();

}

function showSection(sectionId) 
{

    document.getElementById("about").classList.add("hidden");
    document.getElementById("projects").classList.add("hidden");
    document.getElementById("contact").classList.add("hidden");

    document.getElementById(sectionId).classList.remove("hidden");

}

function validateForm(event) 
{

    event.preventDefault();

    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("messageError").innerHTML = "";

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let valid = true;

    if (name == "") 
    {
        document.getElementById("nameError").innerHTML = "Please enter your name.";
        valid = false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) 
    {
        document.getElementById("emailError").innerHTML = "Please enter a valid email.";
        valid = false;
    }

    if (message.length < 10) 
    {
        document.getElementById("messageError").innerHTML = "Message must be at least 10 characters.";
        valid = false;
    }

    if (valid) 
    {

        alert("Thank you! Your message has been sent successfully.");

        contactForm.reset();

    }

}