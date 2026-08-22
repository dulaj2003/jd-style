//---------------------------------------------- country dropdown list
// Select dropdown components
const countryDropdown = document.querySelector('.country-dropdown');
const countryDropdownBtn = document.querySelector('.country-dropdown-btn');
const countryDropdownContent = document.querySelector('.country-dropdown-content');
const countrySelectedFlag = document.getElementById('country-selected-flag');
const countrySelectedCountry = document.getElementById('country-selected-country');

// Toggle dropdown visibility
if (countryDropdown && countryDropdownBtn && countryDropdownContent && countrySelectedFlag && countrySelectedCountry) {
  countryDropdownBtn.addEventListener('click', () => {
    countryDropdown.classList.toggle('open');
  });

// Handle option selection
  countryDropdownContent.addEventListener('click', (event) => {
    const countryItem = event.target.closest('.country-dropdown-item');
    if (countryItem) {
      const selectedFlagSrc = countryItem.querySelector('.country-flag-icon').src;
      const selectedCountryName = countryItem.dataset.country;

    // Update the selected flag and country name
      countrySelectedFlag.src = selectedFlagSrc;
      countrySelectedCountry.textContent = selectedCountryName;

    // Close the dropdown
      countryDropdown.classList.remove('open');
    }
  });

// Close dropdown when clicking outside
  document.addEventListener('click', (event) => {
    if (!countryDropdown.contains(event.target)) {
      countryDropdown.classList.remove('open');
    }
  });
}










//---------------------------------------------- Function to search popup
function openSearch() {
    const overlay = document.getElementById("searchOverlay");
    if (overlay) overlay.classList.add("active");
}

function closeSearch() {
    const overlay = document.getElementById("searchOverlay");
    if (overlay) overlay.classList.remove("active");
}

// Optional: Close overlay if user clicks outside the search content
window.addEventListener("click", function(event) {
    let overlay = document.getElementById("searchOverlay");
    if (event.target == overlay) {
        closeSearch();
    }
});






//---------------------------------------------- Function to open the login popup
function openLoginPopup() {
    const popup = document.getElementById("loginPopup");
    if (popup) popup.style.display = "flex";
}

// Function to close the login popup
function closeLoginPopup() {
    const popup = document.getElementById("loginPopup");
    if (popup) popup.style.display = "none";
}

// Close popup when clicking outside of it
window.addEventListener("click", function(event) {
    const popup = document.getElementById("loginPopup");
    if (event.target === popup) {
        closeLoginPopup();
    }
});

document.querySelectorAll(".search-icon, .login-icon").forEach((link) => {
    link.addEventListener("click", (event) => event.preventDefault());
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeSearch();
        closeLoginPopup();
    }
});






// // Get elements
// const loginButton = document.getElementById('loginButton');
// const overlay = document.getElementById('overlay');
// const loginPopup = document.getElementById('loginPopup');

// // Open popup
// loginButton.addEventListener('click', (event) => {
//     event.preventDefault();
//     overlay.style.display = 'block';
//     loginPopup.style.display = 'block';
// });

// // Close popup when clicking outside
// overlay.addEventListener('click', () => {
//     overlay.style.display = 'none';
//     loginPopup.style.display = 'none';
// });









// document.addEventListener("DOMContentLoaded", () => {
//     const productLink = document.getElementById("product-link");
//     const dropdownMenu = document.getElementById("dropdown-menu");
  
//     // Toggle dropdown visibility on click
//     productLink.addEventListener("click", (event) => {
//       event.preventDefault(); // Prevent navigation
//       dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
//     });
  
//     // Close dropdown when clicking outside
//     document.addEventListener("click", (event) => {
//       if (!event.target.closest(".dropdown")) {
//         dropdownMenu.style.display = "none";
//       }
//     });
//   });


