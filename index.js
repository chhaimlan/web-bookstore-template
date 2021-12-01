 let searchform = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchform.classList.toggle('active');
}
let cart = document.querySelector('.cart-items-container');
document.querySelector('#cart-btn').onclick = () =>{
  cart.classList.toggle('active');
}
document.querySelector('#cart-clos-btn').onclick = () =>{
  cart.classList.remove('active');
  
}

let heart = document.querySelector('.heart-items-container');
document.querySelector('#heart-btn').onclick = () =>{
  heart.classList.toggle('active');
}
document.querySelector('#heart-close-btn').onclick = () =>{
  heart.classList.remove('active');
 
}





window.onscroll = () =>{
    searchform.classList.remove('active');
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');        
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}
let loginform = document.querySelector('.login-form-container');
document.querySelector('#login-btn').onclick = () =>{
    loginform.classList.toggle('active');
}
document.querySelector('#close-login-btn').onclick = () =>{
    loginform.classList.remove('active');
}
 
window.onload = () =>{
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');        
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
    fadOut();
}

function loader(){
  document.querySelector('.loader').classList.add('active');
}
function fadOut(){
  setTimeout(loader,4000)
}





var swiper = new Swiper(".books-slider", {
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay: 1000,
        disableOnInteraction: false,
    },
    breakpoints: {
     0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      
      },
      1024: {
        slidesPerView: 3,
        
      },
    },
  });

  var swiper = new Swiper(".featured-slider", {
    spaceBetween:10,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay: 9000,
        disableOnInteraction: false,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    breakpoints: {
     0: {
        slidesPerView: 1,
      },
      450:{slidesPerView :2,
    },
      768: {
        slidesPerView: 3,
      
      },
      1024: {
        slidesPerView: 4,
        
      },
    },
  });


  var swiper = new Swiper(".arrivals-slider", {
    spaceBetween:10,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay: 9000,
        disableOnInteraction: false,
    },
   
    breakpoints: {
     0: {
        slidesPerView: 1,
      },
   
      768: {
        slidesPerView: 2,
      
      },
      1024: {
        slidesPerView: 3,
        
      },
    },
  });
  var swiper = new Swiper(".reviews-slider", {
    spaceBetween:10,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay: 9000,
        disableOnInteraction: false,
    },
   
    breakpoints: {
     0: {
        slidesPerView: 1,
      },
   
      768: {
        slidesPerView: 2,
      
      },
      1024: {
        slidesPerView: 3,
        
      },
    },
  });

  var swiper = new Swiper(".blogs-slider", {
    spaceBetween:10,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay: 9000,
        disableOnInteraction: false,
    },
   
    breakpoints: {
     0: {
        slidesPerView: 1,
      },
   
      768: {
        slidesPerView: 2,
      
      },
      1024: {
        slidesPerView: 3,
        
      },
    },
  });