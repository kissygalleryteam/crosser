## 综述

Crosser。

## 初始化组件
		
    S.use('kg/crosser/0.0.1/index', function (S, Crosser) {
<<<<<<< HEAD
         var crosser = new Crosser();
    })

=======

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
>>>>>>> 458c71bf608b3cf49277199f1529e2ef1c64ca82
## API说明
