$(document).ready(function(){

    // swiper
    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            clickable:true
        },
        autoplay : {
            delay: 1000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        },
        speed:300,
        loop:true,
    });
    // 换一换
    $('#j_dtgc .title-change').on('click',function(){
       
        if ($('.title-change span').text() != '彩蛋') {
            let sjitem_img = function(){
                let min = 1;
                let max = 31;
                let arr = [];
                
                 var l = $('#j_dtgc .vedio-container').children().length;
     
                for(let i = 0; i < l; i++) {
                 let sjs= parseInt(Math.random()*(max-min+1)+min,10);
                 if(arr.indexOf(sjs) == -1){
                    arr.push(sjs);
                 }else{
                     i--;
                 }
                 console.log(sjs);
                }
                $('#j_dtgc .vedio-container .vedio-item').fadeOut(1); 
                $('#j_dtgc .vedio-container .vedio-item .img-wrap>img').each(function(index){
                    let src = "../resource/wonder/vedio-item"+arr[index]+".jpg";
                    $(this).attr('src',src);
                   
                 });
                 $('#j_dtgc .vedio-container .vedio-item').fadeIn(1000).stop();
            }();
        } else {
            // alert('彩蛋');
            $(".vedio-container").fadeOut(200);
            $(".game-container").fadeIn(1000);
        }

    });


    // 3d 跑马灯
    $('.zxl-item').mouseenter(function () {
        $('#marquee').find('span').text($(this).find('.zxltitle').text());
        $('#marquee').fadeIn(200);
    });
    $('.zxl-item').mouseleave(function () {
        $('#marquee').fadeOut(200);
    });

});

