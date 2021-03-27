
function createLibrary(libraryName) {
  return library = {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
}

function addBook(library, title) {
  if (title.genre === "fantasy") {
      return library.shelves.fantasy.push(title);
  } else if (title.genre === "fiction") {
      return library.shelves.fiction.push(title);
  } else {
      return library.shelves.nonFiction.push(title);
  }
}


function checkoutBook(library, bookTitle, genre) {
  for (var i = 0; i < library.shelves[genre].length; i++) {
    if (bookTitle === library.shelves[genre][i].title) {
      library.shelves[genre].splice(i, 1);
      return `You have now checked out ${bookTitle} from the ${library.name}`
      }
    }
    return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`
  }



// string interpolation

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
