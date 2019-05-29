if (/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))) {
//手机
} else {
//电脑
    $('html, body').css('max-width', '375px');
}

function sizeRem() {
    var _winwidth = $('body').width();
    $("html").css("fontSize", _winwidth / 160 * 7 + "px");
}

// $(window).on('resize', function () {
//     sizeRem();
// });
$(document).ready(function () {
    $(document).on('click', '.div_listUl .box_title  label', function () {
        var i = $(this).index();
        $(this).addClass('background').siblings().removeClass('background');
        $(":radio[name=change]:not(:checked)").prop("checked", true);
        swiper2.slideTo(i, 400, false)
    });
});
