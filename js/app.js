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
    console.log(element, $('.'+element))
});
