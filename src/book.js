function createTitle() {

}

function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter() {


}

function buildMainCharacter(name, age, pronouns) {
  var newCharacter = {
  name: name,
  age: age,
  pronouns: pronouns,
}
return newCharacter
}


function saveReview() {


}

function saveReview(newReview, reviews) {
  return reviews.push(newReview)

}

function saveReview(newReview, reviews) {
  if (!reviews.length) {
    reviews.push(newReview);
  }
  for (var i = 0; i < reviews.length; i++) {
    if (newReview === reviews[i]) {
      return reviews;
  } else {
      reviews.push(newReview);
      return reviews
  }
}
return reviews;
}


function calculatePageCount(title) {
  return title.length * 20;
}


function writeBook(title, character, genre) {
  return newBook = {
    title: title,
    mainCharacter: character,
    pageCount: calculatePageCount(title),
    genre: genre,
  };
}

function editBook(newBook) {
  newBook.pageCount = newBook.pageCount * .75
  return newBook.pageCount;
}


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
