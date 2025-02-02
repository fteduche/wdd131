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

const temples = [
        {
          templeName: "Aba Nigeria",
          location: "Aba, Nigeria",
          dedicated: "2005, August, 7",
          area: 11500,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
          templeName: "Manti Utah",
          location: "Manti, Utah, United States",
          dedicated: "1888, May, 21",
          area: 74792,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
          templeName: "Payson Utah",
          location: "Payson, Utah, United States",
          dedicated: "2015, June, 7",
          area: 96630,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
          templeName: "Yigo Guam",
          location: "Yigo, Guam",
          dedicated: "2020, May, 2",
          area: 6861,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
          templeName: "Washington D.C.",
          location: "Kensington, Maryland, United States",
          dedicated: "1974, November, 19",
          area: 156558,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
          templeName: "Lima Perú",
          location: "Lima, Perú",
          dedicated: "1986, January, 10",
          area: 9600,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
          templeName: "Mexico City Mexico",
          location: "Mexico City, Mexico",
          dedicated: "1983, December, 2",
          area: 116642,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        // Add more temple objects here...
      ];

      function createTempleCard(filterTemples) {
        const container = document.querySelector(".container");
        container.innerHTML = "";
        filterTemples.forEach((temple) => {
          let card = document.createElement("section");
          let name = document.createElement("h3");
          let location = document.createElement("p");
          let dedicated = document.createElement("p");
          let area = document.createElement("p");
          let image = document.createElement("img");
      
          name.textContent = temple.templeName;
          location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
          dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
          area.innerHTML = `<span class="label">Size:</span> ${temple.area}`;
          image.setAttribute("src", temple.imageUrl);
          image.setAttribute("alt", `${temple.templeName} Temple`);
          image.setAttribute("loading", "lazy");
      
          card.appendChild(name);
          card.appendChild(location);
          card.appendChild(dedicated);
          card.appendChild(area);
          card.appendChild(image);
          container.appendChild(card);
        });
      }
      
      createTempleCard(temples);
      
      const old = document.querySelector("#old");
      const newButton = document.querySelector("#new");
      const large = document.querySelector("#larg");
      const small = document.querySelector("#small");
      const home = document.querySelector("#home");
      
      old.addEventListener("click", () => {
        createTempleCard(temples.filter((temple) => temple.dedicated < "1900"));
      });
      
      newButton.addEventListener("click", () => {
        createTempleCard(temples.filter((temple) => temple.dedicated >= "2000"));
      });
      
      large.addEventListener("click", () => {
        createTempleCard(temples.filter((temple) => temple.area > 100000));
      });
      
      small.addEventListener("click", () => {
        createTempleCard(temples.filter((temple) => temple.area < 10000));
      });
      
      home.addEventListener("click", () => {
        createTempleCard(temples);
      });