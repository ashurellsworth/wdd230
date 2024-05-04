var currentYear = new Date().getFullYear();

document.getElementById("year").innerHTML = currentYear;

var lastModified = document.lastModified;

document.getElementById("lastModified").innerHTML = 'Last Modification: '+lastModified;