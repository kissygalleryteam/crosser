/**
 * @fileoverview
 * @author
 * @module crosser
 **/
KISSY.add(function (S, Node,Base) {
    var EMPTY = '';
    var $ = Node.all;
    /**
     *
     * @class Crosser
     * @constructor
     * @extends Base
     */
    function Crosser(comConfig) {
        var self = this;
        this.param = {
            url: comConfig.url,
            data: comConfig.data,

            success: comConfig.success,
            complate: comConfig.complate,
            error: comConfig.error
        }

        // this._curName = '';
        this._orginName = window.name;
        this._domain = location.host.match(/\.(.*\.\w+)/)[1];
        this._dataForm = null;
        this._msgIframe = null;
        this._isPostMessage = null;

        this.prepare();
        this.send();




        //调用父类构造函数
        Crosser.superclass.constructor.call(self, comConfig);
    }

    Crosser.prototype.prepare = function(){
        var self = this;
        var isPostMessage = self._isPostMessage = 'postMessage' in window;
        var msgIframe;
        //防止多次插入中介form
        if(document.getElementById('crossForm') != null) {
            self._dataForm = document.getElementById('crossForm');
            self._msgIframe = document.getElementById('crossIfr');
            document.domain = self._domain;
        }else {

            var body = document.getElementsByTagName('body')[0]
            var dataForm = this._dataForm  = document.createElement('form');
            //ie7 设置name失效，在创建节点的时候加入name属性
            msgIframe = self._msgIframe =  document.createElement(isPostMessage?'iframe':'<iframe name="crossIfr">');



            dataForm.style.display = 'none';
            dataForm.id = 'crossForm';
            dataForm.action = this.param.url;
            dataForm.target = 'crossIfr';
            dataForm.method = 'post';
            body.appendChild(dataForm);

            msgIframe.style.display = 'none';
            msgIframe.name = 'crossIfr';
            msgIframe.src = '';
            msgIframe.id = 'crossIfr';
            body.appendChild(msgIframe);

            document.domain = self._domain;

            //通过postMessage绑定事件接受消息返回
            if(isPostMessage) {
                if(window.addEventListener) {
                    window.addEventListener('message',function(e){
                        self.param[e['data']]();
                    },false);
                }else {
                    window.attachEvent('onmessage', function(e){
                        self.param[e['data']]();
                    });
                }
            }

        }
    }

    Crosser.prototype.send = function(){
        var self = this;
        var data = self.param.data;
        var html = '';
        var dataForm = self._dataForm;

        //利用form表单发送跨域请求
        for(var item in data) {
            html += '<input type="hidden" name="'+item+'" value="'+data[item]+'" />';
        }
        html += '<input type="hidden" name="domain" value="'+self._domain+'" />'
        dataForm.innerHTML = html;


        //ie6、7兼容
        if(!self._isPostMessage) {
            self.ieReceive();
        }

        dataForm.submit();
    }
    Crosser.prototype.ieReceive = function(){
        var self = this;
        listenName();

        function listenName(){
            var curName = '';
            setTimeout(function(){
                curName = window.name;
                if(curName != self._originName) {
                    self.param[curName]();
                    window.name = self._originName;

                    //避免轮询造成内存过渡消耗
                    return;
                }else {
                    setTimeout(arguments.callee,100)
                }
            },100);
        }

    }



    S.extend(Crosser, Base, /** @lends Crosser.prototype*/{

    }, {ATTRS : /** @lends Crosser*/{

    }});
    return Crosser;
}, {requires:['node', 'base']});



