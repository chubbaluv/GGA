//DESKTOP MENU AND MOBILE MENU SCROLLTOP
jQuery(document).ready(function() {
    // Transition effect for navbar 
    $(window).scroll(function() {
      // checks if window is scrolled more than 200px, adds/removes visible class
      if($(this).scrollTop() > 500) { 
          $('#desktop-menu').addClass('visible');
      } else {
          $('#desktop-menu').removeClass('visible');
      }
      if($(this).scrollTop() > 120) { 
          $('#mobile-menu').addClass('color-bg');
      } else {
          $('#mobile-menu').removeClass('color-bg');
      }
    });
});

//DESKTOP/MOBILE MENU MOTION

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var mobileHeight = $('#mobile-menu').outerHeight();
var desktopHeight = $('html').offset().top;

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
if (didScroll) {
    hasScrolled();
    didScroll = false;
}
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > mobileHeight){
        // Scroll Down
        $('#mobile-menu').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
        $('#mobile-menu').removeClass('nav-up').addClass('nav-down');
        }
    }

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > desktopHeight){
        // Scroll Down
        $('#desktop-menu').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('#desktop-menu').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}

//Opening/Closing of Mobile Menu
jQuery(function($) {
    $(".burger").click(function() {
        $("#mobile-nav").toggleClass("open");
          $(".burger").toggleClass("close");
    });
});

//SLIDER CONTROL
jQuery(function($) {
    $(".slide-controller button").click(function() {
        var buttonIndex = $(this).index();
        var cards = $(this).parent('.slide-controller').siblings('.card-container').children('.card');
        console.log(cards);

        if (!$(this).hasClass("active")) {
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
            cards.css("transform", "translateX(-" + buttonIndex*100 + "%)");
        }
    });
});

//ACCORDION CONTROL
jQuery(function($) {
    $(".accordion .title").click(function() {
        if (!$(this).hasClass("active")) {
            $(this).addClass("active");
            $(this).siblings('.person-container').slideDown({
                start: function () {
                    $(this).css({
                        display: "grid"
                    })
                }
            });
            $(this).children('.indicator').html("-");
        } else {
            $(this).removeClass('active');
            $(this).siblings('.person-container').slideUp();
            $(this).children('.indicator').html("+");
        }
    });
});

//OPEN POPUPS 
function openPopup(popup) {
    $(popup).fadeIn({
        start: function () {
            $(this).css({
                display: "flex"
            })
        }
    });
    $('html').css('overflow', 'hidden');
}

//CLOSE POPUPS
function closePopup(thisObj) {
    $(thisObj).parents(".popup-container").fadeOut();
    $('html').css('overflow-y', 'scroll');
}


//Form Handler
var $form = $('form#capture-form'),
    url = 'https://script.google.com/macros/s/AKfycbyn6-Te0A7dfH42PSuWqhFjJYOO0kSi-qVl-KfsDzmsGjXTphsw/exec';

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    console.log('success!')
  );
})