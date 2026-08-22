// const products = require("./product")

// Sample data for demonstration purposes
const productData = {
    "product1": {
        image: "pic20.jpg",
        hovrimage: "pic60.jpg",
        name: "Product 1",
        sku: "JDS54892",
        cost: 1000,         // Base cost for product 1
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"]
    },

    "product2": {
        image: "pic71.jpg",
        hovrimage: "pic72.jpg",
        name: "Product 2",
        sku: "JDS30216",
        cost: 1200,         // Base cost for product 2
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"]
    },
    "product3": {
        image: "pic73.jpg",
        hovrimage: "pic74.jpg",
        name: "Product 3",
        sku: "JDS79543",
        cost: 800,         // Base cost for product 1
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"]
    },
    "product4": {
        image: "pic11.jpg",
        hovrimage: "pic79.jpg",
        name: "Product 4",
        sku: "JDS86724",
        cost: 1250,         // Base cost for product 2
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"]
    },
    "product5": {
        image: "pic62.jpg",
        hovrimage: "pic50.jpg",
        name: "Product 5",
        sku: "JDS10438",
        cost: 900,         // Base cost for product 1
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"]
    },
    "product6": {
        image: "pic23.jpg",
        hovrimage: "pic54.jpg",
        name: "Product 6",
        sku: "JDS65987",
        cost: 1200,         // Base cost for product 1
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"]
    },
    "product7": {
        image: "pic8.jpg",
        hovrimage: "pic41.jpg",
        name: "Product 7",
        sku: "JDS23145",
        cost: 750,         // Base cost for product 2
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"]
    },
    "product8": {
        image: "pic44.jpg",
        hovrimage: "pic67.jpg",
        name: "Product 8",
        sku: "JDS90456",
        cost: 1000,         // Base cost for product 1
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"]
    },
    "product9": {
        image: "pic9.jpg",
        hovrimage: "pic10.jpg",
        name: "Product 9",
        sku: "JDS37812",
        cost: 850,         // Base cost for product 2
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"]
    },
    "product10": {
        image: "pic77.jpg",
        hovrimage: "pic78.jpg",
        name: "Product 10",
        sku: "JDS84297",
        cost: 600,         // Base cost for product 1
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"]
    },
    "product11": {
        image: "pic81.jpg",
        hovrimage: "pic80.jpg",
        name: "Product 11",
        sku: "JDS84629",
        cost: 1000,         // Base cost for product 11
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"]
    },
    "product12": {
        image: "pic82.jpg",
        hovrimage: "pic83.jpg",
        name: "Product 12",
        sku: "JDS37158",
        cost: 1200,         // Base cost for product 12
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"]
    },
    "product13": {
        image: "pic1.jpg",
        hovrimage: "pic2.jpg",
        name: "Product 13",
        sku: "JDS59432",
        cost: 800,         // Base cost for product 13
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"]
    },
    "product14": {
        image: "pic7.jpg",
        hovrimage: "pic84.jpg",
        name: "Product 14",
        sku: "JDS71025",
        cost: 1250,         // Base cost for product 14
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"]
    },
    "product15": {
        image: "pic85.jpg",
        hovrimage: "pic30.jpg",
        name: "Product 15",
        sku: "JDS48563",
        cost: 900,         // Base cost for product 15
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"]
    },
    "product16": {
        image: "pic45.jpg",
        hovrimage: "pic49.jpg",
        name: "Product 16",
        sku: "JDS92347",
        cost: 1200,         // Base cost for product 16
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"]
    },
    "product17": {
        image: "pic87.jpg",
        hovrimage: "pic86.jpg",
        name: "Product 17",
        sku: "JDS61784",
        cost: 750,         // Base cost for product 17
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"]
    },
    "product18": {
        image: "pic42.jpg",
        hovrimage: "pic13.jpg",
        name: "Product 18",
        sku: "JDS25893",
        cost: 1000,         // Base cost for product 18
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"]
    },
    "product19": {
        image: "pic88.jpg",
        hovrimage: "pic89.jpg",
        name: "Product 19",
        sku: "JDS73468",
        cost: 850,         // Base cost for product 19
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"]
    },
    "product20": {
        image: "pic59.jpg",
        hovrimage: "pic47.jpg",
        name: "Product 20",
        sku: "JDS83957",
        cost: 600,         // Base cost for product 20
        sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"]
    }

};



// Size price adjustments
const sizePriceAdjustments = {
    "XS" : 200,
    "S"  : 300,
    "M"  : 400,
    "L"  : 500,
    "XL" : 600,
    "XXL": 700,
    "3XL": 800
};



// Retrieve product ID from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Populate the main product details page
function populateProductDetails() {
    if (!productData[productId]) return;

    const product = productData[productId];
    document.getElementById("productImage").src = `/assets/images/${product.image}`;
    document.getElementById("productName").textContent = product.name;

    // Display SKU
    document.getElementById("productSku").textContent = `SKU: ${product.sku}`;

    // Populate sizes
    const sizesContainer = document.getElementById("productSizes");
    sizesContainer.innerHTML = product.sizes.map(size =>
        `<input type="radio" id="size-${size}" name="size" value="${size}" ${size === "L" ? "checked" : ""}>
        <label for="size-${size}">${size}</label>`
    ).join("");

    // Set initial price
    calculateAndDisplayPrice();

    // Add event listeners for size and quantity changes
    sizesContainer.addEventListener("change", calculateAndDisplayPrice);
    document.getElementById("txtQty").addEventListener("input", calculateAndDisplayPrice);
}

// Calculate and display the product price based on selected size and quantity
function calculateAndDisplayPrice() {
    const product = productData[productId];
    const selectedSize = document.querySelector('input[name="size"]:checked').value;
    const quantity = parseInt(document.getElementById("txtQty").textContent, 10) || 1;

    // Calculate the price as: (base cost + size adjustment) * quantity
    const sizeAdjustment = sizePriceAdjustments[selectedSize];
    const price = (product.cost + sizeAdjustment) * quantity;

    // Display the calculated price
    document.getElementById("productPrice").textContent = `Rs.${price}`;
}

// Display related products in a horizontal scroll bar (excluding current product)
function displayRelatedProducts() {
    const relatedProductsContainer = document.getElementById("relatedProductsContainer");

    Object.keys(productData).forEach(id => {
        // Skip the currently displayed product
        if (id === productId) return;

        const product = productData[id];
        const productCard = document.createElement("div");
        productCard.className = "related-product-card";
        // productCard.onclick = () => window.location.href = `product-all-details.html?id=${id}`; // Navigate to selected product

        productCard.innerHTML = `
            <div class="related-product-image img-div" onmouseover="changeImage(this)" onmouseout="resetImage(this)" style="background-image: url('/assets/images/${product.image}') "></div> 
            <div class="related-product-name">${product.name}</div>
            <div class="related-product-price">Rs.${product.cost}</div>
        `; // class="img-div" data-original-src="/assets/images/${product.image}" data-hover-src="/assets/images/${product.hovrimage}

        relatedProductsContainer.appendChild(productCard);
    });
}

function changeImage(element) {
    const image = element.querySelector('.img-div');
    const hoverSrc = image.getAttribute('data-hover-src');
    if (hoverSrc) {
        image.style.backgroundImage = `url(${hoverSrc})`;
    }
}

function resetImage(element) {
    const image = element.querySelector('.img-div');
    const originalSrc = image.getAttribute('data-original-src');
    if (originalSrc) {
        image.style.backgroundImage = `url(${originalSrc})`;
    }
}


// Quantity control functions
function decreaseQuantity() {
    const qtyElement = document.getElementById("txtQty");
    let quantity = parseInt(qtyElement.textContent, 10);
    if (quantity > 1) {
        qtyElement.textContent = quantity - 1;
        calculateAndDisplayPrice();
    }
}

function increaseQuantity() {
    const qtyElement = document.getElementById("txtQty");
    let quantity = parseInt(qtyElement.textContent, 10);
    qtyElement.textContent = quantity + 1;
    calculateAndDisplayPrice();
}


//Pop Up massage
function openPopup() {
    popup.classList.add("open-popup");
}



// Initial load of the main product details and related products
populateProductDetails();
displayRelatedProducts();

function displayRelatedProducts() {
    const relatedProductsContainer = document.getElementById("relatedProductsContainer");

    Object.keys(productData).forEach(id => {
        // Skip the currently displayed product
        if (id === productId) return;

        const product = productData[id];
        
        // Create product card with same structure and classes as on the main product page
        const productCard = document.createElement("div");
        productCard.className = "box"; // Ensures same styling as in product.html
        productCard.onclick = () => window.location.href = `product-all-details.html?id=${id}`;

        productCard.innerHTML = `
        <div onmouseover="changeImage(this)" onmouseout="resetImage(this)" >
            <div style="background-image: url('/assets/images/${product.image}')" data-original-src="/assets/images/${product.image}" data-hover-src="/assets/images/${product.hovrimage}" class="img-div"></div>
            <p class="product-name">${product.name}</p>
            <div class="product-details">
                <span class="product-price">Rs.${product.cost}</span>
                <button class="quick-add-button" onclick="event.stopPropagation(); openQuickAddPopup('/assets/images/${product.image}', '${product.name}', '${product.cost}') ">Quick Add</button>
            </div>
        </div>
        `;

        relatedProductsContainer.appendChild(productCard);
    });
}


function openQuickAddPopup(imageSrc, productName, productPrice) {
    // Set the image, name, and price in the popup
    document.getElementById('popupProductImage').src = imageSrc;
    document.getElementById('popupProductName').textContent = productName;
    document.getElementById('popupProductPrice').textContent = `Rs.${productPrice}`;

    // Display the popup and overlay
    document.getElementById('quickAddOverlay').style.display = 'block';
    document.getElementById('quickAddPopup').style.display = 'block';
}

// Function to close the popup
function closeQuickAddPopup() {
    document.getElementById('quickAddOverlay').style.display = 'none';
    document.getElementById('quickAddPopup').style.display = 'none';
}

// Close popup when clicking outside of it
window.onclick = function(event) {
    let overlay = document.getElementById("quickAddOverlay");
    if (event.target == overlay) {
        closeQuickAddPopup();
    }
}





//-------------------------------------------------- arrow buttons --------------------------------------------------
function scrollLeft() {
    const container = document.getElementById('relatedProductsContainer');
    container.scrollBy({ left: -300, behavior: 'smooth' }); // Scrolls left by 300px
}

function scrollRight() {
    const container = document.getElementById('relatedProductsContainer');
    container.scrollBy({ left: 300, behavior: 'smooth' }); // Scrolls right by 300px
}

