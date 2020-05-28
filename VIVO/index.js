//遵从AMD规范
define(["jquery", "jquery-cookie"], function($) {
    function download() {
        //数据加载
        $.ajax({
            type: "get",
            url: "./data/data.json",
            success: function(arr) {
                console.log(arr.data);

                const banner = arr.data.banner;
                const top = arr.data.top;
                const vBuy = arr.data.vBuy;
                const hotSale = arr.data.hotSale;
                const qulityPhone = arr.data.qulityPhone;
                const component = arr.data.component;

                //banner图
                for (var i = 0; i < banner.length; i++) {
                    $(` <img src=${banner[i].img} alt="">`).appendTo($(".hCon"));
                }
                //banner下方的图
                for (var i = 0; i < top.length; i++) {
                    $(`<li>
                    <a href="" target="_blank">
                    <img src=${top[i].img} alt="">
                    </a>
                </li>`).appendTo($(".cont1"));
                }
                //v抢购的图
                for (var i = 0; i < vBuy.length; i++) {
                    $(`<li>
                    <p>
                        <a href="">
                        <img src=${vBuy[i].skuImg} alt="">
                        <img src=${vBuy[i].cornerImg} alt="">
                        </a>
                    </p>
                    <p>${vBuy[i].skuName}</p>
                    <p>${vBuy[i].promotion}</p>
                    <p><span><i>¥</i>${vBuy[i].actPrice}</span><span class="price"><i>¥</i>${vBuy[i].marketPrice}</span></p>
                </li>`).appendTo($(".cont2 .cont2List"));
                    $(".cont2 .cont2List").find("li").eq(i).css({
                        left: i * 300
                    })
                }
                //热卖区的图
                for (var i = 0; i < hotSale.length; i++) {
                    $(`<li>
                    <p>
                        <a href="">
                            <img src=${hotSale[i].skuImg} alt="">
                        </a>
                    </p>
                    <p>${hotSale[i].skuName}</p>
                    <p>${hotSale[i].description}</p>
                    <p><span><i>¥</i>${hotSale[i].actPrice}</span></p>
                </li>`).appendTo($(".cont3List"));
                }
                //精品手机的图
                $(`<li>
                <p>
                    <a href="">
                        <img src=${qulityPhone[0].skuImg} alt="">
                    </a>
                </p>
                <p></p>
                <p></p>
                <p><span><i></i></span><span class="price"><i></i></span></p>
            </li>`).appendTo($(".cont4List"));
                for (var i = 1; i < qulityPhone.length; i++) {
                    $(`<li>
                    <p>
                        <a href="">
                            <img src=${qulityPhone[i].skuImg} alt="">
                        </a>
                    </p>
                    <p>${qulityPhone[i].skuName}</p>
                     <p>${qulityPhone[i].description}</p>
                          <p><span><i>¥</i>${qulityPhone[i].actPrice}</span></p>
                      </li>`).appendTo($(".cont4List"));
                }
                //精品配件的图
                for (var i = 0; i < component.length; i++) {
                    $(`<li>
                    <p>
                            <a href="">
                                <img src=${component[i].skuImg} alt="">
                            </a>
                        </p>
                    <p>${component[i].skuName}</p>
                     <p>${component[i].description}</p>
                          <p><span><i>¥</i>${component[i].actPrice}</span></p>
                      </li>`).appendTo($(".cont5List"));
                }

            },
            error: function(err) {
                console.log(err);
            }
        })
    }

    return {
        download: download,
    }
})