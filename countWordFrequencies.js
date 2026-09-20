function countWordFrequencies(sentence) {
  sentence = sentence.toLowerCase();

  sentence = sentence.replace(/[^a-z0-9\s]/g, "");

  let words = sentence.split(/\s+/);

  let result = {};

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (word === "") {
      continue;
    }

    if (result[word]) {
      result[word]++;
    } else {
      result[word] = 1;
    }
  }

  return result;
}


// let test = countWordFrequencies("Given a sentence, return an object containing the frequency count of each word. Ignore case differences")
// let test = countWordFrequencies("The quick brown fox jumps over the lazy dog.")
let test = countWordFrequencies("Hello world, hello!")


console.log(test);