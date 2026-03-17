function updateTotalCost() {
    const cart_cost= document.querySelector(".cart_cost__amount");
    const totalCostVND = sessionStorage.getItem("totalCostVND");
    cart_cost.innerHTML = totalCostVND;
}

function display_shipping(e) {
    const shipping = document.querySelector(".cart_checkout_info.shipping");
    if (e) {
        shipping.classList.remove("display_none");
    } else {
        shipping.classList.add("display_none");
    }
}

function shipping_checkbox() {
    const checkout_checkbox = document.querySelector(".checkout_checkbox");
    const shipping = checkout_checkbox.children[0];
    checkout_checkbox.addEventListener("click",function() {
        display_shipping(shipping.checked);
    });
}

function main(){
    updateTotalCost();
    shipping_checkbox();
}

main();