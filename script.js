var inputTitle = $('.input-title');
var inputUrl = $('.input-url');
var enterBtn = $('.enter-button');
var readBtn = $('.read-button');
var deleteBtn = $('.delete-button');
var rightSide = $('.right-side');
// var outputTitle = $('output-title');
// var outputUrl = $('.output-url');

enterBtn.on('click', newBookmark);

function newBookmark() {
  rightSide.append(bookmarkContent);
}

function bookmarkContent() {
  var newTitle = inputTitle.val();
  var newUrl = inputUrl.val();

  return (`<article class="bookmark">
            <h2 class="output-title">${newTitle}</h2>
            <hr>
            <p class="output-url">${newUrl}</p><hr>
            <button class="read-button color-red">Read</button>  
            <button class="delete-button">Delete</button>
          </article>`)
};

