//-------------------------------------------------- poluar product items with popup msg & scroll bar --------------------------------------------------

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
        image: "pic21.jpg",
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




// Load products into horizontal scroll
function loadProductsPop() {
    const container = document.getElementById('home-products-container-pop');
    container.innerHTML = productsPop.map(product => `
        <div class="box-pop" onclick="navigateToProductDetailsPop('${product.id}')" onmouseover="changeImagePop(this)" onmouseout="resetImagePop(this)">
            <div style="background-image: url('/assets/images/${product.image}')" class="img-div-pop" data-original-src-pop="/assets/images/${product.image}" data-hover-src-pop="/assets/images/${product.hovrimage}"></div>
            <p class="product-name-pop">${product.name}</p>
            <div class="product-details-pop">
                <span class="product-price-pop">Rs.${product.cost + sizePriceAdjustmentsPop.L}</span>
                <button class="quick-add-button-pop" 
                    onclick="event.stopPropagation(); openQuickAddPopupPop('/assets/images/${product.image}', '${product.name}', 'Rs.${product.cost + sizePriceAdjustmentsPop.L}')">Quick Add</button>
            </div>
        </div>
    `).join('');
}

function changeImagePop(element) {
    const image = element.querySelector('.img-div-pop');
    const hoverSrcPop = image.getAttribute('data-hover-src-pop');
    if (hoverSrcPop) {
        image.style.backgroundImage = `url(${hoverSrcPop})`;
    }
}

function resetImagePop(element) {
    const image = element.querySelector('.img-div-pop');
    const originalSrcPop = image.getAttribute('data-original-src-pop');
    if (originalSrcPop) {
        image.style.backgroundImage = `url(${originalSrcPop})`;
    }
}

function openQuickAddPopupPop(imageSrcPop, productNamePop, productPricePop) {
    document.getElementById('popupProductImagePop').src = imageSrcPop;
    document.getElementById('popupProductNamePop').textContent = productNamePop;
    document.getElementById('popupProductPricePop').textContent = productPricePop;
    document.getElementById('quickAddOverlayPop').style.display = 'block';
    document.getElementById('quickAddPopupPop').style.display = 'block';
}

function closeQuickAddPopupPop() {
    document.getElementById('quickAddOverlayPop').style.display = 'none';
    document.getElementById('quickAddPopupPop').style.display = 'none';
}

window.addEventListener("click", function(event) {
    const overlay = document.getElementById('quickAddOverlayPop');
    if (event.target === overlay) {
        closeQuickAddPopupPop();
    }
});

function navigateToProductDetailsPop(productIdPop) {
    window.location.href = `/pages/product-popular-details.html?id=${productIdPop}`;
}

// Horizontal scroll buttons
function scrollLeftPop() {
    const container = document.getElementById('home-products-container-pop');
    container.scrollBy({ left: -300, behavior: 'smooth' });
}

function scrollRightPop() {
    const container = document.getElementById('home-products-container-pop');
    container.scrollBy({ left: 300, behavior: 'smooth' });
}

// Load products initially
loadProductsPop();









let sliderX = document.querySelector('.sliderX .listX');
let itemsX = document.querySelectorAll('.sliderX .listX .itemX');
let nextX = document.getElementById('nextX');
let prevX = document.getElementById('prevX');
let dotsX = document.querySelectorAll('.sliderX .dotsX li');

let lengthItemsX = itemsX.length - 1;
let activeX = 0;

nextX.onclick = function () {
    activeX = activeX + 1 <= lengthItemsX ? activeX + 1 : 0;
    reloadSliderX();
};

prevX.onclick = function () {
    activeX = activeX - 1 >= 0 ? activeX - 1 : lengthItemsX;
    reloadSliderX();
};

let refreshIntervalX = setInterval(() => {
    nextX.click();
}, 3000);

function reloadSliderX() {
    sliderX.style.left = -itemsX[activeX].offsetLeft + 'px';

    let lastActiveDotX = document.querySelector('.sliderX .dotsX li.active');
    lastActiveDotX.classList.remove('active');
    dotsX[activeX].classList.add('active');

    clearInterval(refreshIntervalX);
    refreshIntervalX = setInterval(() => {
        nextX.click();
    }, 3000);
}

dotsX.forEach((li, key) => {
    li.addEventListener('click', () => {
        activeX = key;
        reloadSliderX();
    });
});

window.addEventListener("resize", function () {
    reloadSliderX();
});












//-------------------------------------------------- new arrivals banner slideshow -----------------------------------------------------//
let sliderN = document.querySelector('.sliderN .listN');
let items = document.querySelectorAll('.sliderN .listN .itemN');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.sliderN .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSliderN();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSliderN();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSliderN(){
    sliderN.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.sliderN .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSliderN();
    })
})
window.addEventListener("resize", function() {
    reloadSliderN();
});















//-------------------------------------------------- new arrivals product items with popup msg & scroll bar --------------------------------------------------
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




// Load products into horizontal scroll
function loadProductsNew() {
    const container = document.getElementById('home-products-container-new');
    container.innerHTML = productsNew.map(product => `
        <div class="box-new" onclick="navigateToProductDetailsNew('${product.id}')" onmouseover="changeImageNew(this)" onmouseout="resetImageNew(this)">
            <div style="background-image: url('/assets/images/${product.image}')" class="img-div-new" data-original-src-new="/assets/images/${product.image}" data-hover-src-new="/assets/images/${product.hovrimage}"></div>
            <p class="product-name-new">${product.name}</p>
            <div class="product-details-new">
                <span class="product-price-new">Rs.${product.cost + sizePriceAdjustmentsNew.L}</span>
                <button class="quick-add-button-new" 
                    onclick="event.stopPropagation(); openQuickAddPopupNew('/assets/images/${product.image}', '${product.name}', 'Rs.${product.cost + sizePriceAdjustmentsNew.L}')">Quick Add</button>
            </div>
        </div>
    `).join('');
}

function changeImageNew(element) {
    const image = element.querySelector('.img-div-new');
    const hoverSrcNew = image.getAttribute('data-hover-src-new');
    if (hoverSrcNew) {
        image.style.backgroundImage = `url(${hoverSrcNew})`;
    }
}

function resetImageNew(element) {
    const image = element.querySelector('.img-div-new');
    const originalSrcNew = image.getAttribute('data-original-src-new');
    if (originalSrcNew) {
        image.style.backgroundImage = `url(${originalSrcNew})`;
    }
}

function openQuickAddPopupNew(imageSrcNew, productNameNew, productPriceNew) {
    document.getElementById('popupProductImageNew').src = imageSrcNew;
    document.getElementById('popupProductNameNew').textContent = productNameNew;
    document.getElementById('popupProductPriceNew').textContent = productPriceNew;
    document.getElementById('quickAddOverlayNew').style.display = 'block';
    document.getElementById('quickAddPopupNew').style.display = 'block';
}

function closeQuickAddPopupNew() {
    document.getElementById('quickAddOverlayNew').style.display = 'none';
    document.getElementById('quickAddPopupNew').style.display = 'none';
}

window.addEventListener("click", function(event) {
    const overlay = document.getElementById('quickAddOverlayNew');
    if (event.target === overlay) {
        closeQuickAddPopupNew();
    }
});

function navigateToProductDetailsNew(productIdNew) {
    window.location.href = `/pages/product-new-arrivals-details.html?id=${productIdNew}`;
}

// Horizontal scroll buttons
function scrollLeftNew() {
    const container = document.getElementById('home-products-container-new');
    container.scrollBy({ left: -300, behavior: 'smooth' });
}

function scrollRightNew() {
    const container = document.getElementById('home-products-container-new');
    container.scrollBy({ left: 300, behavior: 'smooth' });
}

// Load products initially
loadProductsNew();



















//-------------------------------------------------- all product items with popup msg & scroll bar --------------------------------------------------
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
        hovrimage: "pic74.jpg",
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
        hovrimage: "pic86.jpg",
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

// Load products into horizontal scroll
function loadProducts() {
    const container = document.getElementById('home-products-container');
    container.innerHTML = products.map(product => `
        <div class="box" onclick="navigateToProductDetails('${product.id}')" onmouseover="changeImage(this)" onmouseout="resetImage(this)">
            <div style="background-image: url('/assets/images/${product.image}')" class="img-div" data-original-src="/assets/images/${product.image}" data-hover-src="/assets/images/${product.hovrimage}"></div>
            <p class="product-name">${product.name}</p>
            <div class="product-details">
                <span class="product-price">Rs.${product.cost + sizePriceAdjustments.L}</span>
                <button class="quick-add-button" 
                    onclick="event.stopPropagation(); openQuickAddPopup('/assets/images/${product.image}', '${product.name}', 'Rs.${product.cost + sizePriceAdjustments.L}')">Quick Add</button>
            </div>
        </div>
    `).join('');
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

function openQuickAddPopup(imageSrc, productName, productPrice) {
    document.getElementById('popupProductImage').src = imageSrc;
    document.getElementById('popupProductName').textContent = productName;
    document.getElementById('popupProductPrice').textContent = productPrice;
    document.getElementById('quickAddOverlay').style.display = 'block';
    document.getElementById('quickAddPopup').style.display = 'block';
}

function closeQuickAddPopup() {
    document.getElementById('quickAddOverlay').style.display = 'none';
    document.getElementById('quickAddPopup').style.display = 'none';
}

window.addEventListener("click", function(event) {
    const overlay = document.getElementById('quickAddOverlay');
    if (event.target === overlay) {
        closeQuickAddPopup();
    }
});

function navigateToProductDetails(productId) {
    window.location.href = `/pages/product-all-details.html?id=${productId}`;
}

// Horizontal scroll buttons
function scrollLeft() {
    const container = document.getElementById('home-products-container');
    container.scrollBy({ left: -300, behavior: 'smooth' });
}

function scrollRight() {
    const container = document.getElementById('home-products-container');
    container.scrollBy({ left: 300, behavior: 'smooth' });
}

// Load products initially
loadProducts();














//-------------------------------------------------- animation slider --------------------------------------------------
let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')
let thumbnail = document.querySelector('.slider .thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item')

thumbnail.appendChild(thumbnailItems[0])

// Function for next button 
nextBtn.onclick = function() {
    moveSlider('next')
}


// Function for prev button 
prevBtn.onclick = function() {
    moveSlider('prev')
}


function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item')
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')

    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('next')
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        slider.classList.add('prev')
    }


    slider.addEventListener('animationend', function() {
        if(direction === 'next'){
            slider.classList.remove('next')
        } else {
            slider.classList.remove('prev')
        }
    }, {once: true}) // Remove the event listener after it's triggered once
}



// var TrandingSlider = new Swiper('.tranding-slider', {
//   effect: 'coverflow',
//   grabCursor: true,
//   centeredSlides: true,
//   loop: true,
//   slidesPerView: 'auto',
//   coverflowEffect: {
//     rotate: 0,
//     stretch: 0,
//     depth: 100,
//     modifier: 2.5,
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   }
// });










