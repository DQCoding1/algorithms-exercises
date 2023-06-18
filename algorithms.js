// FIND IF A NUMBER IS EVEN OR ODD
// function evenOrOdd(num){
//   num % 2 === 0 ? console.log( `${num} : even`) : console.log(`${num} : odd`);
// }
// evenOrOdd(239)












// RETURN THE SUM OF THE MIN AND MAX OF AN ARRAY
// function sumOfMinAndMax(arr){
//   let min = arr[0]
//   let max = arr[0]
//   arr.forEach(num => {
//     if (num < min){
//       min = num
//     } 
//     if (num > max){
//       max = num
//     }
//   })
//   return min + max
  // ANOTHER WAY TO SOLVE IT
  // let max = (Math.min(...arr));
  // let min = (Math.max(...arr));
  // return min + max
// }
// console.log(sumOfMinAndMax([3,5,7,2,41,8]))











// RETURN THE SUM OF THE 2 FIRST MIN OF AN ARRAY
// function sumOf2Min(arr) {
//   let firstMin = arr[0]
//   for (let item of arr){
//     if (item < firstMin){
//       firstMin = item
//     }
//   }
//   let arrWithoutFirstMin = arr.filter(i => i !== firstMin)
//   let secondMin = arrWithoutFirstMin[0]
//   for (let item of arrWithoutFirstMin){
//     if (item < secondMin){
//       secondMin = item
//     }
//   }
//   return firstMin + secondMin
// }
// ANOTHER WAY TO SOLVE IT 
//   let orderedArr = arr.sort((a, b) => a-b)
//   let res = []
//   orderedArr.forEach((item) => {
//     if (!res.includes(item)){
//       res.push(item)
//     }
//   })
//   return res[0] + res[1]
// }
// console.log(sumOf2Min([4,12,6,9,78,4,21]));















// FIND HOW MANY TIMES A VEHICLE IS REPEATED 
// const vehicles = ["mazda", "toyota", "audi", "mazda", "ford", "audi", "mazda"]

// function findRepetitions(arr){
//   let result = {}
//   for (let item of vehicles){
//     if (result[item]){
//       result[item] = result[item] + 1
//     } else {
//       result[item] = 1
//     }
//   }
//   return result
// }

// console.log(findRepetitions(vehicles))














// FIND THE LONGEST WORD IN A TEXT 
// function findLongestWord(text){
//   let res = ""
//   const textToArr = text.split(" ")
//   textToArr.forEach((item) => {
//     if (item.length > res.length){
//       res = item
//     }
//   })
//   return res
// }
// console.log(findLongestWord("what's the longest word here ?"));
















// SORT AN ARRAY WITHOUT USING ANY METHOD 
// function sortArray(arr) {
//   let res = arr.map(num => num)

//   for (let i = 0; i < res.length; i++){
//     for (let j = i+1; j < res.length; j++){
//       if (res[j] < res[i]){
//         let firstIter = res[i]
//         let secondIter = res[j]
//         res[i] = secondIter
//         res[j] = firstIter
//       }
//     }
//   }

//   return res
// }
// console.log(sortArray([22,5,1,5,7,3,9]));

















// COUNT HOW MANY CHARACTERS EXIST IN AN ARRAY WITHOUT SPACES
// function countCharactersWithoutSpaces (text){
//   let counter = 0

//   for (let i = 0; i < text.length; i++){
//     if (text[i] !== " ") counter ++
//   }

//    return counter
// }

// console.log(countCharactersWithoutSpaces("how many characters"));


















// RETURN THE AMOUNT OF CHARACTERS SPECIFIED OF A STRING 
// function rangeOfString (text, num){
//   const res = text.substring(0, num+1)
//   return res
// }

// console.log(rangeOfString("this is a text", 8))

















//TRANSFORM A STRING TO AN ARRAY WITHOUT USING ANY METHOD
// function transformToArray(text){
//   let res = []
//   let indexOfRes = 0 

//   for (let item of text){
//     if (item !== " "){
//       res[indexOfRes] === undefined 
//         ? res[indexOfRes] = item
//         : res[indexOfRes] = res[indexOfRes] + item 
//     } else {
//       indexOfRes++
//     }
//   }

//   return res
// }

// console.log(transformToArray("this is a text"));

















// GIVEN A STRING RETURN THE SAME STRING x AMOUNT OF TIMES 
// function repeatString(text, times){
//   let res = ""

//   for (let i = 0; i < times; i++){
//     res = res + text + " "
//   }

//   return res
// }

// console.log(repeatString("repeat this", 4));


















// GIVEN A STRING RETURN THE SAME STRING BACKWARDS 
// function backwardsText(text){
  // let res = []

  // for (let i = 0; i < text.length; i++) {
  //   res.unshift(text[i]);
  // }
  // res = res.join("")
  // return res
  // ANOTHER WAY TO SOLVE IT
//   let res = ""

//   for (let i = 0; i < text.length; i++) {
//     res = text[i] + res
//   }

//   return res
// }
// console.log(backwardsText("this is a text"));
















// FIND HOW MANY TIMES A WORD IS REPEATED
// function timesRepeated (text, wordToFind){
//   let textToArray = text.split(" ")
//   let res = 0
//   textToArray.forEach((item) => {
//     item === wordToFind && res ++
//   })
//   return res
// }

// console.log(timesRepeated("i like this, i like that", "like"));



























// VALIDATE IF A WORD IS PALINDROME  
// function isPalindrome(word){
//   let res = false
//   let reverseWord = ""

//   let cleanWord = word.toLowerCase()
//   cleanWord = cleanWord.split(" ")
//   cleanWord = cleanWord.join("")

//   for (let i = cleanWord.length-1; i >= 0; i--){
//     reverseWord = reverseWord + cleanWord[i] 
//   }

//   if (reverseWord === cleanWord) return !res
//   return res
// }

// console.log(isPalindrome("RADar"))
// console.log(isPalindrome("Taco Cat"))