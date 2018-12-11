


$(function () {
    //1.滑入 slideDown(动画执行的时长,动画执行完毕后的回调函数);
    $('#slideDown').mouseover(function () {
        //如果不写参数,默认有一个mormal的时长.
        //$('#div1').slideDown();

        $('#div1').slideDown(1000);

        // $('#div1').slideDown(2000, function () {
        //   alert('哈哈');
        // });

    });

    //2.滑出 slideUp(动画执行的时长,动画执行完毕后的回调函数);
    $('#slideDown').mouseout(function () {
        $('#div1').slideUp(1000);
    });

    //3.切换 slideToggle
    // $('#slideToggle').mouseover(function () {
    //     $('#div1').slideToggle(1000);
    // });
});

//轮播图
$(function () {
    //声明一个变量,用来保存显示图片的索引.
    var idx = 0;

    //1.给右边焦点点击事件.
    $('.arrow>.gengduo').click(function () {
        idx++;
        //如果是最后一张,索引为7,点击右边焦点索引变8, 但是事实上最后一张点击右边焦点要显示第一张.所以等于8的时候改成0.
        if(idx == 5){ //8是轮播图片的个数.
            idx = 0;
        }
        console.log(idx);
        //让图片li标签对应索引的li显示(fadeIn),其他的li隐藏(fadeOut).
        $('.scroll li').eq(idx).fadeIn(500).siblings('li').fadeOut(500);
    });


    //2.给左边焦点点击事件.
    $('.arrow>.fanhui').click(function () {
        idx--;
        //在第0张这里点击左边焦点,就应该回到最后一张, 所以索引为-1的时候就应该改成7.
        if(idx < 0){
            idx = 5; //7是轮播图片的个数-1
        }
        console.log(idx);
        //让图片li标签对应索引的li显示(fadeIn),其他的li隐藏(fadeOut).
        $('.scroll li').eq(idx).fadeIn(500).siblings('li').fadeOut(500);
    });
    
});


// var idx = window.setInterval("idx()",1000);
// setTimeout('window.idx();',1000);