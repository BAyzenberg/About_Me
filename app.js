'user strict';

var confirmQuiz = confirm('Hello, would you like to take a quiz?');
var invalidAnswers = 0;

//Invalid answer responses.

function seriously(badAnswers) {
  if(badAnswers === 0){
    console.log('Y or N man, come on.');
  } else if(badAnswers === 1){
    console.log('Dude, Y or N, its not hard.');
  } else if(badAnswers === 2){
    console.log('Why do you do this?');
  } else if(badAnswers === 3){
    console.log('What do you get out of this?');
  } else if(badAnswers === 4) {
    console.log('you have 1 more chance, please just answer with Y or N.');
  } else if(badAnswers === 5) {
    console.log('Thats it, you\'ve done it.  There\'s no more questions.  All of them have been invalid responses.');
  }
  invalidAnswers++;
}

if(confirmQuiz) {
  console.log('Lets begin');
} else {
  console.log('You actually don\'t get a say in the matter');
}

alert('Please answer all questions with a Y or N');

// Question One.

var quizResponseOne = prompt('Does Ben have a dog?');

if(quizResponseOne.toUpperCase() === 'Y') {
  console.log('Yes he does.');
} else if(quizResponseOne.toUpperCase() === 'N') {
  console.log('No, he actually does.');
} else {
  seriously(invalidAnswers);
}

// question Two

var quizResponseTwo = promt('Does Ben live in Seattle?');

if(quizResponseTwo.toUpperCase() === 'Y') {
  console.log('Not really, Mercer Island isn\'t technically Seattle.');
} else if(quizResponseTwo.toUpperCase() === 'N') {
  console.log('Good catch, He does\'t.');
} else {
  seriously(invalidAnswers);
}
