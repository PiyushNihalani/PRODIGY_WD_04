function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// <i class="fa-solid fa-xmark"></i>
// phone <i class="fa-solid fa-phone"></i>
//mail <i class="fa-solid fa-envelope"></i>
//location <i class="fa-solid fa-location-dot"></i>
//insta <i class="fa-brands fa-instagram"></i>
//linkedin <i class="fa-brands fa-linkedin"></i>
//github <i class="fa-brands fa-github"></i>
//X <i class="fa-brands fa-x-twitter"></i>

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    } else {
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    }
});

document.getElementById('textToCopy').addEventListener('click', function() {
    // Create a temporary text area element to copy the text
    var text = document.getElementById('textToCopy').innerText;
    var tempInput = document.createElement('textarea');
    tempInput.value = text;

    // Append the temporary textarea to the body
    document.body.appendChild(tempInput);
    
    // Select and copy the text
    tempInput.select();
    document.execCommand('copy');
    
    // Remove the temporary textarea
    document.body.removeChild(tempInput);

    // Notify the user
    alert("Text copied to clipboard: " + text);
});