var regexMatcher = (function(){

    function updateChallenge(id, challenges){
        // if ($('span.highlighted-string').attr('id')){

        // }
        var challenge = customFilter(challenges, id);
        debugger;
        $('#string-to-match').html('');
    }

    function customFilter(object, id){
        if(object.hasOwnProperty('id') && object['id']===id)
            return object;

        for(var i=0;i<Object.keys(object).length;i++){
            if(typeof object[Object.keys(object)[i]]=='object'){
                o=customFilter(object[Object.keys(object)[i]]);
                if(o!=null)
                    return o;
            }
        }
        return null;
    }

    function init(){

    }

    EVT.on("init", init);
    EVT.on("update-challenge", updateChallenge);

    return {};

    // return {init: init}//so you can call regexMatcher.init()

})();
