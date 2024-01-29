

// change navbar background color
document.addEventListener("DOMContentLoaded", function () {
    var topNav = document.getElementById("topNav");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            topNav.style.backgroundColor = "#dddddd";
            topNav.style.transition = " background-color 0.3s ease"
        } else {
            topNav.style.backgroundColor = "#ffffff";
        }
    });
});


//counter logic

function updateCounter(counterElement, targetNumber) {
    let currentValue = 0;
    const interval = setInterval(() => {
        currentValue++;
        counterElement.textContent = currentValue;

        if (currentValue === targetNumber) {
            clearInterval(interval);
        }
    }, 20);
}

function startCounter(counterId, targetNumber) {
    const counterElement = document.getElementById(counterId);
    updateCounter(counterElement, targetNumber);
}

window.onload = function () {
    startCounter('counter1', 150);
    startCounter('counter2', 170);
    startCounter('counter3', 500);

};


// contact form

function validateForm() {

    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;


    if (fullName.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill out all fields before submitting.');
    } else {

        document.getElementById('contactForm').submit();
    }
}