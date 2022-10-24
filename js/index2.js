// Load products into home page
const productsIterator = async () => {
    const resp = await fetch('../database/data.json')
    const products = await resp.json()
    products.forEach((element, index) => {
        let productSection = document.getElementById(`product${index}`)
        productSection.innerHTML = `<h5 class='card-title productTitle'>${element.desc}</h5> <p class='card-text productText'>$${element.price}</p>`
        console.log(productSection)
    })

}


productsIterator()


//Cart logic on local storage and button interaction
const cartValue = document.getElementById('cartValue')

let cartItems = localStorage.getItem('cartItems') || localStorage.setItem('cartItems', 0);
let cartTotal = localStorage.getItem('cartTotal') || localStorage.setItem('cartTotal', 0);

const addToCart = () => Number(localStorage.getItem('cartItems')) + 1
const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");



function cart(a) {
    a.addEventListener("click", () => {
        localStorage.setItem('cartItems', addToCart())
        localStorage.getItem('cartItems') != 0 && cartValue.classList.remove("cartHide")
        cartValue.innerText = localStorage.getItem('cartItems')
    })
}



async function cartPrices(a) {
    const resp = await fetch('../database/data.json')
    const products = await resp.json()
    const idProduct = Number(a.id.charAt(a.id.length - 1))
    products.forEach((element) => {
        if (idProduct == element.id){
            a.addEventListener("click", () => { localStorage.setItem('cartTotal',Number(localStorage.getItem('cartTotal')) + element.price) })
        }
    })

}


cart(btn0)
cartPrices(btn0)
cart(btn1)
cartPrices(btn1)
cart(btn2)
cartPrices(btn2)
cart(btn3)
cartPrices(btn3)
cart(btn4)
cartPrices(btn4)