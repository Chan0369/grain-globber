var $firstHeading = $('<h2>');
var $firstImage = $('<img>');
var $firstParagraph = $('<p>');
var $li = $('<li>');
var $secondHeading = $('<h2>');
var $secondImage = $('<img>');
var $secondParagraph = $('<p>');
var $thirdHeading = $('<h2>');
var $thirdImage = $('<img>');
var $thirdParagraph = $('<p>');

$firstHeading.html('Peanuts');
$('body').append($firstHeading);
$('body').append($li);

$firstParagraph.html('First cultivated in the valleys of Paraguay.');
$('body').append($firstParagraph);
$('body').append($li);

$secondHeading.html('Beans');
$('body').append($secondHeading);
$('body').append($li);

$secondParagraph.html('A summer crop that needs warm temperatures.');
$('body').append($secondParagraph);
$('body').append($li);

$thirdHeading.html('Lentils');
$('body').append($thirdHeading);
$('body').append($li);

$thirdParagraph.html('An edible pulse from a bushy annual plant.');
$('body').append($thirdParagraph);
$('body').append($li);
