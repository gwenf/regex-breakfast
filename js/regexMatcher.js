var regexMatcher = (function(){

    function updateChallenge(evt) {
        evt.preventDefault();

        // change current menu item
    }

    function checkRegexMatched(){
        evt.preventDefault();

        //does challenge need to be updated, if so emit an event
        EVT.emit("person-selected",ID);
    }

    function init() {
        $('#regex-main-input').on('keyup',function(e){
            var str = $('#string-to-match').text()
            var userInput = e.target.value;
            console.log(userInput)

            var isValid = true;
            try {
                new RegExp(userInput);
            } catch(e) {
                isValid = false;
            }

            if (isValid){
                var re = new RegExp(userInput);
                var highlightedStr = str.replace(re, function(val){
                    return '<span class="highlighted-string">' + val + '</span>';
                });

                $('#string-to-match').html(highlightedStr);
            }
        });
    }

    EVT.on("init",init);
    EVT.on("update-challenge",updateChallenge);

    return {};

    // return {init: init}//so you can call regexMatcher.init()

})();
