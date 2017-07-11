var sideNav = (function(){

    function getChallenges(){
        return $.getJSON( "js/challenges.json", function( data ) {});
    }

    function updateChallenge(id, challenges){
        $('aside .highlighted-string').removeClass('highlighted-string');
        $('#challenge-'+id).addClass('highlighted-string')
    }

    function init(){
        getChallenges()
            .then(function(data){
                var menuItems = data.order;
                var challenges = data.challenges;
                debugger;
                menuItems.map(function(item){
                    $('#main-side-nav').append('<p id="'+item+'-nav" class="large-font">' + item + '</p><ul class="normal-font">');
                    challenges[item].map(function(challenge){
                        $('#'+item+'-nav').append('<li id="challenge-'+challenge.id+'">' + challenge.name + '</li>');
                    })
                    $('#main-side-nav').append('</ul>');
                })
            })
            .then(function(){
                EVT.emit("update-challenge", 1);
            })
    }

    EVT.on("init", init);
    EVT.on("update-challenge", updateChallenge);

    return {};

    // return {init: init}//so you can call sideNav.init()

})();
