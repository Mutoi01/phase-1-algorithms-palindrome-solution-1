function reverseWord(word){
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  // Write your algorithm here
  const rev = reverseWord(word);

  return word ===  rev;

}


/* 
  Add your pseudocode here
  should write an algorithim that checks if a word is a palindrome. 
  This word should retain the same meaning when reversed like the word eye
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("eye"));
}

module.exports = isPalindrome;
