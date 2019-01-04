$('.nav-link').click(function() {
    var option = $(this).html();
    var current_class = $("#sentence-rot").attr("class");
    
    switch (option) {
        case "SlideVert":
            $("#sentence-rot").removeClass(current_class).addClass("slidingVertical");
            break;
        case "SlideHor":
            $("#sentence-rot").removeClass(current_class).addClass("slidingHorizontal");
            break;
        case "FadeIn":
            $("#sentence-rot").removeClass(current_class).addClass("fadeIn");
            break;
        case "FlipVert":
            $("#sentence-rot").removeClass(current_class).addClass("verticalFlip");
            break;
        case "FlipHor":
            $("#sentence-rot").removeClass(current_class).addClass("horizontalFlip");
            break;
        case "Anti-ClockWise":
            $("#sentence-rot").removeClass(current_class).addClass("antiClock");
            break;
        case "ClockWise":
            $("#sentence-rot").removeClass(current_class).addClass("clockWise");
            break;
        case "Pop":
            $("#sentence-rot").removeClass(current_class).addClass("popEffect");
            break;
        case "Push":
            $("#sentence-rot").removeClass(current_class).addClass("pushEffect");
            break;
    
        default:
            $("#sentence-rot").removeClass(current_class).addClass("slidingVertical");
            break;
    }

});