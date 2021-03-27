
function shelfBook(title, sciFiShelf) {
  // console.log('title', title);
  // console.log('shelf', sciFiShelf);
  if (sciFiShelf.length < 3) {
      return sciFiShelf.unshift(title);
    }
}

function unshelfBook(title, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (title === shelf[i].title) {
      shelf.splice(i, 1);
    }
  }
  return shelf;
}

function listTitles(shelf) {
  var list = [];
  for (var i = 0; i < shelf.length; i++){
    list.push(shelf[i].title);
  }
  return list.join(", ");
}


function searchShelf(shelf, title) {
  var result = false;
  for (var i = 0; i < shelf.length; i++) {
    if (title === shelf[i].title) {
      result = true;
      break;
    } else {
      result = false;
    }
  }
  return result;
}


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
