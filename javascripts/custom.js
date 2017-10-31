


$(document).ready(function () {
    var win_w = $('.body-wrap').width();
    var win_h = $(window).height();

    $('.gamburger').click(function(){
      $(this).toggleClass('open');
      $('.gamburger__content').toggleClass('open');
      return false;
    });

    $('.gamburger__close').click(function(){
      $('.gamburger').toggleClass('open');
      $('.gamburger__content').toggleClass('open');
      return false;
    });



    // if (win_w < 960) {
    //   $('.accordion .accordion__text').slideUp(); 
    //   $('.accordion .accordion__item').removeClass('open');
    // }

    // $('.accordion .accordion__head').click(function(){
    //   if (win_w < 960) {
    //     var arrord_click_this = $(this).closest('.accordion__item');
    //     if (arrord_click_this.hasClass('open')) {
    //       arrord_click_this.removeClass('open').find('.accordion__text').slideUp();
    //     }
    //     else{
    //       $(this).closest('.accordion').find('.accordion__item').each(function(){
    //         if ($(this) != arrord_click_this) {
    //           $(this).removeClass('open').find('.accordion__text').slideUp();
    //       }});
    //       arrord_click_this.addClass('open').find('.accordion__text').slideDown();
    //     }
    //     return false;
    //   }
    // });

    // $('.lang__item').click(function(){
    //   $('.lang__wrap').toggleClass('open');
    //   $('.lang__dropdown').toggle();

    //   return false;
    // });
    // $('.sell__check').click(function(){
    //   $(this).toggleClass('active');
    //   return false;
    // });

    // $('.person__name').click(function(){
    //   $('.person__menu').toggle();

    //   return false;
    // });

    // $('.lang').click(function(){
    //   var lang = $(this).attr('for');
    //   $('.lang').removeClass('active');
    //   $(this).addClass('active');
    //   $('.lang__item').removeClass('active');
    //   $(lang).addClass('active');
    //   $('.lang__wrap').toggleClass('open');
    //   $('.lang__dropdown').toggle();

    //   return false;
    // });




    

    $(document).click(function(event) {
     
      if (!$(event.target).closest(".menu__wrap").length){
        $('.gamburger').removeClass('open');
        $('.gamburger__content').removeClass('open');
      }
    });

    $(window).resize(function(){
      win_w = $('.container').width();
      $('.gamburger').removeClass('open');
      $('.gamburger__content').removeClass('open');


    });


  }
);