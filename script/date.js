/*
** Create by Administrator on 2018/10/25
*/
$(function (  ) {
    var date0 = [
        {
            name : '金禅',
            images : 'src="../resource/herodata-images/5aabbf02ee4c0f2aba62aecarvZvpUr2.jpg"',
        },
        {
            name : '嫦娥',
            images : 'src="../resource/herodata-images/5aabbf08a7f252362f95530eNRDLuaxN.jpg"',
        },
        {
            name : '顺风耳',
            images : 'src="../resource/herodata-images/5aabbf0ffb758a350805a339O0Qtus2f.jpg"',
        },
        {
            name : '虎力',
            images : 'src="../resource/herodata-images/5aabbf166f0494f917c87a3c8df8ov3f.jpg"',
        },
        {
            name : '龙马',
            images : 'src="../resource/herodata-images/5b0283af6f04947b5fde609468BQp6xJ.jpg"',
        },
        {
            name : '雷震子',
            images : 'src="../resource/herodata-images/5aabbf207f9d2a9ae4412f1erkPmzkfN.jpg"',
        },
        {
            name : '土地',
            images : 'src="../resource/herodata-images/5aabbf2846072b251472eefcVA14eRM7.jpg"',
        },
        {
            name : '白骨精',
            images : 'src="../resource/herodata-images/5aabbf2e02c9a11d0c3cd66frTlZFkTJ.jpg"',
        },
        {
            name : '钟馗',
            images : 'src="../resource/herodata-images/5aabb948ee4c0f27cc6350d6QmLBipLH.jpg"',
        },
        {
            name : '牛魔',
            images : 'src="../resource/herodata-images/5aabbf438b7427248c5d3e57vuGi8PRC.jpg"',
        },
        {
            name : '熊黑',
            images : 'src="../resource/herodata-images/5aabbf4946072b2487765600Ulfg7FDa.jpg"',
        },
        {
            name : '九头虫',
            images : 'src="../resource/herodata-images/5aabbf52a7f2522bdf62770ehKiMfglH.jpg"',
        },
        {
            name : '琰萝',
            images : 'src="../resource/herodata-images/5aabbf57aa49f19592e83712lJB5QKHm.jpg"',
        },
        {
            name : '白灵',
            images : 'src="../resource/herodata-images/5aabbf5efb758a45d5671c80zKX7ft2f.jpg"',
        },
        {
            name : '雷姆',
            images : 'src="../resource/herodata-images/5aabbf636f0494f917c87a74QZbNzSNg.jpg"',
        },
        {
            name : '鹿哩',
            images : 'src="../resource/herodata-images/5aabbf698b742723f930ea377szwSiDS.jpg"',
        },
        {
            name : '红孩儿',
            images : 'src="../resource/herodata-images/5aabbf6eaa49f1a68a7efb821zLDjXYH.jpg"',
        },
        {
            name : '玉子',
            images : 'src="../resource/herodata-images/5aabbf738b7427248c5d3e78w3yg6X1q.jpg"',
        },
        {
            name : '阿蛟',
            images : 'src="../resource/herodata-images/5aabbf78adce5fed520a294f45jkd9Nk.jpg"',
        },
        {
            name : '魍魉',
            images : 'src="../resource/herodata-images/5aabbf81a7f2523d9242dbccZHRyzsvh.jpg"',
        },
        {
            name : '大鹏',
            images : 'src="../resource/herodata-images/5aabbf8520e3dbfbf0cc90eb42bKFkic.jpg"',
        },
        {
            name : '玄蛛',
            images : 'src="../resource/herodata-images/5aabbf8a7f9d2a9ae4412f5dkltZDczG.jpg"',
        },
        {
            name : '铁扇',
            images : 'src="../resource/herodata-images/5ad95e28a7f252db2793c13bWz40PjsB.jpg"',
        },
        {
            name : '羊丽',
            images : 'src="../resource/herodata-images/5ad95e27a7f252ecfe236210A14gEM1M.jpg"',
        },
        {
            name : '灵感大王',
            images : 'src="../resource/herodata-images/5ad95e278b7427c7e4a60070Ye4ubPWr.jpg"',
        },
        {
            name : '晓音',
            images : 'src="../resource/herodata-images/5af19942143cfa9ecb9ec240kagFBqkt.jpg"',
        },
        {
            name : '金角',
            images : 'src="../resource/herodata-images/5b0283b2a7f252f93a79fa5eFc0Svqh2.jpg"',
        },
        {
            name : '银角',
            images : 'src="../resource/herodata-images/5b0283b25e6027136b95da6536whXK2G.jpg"',
        },
        {
            name : '哪吒',
            images : 'src="../resource/herodata-images/5ad95e286f04949d74b95f3dqeOjUI9N.jpg"',
        },
        {
            name : '百目',
            images : 'src="../resource/herodata-images/5ad95e28a7f252db2793c13bWz40PjsB.jpg"',
        },
        {
            name : '太白',
            images : 'src="../resource/herodata-images/5aabbf968b742717b5513163iGzqHi1y.jpg"',
        },
        {
            name : '悟静',
            images : 'src="../resource/herodata-images/5aabbf9b8b742723f930ea52Ji2q89jF.jpg"',
        },
        {
            name : '常乐',
            images : 'src="../resource/herodata-images/5ad95e278b7427b86f20cd147DNuGVlp.jpg"',
        },
        {
            name : '文曲星',
            images : 'src="../resource/herodata-images/5b0283b3143cfa49c35e0db72i9vgAia.jpg"',
        },
        {
            name : '狮妹',
            images : 'src="../resource/herodata-images/5b640f3b7f9d2afbb21d6608XMyVyL96.jpg"',
        },
        {
            name : '精卫',
            images : 'src="../resource/herodata-images/5b7e12e35e6027a70c8d8c2cE0F7mi2M.jpg"',
        },
        {
            name : '增长',
            images : 'src="../resource/herodata-images/5b4ec6638b74279a819e01c2QpOUOQYY.jpg"',
        },
        {
            name : '多闻',
            images : 'src="../resource/herodata-images/5b4425cb8b7427f2be2208908RdRmY21.jpg"',
        },
        {
            name : '白象',
            images : 'src="../resource/herodata-images/5b6956c1a7f252cf3502d42d181LYg6W.jpg"',
        },
        {
            name : '广目',
            images : 'src="../resource/herodata-images/5b586b6c143cfa9fa699de8aQyqX0o2F.jpg"',
        },
        {
            name : '持国',
            images : 'src="../resource/herodata-images/5b45720d6f0494054c573f4bqwdqw9Oj.jpg"',
        },
        {
            name : '06号',
            images : 'src="../resource/herodata-images/5b73f7798b7427263ba23362J2H9OxKl.jpg"',
        }
    ]

    var date1 = [
        {
            name : '狮妹',
            images : 'src="../resource/herodata-images/5b640f3b7f9d2afbb21d6608XMyVyL96.jpg"',
        },
        {
            name : '精卫',
            images : 'src="../resource/herodata-images/5b7e12e35e6027a70c8d8c2cE0F7mi2M.jpg"',
        },
        {
            name : '增长',
            images : 'src="../resource/herodata-images/5b4ec6638b74279a819e01c2QpOUOQYY.jpg"',
        },
        {
            name : '多闻',
            images : 'src="../resource/herodata-images/5b4425cb8b7427f2be2208908RdRmY21.jpg"',
        },
        {
            name : '白象',
            images : 'src="../resource/herodata-images/5b6956c1a7f252cf3502d42d181LYg6W.jpg"',
        },
        {
            name : '广目',
            images : 'src="../resource/herodata-images/5b586b6c143cfa9fa699de8aQyqX0o2F.jpg"',
        },
        {
            name : '持国',
            images : 'src="../resource/herodata-images/5b45720d6f0494054c573f4bqwdqw9Oj.jpg"',
        }
     ]
    var date2 = [
        {
            name : '白骨精',
            images : 'src="../resource/herodata-images/5aabbf2e02c9a11d0c3cd66frTlZFkTJ.jpg"',
        },
        {
            name : '钟馗',
            images : 'src="../resource/herodata-images/5aabb948ee4c0f27cc6350d6QmLBipLH.jpg"',
        },
        {
            name : '牛魔',
            images : 'src="../resource/herodata-images/5aabbf438b7427248c5d3e57vuGi8PRC.jpg"',
        },
        {
            name : '熊黑',
            images : 'src="../resource/herodata-images/5aabbf4946072b2487765600Ulfg7FDa.jpg"',
        },
        {
            name : '九头虫',
            images : 'src="../resource/herodata-images/5aabbf52a7f2522bdf62770ehKiMfglH.jpg"',
        },
        {
            name : '琰萝',
            images : 'src="../resource/herodata-images/5aabbf57aa49f19592e83712lJB5QKHm.jpg"',
        },
        {
            name : '白灵',
            images : 'src="../resource/herodata-images/5aabbf5efb758a45d5671c80zKX7ft2f.jpg"',
        },
        {
            name : '雷姆',
            images : 'src="../resource/herodata-images/5aabbf636f0494f917c87a74QZbNzSNg.jpg"',
        },
        {
            name : '鹿哩',
            images : 'src="../resource/herodata-images/5aabbf698b742723f930ea377szwSiDS.jpg"',
        },
        {
            name : '红孩儿',
            images : 'src="../resource/herodata-images/5aabbf6eaa49f1a68a7efb821zLDjXYH.jpg"',
        },

        {
            name : '铁扇',
            images : 'src="../resource/herodata-images/5ad95e28a7f252db2793c13bWz40PjsB.jpg"',
        },
        {
            name : '羊丽',
            images : 'src="../resource/herodata-images/5ad95e27a7f252ecfe236210A14gEM1M.jpg"',
        },
        {
            name : '灵感大王',
            images : 'src="../resource/herodata-images/5ad95e278b7427c7e4a60070Ye4ubPWr.jpg"',
        }
    ]

    var date3 = [
        {
            name : '晓音',
            images : 'src="../resource/herodata-images/5af19942143cfa9ecb9ec240kagFBqkt.jpg"',
        },
        {
            name : '金角',
            images : 'src="../resource/herodata-images/5b0283b2a7f252f93a79fa5eFc0Svqh2.jpg"',
        },
        {
            name : '银角',
            images : 'src="../resource/herodata-images/5b0283b25e6027136b95da6536whXK2G.jpg"',
        },
        {
            name : '狮妹',
            images : 'src="../resource/herodata-images/5b640f3b7f9d2afbb21d6608XMyVyL96.jpg"',
        },
        {
            name : '精卫',
            images : 'src="../resource/herodata-images/5b7e12e35e6027a70c8d8c2cE0F7mi2M.jpg"',
        }
    ]

    var date4 = [

        {
            name : '白骨精',
            images : 'src="../resource/herodata-images/5aabbf2e02c9a11d0c3cd66frTlZFkTJ.jpg"',
        },
        {
            name : '钟馗',
            images : 'src="../resource/herodata-images/5aabb948ee4c0f27cc6350d6QmLBipLH.jpg"',
        },
        {
            name : '牛魔',
            images : 'src="../resource/herodata-images/5aabbf438b7427248c5d3e57vuGi8PRC.jpg"',
        },
        {
            name : '熊黑',
            images : 'src="../resource/herodata-images/5aabbf4946072b2487765600Ulfg7FDa.jpg"',
        },
        {
            name : '九头虫',
            images : 'src="../resource/herodata-images/5aabbf52a7f2522bdf62770ehKiMfglH.jpg"',
        },
        {
            name : '金角',
            images : 'src="../resource/herodata-images/5b0283b2a7f252f93a79fa5eFc0Svqh2.jpg"',
        },
        {
            name : '银角',
            images : 'src="../resource/herodata-images/5b0283b25e6027136b95da6536whXK2G.jpg"',
        },
        {
            name : '哪吒',
            images : 'src="../resource/herodata-images/5ad95e286f04949d74b95f3dqeOjUI9N.jpg"',
        },
        {
            name : '文曲星',
            images : 'src="../resource/herodata-images/5b0283b3143cfa49c35e0db72i9vgAia.jpg"',
        },
        {
            name : '狮妹',
            images : 'src="../resource/herodata-images/5b640f3b7f9d2afbb21d6608XMyVyL96.jpg"',
        },
        {
            name : '精卫',
            images : 'src="../resource/herodata-images/5b7e12e35e6027a70c8d8c2cE0F7mi2M.jpg"',
        },
        {
            name : '增长',
            images : 'src="../resource/herodata-images/5b4ec6638b74279a819e01c2QpOUOQYY.jpg"',
        },
        {
            name : '多闻',
            images : 'src="../resource/herodata-images/5b4425cb8b7427f2be2208908RdRmY21.jpg"',
        },
        {
            name : '白象',
            images : 'src="../resource/herodata-images/5b6956c1a7f252cf3502d42d181LYg6W.jpg"',
        },
        {
            name : '广目',
            images : 'src="../resource/herodata-images/5b586b6c143cfa9fa699de8aQyqX0o2F.jpg"',
        },
        {
            name : '持国',
            images : 'src="../resource/herodata-images/5b45720d6f0494054c573f4bqwdqw9Oj.jpg"',
        },
        {
            name : '06号',
            images : 'src="../resource/herodata-images/5b73f7798b7427263ba23362J2H9OxKl.jpg"',
        }
    ]

    var date5 = [
        {
            name : '土地',
            images : 'src="../resource/herodata-images/5aabbf2846072b251472eefcVA14eRM7.jpg"',
        },

        {
            name : '九头虫',
            images : 'src="../resource/herodata-images/5aabbf52a7f2522bdf62770ehKiMfglH.jpg"',
        },
        {
            name : '琰萝',
            images : 'src="../resource/herodata-images/5aabbf57aa49f19592e83712lJB5QKHm.jpg"',
        },
        {
            name : '白灵',
            images : 'src="../resource/herodata-images/5aabbf5efb758a45d5671c80zKX7ft2f.jpg"',
        },
        {
            name : '雷姆',
            images : 'src="../resource/herodata-images/5aabbf636f0494f917c87a74QZbNzSNg.jpg"',
        },
        {
            name : '鹿哩',
            images : 'src="../resource/herodata-images/5aabbf698b742723f930ea377szwSiDS.jpg"',
        },
        {
            name : '红孩儿',
            images : 'src="../resource/herodata-images/5aabbf6eaa49f1a68a7efb821zLDjXYH.jpg"',
        }
    ]

    var date6 = [
        {
            name : '悟静',
            images : 'src="../resource/herodata-images/5aabbf9b8b742723f930ea52Ji2q89jF.jpg"',
        },
        {
            name : '常乐',
            images : 'src="../resource/herodata-images/5ad95e278b7427b86f20cd147DNuGVlp.jpg"',
        },
        {
            name : '文曲星',
            images : 'src="../resource/herodata-images/5b0283b3143cfa49c35e0db72i9vgAia.jpg"',
        },
        {
            name : '狮妹',
            images : 'src="../resource/herodata-images/5b640f3b7f9d2afbb21d6608XMyVyL96.jpg"',
        }
    ]

    var idx = 0;

    //英雄资料库导航背景边框默认为第一个span标签下面
    $(".hero-nav>span").eq(0).siblings('span').css('background','none');

    //英雄资料库默认为第一个所有英雄
    render(date0);


    $ ( ".hero-nav>span" ).click(function (  ) {
        //点击导航栏span标签,背景图片变在当前span标签下
        $(this).css('background','url(../resource/herodata-images/item_bg.png) left top no-repeat').siblings('span').css('background','none');

        //当前导航的span背景变为白色文字的图片
        $(this).children('img').eq(1).css('display','inline-block').siblings('img').css('display','none');
        $(this).siblings('span').children('.active').css('display','none');
        $(this).siblings('span').children('.origin').css('display','inline-block');


        //点击导航栏span标签,将下方div标签修改为对应下标的英雄资料库
        idx = $(this).index();
        // console.log ( idx );
        $(".hero-con").eq(idx).css('display','block').siblings('div .hero-con').css('display','none');

        if(idx == 1){
            render(date1);
        }else if(idx == 2){
            render(date2);
        }else if(idx == 3){
            render(date3);
        }else if(idx == 4){
            render(date4);
        }else if(idx == 5){
            render(date5);
        }else if(idx == 6){
            render(date6);
        };
    })

    function  render( date ) {
        $(".hero-con").eq(idx).html("");
        var text = "";
        //给hero-con添加英雄
        for(var i = 0; i<date.length; i++){
            text += "<span class=\"t-item\">\n" +
                "<span class=\"hero-img\">\n" +
                "<p class=\"hero-name\">"+date[i]['name']+"</p>\n" +
                "<img class=\"img\" "+date[i]['images']+" alt=\"\">\n" +
                "</span>\n" + "<span>\n" + "<a class=\"hero-btn\" href=\"javascript:void(0)\">英雄简介</a>\n" +
                "<a class=\"hero-btn\" href=\"javascript:void(0)\">英雄攻略</a>\n" +
                "</span>\n" + "</span>"
        }
        $(".hero-con").eq(idx).html(text);
    }
})


    $(function (  ) {

        var index = 0;
        $('.pre').eq(1).click(function (  ) {


            if(index<2){
                index++;
                $ ( "div.commend-video" ).eq(index).css('display','block').siblings('div.commend-video').css('display','none');
            }

        })

        $('.pre').eq(0).click(function (  ) {

            if(index>0){
                index--;
                $ ( "div.commend-video" ).eq(index).css('display','block').siblings('div.commend-video').css('display','none');
            }

        })

    })