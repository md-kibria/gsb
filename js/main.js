$(document).ready(function(){
    $(".owl-hero-slider").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            }
        }
    });
    
    $(".owl-img").owlCarousel({
        loop:true,
        margin:10,
        autoWidth: true,
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:true
    });

    $('#nav-menu').on('click', function() {
        $(".nav-items").toggle('right-full')
    })
    $('#menu').on('click', function() {
        $(".sidebar").toggle('right-full')
    })
  });

//   const sidebar = document.querySelector('.sidebar')

// sidebar.style.right = "50px"
//   console.log(sidebar)