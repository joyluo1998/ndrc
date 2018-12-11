nie.define("index", function() {
    nie.config.copyRight.setWhite();
    nie.require("nie.util.niedownload");
    NieDownload.create({ wrapper: $("#nie-download"), enableAndroid: !0, enableIos: !0, useSSL: !0, disableClick: function() {} }), $(".unlock ul li").mouseover(function() {
        $(".unlock ul li .d").hide(), $(".unlock ul li").removeClass("on");
        for (var e = $(this).index(), a = 0; e >= a; a++) ! function(e) { $(".unlock ul li").eq(e).addClass("on") }(a);
        $(this).find(".d").show()
    });
    var e = nie.require("nie.util.galleryV2"),
        a = e.create({ galleryContainer: ".gallery_container", slidesPerView: 3, gallery_prev: ".gallery_prev", gallery_next: ".gallery_next", rotate: 0, stretch: -550, depth: 200, initialSlide: 0, autoPlay: 2e3, onGalleryStart: function(e) { $(".btns i").removeClass("on"), $(".btns i").eq((e.index + 5) % 5).addClass("on") }, onGalleryEnd: function() {} });
    $(".btns i").click(function() {
        var e = $(this).index();
        a.toSlide(e)
    });
    var s = nie.require("nie.util.shareV5"),
        i = $("#share_pic").attr("data-src"),
        o = $("#share_desc").html(),
        n = $("#share_title").html(),
        l = (s({ fat: "#NIE-share", type: 6, defShow: [23, 22, 2, 1, 4], title: n, img: i, content: o }), nie.require("nie.util.videoV2")),
        t = l({ fat: "#video", width: "800", height: "450", movieUrl: "https://crazynote.v.netease.com/2018/0925/4713e3c0b4adf9cc0ff5fa1506afd25bqt.mp4", HDmovieUrl: "", SHDmovieUrl: "", vtype: "" });
    $(".videoBox").click(function() { $(".layer").fadeIn(), $(".video-play-box").fadeIn(), t.play() }), $(".video-play-box .close").click(function() { $(".layer").fadeOut(), $(".video-play-box").fadeOut(), t.pause() });
    var d = ["https://qwq.res.netease.com/pc/fab/20180130103946/imgs/pc-p1_8a13f48.jpg", "https://qwq.res.netease.com/pc/fab/20180130103946/imgs/pc-p2_ba16d26.jpg", "https://qwq.res.netease.com/pc/fab/20180130103946/imgs/pc-p3_41d9423.jpg", "https://qwq.res.netease.com/pc/fab/20180130103946/imgs/pc-p4_fdae91f.jpg"];
    $(".unlock li .d .p-5").on("click", function() {
            var e = $(this).parents("li").index();
            $(".layer").fadeIn(), $(".poster-img img").attr("src", d[e]), $(".poster-img").fadeIn()
        }), $(".poster-img .close").click(function() { $(".layer").fadeOut(), $(".poster-img").fadeOut() }),
        function() {
            var e = $(".layer"),
                a = $(".pop-img-box"),
                s = $(".pop-img-box img"),
                i = $(".pop-img-box .pop-close");
            $(".anchors .an").on("click", function() {
                var o = $(this);
                o.hasClass("an1") ? (e.show(), s.eq(0).addClass("show"), i.addClass("p1"), a.show()) : o.hasClass("an2") ? (e.show(), s.eq(1).addClass("show"), i.addClass("p2"), a.show()) : o.hasClass("an3") ? (e.show(), s.eq(2).addClass("show"), i.addClass("p3"), a.show()) : o.hasClass("an4") ? (e.show(), s.eq(3).addClass("show"), i.addClass("p4"), a.show()) : o.hasClass("an5") && (e.show(), s.eq(4).addClass("show"), i.addClass("p5"), a.show())
            }), i.on("click", function() { e.hide(), a.hide(), s.removeClass("show"), i.removeClass("p1 p2 p3 p4 p5") });
            var o = location.href;
            (o.indexOf("baidu") > -1 || o.indexOf("sougou") > -1 || o.indexOf("shenma") > -1) && $(".btn-index").hide()
        }()
});