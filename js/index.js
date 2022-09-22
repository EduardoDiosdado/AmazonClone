const btn = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const result = document.querySelector("#cartValue")


if (!localStorage.getItem('counter')) {
    localStorage.setItem('counter', 0);
}




function increase() {
    return Number(localStorage.getItem('counter')) + 1;
}



if (btn) {
    btn.addEventListener("click", () => {
        localStorage.setItem('counter', increase())
        result.innerText = localStorage.getItem('counter')

    })

}

if (btn2) {
    btn2.addEventListener("click", () => {
        localStorage.setItem('counter', increase())
        result.innerText = localStorage.getItem('counter')

    })

}

if (btn3) {
    btn3.addEventListener("click", () => {
        localStorage.setItem('counter', increase())
        result.innerText = localStorage.getItem('counter')

    })

}

if (btn4) {
    btn4.addEventListener("click", () => {
        localStorage.setItem('counter', increase())
        result.innerText = localStorage.getItem('counter')

    })

}

if (btn5) {
    btn5.addEventListener("click", () => {
        localStorage.setItem('counter', increase())
        result.innerText = localStorage.getItem('counter')

    })

}


if (result) {
    result.innerText = localStorage.getItem('counter')
}