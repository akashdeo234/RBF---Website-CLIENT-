// nav bar function

let menu  = document.querySelector(".nav-links");

let handburger = document.querySelector(".handBurger");




handburger.addEventListener('click',()=>{
    menu.classList.toggle(
        "open"
    )

})


//swiper

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'cube',
    

    cubeEffect: {
        slideShadows: false,
        shadow: false,
      },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });