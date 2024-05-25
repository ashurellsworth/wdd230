// script.js

document.addEventListener("DOMContentLoaded", function() {
    const toggleDiv = document.getElementById('mode');
    const body = document.body;

    // Check if dark mode is already enabled in local storage
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
    }

    toggleDiv.addEventListener('click', function() {
        body.classList.toggle('dark-mode');

        // Save the user's preference in local storage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});