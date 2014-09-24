## crosser

* 版本：0.0.1
* 教程：[http://gallery.kissyui.com/crosser/0.0.1/guide/index.html](http://gallery.kissyui.com/crosser/0.0.1/guide/index.html)
* demo：[http://gallery.kissyui.com/crosser/0.0.1/demo/index.html](http://gallery.kissyui.com/crosser/0.0.1/demo/index.html)

## changelog

### V0.0.1

<<<<<<< HEAD
    [!]

=======
    [!] 初始版本，利用window.name和postMessage实现

初始demo，在后端配置代码如下：


    <script>
    if('postMessage' in window) {
        window.top.postMessage("success", "*");
    }else {
        window.parent.name = 'success';
    }
    </script>


前端调用方式：


    S.use('kg/crosser/0.0.1/index', function (S, Crosser) {
        document.getElementById('btn').onclick = function(){
            new Crosser({
                //'http://b.shangpo.com/mine/practice/cross/data.php',
                url: './data.php',
                data: {
                    'name': 'shangpo'
                },
                success: function(){
                    alert('ok');
                }
            })

        };
    })
>>>>>>> d9d522a2d0ab62c31a46f93d13221e08ac786b4c

