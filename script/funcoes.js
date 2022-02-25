const botaoMobile = document.querySelector(".botao-menumobileopen");
const menuMeio = document.querySelector(".menu-meio");
let show = true;


botaoMobile.addEventListener("click", () => {

    if(show) {
        
        botaoMobile.setAttribute('src', "./assets/menu-buguer-close.svg")
        menuMeio.classList.add("on")
        //document.body.style.background = "red"
        show = false
    } else {
        botaoMobile.setAttribute('src', "./assets/menu-buguer-open.svg")
        menuMeio.classList.remove("on")
        //document.body.style.background = "green"
        show = true
    }



})



