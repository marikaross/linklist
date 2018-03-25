// var webTitle = document.querySelector('#web-title');
// var webUrl = document.querySelector('#web-url');
// var enterBtn = document.querySelector('.enter-button');
// var readBtn = document.querySelector('.read-button');
// var deleteBtn = document.querySelector('.delete-button');

// readBtn.addEventListener('click', function() {

// })

$('.enter-button').on('click', textTransfer);



function textTransfer() {
  var newText = $('.input-title').val();
  $('.output-title').text(newText);
  var newUrl = $('.input-url').val();
  $('.output-url').text(newUrl);
};

$('.read-button').on('click', readClass);

function readClass() {
  $('.read-button').toggleClass('#color-red');
}