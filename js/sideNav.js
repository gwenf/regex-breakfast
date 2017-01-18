var sideNav = (function(){

	function getChallenges(){
		return $.getJSON( "js/challenges.json", function( data ) {});
	}

	function updateChallenge(id){
		console.log(id)
		$('aside .highlighted-string').removeClass('highlighted-string');
		getChallenges()
			.then(function(data){
				$('#challenge-'+id).addClass('highlighted-string')
			})

    }

    function customFilter(object){
	    if(object.hasOwnProperty('id') && object["id"]==id)
	        return object;

	    for(var i=0;i<Object.keys(object).length;i++){
	        if(typeof object[Object.keys(object)[i]]=="object"){
	            o=customFilter(object[Object.keys(object)[i]]);
	            if(o!=null)
	                return o;
	        }
	    }
	    return null;
	}

	function init(){
		getChallenges()
			.then(function(data){
				var menuItems = data.order;
			    var challenges = data.challenges;
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
