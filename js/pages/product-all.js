//------------------------------------------------- filter popup window -------------------------------------------------
// JavaScript for Filter Popup functionality
document.addEventListener("DOMContentLoaded", function () {
    const filterModal = document.getElementById("filter-modal");
    const openFilterBtn = document.getElementById("open-filter-btn");
    const closeFilter = document.getElementById("close-filter");
    const applyFilter = document.getElementById("apply-filter");

    // Open filter modal
    openFilterBtn.addEventListener("click", () => {
        filterModal.style.display = "flex";
    });

    // Close filter modal
    closeFilter.addEventListener("click", () => {
        filterModal.style.display = "none";
    });

    // Close modal when clicking outside the filter content
    window.addEventListener("click", (event) => {
        if (event.target === filterModal) {
            filterModal.style.display = "none";
        }
    });

    // Apply button
    applyFilter.addEventListener("click", () => {
        alert("Filters applied!");
        filterModal.style.display = "none";
    });
});






//------------------------------------------------- drop down list -------------------------------------------------
// JavaScript for custom dropdown functionality
document.addEventListener("DOMContentLoaded", function () {
    const customDropdown = document.getElementById("customDropdown");
    const selectedOption = customDropdown.querySelector(".selected-option");
    const dropdownOptions = customDropdown.querySelector(".dropdown-options");
    const options = dropdownOptions.querySelectorAll(".dropdown-option");

    // Toggle dropdown visibility
    selectedOption.addEventListener("click", () => {
        customDropdown.classList.toggle("active");
    });

    // Set selected option and close dropdown
    options.forEach(option => {
        option.addEventListener("click", (e) => {
            selectedOption.textContent = e.target.textContent;
            customDropdown.classList.remove("active");
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
        if (!customDropdown.contains(e.target)) {
            customDropdown.classList.remove("active");
        }
    });
});






// "./product-details";
//------------------------------------------------- product img change code -------------------------------------------------
function changeImage(element) {
    const image = element.querySelector('.img-div');
    const hoverSrc = image.getAttribute('data-hover-src');
    
    // Change to hover image if the attribute exists
    if (hoverSrc) {
        image.style.backgroundImage = `url(${hoverSrc})`;
    }
}

function resetImage(element) {
    const image = element.querySelector('.img-div');
    const originalSrc = image.getAttribute('data-original-src');
    
    // Reset to original image if the attribute exists
    if (originalSrc) {
        image.style.backgroundImage = `url(${originalSrc})`;
    }
}






//------------------------------------------------- pop up window -------------------------------------------------
function navigateToProductDetails(productId) {
    // Redirect to the product details page with a query parameter for product ID
    window.location.href = `product-all-details.html?id=${productId}`;
}
function openQuickAddPopup(imageSrc, productName, productPrice) {
    // Set the image, name, and price in the popup
    document.getElementById('popupProductImage').src = `/assets/images/${imageSrc}`;
    document.getElementById('popupProductName').textContent = productName;
    document.getElementById('popupProductPrice').textContent = productPrice;

    // Display the popup and overlay
    document.getElementById('quickAddOverlay').style.display = 'block';
    document.getElementById('quickAddPopup').style.display = 'block';
}

function closeQuickAddPopup() {
    document.getElementById('quickAddOverlay').style.display = 'none';
    document.getElementById('quickAddPopup').style.display = 'none';
}

// Close popup when clicking outside
window.onclick = function(event) {
    let overlay = document.getElementById("quickAddOverlay");
    if (event.target == overlay) {
        closeQuickAddPopup();
    }
}


const products = [
    {
        id: "product1",
        image: "pic20.jpg",
        hovrimage: "pic60.jpg",
        name: "Product 1",
        cost: 1000,         // Base cost for product 1
    },
    {
        id: "product2",
        image: "pic71.jpg",
        hovrimage: "pic72.jpg",
        name: "Product 2",
        cost: 1200,         // Base cost for product 2
    },
    {
        id: "product3",
        image: "pic73.jpg",
        hovrimage: "pic86.jpg",
        name: "Product 3",
        cost: 800,         // Base cost for product 3
    },
        {
        id: "product4",
        image: "pic11.jpg",
        hovrimage: "pic79.jpg",
        name: "Product 4",
        cost: 1250,         // Base cost for product 4
    },
    {
        id: "product5",
        image: "pic62.jpg",
        hovrimage: "pic50.jpg",
        name: "Product 5",
        cost: 900,         // Base cost for product 5
    },
    {
        id: "product6",
        image: "pic23.jpg",
        hovrimage: "pic54.jpg",
        name: "Product 6",
        cost: 1200,         // Base cost for product 6
    },
    {
        id: "product7",
        image: "pic8.jpg",
        hovrimage: "pic41.jpg",
        name: "Product 7",
        cost: 750,         // Base cost for product 7
    },
    {
        id: "product8",
        image: "pic44.jpg",
        hovrimage: "pic67.jpg",
        name: "Product 8",
        cost: 1000,         // Base cost for product 8
    },
    {
        id: "product9",
        image: "pic9.jpg",
        hovrimage: "pic10.jpg",
        name: "Product 9",
        cost: 850,         // Base cost for product 9
    },
    {
        id: "product10",
        image: "pic77.jpg",
        hovrimage: "pic78.jpg",
        name: "Product 10",
        cost: 600,         // Base cost for product 10
    },
    {
        id: "product11",
        image: "pic81.jpg",
        hovrimage: "pic80.jpg",
        name: "Product 11",
        cost: 1000,         // Base cost for product 11
    },
    {
        id: "product12",
        image: "pic82.jpg",
        hovrimage: "pic83.jpg",
        name: "Product 12",
        cost: 1200,         // Base cost for product 12
    },
    {
        id: "product13",
        image: "pic1.jpg",
        hovrimage: "pic2.jpg",
        name: "Product 13",
        cost: 800,         // Base cost for product 13
    },
        {
        id: "product14",
        image: "pic7.jpg",
        hovrimage: "pic84.jpg",
        name: "Product 14",
        cost: 1250,         // Base cost for product 14
    },
    {
        id: "product15",
        image: "pic85.jpg",
        hovrimage: "pic30.jpg",
        name: "Product 15",
        cost: 900,         // Base cost for product 15
    },
    {
        id: "product16",
        image: "pic45.jpg",
        hovrimage: "pic49.jpg",
        name: "Product 16",
        cost: 1200,         // Base cost for product 16
    },
    {
        id: "product17",
        image: "pic87.jpg",
        hovrimage: "pic74.jpg",
        name: "Product 17",
        cost: 750,         // Base cost for product 17
    },
    {
        id: "product18",
        image: "pic42.jpg",
        hovrimage: "pic13.jpg",
        name: "Product 18",
        cost: 1000,         // Base cost for product 18
    },
    {
        id: "product19",
        image: "pic88.jpg",
        hovrimage: "pic89.jpg",
        name: "Product 19",
        cost: 850,         // Base cost for product 19
    },
    {
        id: "product20",
        image: "pic59.jpg",
        hovrimage: "pic47.jpg",
        name: "Product 20",
        cost: 600,         // Base cost for product 20
    }
]

const sizePriceAdjustments = {
    "XS" : 200,
    "S"  : 300,
    "M"  : 400,
    "L"  : 500,
    "XL" : 600,
    "XXL": 700,
    "3XL": 800
};



function loadProducts() {
   let data = ""
   products.map((item)=>{
       data += 
       `<div class="box" onclick="navigateToProductDetails('${item.id}')" onmouseover="changeImage(this)" onmouseout="resetImage(this)">
               <div style="background-image: url('/assets/images/${item.image}')" class= "img-div" data-original-src="/assets/images/${item.image}" data-hover-src="/assets/images/${item.hovrimage}"></div>
               <p class="product-name">${item.name}</p>
               <div class="product-details">
                   <span class="product-price">Rs.${item.cost + sizePriceAdjustments.L}</span>
                   <button class="quick-add-button" 
                   onclick="event.stopPropagation(); openQuickAddPopup('${item.image}', '${item.name}', 'Rs.${item.cost + sizePriceAdjustments.L}')">Quick Add</button>
               </div>
           </div>`
   })
   console.log(data)
   const el = document.getElementById('products-container')
   el.innerHTML = data
}

loadProducts();