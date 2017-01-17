$(document).ready(function() {

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

var arrayOfImages = [
    'coffee-cup.png',
    'cereal.png',
    'plate.png',
    'toaster.png'
]

$('#logo-image').on('click', function(){
    var imageNum = parseInt($(this).attr('data-number'))
    imageNum = imageNum < 3 ? imageNum + 1 : 0;
    $(this).attr('data-number', imageNum)
    $(this).attr('src', 'images/' + arrayOfImages[imageNum])
})

$('.expanding-button').on('click', function () {
    var element = $(this).attr('data-reveal')
    $('.'+element).slideToggle(300);
});

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

});
