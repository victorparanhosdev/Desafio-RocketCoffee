const botaoMobile = document.querySelector(".botao-menumobileopen");
const menuMobile = document.querySelector(".menu-mobile");

let show = true;


botaoMobile.addEventListener("click", () => {

    if(show) {
        
        botaoMobile.setAttribute('src', "./assets/menu-buguer-close.svg")
        menuMobile.classList.add("on")
        document.body.style.overflow = "hidden"
        show = false
    } else {
        botaoMobile.setAttribute('src', "./assets/menu-buguer-open.svg")
        menuMobile.classList.remove("on")
        document.body.style.overflow = "initial"
        show = true
    }



})



