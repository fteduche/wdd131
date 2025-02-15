document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
    });
});
// Function to calculate wind chill factor
function calculateWindChill(temperature, windSpeed) {
    // Formula for wind chill factor in Celsius
    return 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
  }
  
  // Function to display wind chill factor
  function displayWindChill() {
    const temperature = 5; // static temperature value
    const windSpeed = 10; // static wind speed value
    
    if (temperature <= 10 && windSpeed > 4.8) {
      const windChill = calculateWindChill(temperature, windSpeed);
      document.getElementById("windchill").innerText = `Wind Chill: ${windChill.toFixed(2)}°C`;
    } else {
      document.getElementById("windchill").innerText = "N/A";
    }
  }
  
  // Function to display current year and last modified date
  function displayFooterInfo() {
    const currentYear = new Date().getFullYear();
    const lastModifiedDate = document.lastModified;
    
    document.getElementById("footer-info").innerText = ` ${currentYear} ${lastModifiedDate}`;
  }
  
  // Call functions on page load
  window.onload = () => {
    displayWindChill();
    displayFooterInfo();
  };


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