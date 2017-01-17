var footer = (function(){

	function init() {
		$('.expanding-button').on('click', function () {
		    var element = $(this).attr('data-reveal')
		    $('.'+element).slideToggle(300);
		});
	}

	EVT.on("init",init);

	return {};

	// return {init: init}//so you can call footer.init()

})();
