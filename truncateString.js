function truncateString(str, maxLength) {

  if (str.length <= maxLength) {
    return str;
  }

  if (maxLength <= 3) {
    return "...";
  }

  return str.slice(0, maxLength - 3) + "...";
}

// let test = truncateString("Hello world, this is a long string", 10);
// let test = truncateString("Short text", 15);
// let test = truncateString("Hello", 5);
let test = truncateString("Hello", 4);


console.log(test)