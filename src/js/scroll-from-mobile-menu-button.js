      $('a.scrollto').click(function () {
        var elementClick = $(this).attr('href');
        var destination = $(elementClick).offset().top;
        jQuery('html:not(:animated),body:not(:animated)').animate(
          {
            scrollTop: destination,
          },
          800,
        );
        document.querySelector('[data-menu-daskt-nav]').classList.toggle('is-open-nav');
        return false;
      });
