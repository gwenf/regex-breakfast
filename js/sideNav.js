var sideNav = (function(){

	function updateChallenge(evt) {
		evt.preventDefault();

		// change current menu item
	}

	function init() {
		//TODO: save this all together and update the dom once
		$.getJSON( "js/challenges.json", function( data ) {
		    var menuItems = data.order;
		    var challenges = data.challenges;
		    menuItems.map(function(item){
		        $('#main-side-nav').append('<p id="'+item+'-nav" class="large-font">' + item + '</p><ul class="normal-font">');
		        challenges[item].map(function(challenge){
		            $('#'+item+'-nav').append('<li>' + challenge.name + '</li>');
		        })
		        $('#main-side-nav').append('</ul>');
		    })
		});
	}

	EVT.on("init",init);
	EVT.on("updateChallenge",updateChallenge);

	return {};

	// return {init: init}//so you can call sideNav.init()

})();
