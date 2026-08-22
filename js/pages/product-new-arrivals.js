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
function changeImageNew(element) {
    const image = element.querySelector('.img-div-new');
    const hoverSrcNew = image.getAttribute('data-hover-src-new');
    
    // Change to hover image if the attribute exists
    if (hoverSrcNew) {
        image.style.backgroundImage = `url(${hoverSrcNew})`;
    }
}

function resetImageNew(element) {
    const image = element.querySelector('.img-div-new');
    const originalSrcNew = image.getAttribute('data-original-src-new');
    
    // Reset to original image if the attribute exists
    if (originalSrcNew) {
        image.style.backgroundImage = `url(${originalSrcNew})`;
    }
}






//------------------------------------------------- pop up window -------------------------------------------------
function navigateToProductDetailsNew(productIdNew) {
    // Redirect to the product details page with a query parameter for product ID
    window.location.href = `product-new-arrivals-details.html?id=${productIdNew}`;
}
function openQuickAddPopup(imageSrcNew, productNameNew, productPriceNew) {
    // Set the image, name, and price in the popup
    document.getElementById('popupProductImageNew').src = `/assets/images/${imageSrcNew}`;
    document.getElementById('popupProductNameNew').textContent = productNameNew;
    document.getElementById('popupProductPriceNew').textContent = productPriceNew;

    // Display the popup and overlay
    document.getElementById('quickAddOverlayNew').style.display = 'block';
    document.getElementById('quickAddPopupNew').style.display = 'block';
}

function closeQuickAddPopup() {
    document.getElementById('quickAddOverlayNew').style.display = 'none';
    document.getElementById('quickAddPopupNew').style.display = 'none';
}

// Close popup when clicking outside
window.onclick = function(event) {
    let overlay = document.getElementById("quickAddOverlayNew");
    if (event.target == overlay) {
        closeQuickAddPopup();
    }
}


const productsNew = [
    {
        id: "product1",
        image: "pic8.jpg",
        hovrimage: "pic41.jpg",
        name: "Product 1",
        cost: 1000,         // Base cost for product 1
    },
    {
        id: "product2",
        image: "pic42.jpg",
        hovrimage: "pic13.jpg",
        name: "Product 2",
        cost: 1200,         // Base cost for product 2
    },
    {
        id: "product3",
        image: "pic37.jpg",
        hovrimage: "pic38.jpg",
        name: "Product 3",
        cost: 800,         // Base cost for product 3
    },
        {
        id: "product4",
        image: "pic35.jpg",
        hovrimage: "pic36.jpg",
        name: "Product 4",
        cost: 1250,         // Base cost for product 4
    },
    {
        id: "product5",
        image: "pic45.jpg",
        hovrimage: "pic46.jpg",
        name: "Product 5",
        cost: 900,         // Base cost for product 5
    },
    {
        id: "product6",
        image: "pic33.jpg",
        hovrimage: "pic34.jpg",
        name: "Product 6",
        cost: 1200,         // Base cost for product 6
    },
    {
        id: "product7",
        image: "pic20.jpg",
        hovrimage: "pic47.jpg",
        name: "Product 7",
        cost: 750,         // Base cost for product 7
    },
    {
        id: "product8",
        image: "pic49.jpg",
        hovrimage: "pic50.jpg",
        name: "Product 8",
        cost: 1000,         // Base cost for product 8
    },
    {
        id: "product9",
        image: "pic51.jpg",
        hovrimage: "pic70.jpg",
        name: "Product 9",
        cost: 850,         // Base cost for product 9
    },
    {
        id: "product10",
        image: "pic52.jpg",
        hovrimage: "pic53.jpg",
        name: "Product 10",
        cost: 600,         // Base cost for product 10
    },
    {
        id: "product11",
        image: "pic23.jpg",
        hovrimage: "pic54.jpg",
        name: "Product 11",
        cost: 1000,         // Base cost for product 11
    },
    {
        id: "product12",
        image: "pic71.jpg",
        hovrimage: "pic55.jpg",
        name: "Product 12",
        cost: 1200,         // Base cost for product 12
    },
    {
        id: "product13",
        image: "pic57.jpg",
        hovrimage: "pic58.jpg",
        name: "Product 13",
        cost: 800,         // Base cost for product 13
    },
        {
        id: "product14",
        image: "pic59.jpg",
        hovrimage: "pic60.jpg",
        name: "Product 14",
        cost: 1250,         // Base cost for product 14
    },
    {
        id: "product15",
        image: "pic62.jpg",
        hovrimage: "pic61.jpg",
        name: "Product 15",
        cost: 900,         // Base cost for product 15
    },
    {
        id: "product16",
        image: "pic63.jpg",
        hovrimage: "pic64.jpg",
        name: "Product 16",
        cost: 1200,         // Base cost for product 16
    },
    {
        id: "product17",
        image: "pic44.jpg",
        hovrimage: "pic67.jpg",
        name: "Product 17",
        cost: 750,         // Base cost for product 17
    },
    {
        id: "product18",
        image: "pic65.jpg",
        hovrimage: "pic25.jpg",
        name: "Product 18",
        cost: 1000,         // Base cost for product 18
    },
    {
        id: "product19",
        image: "pic68.jpg",
        hovrimage: "pic66.jpg",
        name: "Product 19",
        cost: 850,         // Base cost for product 19
    },
    {
        id: "product20",
        image: "pic69.jpg",
        hovrimage: "pic70.jpg",
        name: "Product 20",
        cost: 600,         // Base cost for product 20
    }
]

const sizePriceAdjustmentsNew = {
    "XS" : 200,
    "S"  : 300,
    "M"  : 400,
    "L"  : 500,
    "XL" : 600,
    "XXL": 700,
    "3XL": 800
};



function loadProductsNew() {
   let data = ""
   productsNew.map((item)=>{
       data += 
       `<div class="box-new" onclick="navigateToProductDetailsNew('${item.id}')" onmouseover="changeImageNew(this)" onmouseout="resetImageNew(this)">
               <div style="background-image: url('/assets/images/${item.image}')" class= "img-div-new" data-original-src-new="/assets/images/${item.image}" data-hover-src-new="/assets/images/${item.hovrimage}"></div>
               <p class="product-name-new">${item.name}</p>
               <div class="product-details-new">
                   <span class="product-price-new">Rs.${item.cost + sizePriceAdjustmentsNew.L}</span>
                   <button class="quick-add-button-new" 
                   onclick="event.stopPropagation(); openQuickAddPopup('${item.image}', '${item.name}', 'Rs.${item.cost + sizePriceAdjustmentsNew.L}')">Quick Add</button>
               </div>
           </div>`
   })
   console.log(data)
   const el = document.getElementById('products-container-new')
   el.innerHTML = data
}

loadProductsNew();