TEMP['Template'] = function(air){
    return {
        todoItem:'<div data-id="{ID}" data-user_id="{USER_ID}" style="background-color:{BGCOLOR};color:{TEXTCOLOR};" class="todo-item todo-item-{ID} {CLASS}">'+
                '<div class="todo-item-left"><div>{NAME}</div><span>{PROJECT}</span></div>'+
                '<div class="todo-item-right">{DAYS}</div>'+
                '<div class="todo-item-center"><div class="todo-item-content"><span>{CONTENT}</span></div></div>'+
            '</div>',
        pupopWindow:'<div class="fullScreen-mask popup-mask"><div class="popup">'+
                        '<div class="popup-title"><h3>{TITLE}<span class="popup-close close">&times;</span></h3></div>'+
                        '<div class="popup-content">{CONTENT}</div>'+
                        '<div class="popup-bottom"><span class="popup-close btn-cancel"><a href="#">{CANCEL}</a></span><span class="btn btn-ok">{OK}</span></div>'+
                    '</div></div>',
        newTodoPupop:'<div class="popup-newtodo">'+
                        '<textarea class="newtodo-content" placeholder="{DESCR}"></textarea>'+
                        '<div class="colorChoose">{bgcolor_choose_first}<input class="newtodo-bgcolor" type="color" value="{bgcolor_default}"/>{textcolor_choose_first}<input class="newtodo-textcolor" type="color" value="{textcolor_default}"/></div>'+
                        '<div class="project_days">{project_belongs}<input class="newtodo-project" type="text"/>{days_take}<input class="newtodo-days" type="text"/>{days}</div>'+
                        '<div class="preview">'+
                            '<p>{LIKE_THIS}:</p>'+
                            '<div class="preview-container"></div>'+
                        '</div>'+
                    '</div>'
    };
};