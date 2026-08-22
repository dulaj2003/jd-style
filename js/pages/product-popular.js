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
function changeImagePop(element) {
    const image = element.querySelector('.img-div-pop');
    const hoverSrcPop = image.getAttribute('data-hover-src-pop');
    
    // Change to hover image if the attribute exists
    if (hoverSrcPop) {
        image.style.backgroundImage = `url(${hoverSrcPop})`;
    }
}

function resetImagePop(element) {
    const image = element.querySelector('.img-div-pop');
    const originalSrcPop = image.getAttribute('data-original-src-pop');
    
    // Reset to original image if the attribute exists
    if (originalSrcPop) {
        image.style.backgroundImage = `url(${originalSrcPop})`;
    }
}






//------------------------------------------------- pop up window -------------------------------------------------
function navigateToProductDetailsPop(productIdPop) {
    // Redirect to the product details page with a query parameter for product ID
    window.location.href = `product-popular-details.html?id=${productIdPop}`;
}
function openQuickAddPopup(imageSrcPop, productNamePop, productPricePop) {
    // Set the image, name, and price in the popup
    document.getElementById('popupProductImagePop').src = `/assets/images/${imageSrcPop}`;
    document.getElementById('popupProductNamePop').textContent = productNamePop;
    document.getElementById('popupProductPricePop').textContent = productPricePop;

    // Display the popup and overlay
    document.getElementById('quickAddOverlayPop').style.display = 'block';
    document.getElementById('quickAddPopupPop').style.display = 'block';
}

function closeQuickAddPopup() {
    document.getElementById('quickAddOverlayPop').style.display = 'none';
    document.getElementById('quickAddPopupPop').style.display = 'none';
}

// Close popup when clicking outside
window.onclick = function(event) {
    let overlay = document.getElementById("quickAddOverlayPop");
    if (event.target == overlay) {
        closeQuickAddPopup();
    }
}


const productsPop = [
    {
        id: "product1",
        image: "pic1.jpg",
        hovrimage: "pic2.jpg",
        name: "Product 1",
        cost: 1000,         // Base cost for product 1
    },
    {
        id: "product2",
        image: "pic3.jpg",
        hovrimage: "pic4.jpg",
        name: "Product 2",
        cost: 1200,         // Base cost for product 2
    },
    {
        id: "product3",
        image: "pic5.jpg",
        hovrimage: "pic6.jpg",
        name: "Product 3",
        cost: 800,         // Base cost for product 3
    },
        {
        id: "product4",
        image: "pic7.jpg",
        hovrimage: "pic8.jpg",
        name: "Product 4",
        cost: 1250,         // Base cost for product 4
    },
    {
        id: "product5",
        image: "pic11.jpg",
        hovrimage: "pic12.jpg",
        name: "Product 5",
        cost: 900,         // Base cost for product 5
    },
    {
        id: "product6",
        image: "pic9.jpg",
        hovrimage: "pic10.jpg",
        name: "Product 6",
        cost: 1200,         // Base cost for product 6
    },
    {
        id: "product7",
        image: "pic13.jpg",
        hovrimage: "pic14.jpg",
        name: "Product 7",
        cost: 750,         // Base cost for product 7
    },
    {
        id: "product8",
        image: "pic15.jpg",
        hovrimage: "pic16.jpg",
        name: "Product 8",
        cost: 1000,         // Base cost for product 8
    },
    {
        id: "product9",
        image: "pic17.jpg",
        hovrimage: "pic18.jpg",
        name: "Product 9",
        cost: 850,         // Base cost for product 9
    },
    {
        id: "product10",
        image: "pic20.jpg",
        hovrimage: "pic19.jpg",
        name: "Product 10",
        cost: 600,         // Base cost for product 10
    },
    {
        id: "product11",
        image: "pic44.jpg",
        hovrimage: "pic22.jpg",
        name: "Product 11",
        cost: 1000,         // Base cost for product 11
    },
    {
        id: "product12",
        image: "pic23.jpg",
        hovrimage: "pic24.jpg",
        name: "Product 12",
        cost: 1200,         // Base cost for product 12
    },
    {
        id: "product13",
        image: "pic25.jpg",
        hovrimage: "pic26.jpg",
        name: "Product 13",
        cost: 800,         // Base cost for product 13
    },
        {
        id: "product14",
        image: "pic27.jpg",
        hovrimage: "pic28.jpg",
        name: "Product 14",
        cost: 1250,         // Base cost for product 14
    },
    {
        id: "product15",
        image: "pic29.jpg",
        hovrimage: "pic30.jpg",
        name: "Product 15",
        cost: 900,         // Base cost for product 15
    },
    {
        id: "product16",
        image: "pic31.jpg",
        hovrimage: "pic32.jpg",
        name: "Product 16",
        cost: 1200,         // Base cost for product 16
    },
    {
        id: "product17",
        image: "pic33.jpg",
        hovrimage: "pic34.jpg",
        name: "Product 17",
        cost: 750,         // Base cost for product 17
    },
    {
        id: "product18",
        image: "pic35.jpg",
        hovrimage: "pic36.jpg",
        name: "Product 18",
        cost: 1000,         // Base cost for product 18
    },
    {
        id: "product19",
        image: "pic37.jpg",
        hovrimage: "pic38.jpg",
        name: "Product 19",
        cost: 850,         // Base cost for product 19
    },
    {
        id: "product20",
        image: "pic40.jpg",
        hovrimage: "pic39.jpg",
        name: "Product 20",
        cost: 600,         // Base cost for product 20
    }
]

const sizePriceAdjustmentsPop = {
    "XS" : 200,
    "S"  : 300,
    "M"  : 400,
    "L"  : 500,
    "XL" : 600,
    "XXL": 700,
    "3XL": 800
};



function loadProductsPop() {
   let data = ""
   productsPop.map((item)=>{
       data += 
       `<div class="box-pop" onclick="navigateToProductDetailsPop('${item.id}')" onmouseover="changeImagePop(this)" onmouseout="resetImagePop(this)">
               <div style="background-image: url('/assets/images/${item.image}')" class= "img-div-pop" data-original-src-pop="/assets/images/${item.image}" data-hover-src-pop="/assets/images/${item.hovrimage}"></div>
               <p class="product-name-pop">${item.name}</p>
               <div class="product-details-pop">
                   <span class="product-price-pop">Rs.${item.cost + sizePriceAdjustmentsPop.L}</span>
                   <button class="quick-add-button-pop" 
                   onclick="event.stopPropagation(); openQuickAddPopup('${item.image}', '${item.name}', 'Rs.${item.cost + sizePriceAdjustmentsPop.L}')">Quick Add</button>
               </div>
           </div>`
   })
   console.log(data)
   const el = document.getElementById('products-container-pop')
   el.innerHTML = data
}

loadProductsPop();