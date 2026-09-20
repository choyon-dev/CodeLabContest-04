function titleCaseSentence(str) {
  str = str.trim();

  let words = str.split(/\s+/);
  let result = "";

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    word = word[0].toUpperCase() + word.slice(1).toLowerCase();

    result += word;

    if (i < words.length - 1) {
      result += " ";
    }
  }

  return result;
}

// let test = titleCaseSentence("a short sentence")
// let test = titleCaseSentence("hello world")
// let test = titleCaseSentence("separated by one or more spaces")
let test = titleCaseSentence("resulting in a single space separating the title-cased words")

console.log (test);


