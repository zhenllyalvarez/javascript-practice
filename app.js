let button = document.querySelector('.subButton');
const product = {
    name: 'ball',
    price: 200
};

console.log(product);
console.log(product.name);
console.log(product.price);

product.name = 'tennis ball';
console.log(product)
// console.log(subButton);

function subButton() {
    if(button.innerHTML === "Subscribe") {
        button.innerHTML = 'Subscribed';
    } else [
        button.innerHTML = 'Subscribe'
    ]
}