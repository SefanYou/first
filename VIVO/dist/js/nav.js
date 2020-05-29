define(["jquery"], function($) {
    function slide() {
        var lis = $(".slideTitle").find("li");
        var wrap = $(".wrap");
        tab(lis, wrap);
    }

    function tab(node, targetNode) {
        node.mouseenter(function() {
            targetNode.css("display", "block")
        }).mouseleave(function() {
            targetNode.css("display", "none")
        })
    }

    function download() {
        //数据加载
        $.ajax({
            type: "get",
            url: "./data/slide.json",
            success: function(arr) {
                // const charge = arr.slideData.charge;
                // const component = arr.slideData.component;
                // const music = arr.slideData.music;
                // const hardWare = arr.slideData.hardWare;
                // const photo = arr.slideData.photo;
                // const life = arr.slideData.life;
                const phoneContent = arr.slideData.phone.phoneContent;
                console.log(phoneContent)
                    //phone图
                for (var i = 0; i < phoneContent.length; i++) {
                    console.log(phoneContent[i])
                    if (phoneContent[i].cornerImg) {
                        $(` <li>
                        <a href="">
                        <img class="itemImg" src=${phoneContent[i].skuImg} alt="">
                        <span>${phoneContent[i].skuName}</span>
                        </a>
                        <img class="itemCornerImg" src=${phoneContent[i].cornerImg} alt="">
                    </li>`).appendTo($(".wrapContent ul"));
                    } else {
                        $(` <li>
                        <a href="">
                        <img class="itemImg" src=${phoneContent[i].skuImg} alt="">
                        <span>${phoneContent[i].skuName}</span>
                        </a>
                        <img class="itemCornerImg" src="" alt="">
                    </li>`).appendTo($(".wrapContent ul"));
                    }

                }
            },
            error: function(err) {
                console.log(err);
            }

        })

    }

    function slideHead() {

    }

    function slideContent() {

    }

    return {
        // slide: slide,
        download: download
    }
})