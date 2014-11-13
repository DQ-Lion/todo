TEMP['data'] = function(air){
    var data = null;
    var decodeData = function(_data){
        this.data = _data;
    };/*
    var getUserByTodoId = function(id,mode){
        var bgcolor = "#fff";
        if(this.data!=null){
            if(mode && (mode=="todo"||mode=="doing"||mode=="done")){
                for(var i in this.data[mode]){
                    if(this.data[mode][i]["id"]==id){
                        bgcolor = this.data[mode][i]["user_id"];
                        break;
                    }
                }
            }else{
                for(var j in this.data){
                    for(var i in this.data[j]){
                        if(this.data[j][i]["id"]==id){
                            bgcolor = this.data[j][i]["user_id"];
                            break;
                        }
                    }
                }
            }
        }
        return bgcolor;
    };*/
    var getInfoOfMe= function(mode){
        var id = this.data.user.me.id;
        return this.getInfoOfUser(id,mode);
    };
    var getInfoOfUser = function(id,mode){
        var bgcolor = "#fff";
        if(this.data!=null){
            for(var i in this.data.user.all){
                if(this.data.user.all[i]["id"]==id){
                    if(mode && mode == "text")
                        bgcolor = this.data.user.all[i]["textColor"];
                    else if(mode && mode == "name")
                        bgcolor = this.data.user.all[i]["name"];
                    else
                        bgcolor = this.data.user.all[i]["bgColor"];
                    break;
                }
            }
        }
        return bgcolor;
    };
    
    return {
        data:data,
        decodeData:decodeData,
        //getUserByTodoId:getUserByTodoId,
        getInfoOfMe:getInfoOfMe,
        getInfoOfUser:getInfoOfUser,
    };
};