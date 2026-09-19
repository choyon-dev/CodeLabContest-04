function compressCharacters(str) {

    let result = "";
    for (let i = 0; i < str.length; i++){
        let count = 1;
  
    while(str[i] === str[i + count]){
        count ++;
    }
   result += str[i];
     if (count > 1){
        result += count;
     }

     i+= count -1;
  }
  return result;
} 

// let characters = "aaabbc";
// let characters = "hello";
let characters = "tomorrow";


console.log(compressCharacters(characters))