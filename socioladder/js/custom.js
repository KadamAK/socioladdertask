$(document).ready(function () {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (currentScrollPos > 50) {
            if (prevScrollpos > currentScrollPos) {
                console.log('test')
                $('#navbar').removeClass('fixed-header');
            } else {
                console.log('test ABC');
                $('#navbar').addClass('fixed-header');
                
            }
            prevScrollpos = currentScrollPos;
        }
    }

    $(window).on("scroll", function (e) {
        if (this.pageYOffset >= 1) {
            
        }
        else {
            
        }
    });
});