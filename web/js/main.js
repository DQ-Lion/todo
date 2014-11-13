$(function(){
    // 主程序类
    var Air = function(config){
        window.TEMP = {};
        var _t=this;
        _t.Options={
            debug:!0,
            Lang:"ZH_CN",
            api_url:"",
        };
        $.extend(_t.Options,config);
        
        $(window).resize(function(){
            _t.windowResize();
        }).resize();
        //document.onselectstart=function(){return false;};
        window.document.ondragstart=function(){window.event.returnValue = false;};
		//document.oncontextmenu=rf;
        _t.MOUDLES={};
        _t.Lang = _t.require("Lang-"+_t.Options.Lang);
        _t.require("init").init();
    };
    // 主程序动态方法
    Air.prototype={
        getMoudle:function(moudle){
            var _t=this;
            $.ajax({
                url:"./js/"+moudle+".js",
                type:"get",
                dataType:"script",
                async:false,
                success:function(script){
                    _t.MOUDLES[moudle]=TEMP[moudle](_t,Air);
                },
                error:function(e,t){
                    console.log(e);
                    Air.LOG("Air.getMoudle",t);
                }
            });
        },
        require:function(moudle){
            if(this.MOUDLES[moudle]){
                return this.MOUDLES[moudle];
            }else{
                this.getMoudle(moudle);
                return this.MOUDLES[moudle];
            }
        },
        windowResizers:{},
        windowResize:function(){
            for(var i in this.windowResizers){
                i();
            }
        },
        listenWindowResize:function(id,func){
            windowResizers[id] = func();
        },
        removeListenWindowResize:function(id){
            if(windowResizers[id])
                delete windowResizers[id];
        }
    };
    // 主程序静态方法
    Air.LOG=function(tag,msg){
        console.log(tag+"===>"+msg);
    };
    var air = new Air();
});