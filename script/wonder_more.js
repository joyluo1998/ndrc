$(document).ready(function() {
    $(".vedio-container").shapeshift();

    var value = localStorage["name"];
    if (value == '查看更多>') {
        value = '其他';
    }
    if (value == '更多集锦>') {
        value = '娱乐集锦';
    }
    if (value == 'undefined') {
        value = '万圣节快乐';
    }
    $('#j_title_name').text(value);
    $('title').text(value);

    var text = $('title').text();
    // alert(text);
    switch (text) {
        case '频道首页':
            $('.main-nav li')[0].setAttribute('class','current');
            break;
        case '学员比赛':
        $('.main-nav li')[1].setAttribute('class','current');
            break;
        case '精品栏目':
        $('.main-nav li')[2].setAttribute('class','current');
            break;
        case '英雄攻略':
        $('.main-nav li')[3].setAttribute('class','current');
            break;
        case '娱乐集锦':
        $('.main-nav li')[4].setAttribute('class','current');
            break;
        case '主播时刻':
        $('.main-nav li')[5].setAttribute('class','current');
            break;
        case '学院日常':
        $('.main-nav li')[6].setAttribute('class','current');
            break;
        case '其他':
        $('.main-nav li')[7].setAttribute('class','current');
            break;
        default:
        $('.main-nav li')[7].setAttribute('class','current');
            break;
    }
});

function set(a) {
    //由于是一个新的技术，你可以通过下面的代码检测你的浏览器是否支持
    if (window.localStorage) {
        //存储变量的值
        localStorage.name = a.innerText;
        location.href = 'wonder_more.html';
    } else {
        alert("您的浏览器不支持localStorage技术");
    }
}