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

    $("#nav-close-button").click(function () {
        if ($(".main-wrapper").hasClass("toggled")) {
            $(".main-wrapper").removeClass("toggled");

            $("#nav-close-button i").removeClass("fa fa-bars");
            $("#nav-close-button i").addClass("fa fa-times");
            
            $("#nav-close-button").addClass("nav-close-button");
        } else {
            $(".main-wrapper").addClass("toggled");

            $("#nav-close-button").removeClass("nav-close-button");

            $("#nav-close-button i").removeClass("fa fa-times");
            $("#nav-close-button i").addClass("fa fa-bars");
        }
    });

});