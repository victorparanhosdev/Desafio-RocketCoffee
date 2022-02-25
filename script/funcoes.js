const botaoMobile = document.querySelector(".botao-menumobileopen");
const menuMobile = document.querySelector(".menu-mobile");
const conteudo = document.querySelector(".conteudo-mobile")

let show = true;


botaoMobile.addEventListener("click", () => {

    if(show) {
        
        botaoMobile.setAttribute('src', "./assets/menu-buguer-close.svg")
        menuMobile.classList.add("on")
        conteudo.classList.add("on")
        document.body.style.overflow = "hidden"
        show = false
    } else {
        botaoMobile.setAttribute('src', "./assets/menu-buguer-open.svg")
        menuMobile.classList.remove("on")
        conteudo.classList.remove("on")
        document.body.style.overflow = "initial"
        show = true
    }

})



