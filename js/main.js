$(document).ready(function () {

  // Open nav account
  $('.user__link--openNav').on('click', function(e) {
    e.preventDefault();
    $('.aside').toggleClass('aside_open');
  });

  $('.aside__close').on('click', function() {
    $('.aside').removeClass('aside_open');
  });

  // Payment tabs
  $('.payment-tabs__item').not(':first').hide();
  $('.payment-nav__item').click(function() {
    $('.payment-nav__item').removeClass('active').eq($(this).index()).addClass('active');
    $('.payment-tabs__item').hide().eq($(this).index()).fadeIn(100)
  }).eq(0).addClass('active');

  // Modal
  $('.open-modal-payment').on('click', function(e) {
    e.preventDefault();
    $('.modal_payment').fadeIn();
  })

  $('.open-modal-referrals').on('click', function(e) {
    e.preventDefault();
    $('.modal_referrals').fadeIn();
  })

  $('.open-modal-referrals-multi').on('click', function(e) {
    e.preventDefault();
    $('.modal_referrals--multi').fadeIn();
  })

  $('.open-modal-submitted').on('click', function(e) {
    e.preventDefault();
    $('.modal_submitted').fadeIn();
  })

  $('.open-modal-account').on('click', function(e) {
    e.preventDefault();
    $('.modal_account').fadeIn();
  })

  $('.open-modal-withdrawal').on('click', function(e) {
    e.preventDefault();
    $('.modal_withdrawal').fadeIn();
  })

  $('.open-modal-sent').on('click', function(e) {
    e.preventDefault();
    $('.modal_sent').fadeIn();
  })






  // Modal video
  $('.video__box').on('click', function() {
    var dataYoutube = $(this).attr('data-youtube');
    $(this).html('<iframe src="https://www.youtube.com/embed/'+ dataYoutube +'?autoplay=1" frameborder="0" allowfullscreen></iframe>')
  });

  // Filter open
  $('.filter__title').on('click', function() {
    $('.filter__box').fadeOut();
    $(this).next('.filter__box').fadeToggle();
  });

  $(document).click(function(event) {
    if ($(event.target).closest('.filter__title').length 
      || $(event.target).closest('.filter__box').length ) return;
      $('.filter__box').fadeOut();
      event.stopPropagation();
  });

  // Modal
  $('.open-modal-login').on('click', function(e) {
    e.preventDefault();
    $('.modal_login').fadeIn();
  })

  $('.open-modal-signup').on('click', function(e) {
    e.preventDefault();
    $('.modal_signUp').fadeIn();
  })

  $('.open-modal-pass').on('click', function(e) {
    e.preventDefault();
    $('.modal_pass').fadeIn();
  })

  $('.open-modal-subscribe').on('click', function(e) {
    e.preventDefault();
    $('.modal_subscribe').fadeIn();
  })

  // Modal close
  $('.modal__close').on('click', function(e) {
    e.preventDefault();
    $('.modal').fadeOut();
  });

  // Cover
  if($(window).width() < 575) {
    var mySwiper = new Swiper ('.cover__sl', {
      spaceBetween: 0,
      slidesPerView: '1',
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    });
  };

  // Promotions
  var mySwiper = new Swiper ('.promotions__sl', {
    spaceBetween: 16,
    slidesPerView: 'auto',
    breakpoints: {
      1200: {
       slidesPerView: '4'
      },
      575: {
       spaceBetween: 16
      },
      300: {
        spaceBetween: 0
      }
    }
  });

  // Filter
  var mySwiper = new Swiper ('.filter_sl', {
    spaceBetween: 25,
    slidesPerView: 'auto',
    breakpoints: {
      992: {
       spaceBetween: 35
      },
      767: {
        spaceBetween: 20
      },
      300: {
        
      }
    }
  });

});