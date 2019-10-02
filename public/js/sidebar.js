jQuery(function ($) {

    $(".sidebar-dropdown > a").click(function () {
        $(".sidebar-submenu").slideUp(200);
        if (
            $(this)
                .parent()
                .hasClass("active")
        ) {
            $(".sidebar-dropdown").removeClass("active");
            $(this)
                .parent()
                .removeClass("active");
        } else {
            $(".sidebar-dropdown").removeClass("active");
            $(this)
                .next(".sidebar-submenu")
                .slideDown(200);
            $(this)
                .parent()
                .addClass("active");
        }
    });

    
    // $(".dropdown-button").click(function () {
    //     $(".dropdown-button + .dropdown").addClass("show");
    //     $(".dropdown-button").addClass("show");
    // });

    $("#navbar-top-close-button").click(function () {
        if ($(".main-wrapper").hasClass("toggled")) {
            $(".main-wrapper").removeClass("toggled");

            $("#navbar-top-close-button i").removeClass("fa fa-arrow-left");
            $("#navbar-top-close-button i").addClass("fa fa-bars");
            
            $("#navbar-top-close-button").removeClass("navbar-top-close-button");
            $("#navbar-top-close-button").addClass("navbar-top-close-button");
        } else {
            $(".main-wrapper").addClass("toggled");

            $("#navbar-top-close-button i").removeClass("fa fa-bars");
            $("#navbar-top-close-button i").addClass("fa fa-arrow-left");
        }
    });

    // window.onclick = function(event) {
    //     alert($(event.target).parents('.dropdown-button.show').attr('class') + 
    //     " = " + $(event.target).parents('.dropdown-button.show').length
    //     + " = " + 
    //     $(event.target).parents('.dropdown-button').next().attr('class'));

    //     if (!$(event.target).parents('.dropdown-button.show').length==0) {
    //       var dropdowns = $('.dropdown.show');
    //       var i;
    //       for (i = 0; i < dropdowns.length; i++) {
    //         var openDropdown = dropdowns[i];
    //         if (openDropdown.classList.contains('show')) {
    //           openDropdown.classList.remove('show');
    //         }
    //       }
    //     }
    //   }

});