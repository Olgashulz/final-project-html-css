{/* <script>
  $(document).ready(function(){
    $("a[href*=#]").on("click", function(e){
        var anchor = $(this);
        // nav__tablet = $('.hamburger'),
 nav__tablet = $('.nav__tablet'),
//  backdrop = $('.backdrop');
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
         trigger1.removeClass('is-open');
 nav__tablet.addClass('is-closed');
//   backdrop.removeClass('toggled');
//   overlay1.hide();
        return false;
    })
});
</script> */}

(function() {
  'use strict';

  var goTopBtn = document.querySelector('.back_to_top');
  function trackScroll() {
    let scrolled = window.pageYOffset;
    let coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('back_to_top-show');
      var t = setTimeout(() => document.querySelector('.back_to_top-show').classList.remove('back_to_top-show'), 500);
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('back_to_top-show');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 500) {
      window.scrollBy(0, -40);
      setTimeout(backToTop, 0);
    }
  }
  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();