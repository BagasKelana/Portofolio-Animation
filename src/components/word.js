// Select the <h1> element within the element with class 'words'
var wordElement = document.querySelector('.words h1');

// Get the text content of the <h1> element and split it into an array of words
var sentence = wordElement.textContent.split(' ');

// Initialize a variable to store the new HTML sentence
var newSentence = '';

// Iterate through each word in the sentence
for (var i = 0; i < sentence.length; ++i) {
  // Split the word into an array of letters
  var wordArray = sentence[i].split('');
  var letters = '';

  // Iterate through each letter in the word
  for (var x = 0; x < wordArray.length; ++x) {
    // Create a span element with class 'letter' and attribute 'data-letter'
    letters +=
      '<span class="letter" data-letter="' +
      wordArray[x] +
      '">' +
      wordArray[x] +
      '</span>';
  }

  // Wrap the letters in a span element with class 'word'
  newSentence += '<span class="word">' + letters + '</span> ';
}

// Set the HTML content of the <h1> element to the new sentence
wordElement.innerHTML = newSentence;

// Add event listener to handle hover effect on each word
document.addEventListener('mouseenter', function (event) {
  // Check if the mouse entered a word element
  if (event.target.classList.contains('word')) {
    animateWord(event.target);
  }
});

// Function to animate a word
function animateWord(obj) {
  // Get the word element
  var wordElement = obj;

  // Get all the letter elements within the word element
  var letters = wordElement.querySelectorAll('.letter');

  // Iterate through each letter and trigger animation
  letters.forEach(function (letter, i) {
    // Trigger animation for each letter with a small delay
    setTimeout(function () {
      animateLetter(letter);
    }, 100 * i);
  });
}

// Function to animate a letter
function animateLetter(obj) {
  // Array of random letters to use in animation
  var alpha = [
    '!',
    '#',
    '$',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    'A',
    'G',
    'T',
    'H',
    'Y',
    'Z',
    'X',
    'W',
    'O',
    'K',
    'Q',
    'S'
  ];

  // Get the letter element
  var letterElement = obj;

  // Add class 'changing' to change color of the letter
  letterElement.classList.add('changing');

  // Get the original letter
  var original = letterElement.dataset.letter;

  // Initialize a counter
  var i = 0;

  // Set interval to change the text of the letter at intervals
  var letterInterval = setInterval(function () {
    // Get a random letter from the alpha array
    var randomLetter = alpha[Math.floor(Math.random() * alpha.length)];

    // Set the text content of the letter element to the random letter
    letterElement.textContent = randomLetter;

    // If the letter has changed 5 times, stop the interval
    if (i === 5) {
      clearInterval(letterInterval);

      // Set the text content of the letter element back to the original letter
      letterElement.textContent = original;

      // Remove class 'changing' to reset the color of the letter
      letterElement.classList.remove('changing');
    }

    // Increment the counter
    ++i;
  }, 40);
}
