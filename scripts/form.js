const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

document.addEventListener("DOMContentLoaded", function() {
    const select = document.getElementById("productName");
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.name;
        option.textContent = product.name;
        select.appendChild(option);
    });
});

// Increment review counter in localStorage
document.querySelector("form").addEventListener("submit", function() {
    let reviewCount = localStorage.getItem("reviewCount") || 0;
    reviewCount++;
    localStorage.setItem("reviewCount", reviewCount);
});
// Get the current year and last modified date
const currentDate = new Date();
const year = currentDate.getFullYear();
const lastModified = document.lastModified;

// Update the footer with the current year and last modified date
document.getElementById("last-modified").textContent = lastModified;

// Add event listener to the hamburger menu button
document.getElementById("hambutton").addEventListener("click", () => {
  // Toggle the navigation menu
  const nav = document.getElementById("navmenu");
  nav.classList.toggle("show");
});

// Add event listener to the window to toggle the navigation menu on resize
window.addEventListener("resize", () => {
  const nav = document.getElementById("navmenu");
  if (window.innerWidth > 768) {
    nav.classList.remove("show");
  }
});

document.addEventListener("DOMContentLoaded", function() {
    // Retrieve the review count from localStorage
    let reviewCount = localStorage.getItem("reviewCount") || 0;
    document.getElementById("reviewCount").textContent = reviewCount;

    // Parse query string and display form data (optional)
    const params = new URLSearchParams(window.location.search);
    const productName = params.get("productName");
    const rating = params.get("rating");
    const installationDate = params.get("installationDate");
    const features = params.getAll("features");
    const review = params.get("review");
    const userName = params.get("userName");

    // Display the parsed form data (optional, for debugging purposes)
    console.log({
        productName,
        rating,
        installationDate,
        features,
        review,
        userName
    });
});
