## 综述

Crosser。具体使用欢迎联系 ： 上坡

## 初始化组件
		
    S.use('kg/crosser/0.0.1/index', function (S, Crosser) {

            new Crosser({

                url: './data.php',
                data: {
                    'name': 'shangpo'
                },
                success: function(){
                    alert('ok');
                }
            })

    })

    后端配置如下：

    <?php

    ?>
    <script>

    if('postMessage' in window) {
        window.top.postMessage("success", "*");
    }else {
        window.parent.name = 'success';
    }




    </script>

## API说明
