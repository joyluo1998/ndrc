//toggle方法（用于绑定两个或多个事件处理器函数，以响应被选元素的轮流的 click 事件。）
$.fn.toggle = function (fn, fn2) {
    var args = arguments,
        guid = fn.guid || $.guid++,
        i = 0,
        toggler = function (event) {
            var lastToggle = ($._data(this, "lastToggle" + fn.guid) || 0) % i;
            $._data(this, "lastToggle" + fn.guid, lastToggle + 1);
            event.preventDefault();
            return args[lastToggle].apply(this, arguments) || false;
        };
    toggler.guid = guid;
    while (i < args.length) {
        args[i++].guid = guid;
    }
    return this.click(toggler);
}

$(function () {
    //弹出广告关闭
    $('#pop-close').click(function () {
        $('#layer,#pop').hide();
    })
    //更多电脑游戏按钮切换效果
    $('#more-pcgame').toggle(function () {
        $(this).text('<<');
        $('.pc-game').css('z-index', 1).animate({
            width: 434
        }).find('.viewport').animate({
            width: 270
        });
        $('.mobile-game').animate({
            width: '693px'
        });
    }, function () {
        $(this).text('更多电脑游戏');
        $('.pc-game').animate({
            width: 299
        }).find('.viewport').animate({
            width: 135
        });
        $('.mobile-game').animate({
            width: '828px'
        }).find('.viewport').animate({
            width: 135
        });
    })
    //更多手机游戏按钮切换效果
    $('#more-mobile-game').toggle(function () {
        $(this).text('>>');
        $('.mobile-game').animate({
            width: '993px'
        })
        $('.pc-game').animate({
            width: 134
        }).find('#more-pcgame').hide();

    }, function () {
        $(this).text('更多手机游戏');
        $('.mobile-game').animate({
            width: '828px'
        })
        $('.pc-game').animate({
            width: 299
        }).find('#more-pcgame').show();
    })

    //底部轮播图，使用插件实现
    new Swiper(".featureBox", {
        effect: "coverflow",
        initialSlide: 0,
        centeredSlides: !0,
        slidesPerView: "auto",
        onlyExternal: !0,
        preventClicks: !1,
        pagination: ".swiper-pagination",
        simulateTouch: !1,
        nextButton: ".feaNextBtn",
        prevButton: ".feaPreBtn",
        autoplayDisableOnInteraction: !1,
        loop: !0,
        autoplay: !0,
        speed: 2e3,
        coverflow: {
            rotate: 0,
            stretch: 440,
            depth: 280,
            modifier: 1,
            slideShadows: !0
        },
        onSlideChangeEnd: function () {}
    });

    $('#preBtn').click(function () {
        if ($('#hero-list-container').css('left') == '0px') {
            alert('已经是第一页了!')
        } else {
            $('#hero-list-container').css({
                left: '+=410px'
            });
        }
    })

    $('#nextBtn').click(function () {
        if ($('#hero-list-container').css('left') == '-1640px') {
            alert('已经是最后一页了!');
        } else {
            $('#hero-list-container').css({
                left: '-=410px'
            });
        }
    })

    $('input[name="hero"]').click(function () {
        var id = $(this).attr('id');
        $('label[for^=h]').removeClass('actived');
        $('label[for="' + id + '"]').addClass('actived');
        var idx = id.replace(/[^0-9]/ig, "")
        $('.bgp').children().eq(idx - 1).fadeIn(500).siblings().fadeOut(500);
    })

    $(window).scroll(function () {
        var top = $(window).scrollTop();
        console.log(top);
        if (top > 500) {
            $('.fixed-nav').fadeIn(300);
        } else {
            $('.fixed-nav').fadeOut(100);
        }

        if (top <= 1700) {
            $('.nav-i').eq(0).addClass('on').siblings().removeClass('on');
        } else if (top <= 2700) {
            $('.nav-i').eq(1).addClass('on').siblings().removeClass('on');
        } else if (top <= 3400) {
            $('.nav-i').eq(2).addClass('on').siblings().removeClass('on');
        } else {
            $('.nav-i').eq(3).addClass('on').siblings().removeClass('on');
        }
    })

    $(".videoBox").click(function () {
        $(".layer").fadeIn();
        $(".video-play-box").fadeIn();
        $('#video').trigger('play');
    }), $(".video-play-box .close").click(function () {
        $(".layer").fadeOut();
        $(".video-play-box").fadeOut();
        $('#video').trigger('pause');
    });

})
