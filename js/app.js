(function(global){

    global.EVT = new EventEmitter2();

    $(document).ready(function(){
        EVT.emit("init");
    });

})(window);

