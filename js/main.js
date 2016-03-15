var $firstHeading = $('<h2>');
var $firstImage = $('<img src="images/peanuts.jpg" alt="">');
var $firstParagraph = $('<p>');
var $li = $('<li>');
var $secondHeading = $('<h2>');
var $secondImage = $('<img src="images/beans.jpg" alt="">');
var $secondParagraph = $('<p>');
var $thirdHeading = $('<h2>');
var $thirdImage = $('<img src="images/lentils.jpg" alt="">');
var $thirdParagraph = $('<p>');

$firstImage.html('peanuts.jpg');
$('body').append($firstImage);
$('body').append($li);

$firstHeading.html('Peanuts');
$('body').append($firstHeading);
$('body').append($li);

$firstParagraph.html('First cultivated in the valleys of Paraguay.');
$('body').append($firstParagraph);
$('body').append($li);

$secondImage.html('beans.jpg');
$('body').append($secondImage);
$('body').append($li);

$secondHeading.html('Beans');
$('body').append($secondHeading);
$('body').append($li);

$secondParagraph.html('A summer crop that needs warm temperatures.');
$('body').append($secondParagraph);
$('body').append($li);

$thirdImage.html('lentils.jpg');
$('body').append($thirdImage);
$('body').append($li);

$thirdHeading.html('Lentils');
$('body').append($thirdHeading);
$('body').append($li);

$thirdParagraph.html('An edible pulse from a bushy annual plant.');
$('body').append($thirdParagraph);
$('body').append($li);
