///This will retrieve the value for the icon on the cart on the local storage.
//If there is any, it will not show any value on the icon.
const cartValue = document.getElementById('cartValue')
localStorage.getItem('cartItems') != 0 && cartValue.classList.remove("cartHide")
cartValue.innerText = localStorage.getItem('cartItems')
const itemsOnCart = document.getElementById("itemsOnCart")
const items = Number(localStorage.getItem('cartItems'));
itemsOnCart.innerText = `Subtotal (${items} items):`

//This will show the amount to be payed by the user based on the products on the cart.
//It also formats the thousands values.
const totalAmountCart = document.getElementById('totalAmountCart')
const total = Number(localStorage.getItem('cartTotal'))
const numberFormatter = Intl.NumberFormat('en-US');
const formatted = numberFormatter.format(total);
totalAmountCart.innerText = `$${formatted}`



//This will render the products based on the id and their appearance on the local storage using the variables created with the same ids as in the json file
const productsIterator = async () => {
    const resp = await fetch('../database/data.json')
    const products = await resp.json()
    products.forEach((element, index) => {
        if (Number(localStorage.getItem(`${index}`)) != 0) {
            const price = element.price
            const numberFormatter = Intl.NumberFormat('en-US');
            const formatted = numberFormatter.format(price);
            let cartProducts = document.getElementById('cartProducts')
            let productDiv = document.createElement('div')
            productDiv.classList.add('card', 'mb-3')
            productDiv.innerHTML = `<div class='row g-0' id = 'productDiv${index}'> <div class='col-md-4 p-3'> <img src='${element.img_url}' class='cartProductImg rounded-start'> </div> <div class='col-md-8 my-auto p-2'> <div class='card-body'> <h5 class='card-title productTitle mb-3'>${element.desc}</h5> <p class='card-text productText'>$${formatted}</p> <p class='card-text productText' id='qty'>Items: ${localStorage.getItem(`${index}`)}</p> <button class='basket d-block' id='remove${index}'">Remove from basket</button> </div> </div> </div>`
            cartProducts.append(productDiv)

        }
    })

    // This will remove the products from the cart
    const remove0 = document.getElementById("remove0");
    const remove1 = document.getElementById("remove1");
    const remove2 = document.getElementById("remove2");
    const remove3 = document.getElementById("remove3");
    const remove4 = document.getElementById("remove4");

    const removeFromCart = () => Number(localStorage.getItem('cartItems')) - 1

    // This function is similar to the one that adds the products to the cart, but now is async and is in charge of decreasing the quantity of items in the cart
    //page as well as in the icon
    async function removingCart(a) {
        const idProduct = Number(a.id.charAt(a.id.length - 1))
        a.addEventListener("click", () => {
            window.location.reload()
            if (Number(localStorage.getItem(`${idProduct}`)) < 1) {
                const div = document.getElementById(`productDiv${idProduct}`)
                div.remove()
            } else {
                let qty = document.getElementById('qty')
                localStorage.setItem(`${idProduct}`, Number(localStorage.getItem(`${idProduct}`)) - 1)
                localStorage.setItem('cartItems', removeFromCart())
                cartValue.innerText = localStorage.getItem('cartItems')
                qty.innerText = `Items: ${localStorage.getItem('cartItems')}`
            }

        })
    }

    // This function will substrac the prices of each product from the subtotal based on the ids
    async function removingCartPrices(a) {
        const resp = await fetch('../database/data.json')
        const products = await resp.json()
        const idProduct = Number(a.id.charAt(a.id.length - 1))
        console.log(idProduct);
        products.forEach((element) => {
            if (idProduct == element.id) {
                a.addEventListener("click", () => {
                    window.location.reload()
                    localStorage.setItem('cartTotal', Number(localStorage.getItem('cartTotal')) - element.price)
                })
            }
        })

    }
    
    //Calling the functions
    removingCart(remove0)
    removingCartPrices(remove0)
    removingCart(remove1)
    removingCartPrices(remove1)
    removingCart(remove2)
    removingCartPrices(remove2)
    removingCart(remove3)
    removingCartPrices(remove3)
    removingCart(remove4)
    removingCartPrices(remove4)

}



productsIterator()
