// nav bar function

let menu  = document.querySelector(".nav-links");

let handburger = document.querySelector(".handBurger");




handburger.addEventListener('click',()=>{
    menu.classList.toggle(
        "open"
    )

})