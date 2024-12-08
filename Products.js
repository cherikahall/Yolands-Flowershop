const buyButtons = document.querySelectorAll(".buy-now-button");

function addToCart (event) {
    const productName = event.target.previousElementSibling.TextContent;
    alert(`${productName} has been added to your cart!`);
}
buyButtons.forEach(function(button){
    button.addEventListener("click", addToCart);

});