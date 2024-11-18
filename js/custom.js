$(document).ready(function($){
  // preloader js =============>>>
  setTimeout(function() {
    $('body').addClass('loaded');
  }, 500);

  // cursor effect =================== >>>
  new kursor({
    type: 4,
    color: "#121111",
  });
  // MENU ============================ >>>
  $(".menu").sticky({topSpacing:0});
  // typed =============>
  var typed = new Typed('.type', {
      strings: ['Web Developer',
              'UI/UX Designer',
              'Digital Marketar',
              'Canva Designer'],
              typeSpeed: 50,
              backSpeed: 50,
              backDelay: 500,
              startDelay: 1000,
              loop:true
  });
  // Active Menu Switcher ========= >>>
  const navList = document.querySelector(".navbar-nav");
  navList.addEventListener("click", (e) => {
    const navLink = e.target.parentElement;
    if(navLink.classList.contains("nav-item")){
      navList.querySelector(".active").classList.remove("active")
      navLink.classList.add("active")
    }
  })
  // slider ========================== >>>
  $('.used-app').owlCarousel({
    loop:true,
    margin:10,
    center: true,
    autoplay:true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    loop:true,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
  });
  // counter ============= >>
    $(".counter").counterUp({time:2000});

  // service-hover-effect ============= >>
    VanillaTilt.init(document.querySelector(".service-one"), {
      max: 20,
      speed: 600,
          
    });
    VanillaTilt.init(document.querySelector(".service-two"), {
      max: 20,
      speed: 600,
          
    });
    VanillaTilt.init(document.querySelector(".service-three"), {
      max: 20,
      speed: 600,
          
    });
    VanillaTilt.init(document.querySelector(".service-four"), {
      max: 20,
      speed: 600,
          
    });
  // Gallery ========================= >>>
    $(document).ready(function(){
      $('.list').click(function(){
        const value = $(this).attr('data-filter');
        if (value == 'all'){
          $('.itembox').show('1000');
        }
        else{
          $('.itembox').not('.'+value).hide('1000');
          $('.itembox').filter('.'+value).show('1000');
        }
      })
      $('.list').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
      })
    })
  // BLOG SLIDER ===================== >>>
    $('.blog-slide').owlCarousel({
      loop:true,
      margin:10,
      dots: false,
      nav:true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      autoplaySpeed: 3000,
      navText:["<i class='far fa-long-arrow-left'></i>","<i class='fal fa-long-arrow-right'></i>"],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
    })
  // clicent slider ================== >>>
    $('.testimonial-slider').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      navText:["<i class='far fa-long-arrow-left'></i>","<i class='fal fa-long-arrow-right'></i>"],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
    })
  // Aos animation js ============= >>
    AOS.init({
      offset: 130,
     });
});