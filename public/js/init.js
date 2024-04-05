jQuery(document).ready(function ($) {
  var time = 500;
  setTimeout(function () {
    $("h1.responsive-headline").fitText(1, {
      minFontSize: "40px",
      maxFontSize: "90px",
    });

    $(".smoothscroll").on("click", function (e) {
      e.preventDefault();
      var target = this.hash,
        $target = $(target);

      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $target.offset().top,
          },
          800,
          "swing",
          function () {
            window.location.hash = target;
          }
        );
    });

    var sections = $("section");
    var navigation_links = $("#nav-container > a");
    var navigation_links_mob = $("#mob_nav-container > a");

    sections.waypoint({
      handler: function (event, direction) {
        var active_section;

        active_section = $(this);
        if (direction === "up") active_section = active_section.prev();
        // console.log(active_section);
        // active_section.prev().removeClass("selected-component font-face-gm");
        var active_link = $(
          '#nav-container > a[href="#' + active_section.attr("id") + '"]'
        );
        var active_link_mob = $(
          '#mob_nav-container > a[href="#' + active_section.attr("id") + '"]'
        );
        navigation_links.removeClass("selected-component font-face-gm");
        navigation_links_mob.removeClass("selected-component font-face-gm");

        active_link.addClass("selected-component font-face-gm");
        active_link_mob.addClass("selected-component font-face-gm");

      },
      offset: "55%",
    });

    $("header").css({ height: $(window).height() });
    $(window).on("resize", function () {
      $("header").css({ height: $(window).height() });
      $("body").css({ width: $(window).width() });
    });

    $(window).scroll(function () {
      var scroll = $(window).scrollTop();

      if (scroll >= 500) {
        $(".clearHeader").addClass("darkHeader");
      } else {
        $(".clearHeader").removeClass("darkHeader");
      }
    });

    $(window).on("scroll", function () {
      var h = $("header").height();
      var y = $(window).scrollTop();
      var nav = $("#nav-wrap");

      if (y > h * 0 && y < h && $(window).outerWidth() > 768) {
        nav.fadeOut("fast");
      } else {
        if (y < h * 1.5) {
          nav.removeClass("opaque").fadeIn("fast");
        } else {
          nav.addClass("opaque").fadeIn("fast");
        }
      }
    });

    $(".flexslider").flexslider({
      namespace: "flex-",
      controlsContainer: ".flex-container",
      animation: "slide",
      controlNav: true,
      directionNav: false,
      smoothHeight: true,
      slideshowSpeed: 7000,
      animationSpeed: 600,
      randomize: false,
    });
  }, time);
});
