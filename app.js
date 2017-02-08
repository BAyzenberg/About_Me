'user strict';

var confirmQuiz = confirm('Hello, would you like to take a quiz?');

/* var invalidAnswers = 0;

Invalid answer responses.
removed becuase you guys don't want it.
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
*/

if(confirmQuiz) {
  alert('Let\'s begin then.');
} else {
  alert('You actually don\'t get a say in the matter');
}

alert('Please answer all questions with a Y or N');

// Question One.

var quizResponseOne = prompt('Does Ben have a dog?');

if(quizResponseOne.toUpperCase() === 'Y' || quizResponseOne.toUpperCase() === 'YES') {
  alert('Yes he does.');
  console.log('Correct!');
} else if(quizResponseOne.toUpperCase() === 'N' || quizResponseOne.toUpperCase() === 'NO') {
  alert('No, he actually does.');
  console.log('Incorrect!');
} else {
  alert('Y or N man, come on.');
  console.log('Incorrect!');
}

// question Two

var quizResponseTwo = prompt('Does Ben live in Seattle?');

if(quizResponseTwo.toUpperCase() === 'Y' || quizResponseTwo.toUpperCase() === 'YES') {
  alert('Not really, Mercer Island isn\'t technically Seattle.');
  console.log('Incorrect!');
} else if(quizResponseTwo.toUpperCase() === 'N' || quizResponseTwo.toUpperCase() === 'NO') {
  alert('Good work, He does\'t.');
  console.log('Correct!');
} else {
  alert('Dude, Y or N, its not hard.');
  console.log('Incorrect!');
}

// question Three

var quizResponseThree = prompt('Has Ben been somwhere outside of the U.S?');

if(quizResponseThree.toUpperCase() === 'Y' || quizResponseThree.toUpperCase() === 'YES') {
  alert('Yes, Mexico.');
  console.log('Correct!');
} else if(quizResponseThree.toUpperCase() === 'N' || quizResponseThree.toUpperCase() === 'NO') {
  alert('Try again.');
  console.log('Incorrect!');
} else {
  alert('No, use Y or N.');
  console.log('Incorrect!');
}

// question Four

var quizResponseFour = prompt('Has Ben jumped out of an airplane?');

if(quizResponseFour.toUpperCase() === 'Y' || quizResponseFour.toUpperCase() === 'YES') {
  alert('Yes, Skydiving is a terifyingly fun experience');
  console.log('Correct!');
} else if(quizResponseFour.toUpperCase() === 'N' || quizResponseFour.toUpperCase() === 'NO') {
  alert('He actually has.');
  console.log('Incorrect!');
} else {
  alert('I\'m trying to be serious here, could you at least give me that much?');
  console.log('Incorrect!');
}

// Question Five

var quizResponseFive = prompt('Could Ben beat you in a fight?');

if(quizResponseFive.toUpperCase() === 'Y' || quizResponseFive.toUpperCase() === 'YES') {
  alert('Bring it on!');
  console.log('Incorrect!');
} else if(quizResponseFive.toUpperCase() === 'N' || quizResponseFive.toUpperCase() === 'NO') {
  alert('Don\'t be like that, have some more confidence in yourself.');
  console.log('Incorrect!');
} else {
  alert('This is the true answer, we won\'t actually know until we try. :D');
  console.log('Correct!');
}
