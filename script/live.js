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
    $('#sideBtn').toggle(function () {
        $('#sideBar-nav').css({
            display: 'none'
        });
        $('#side-nav-extend').show();
        $('#sideBar').animate({
            width: '240px'
        }, 200, function () {
            $('#sideBtn').css({
                'background-position-y': '0px'
            })
        });
    }, function () {
        $('#sideBar-nav').fadeIn(100);
        $('#side-nav-extend').hide();
        $('#sideBar').animate({
            width: '50px'
        }, 200, function () {
            $('#sideBtn').css({
                'background-position-y': ''
            })
        });
    });

    $('.side-nav-tab-1').on('click', function () {
        $(this).addClass('current').siblings().removeClass('current');
        $('.side-nav-tab-content, .side-nav-anchor-list, .side-nav-anchor-list-empty').hide();
        $('.side-nav-activity, .side-nav-h').show();
    })
    $('.side-nav-tab-2').on('click', function () {
        $(this).addClass('current').siblings().removeClass('current');
        $('.side-nav-tab-content, .side-nav-anchor-list, .side-nav-anchor-list-empty').show();
        $('.side-nav-activity, .side-nav-h').hide();
    });

    ;
    (function () {
        var idx = 0;
        var timerId = setInterval(sowingMap, 2000);

        function sowingMap() {
            idx++;
            if (idx == 4) {
                idx = 0;
            }
            $('.bg').eq(idx).fadeIn(500).siblings().fadeOut(500);
            $('.dot').eq(idx).addClass('on').siblings().removeClass('on');
        }
        $('.banner').mouseenter(function () {
            clearInterval(timerId);
        });
        $('.banner').mouseleave(function () {
            timerId = setInterval(sowingMap, 2000);
        });
        $('.dot').mouseenter(function () {
            idx = $(this).index();
            $(this).addClass('on').siblings().removeClass('on');
            $('.bg').eq(idx).fadeIn(500).siblings().fadeOut(500);
        });
    }());

    $('.classification a').on('click', function () {
        $(this).addClass('current').siblings().removeClass('current');
        $('.live-list').empty();
        var data = $(this).attr('data');
        var live_data = [];
        if (data != 'all') {
            live_data = getLiveData("../resource/live.json")[data];
        } else {
            var temp = getLiveData("../resource/live.json");
            for (var key in temp) {
                live_data.push.apply(live_data,temp[key]);
            }
        }
        function getLiveData(url) {
            var result = 1;
            $.ajax({
                url: url,
                type: "get",
                data: {},
                async: false,
                success: function (data) {
                    result = data;
                }
            });
            return result;
        }
        console.log(live_data);

        var live_html = [];
        for (let i = 0; i < live_data.length; i++) {
            live_html.push('<li class="live-list-item">');
            live_html.push('<div class="container">');
            live_html.push('<i class="mask"></i>');
            live_html.push('<img src="../resource/live/'+live_data[i]['src']+'" alt="">');
            live_html.push('<p>');
            live_html.push('<span class="title ellipsis">'+live_data[i]['title']+'</span>');
            live_html.push('<span class="owner"><img src="../resource/live/'+live_data[i]['portrait']+'">'+live_data[i]['owner']+'</span>');
            live_html.push('<span class="popularity">'+live_data[i]['popularity']+'</span>');
            live_html.push('</p>');
            live_html.push('</div>');
            live_html.push('</li>');
        }
        for (let i = 0; i < 6; i++) {
            live_html.push('<li class="live-list-item hide-item"></li>');
        }
        $('.live-list').html(live_html.join(''));
    })

})