// Quantity control functions
function decreaseQuantity() {
    const qtyElement = document.getElementById("txtQty");
    let quantity = parseInt(qtyElement.textContent, 10);
    if (quantity > 1) {
        qtyElement.textContent = quantity - 1;
        // calculateAndDisplayPrice();
    }
}

function increaseQuantity() {
    const qtyElement = document.getElementById("txtQty");
    let quantity = parseInt(qtyElement.textContent, 10);
    qtyElement.textContent = quantity + 1;
    // calculateAndDisplayPrice();
}

// //Quantity Function
// function decreaseQuantity() {
//     let quantityInput = document.getElementById('quantity');
//     if (quantityInput.value > 1) {
//         quantityInput.value--;
//     }
// }
// function increaseQuantity() {
//     let quantityInput = document.getElementById('quantity');
//     quantityInput.value++;
// }

//Pop Up massage
function openPopup() {
    const popup = document.getElementById("popup");
    if (popup) popup.classList.add("open-popup");
}
//weda na-----------------, search button ekata wage
// Optional: Close overlay if user clicks outside the search content----
//window.onclick = function(event) {
//    let overlay = document.getElementById("buttons");
//    if (event.target == overlay) {
//        closePopup();
//    }
//}
