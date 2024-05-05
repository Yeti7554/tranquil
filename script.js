function toggleServices1() {
    var servicesList = document.getElementById("servicesList1");
    if (servicesList.style.display === "none") {
        servicesList.style.display = "block";
    } else {
        servicesList.style.display = "none";
    }
}

function toggleServices2() {
    var servicesList = document.getElementById("servicesList2");
    if (servicesList.style.display === "none") {
        servicesList.style.display = "block";
    } else {
        servicesList.style.display = "none";
    }
}

function toggleServices3() {
    var servicesList = document.getElementById("servicesList3");
    if (servicesList.style.display === "none") {
        servicesList.style.display = "block";
    } else {
        servicesList.style.display = "none";
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function () {
        if (navLinks.style.display === 'block') {
            navLinks.style.display = 'none';
            hamburger.textContent = '☰'; // Menu icon
        } else {
            navLinks.style.display = 'block';
            hamburger.textContent = '×'; // Close icon
        }
    });
});
