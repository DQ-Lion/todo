TEMP['dataTran'] = function(air){
    var getJsonFromUrl = function(url,data,success,error,complete){
        var error = error||function(){};
        $.ajax({
            url:url,
            type:"get",
            dataType:"json",
            data:data,
            success:success,
            error:error,
            complete:complete
        });
    };
    
    var getJsonFromUrlDefault=function(data,success,error,complete){
        getJsonFromUrl(air.Options.api_url,data,success,error,complete);
    };
    
    
    return {
        getJson:getJsonFromUrlDefault,
        getJsonFromUrl:getJsonFromUrl,
    };
};