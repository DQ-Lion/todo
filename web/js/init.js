TEMP['init'] = function(air){
    //======================================== init data
    var init = function(){
        // init tips
        $(".nav-New .tip").html(air.Lang.nav_tip_new);
        $(".nav-My .tip").html(air.Lang.nav_tip_my);
        $(".nav-Setting .tip").html(air.Lang.nav_tip_setting);
        // buttons event
        $(".nav-New").click(function(){addTodo();});
        // getting data & rander UI
        var waintig = air.require("UI").waiting(air.Lang.reading_file);
        air.require("dataTran").getJsonFromUrl("../test-data/data.json",{type:"all"},function(data){
            if(data.status){
                waintig.remove();
                air.require("data").decodeData(data.data);
                rander();
            }else{
                waintig.find(".loading").remove();
                waintig.find("h4").html(air.Lang.UnknownError);
            }
        },function(e,t){
            waintig.find(".loading").remove();
            waintig.find("h4").html(t);
        });
    };
    //========================================= init UI
    var rander = function(){
        var index = ["todo","doing","done"];
        for(var i in index){
            var contain = $("#main .list-"+index[i]+" .todos");
            var data = air.require("data").data.todos[index[i]];
            for(var j in data){
                var l = air.require("UI").getNewTodoItem(data[j],index[i]);
                contain.append(l);
            }
        }
    };
    //========================================= init Event
    var addTodo = function(){
        var i = air.require("UI").newPopup({
            title:air.Lang.new_todo,
            content:air.require("UI").substitute(air.require("Template").newTodoPupop,{
                bgcolor_default:air.require("data").getInfoOfMe("bg") || "#dddddd",
                textcolor_default:air.require("data").getInfoOfMe("text") || "#000000",
                DESCR:air.Lang.DESCR,
                LIKE_THIS:air.Lang.LIKE_THIS,
                bgcolor_choose_first:air.Lang.bgcolor_choose_first,
                textcolor_choose_first:air.Lang.textcolor_choose_first,
                project_belongs:air.Lang.project_belongs,
                days_take:air.Lang.days_take,
                days:air.Lang.days
            })
        },function(){
            // 点击确定按钮
            doAddTodo({
                project:i.find(".newtodo-project").val(),
                days:i.find(".newtodo-days").val(),
                content:i.find(".newtodo-content").val(),
                textcolor:i.find(".newtodo-textcolor").val(),
                bgcolor:i.find(".newtodo-bgcolor").val(),
            });
        });
        i.find("textarea,input").keyup(function(){
            i.find(".preview div").html(air.require("UI").getNewTodoItem({
                id:"-",
                user_id:"-",
                name:"MY",
                project:i.find(".newtodo-project").val(),
                days:i.find(".newtodo-days").val(),
                content:i.find(".newtodo-content").val(),
                textcolor:i.find(".newtodo-textcolor").val(),
                bgcolor:i.find(".newtodo-bgcolor").val(),
            },"todo"));
        }).keyup();
    };
    var doAddTodo = function(item){
        var waintig = air.require("UI").waiting(air.Lang.submitting);
        air.require("dataTran").getJsonFromUrl("../test-data/newtodo.json",item,function(data){
            if(data.status){
                waintig.remove();
                // 注入到新的todo里面
                var new_todo = air.require("UI").getNewTodoItem(data.todo,"todo");
                $("#main .list-todo .todos").prepend(new_todo);
            }else{
                waintig.find(".loading").remove();
                waintig.find("h4").html(air.Lang.UnknownError);
            }
        },function(e,t){
            waintig.find(".loading").remove();
            waintig.find("h4").html(t);
        });
    };
    
    return {
        init:init
    };
};