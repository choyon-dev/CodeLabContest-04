function isAnagram(s1, s2) {
  s1 = s1.toLowerCase().replace(/[^a-z]/g, "");
  s2 = s2.toLowerCase().replace(/[^a-z]/g, "");

  if (s1.length !== s2.length){
  return false;
}

   s1 = s1.split("").sort();
   s2 = s2.split("").sort();

   for (let i = 0; i < s1.length; i++){
      if(s1[i] !== s2[i]){
        return false;
      }
   }
   return true;
}

// let str = "listen"
// let str2 ="silent"

// let str = "Earth"
// let str2 ="Heart"

// let str = "Schoolmaster"
// let str2 ="The classroom"

let str = "Snooze alarms"
let str2 ="Alas! No more Zs"

console.log(isAnagram(str, str2))