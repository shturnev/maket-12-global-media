$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
        return this;
    }
});

$(".menu").on("click", function () {

    var cont = $(this).next();
    if($(cont).is(":visible")){
        cont.hide();
    }
    else {
        $(cont).animateCss('bounceIn').css('display', 'flex');
    }

    console.log('sddd');

    return false;
});
$(".lang .curr").on("click", function () {

    $(this).next().slideToggle('fast');
    return false;
});
$(".menu-cont .close").on("click", function () {
    $(".menu-cont").hide();
    return false;
});
