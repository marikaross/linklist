var $inputTitle = $('.input-title');
var $inputUrl = $('.input-url');
var $enterBtn = $('.enter-button');
var $readBtn = $('.read-button');
var $deleteBtn = $('.delete-button');
var $rightSide = $('.right-side');
var $bookmarkArea = $('.total-counter');
// var outputTitle = $('output-title');
// var outputUrl = $('.output-url');

$enterBtn.on('click', newBookmark);

function newBookmark() {
  $rightSide.append(bookmarkContent);
}

function bookmarkContent() {
  var newTitle = $inputTitle.val();
  $inputTitle.val('')
  var newUrl = $inputUrl.val();
  $inputUrl.val('')
  $enterBtn.prop('disabled', true);
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
  $(this).closest('article').remove();
});

$inputUrl.on('keydown',function() {
  if($inputUrl.val() && $inputTitle.val()) {
    $enterBtn.prop('disabled', false);
  }
});



// on enter bookmark counter ++ 
// on delete bookmark counter --


  // enterBtn.on('click', function() {
  // var bookmarkCounter = 0;
  //   bookmarkCounter ++
  //   $('.total-counter').text('Bookmark count: ' +bookmarkCounter)
  // });

// bookmarkCounter = 0
// bookmarkCounter ++
// bookmarkArea.text('Bookmark count: ' +bookmarkCounter);


// if ('.color-red' = true) {
//   readcounter ++ && unreadcounter --
// } else { 
//   readcounter -- && unreadcounter ++}

