  // using Fisher-Yates shuffle algorithm
  export default function shuffleAnswers(array) {
    // Loop over the array from the last element to the first
    for (let i = array.length - 1; i > 0; i--) {
      // Pick a random index from 0 to i
      let j = Math.floor(Math.random() * (i + 1));
      // Swap the elements at i and j
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  };

