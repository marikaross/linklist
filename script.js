var inputTitle = document.querySelector('.input-title');
var inputUrl = document.querySelector('.input-url');
var enterBtn = document.querySelector('.enter-button');
var readBtn = document.querySelector('.read-button');
var deleteBtn = document.querySelector('.delete-button');
var outputTitle = document.querySelector('.output-title');
var outputUrl = document.querySelector('.output-url');
// readBtn.addEventListener('click', function() {

// })

// $('.enter-button').on('click', textTransfer);



// function textTransfer() {
//   var newText = $('.input-title').val();
//   $('.output-title').text(newText);
//   var newUrl = $('.input-url').val();
//   $('.output-url').text(newUrl);
//   // $('.right-side').append('');
// };

// $('.read-button').on('click', function() {
//   $(this).toggleClass('color-red');
// });
enterBtn.addEventListener('click', addBookmark); 

function addBookmark() {
  var newText = inputTitle.value;
  outputTitle.innerText = newText;
  var newUrl = inputUrl.value
  outputUrl.innerText = newUrl;
}

readBtn.addEventListener ('click', function(){
 readBtn.classList.toggle('.color-red')
});

 //  `<article class="bookmark">
//        <h2 class="output-title">${newText}</h2>
//        <hr>
//        <p class="output-url">#</p><hr>
//        <button class="read-button color-red">Read</button>  
//        <button class="delete-button">Delete</button>
//      </article>`