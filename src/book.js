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
  for (var i = 0; i < reviews.length; i++) {
    for (var j = i+1; j < reviews.length; j++) {
      if(reviews[i] === reviews[j]) {
        for (var k = j; k < reviews.length; k++) {
          reviews[k] = reviews[k + 1];
      }
      reviews.length--;
      j--;
    }
  return reviews.push(newReview);
}
}
}




module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}
