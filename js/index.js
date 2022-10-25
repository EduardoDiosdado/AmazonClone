// Load products into home page
const productsIterator = async () => {
    const resp = await fetch('./database/data.json')
    const products = await resp.json()
    products.forEach((element, index) => {
        //Format thousands commas
        const price = element.price
        const numberFormatter = Intl.NumberFormat('en-US');
        const formatted = numberFormatter.format(price);
        //Generate html and load 
        let productSection = document.getElementById(`product${index}`)
        productSection.innerHTML = `<h5 class='card-title productTitle'>${element.desc}</h5> <p class='card-text productText'>$${formatted}</p>`
        console.log(productSection)
    })

}


productsIterator()


//Cart logic on local storage and button interaction
const cartValue = document.getElementById('cartValue')

//Set local storage items - If there are no items on the cart, there will not be an icon.
let cartItems = localStorage.getItem('cartItems') || localStorage.setItem('cartItems', 0);
let cartTotal = localStorage.getItem('cartTotal') || localStorage.setItem('cartTotal', 0);
localStorage.getItem('cartItems') != 0 && cartValue.classList.remove("cartHide")
cartValue.innerText = localStorage.getItem('cartItems')

//Counter for products on the cart
const addToCart = () => Number(localStorage.getItem('cartItems')) + 1


//Buttons to use
const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");



//This functions reviews the id of the button and based on that it creates a variable on the local storage to know how many items of the same product I have.
//It also lets me handle the counter on the cart
function cart(a) {
    const idProduct = Number(a.id.charAt(a.id.length - 1))
    let productCount = Number(localStorage.getItem(`${idProduct}`)) || localStorage.setItem(`${idProduct}`, 0);
    a.addEventListener("click", () => {

        //Notifies when a product has been added to the cart
        Toastify({
            text: "Product added to cart!",
            duration: 1000,
            close: false,
            gravity: "top", 
            position: "right", 
            stopOnFocus: true,
            style: {
                background: "#ff9900",
            },
            callback: function () {window.location.reload()} 
        }).showToast();
        localStorage.setItem(`${idProduct}`, Number(localStorage.getItem(`${idProduct}`)) + 1)
        localStorage.setItem('cartItems', addToCart())
        cartValue.innerText = localStorage.getItem('cartItems')
      

    })
   
}


//This async function lets me generate a variable on the local storage that will keep track of the total amount to pay.
//It will get the price based on the comparissons of the id on the button and the json file.
async function cartPrices(a) {
    const resp = await fetch('./database/data.json')
    const products = await resp.json()
    const idProduct = Number(a.id.charAt(a.id.length - 1))
    products.forEach((element) => {
        if (idProduct == element.id) {
            a.addEventListener("click", () => {
                localStorage.setItem('cartTotal', Number(localStorage.getItem('cartTotal')) + element.price)
            })
        }
    })

}


//Calling the functions
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