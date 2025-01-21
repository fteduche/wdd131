// Get the current year and last modified date
const currentDate = new Date();
const year = currentDate.getFullYear();
const lastModified = document.lastModified;

// Update the footer with the current year and last modified date
document.getElementById("last-modified").textContent = lastModified;

// Add event listener to the hamburger menu button
document.getElementById("hamburger-menu").addEventListener("click", () => {
    // Toggle the navigation menu
    const nav = document.querySelector("nav ul");
    nav.classList.toggle("show");
});

// Add event listener to the window to toggle the navigation menu on resize
window.addEventListener("resize", () => {
    const nav = document.querySelector("nav ul")});