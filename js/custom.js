$(function(){
    //carousel js//

    $('.carousel').carousel()
    
    //Closes responsive menu when a scroll link is clicked
    $('.nav-link').on('click',function (){
        $('.navbar-collapse').collapse('hide');
    });
    
//gallery slider//
    
    $('.class-slider').slick({
    slidesToShow:3,
    slidesToScroll:1,
    autoplay: true,
    arrows:false,
    speed:1500,
    autoplaySpeed: 1500,
    responsive: [
        {
            breakpoint:991,
            settings: {
                slidesToShow:2,
            }
        },
        {
            breakpoint:768,
            settings: {
                slidesToShow:2,
            }
        },
        {
            breakpoint:576,
            settings: {
                slidesToShow:2,
            }
        },
        {
            breakpoint:481,
            settings: {
                slidesToShow:1,
            }
        }
    ]    

});
//venobox//
     $('.venobox').venobox(); 
 
//counter-up//
    
$('.counter').counterUp({
        delay: 5,
        time: 1000
});
//back-top//
    $('.back-top').click(function(){
        $('html,body').animate({scrollTop:0},500);
    })
    $(window).scroll(function(){
        var scrolling=$(this).scrollTop();
        if(scrolling > 200){
            $('.back-top').fadeIn(500);
        }
        else{
            $('.back-top').fadeOut(500);
        }
        if(scrolling > 150){
            $('.navbar').addClass('bg');
        }
        else{
            $('.navbar').removeClass('bg');
        }
        
    })
    
//wow js//
    new WOW().init();
    
//animation scroll js
    var html_body = $('html, body');
    $('.navbar a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 100
                }, 1500, );
                return false;
            }
        }
    });
 
    
    
    
    
    
    
});





















