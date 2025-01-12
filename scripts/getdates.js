// Get the current date and time
const currentTime = new Date();

// Format the date and time
const formattedTime = currentTime.toLocaleString();

// Get the footer element
const lastModifiedElement = document.getElementById('last-modified');

// Update the footer text with the current date and time
lastModifiedElement.textContent = `Last Modification: ${formattedTime}`;
