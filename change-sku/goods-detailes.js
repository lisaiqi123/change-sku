/**
 * ------------------------------------------------sku-------------------------------------------------------
 */
//创建sku面板
var skuFn = {
    "on_sku": [], //上架组合
    "off_sku": [], //下架组合
    "first_sku": [], //第一个上架组合高亮
    "sku_off_id_arr": [], //每个属性下架id组合
    "sku_off_id_arr2": [], //第一行下架ID
    "sku_on_id_arr": [], //每个属性上架id组合
    "sku_on_id_arr2": [], //第一行上架ID
    "sku_on_id_arr3": [], //第一行上架ID
    "click_sku": [], //点击组合
    "skuProper": [
        { "id": 3862, "name": "\u6750\u8d28", "children": [{ "id": 1, "name": "\u5408\u91d1q" }, { "id": 2, "name": "\u94dcw" }], "field_values": [{ "id": 1, "name": "\u5408\u91d1q" }, { "id": 2, "name": "\u94dcw" }, { "id": 578, "name": "\u9ed1\u827212" }, { "id": 579, "name": "\u9ed1\u827212" }, { "id": 580, "name": "\u9ed1\u8272" }, { "id": 581, "name": "\u767d\u8272" }, { "id": 586, "name": "qqq" }, { "id": 588, "name": "qqqq" }, { "id": 589, "name": "22" }] },
        { "id": 3864, "name": "\u673a\u8eab", "children": [{ "id": 1, "name": "\u5408\u91d1q" }, { "id": 2, "name": "\u94dcw" }, { "id": 3, "name": "\u94dcw" }], "field_values": [{ "id": 1, "name": "\u5408\u91d1q" }, { "id": 2, "name": "\u94dcw" }, { "id": 578, "name": "\u9ed1\u827212" }, { "id": 579, "name": "\u9ed1\u827212" }, { "id": 580, "name": "\u9ed1\u8272" }, { "id": 581, "name": "\u767d\u8272" }, { "id": 586, "name": "qqq" }, { "id": 588, "name": "qqqq" }, { "id": 589, "name": "22" }] },
        { "id": 3863, "name": "\u989c\u8272", "children": [{ "id": 1, "name": "\u7ea2\u82721" }, { "id": 2, "name": "\u7eff\u8272fuck" }, { "id": 3, "name": "\u94f6\u82723" }], "field_values": [{ "id": 3, "name": "\u7ea2\u82721" }, { "id": 4, "name": "\u7eff\u8272fuck" }, { "id": 181, "name": "\u94f6\u82723" }, { "id": 294, "name": "\u9ed1\u8272" }] }
    ], //属性及属性值
    skuid: {
        "1,1,1": { "id": 2284, "name": "\u6d4b\u8bd5\u4e13\u7528 \u4e0d\u53d1\u8d271", "goods_id": 2361, "goods_number": 40, "is_on_sale": 1 },
        "1,1,2": { "id": 4872, "name": "\u6d4b\u8bd5\u4e13\u7528 \u4e0d\u53d1\u8d272", "goods_id": 2361, "goods_number": 0, "is_on_sale": 0 },
        "1,1,3": { "id": 4874, "name": "\u6d4b\u8bd5\u4e13\u7528 \u4e0d\u53d1\u8d275", "goods_id": 2361, "goods_number": 0, "is_on_sale": 0 },
        "1,2,1": { "id": 2286, "name": "\u6d4b\u8bd5\u4e13\u7528 \u4e0d\u53d1\u8d273", "goods_id": 2361, "goods_number": 37, "is_on_sale": 0 },
        "1,2,2": { "id": 2287, "name": "\u6d4b\u8bd5\u4e13\u7528 \u4e0d\u53d1\u8d274", "goods_id": 2361, "goods_number": 43, "is_on_sale": 0 },
        "1,2,3": { "id": 4875, "name": "\u6d4b\u8bd5\u4e13\u7528 \u4e0d\u53d1\u8d276", "goods_id": 2361, "goods_number": 0, "is_on_sale": 0 },
        "1,3,1": { "id": 2286, "name": "\u6d4b\u8bd5\u4e13\u7528 \u4e0d\u53d1\u8d273", "goods_id": 2361, "goods_number": 37, "is_on_sale": 0 },
        "1,3,2": { "id": 2287, "name": "\u6d4b\u8bd5\u4e13\u7528 \u4e0d\u53d1\u8d274", "goods_id": 2361, "goods_number": 43, "is_on_sale": 0 },
        "1,3,3": { "id": 4875, "name": "\u6d4b\u8bd5\u4e13\u7528 \u4e0d\u53d1\u8d276", "goods_id": 2361, "goods_number": 0, "is_on_sale": 0 },
        "2,1,1": { "id": 2284, "name": "\u6d4b\u8bd5\u4e13\u7528 \u4e0d\u53d1\u8d271", "goods_id": 2361, "goods_number": 40, "is_on_sale": 1 },
        "2,1,2": { "id": 4872, "name": "\u6d4b\u8bd5\u4e13\u7528 \u4e0d\u53d1\u8d272", "goods_id": 2361, "goods_number": 0, "is_on_sale": 0 },
        "2,1,3": { "id": 4874, "name": "\u6d4b\u8bd5\u4e13\u7528 \u4e0d\u53d1\u8d275", "goods_id": 2361, "goods_number": 0, "is_on_sale": 0 },
        "2,2,1": { "id": 2286, "name": "\u6d4b\u8bd5\u4e13\u7528 \u4e0d\u53d1\u8d273", "goods_id": 2361, "goods_number": 37, "is_on_sale": 0 },
        "2,2,2": { "id": 2287, "name": "\u6d4b\u8bd5\u4e13\u7528 \u4e0d\u53d1\u8d274", "goods_id": 2361, "goods_number": 43, "is_on_sale": 1 },
        "2,2,3": { "id": 4875, "name": "\u6d4b\u8bd5\u4e13\u7528 \u4e0d\u53d1\u8d276", "goods_id": 2361, "goods_number": 0, "is_on_sale": 0 },
        "2,3,1": { "id": 2286, "name": "\u6d4b\u8bd5\u4e13\u7528 \u4e0d\u53d1\u8d273", "goods_id": 2361, "goods_number": 37, "is_on_sale": 1 },
        "2,3,2": { "id": 2287, "name": "\u6d4b\u8bd5\u4e13\u7528 \u4e0d\u53d1\u8d274", "goods_id": 2361, "goods_number": 43, "is_on_sale": 1 },
        "2,3,3": { "id": 4875, "name": "\u6d4b\u8bd5\u4e13\u7528 \u4e0d\u53d1\u8d276", "goods_id": 2361, "goods_number": 0, "is_on_sale": 1 },
    }, //配套组合
    createSku: function() {
        var skuHtml = '';
        skuFn.skuProper.map(function(data, index) {
            var firstKey = skuFn.first_sku[index];
            skuHtml += '<div class="item-sku fl-row-grid" data-id="' + data.id + '">';
            skuHtml += '<span class="item-title">' + data.name + '</span>' +
                '<div class="sku-items fl-row-grid">';
            data.children.map(function(dataInner, index) {
                if (firstKey == dataInner.id) {
                    skuHtml += ' <a href="javascript:;" class="external active" data-id="' + dataInner.id + '">' + dataInner.name + '</a>'
                } else {
                    skuHtml += ' <a href="javascript:;" class="external" data-id="' + dataInner.id + '">' + dataInner.name + '</a>'
                }

            })
            skuHtml += '</div></div>';
            // console.log(skuFn.sku_id_arr)
        })
        $("#skuPlan").html(skuHtml);
    },
    sliceSku: function() {
        // console.log(skuFn.skuid);
        //取上架/下架sku组合
        $.each(skuFn.skuid, function(key, val) {
            if (val.is_on_sale == 1) {
                skuFn.on_sku[key] = val;
                skuFn.sku_on_id_arr.push(key.split(","))
            } else {
                skuFn.off_sku[key] = val;
                skuFn.sku_off_id_arr.push(key.split(","))
            }
        });

        console.log(skuFn.sku_on_id_arr)
        console.log(skuFn.sku_off_id_arr)
    },
    comSku: function() {
        //根据高亮组合顺序去除一个值，判断是否在上架json中，例如[null,1,1],[1,null,1],[1,1,null]是否在上架的组合中
        skuFn.first_sku.map(function(el, ind) {
            skuFn.first_sku[ind] = null;
            skuFn.sku_on_id_arr.map(function(el, ind) {
                var a = 0;
                // console.log(skuFn.first_sku, el)
                el.map(function(id, ind) {
                    // console.log(skuFn.first_sku[ind], id)
                    if (skuFn.first_sku[ind] == id) {
                        a++;
                    }
                })
                if (a == el.length - 1) {
                    skuFn.sku_on_id_arr3.push(el)
                    console.log(el)
                }
            });
            skuFn.first_sku = skuFn.click_sku.slice();
        });

        skuFn.change(skuFn.sku_off_id_arr, true);
        skuFn.change(skuFn.sku_on_id_arr3, false);

    },
    oneSku: function() {
        //根据高亮组合顺序去除一个值，判断是否在上架json中，例如[null,1,1],[1,null,1],[1,1,null]是否在上架的组合中
        console.log(skuFn.first_sku)
        skuFn.sku_on_id_arr.map(function(el, ind) {
            var a = 0;
            console.log(skuFn.first_sku, el)
            el.map(function(id, ind) {
                // console.log(skuFn.first_sku[ind], id)
                if (skuFn.first_sku[ind] == id) {
                    a++;
                }
            })
            if (a > 0) {
                skuFn.sku_on_id_arr2.push(el)
                console.log(el)
            }
        });

        skuFn.change(skuFn.sku_off_id_arr, true);
        skuFn.change(skuFn.sku_on_id_arr2, false);

    },
    change: function(arr, bol) {
        arr.map(function(el, ind) {
            var arrEl = el;
            // debugger
            $('.item-sku').each(function(ind, item) {
                $(item).find('.external').each(function(index, item) {
                    if (arrEl[ind] == $(item).attr('data-id')) {
                        if (bol) {
                            $(item).addClass('gray');
                        } else {
                            $(item).removeClass('gray');
                        }
                        // $(item).prop('disabled', bol);
                    }
                })
            })
        });
    },
    firstSku: function() {
        //取第一个上架的组合
        var count = -1;
        for (var key in skuFn.on_sku) {
            count++;
            if (count == 0) {
                var keyArr = key.split(",");
                skuFn.first_sku = keyArr;
            }
        };
        skuFn.click_sku = skuFn.first_sku.slice();
    },
    changeSku: function() {
        skuFn.on_sku = []; //上架组合
        skuFn.off_sku = []; //下架组合
        skuFn.first_sku = []; //第一个上架组合高亮
        skuFn.sku_off_id_arr = []; //每个属性下架id组合
        skuFn.sku_off_id_arr2 = []; //第一行下架ID
        skuFn.sku_on_id_arr = []; //每个属性上架id组合
        skuFn.sku_on_id_arr2 = []; //第一行上架ID
        skuFn.sku_on_id_arr3 = []; //第一行上架ID
        skuFn.click_sku = []; //点击组合

        var _th = $(this);
        _th.addClass("active").siblings().removeClass("active");
        $.each($(".sku-items"), function(key, val) {
            skuFn.click_sku.push($(this).find("a.active").attr("data-id"));
        });

        skuFn.sliceSku();
        skuFn.first_sku = skuFn.click_sku.slice();
        skuFn.createSku();
        skuFn.comSku();
    },
    changeSkuOther: function() {
        skuFn.on_sku = []; //上架组合
        skuFn.off_sku = []; //下架组合
        skuFn.first_sku = []; //第一个上架组合高亮
        skuFn.sku_off_id_arr = []; //每个属性下架id组合
        skuFn.sku_off_id_arr2 = []; //第一行下架ID
        skuFn.sku_on_id_arr = []; //每个属性上架id组合
        skuFn.sku_on_id_arr2 = []; //第一行上架ID
        skuFn.sku_on_id_arr3 = []; //第一行上架ID
        skuFn.click_sku = []; //点击组合

        var _th = $(this);

        _th.addClass("active").siblings().removeClass("active");
        $.each($(".sku-items"), function(key, val) {
            if ($(this).parent().attr("data-id") == _th.parents(".item-sku").attr("data-id")) {
                skuFn.click_sku.push(_th.attr("data-id"));
            } else {
                skuFn.click_sku.push(null);
            }
        });
        $.toast("没有此组合");
        skuFn.sliceSku();
        skuFn.first_sku = skuFn.click_sku.slice();
        skuFn.createSku();
        skuFn.oneSku();
    }
};
skuFn.sliceSku(); //区分上下架
skuFn.firstSku(); //进来默认某组sku组合高亮
skuFn.createSku(); //渲染sku模板
skuFn.comSku(); //给sku模板虚线灰，实线灰
$(document).on("click", ".sku-items a:not(.active,.gray)", skuFn.changeSku);
$(document).on("click", ".sku-items a.gray", skuFn.changeSkuOther);