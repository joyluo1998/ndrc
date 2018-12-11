nie.define(function() {
    var e = nie.require("Interface"),
        a = !1;
    $(".orderPop1 .iosSel,.orderPop1 .andSel").click(function() { $(this).addClass("on").siblings().removeClass("on") }), $(".normal").on("click", function() {
        var e = $(".orderPop1");
        $(".layer").show(), e.show()
    }), $("#getAndroidCode").click(function() {
        var n = $("#phoneNum").val();
        ca.fn.validPhone(n) ? e.fn.get_authcode_apnt(n, function() { alert("\u9a8c\u8bc1\u7801\u83b7\u53d6\u6210\u529f\uff0c\u8bf7\u6ce8\u610f\u67e5\u6536\uff01") }, function(e) { alert(e.msg), "\u8bf7\u5148\u767b\u5f55" == e.msg && (a = !0, $(".layer").hide()) }) : alert("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7\u7801")
    }), $(".orderPop1 .close2").click(function() { $(".orderPop1").hide(), $(".layer").hide() }), $("#btn_submit").click(function() {
        var a = $("#phoneNum").val(),
            n = $("#androidCodeNum").val(),
            o = $("#mailNum").val(),
            l = /^\d{6}$/;
        ca.fn.validPhone(a) ? l.test(n) ? ca.fn.validMail(o) ? e.fn.verify_authcode(a, n, o, $(".orderPop1 .selBox .on").data("type"), function() { alert("\u6210\u529f\u62a5\u540d\u5165\u5b66"), $(".layer").hide(), $("#phoneNum").val(""), $("#androidCodeNum").val(""), $("#mailNum").val("") }, function(e) { alert(e.msg), -1 != e.msg.indexOf("\u91cd\u590d\u9884\u7ea6") && ($("#phoneNum").val(""), $("#androidCodeNum").val(""), $("#mailNum").val("")) }) : alert("\u8bf7\u586b\u5199\u6b63\u786e\u7684\u7f51\u6613\u90ae\u7bb1") : alert("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u9a8c\u8bc1\u7801") : alert("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7\u7801")
    })
});