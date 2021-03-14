define([], function() {
    return {
        all: ! function() {
            const all = $('.all'); //全选按钮
            const inputs = $('.allselect input').not('.all') //除了全选按钮之外的input
                //1.点击全选按钮
            all.on('click', function() {
                inputs.prop('checked', $(this).prop('checked'));
            });
            //2.下面所有的复选框选中，全选对应的选择
            //除了全选，选中的长度等于复选框的长度，全选勾选。
            inputs.on('click', function() {
                if ($('input:checked').not('.all').size() === inputs.length) {
                    all.prop('checked', true);
                } else {
                    all.prop('checked', false);
                }
            });
        }(),
        menu: ! function() {
            const show = $('#show');
            const prov = $('#prov');
            const city = $('#city');
            const country = $('#country');
            const btnclick = $('#btnclick');

            // 1.禁用点击按钮，等到设置了省市区，再点击
            btnclick.prop('disabled', true);

            // 2.渲染省市区
            $.ajax({
                url: 'http://localhost/JS2008/Day%2029-Day%2031_jquery/city.json',
                dataType: 'json'
            }).done(function(data) {
                console.log(data); //数组对象。
                //渲染省份
                //给每一个追加的option添加索引，索引和数组值的索引匹配。
                $.each(data, function(index, value) {
                    prov.append(`<option index="${index}">${value.name}</option>`);
                });

                //定义一个对象，存储省市区索引
                let objindex = {
                    prov: '',
                    city: '',
                    country: ''
                };

                //省份改变，渲染城市
                prov.on('change', function() {
                    //获取选中的option下面的自定义的属性。
                    let provindex = $('#prov>option:selected').attr('index');
                    //将省份的索引存储到定义的对象中，方便使用。
                    if (objindex.prov !== provindex) {
                        objindex.prov = provindex
                    }
                    if (provindex) {
                        let cityname = data[provindex].city; //返回值是数组
                        //清除前面渲染的值。
                        city.find('option').first().nextAll().remove();
                        //渲染城市
                        $.each(cityname, function(index, value) {
                            city.append(`<option index="${index}">${value.name}</option>`);
                        });
                    } else {
                        //清除前面渲染的值。
                        city.find('option').first().nextAll().remove();
                        //清除前面渲染的值。
                        country.find('option').first().nextAll().remove();
                    }
                });
                //城市改变，渲染县区
                city.on('change', function() {
                    //获取选中城市的索引
                    let cityindex = $('#city>option:selected').attr('index');
                    //将城市的索引存储到定义的对象中，方便使用。
                    if (objindex.city !== cityindex) {
                        objindex.city = cityindex
                    }
                    if (cityindex) {
                        let countryname = data[objindex.prov].city[cityindex].districtAndCounty; //返回值是数组
                        //清除前面渲染的值。
                        country.find('option').first().nextAll().remove();
                        //渲染县区
                        $.each(countryname, function(index, value) {
                            country.append(`<option index="${index}">${value}</option>`);
                        });
                    } else {
                        //清除前面渲染的值。
                        country.find('option').first().nextAll().remove();
                    }
                });


                //让确定按钮可以点击
                country.on('change', function() { //将城市的索引存储到定义的对象中，方便使用。
                    //获取选中县区的索引
                    let countryindex = $('#country>option:selected').attr('index');
                    if (objindex.country !== countryindex) {
                        objindex.country = countryindex
                    }
                    if (objindex.prov && objindex.city && objindex.country) {
                        btnclick.prop('disabled', false);
                    }
                });

                //点击确定按钮，将对应的数据填充到show文本框中。
                btnclick.on('click', function() {
                    show.val(data[objindex.prov].name + '-' + data[objindex.prov].city[objindex.city].name + '-' + data[objindex.prov].city[objindex.city].districtAndCounty[objindex.country]);
                });
            });

        }()
    }
});