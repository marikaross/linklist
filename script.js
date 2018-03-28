var $inputTitle = $('.input-title');
var $inputUrl = $('.input-url');
var $enterBtn = $('.enter-button');
var $readBtn = $('.read-button');
var $deleteBtn = $('.delete-button');
var $rightSide = $('.right-side');
var $bookmarkArea = $('.total-counter');
var $count = 0;


$enterBtn.on('click', newBookmark);

function newBookmark() {
  $rightSide.append(bookmarkContent);
};

function bookmarkContent() {
  $count++;
  var newTitle = $inputTitle.val();
  $inputTitle.val('');
  var newUrl = $inputUrl.val();
  $inputUrl.val('');
  $enterBtn.prop('disabled', true);
  $bookmarkArea.text($count);
  return (`<article class="bookmark">
            <h2 class="output-title">${newTitle}</h2>
            <hr>
            <a href="#"><p class="output-url">${newUrl}</p></a>
            <hr>
            <button class="read-button">Read</button>  
            <button class="delete-button">Delete</button>
          </article>`)
};


$rightSide.on('click', '.read-button', function (event){ 
  console.log($(this).closest('article'))
$(this).closest('article').toggleClass('read-bookmark');
});

$rightSide.on('click', '.delete-button', function (event){
  $count--;
  $(this).closest('article').remove();
  $bookmarkArea.text($count);
});

$inputUrl.on('keydown',function() {
  if($inputUrl.val() && $inputTitle.val()) {
    $enterBtn.prop('disabled', false);
  }
});





