// var webTitle = document.querySelector('#web-title');
// var webUrl = document.querySelector('#web-url');
// var enterBtn = document.querySelector('.enter-button');
// var readBtn = document.querySelector('.read-button');
// var deleteBtn = document.querySelector('.delete-button');

// readBtn.addEventListener('click', function() {

// })

$('.enter-button').on('click', textTransfer);



function textTransfer() {
  debugger
  var newText = $('.input-title').val();
  $('.output-title').text(newText);
  var newUrl = $('.input-url').val();
  $('.output-url').text(newUrl);
  // $('.right-side').append('');
};

$('.read-button').on('click', function() {
  $(this).toggleClass('color-red');
});


var bookmark =
 <article class="bookmark">
       <h2 class="output-title">#</h2>
       <hr>
       <p class="output-url">#</p><hr>
       <button class="read-button color-red">Read</button>  
       <button class="delete-button">Delete</button>
     </article>