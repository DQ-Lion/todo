TEMP['UI'] = function(air){
    //模版替换函数
    var PrivateSubstitute = function (str,o,regexp){
        return str.replace(regexp || /\\?\{([^{}]+)\}/g, function (match, name) {
            return (o[name] === undefined) ? '' : o[name];
        });
    };
    //======================================== tools
    var setLoading = function(tar){
        var l = $('<div class="loading"></div>');
        tar.append(l);
        return l;
    };
    var waiting = function(txt){
        var l = $('<div class="fullScreen-mask"><div class="notify-label"><span class="close">&times;</span><h4>'+txt+'</h4><div class="loading"></div></div></div>');
        $("body").append(l);
        l.find(".close").click(function(){l.remove();});
        return l;
    };
    
    var getNewTodoItem = function(item,type){
        return $(PrivateSubstitute(air.require("Template").todoItem,{
            ID:item.id,
            USER_ID:item.user_id,
            CLASS:type,
            NAME:item.name || air.require("data").getInfoOfUser(item.user_id,"name"),
            PROJECT:item.project,
            DAYS:item.days,
            CONTENT:item.content,
            TEXTCOLOR:item.textcolor || air.require("data").getInfoOfUser(item.user_id,"text"),
            BGCOLOR:item.bgcolor || air.require("data").getInfoOfUser(item.user_id,"bg"),
        }));
    };
    var newPopup = function(options,func,func2){
        options = $.extend({
            title:"",
            content:""
        },options);
        var t = $(PrivateSubstitute(air.require("Template").pupopWindow,{
            TITLE:options.title,
            CONTENT:options.content,
            CANCEL:air.Lang.CANCEL,
            OK:air.Lang.OK
        }));
        t.find(".popup-close").click(function(){
            t.find(".popup").addClass("off");
            setTimeout(function(){
                t.remove();
                func2 && func2();
            },500);
        });
        t.find(".btn-ok").click(function(){
            func && func();
            t.remove();
        });
        $("body").append(t);
        setTimeout(function(){
            t.find(".popup").addClass("on");
        },0);// 技巧：等待内容更新完毕后执行
        return t;
    };
    
    return {
        setLoading:setLoading,
        waiting:waiting,
        substitute:PrivateSubstitute,
        getNewTodoItem:getNewTodoItem,
        newPopup:newPopup
    };
};