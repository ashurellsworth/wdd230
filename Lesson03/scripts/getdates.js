// Add year
const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

// Last modified
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;