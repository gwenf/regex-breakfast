var regexMatcher = (function(){

    function getChallenges(){
        return $.getJSON( 'js/challenges.json', function( data ) {});
    }

    function checkRegexMatched(stringToMatch, userInput){

        var userInputMatch = new RegExp('^' + userInput + '$');
        // var name = $('aside .highlighted-string').text();
        var id = $('aside .highlighted-string').attr('id').split('-')[1];

        if (stringToMatch.match(userInputMatch)){
            var newID = parseInt(id) + 1;

            getChallenges()
                .then(function(data){
                    EVT.emit("update-challenge", newID, data);
                })
        }
    }

    function init(){
        $('#regex-main-input').on('keyup',function(e){

            var stringToMatch = $('#string-to-match').text()
            var userInput = e.target.value;

            var isValid = true;
            try {
                new RegExp(userInput);
            } catch(e) {
                isValid = false;
            }

            if (isValid){
                var re = new RegExp(userInput);
                var highlightedStr = stringToMatch.replace(re, function(val){
                    return '<span class="highlighted-string">' + val + '</span>';
                });

                $('#string-to-match').html(highlightedStr);

                checkRegexMatched(stringToMatch, userInput);
            }
        });
    }

    EVT.on("init", init);

    return {};

    // return {init: init}//so you can call regexMatcher.init()

})();
