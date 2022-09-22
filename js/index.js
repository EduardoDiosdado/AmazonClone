let totalDOM = document.createElement("p");
let body = document.getElementById("body");
let cartBtn = document.getElementById("cart");
const btn = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
cartResult = document.querySelector("#cartValue")
let counter;
let totalCart;

const productsArray = [{
    id: 1,
    name: document.getElementById("name1").innerHTML,
    price: document.getElementById("price1").innerHTML
}, {
    id: 1,
    name: document.getElementById("name2").innerHTML,
    price: document.getElementById("price2").innerHTML
}, {
    id: 1,
    name: document.getElementById("name3").innerHTML,
    price: document.getElementById("price3").innerHTML
}, {
    id: 1,
    name: document.getElementById("name4").innerHTML,
    price: document.getElementById("price4").innerHTML
}, {
    id: 1,
    name: document.getElementById("name5").innerHTML,
    price: document.getElementById("price5").innerHTML
}];

//const productsJSON = JSON.stringify(productsArray)




if (!localStorage.getItem('counter')) {
    localStorage.setItem('counter', 0);
}

if (!localStorage.getItem('total')) {
    localStorage.setItem('total', 0);
}



function increase() {
    return Number(localStorage.getItem('counter')) + 1;
}


function cartTotal(a) {
    return Number(localStorage.getItem('total')) + Number(productsArray[a].price);
}



if (btn) {
    btn.addEventListener("click", () => {
        localStorage.setItem('counter', increase())
        cartResult.innerText = localStorage.getItem('counter')
        localStorage.setItem('total', cartTotal(0))
        
    })

}

if (btn2) {
    btn2.addEventListener("click", () => {
        localStorage.setItem('counter', increase())
        cartResult.innerText = localStorage.getItem('counter')
        localStorage.setItem('total', cartTotal(1))

    })

}

if (btn3) {
    btn3.addEventListener("click", () => {
        localStorage.setItem('counter', increase())
        cartResult.innerText = localStorage.getItem('counter')
        localStorage.setItem('total', cartTotal(2))

    })

}

if (btn4) {
    btn4.addEventListener("click", () => {
        localStorage.setItem('counter', increase())
        cartResult.innerText = localStorage.getItem('counter')
        localStorage.setItem('total', cartTotal(3))

    })

}

if (btn5) {
    btn5.addEventListener("click", () => {
        localStorage.setItem('counter', increase())
        cartResult.innerText = localStorage.getItem('counter')
        localStorage.setItem('total', cartTotal(4))

    })

}


if (cartResult) {
    cartResult.innerText = localStorage.getItem('counter')
}


console.log(totalCart=localStorage.getItem('total'));






