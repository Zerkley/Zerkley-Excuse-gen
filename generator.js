// Four arrays of words to choose from
const who = ["The dog", "My grandma", "My Turtle", "My bird"];
const action = ["ate", "peed on", "crushed", "broke"];
const what = ["my homework", "the keys", "the car"];
const when = ["before the class", "right on time", "when I finished", "during my lunch", "while I was praying"];

// Function to generate a random excuse
function generateRandomSentence(wordsArrays) {
  let randomSentence = "";

  for (let i = 0; i < wordsArrays.length; i++) {
    const randomWordArray = wordsArrays[i];
    const randomWordIndex = Math.floor(Math.random() * randomWordArray.length);
    const randomWord = randomWordArray[randomWordIndex];

    randomSentence += (i === 0 ? randomWord.charAt(0).toUpperCase() + randomWord.slice(1) : randomWord) + " ";
  }

  return randomSentence.trim() + ".";
}

// output
const wordsArrays = [who, action, what, when];
const randomSentence = generateRandomSentence(wordsArrays);
const randomSentenceElement = document.getElementById("generator");
randomSentenceElement.textContent = randomSentence;

//Button event listener
generateButton.addEventListener("click", () => {
  location.reload();
})