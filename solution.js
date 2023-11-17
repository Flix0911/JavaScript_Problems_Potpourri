// -- JavaScript Problems Potourri

// --setAlarm

//Write a function named setAlarm
function setAlarm(employed, vacationing) { //2 arguments employed and vacationing
    if(employed && !vacationing){; //employed && !vacationing return true. we need to set an alarm
        return true;
    }else { //else false, we do not need to set an alarm
        return false;
    }
}


console.log(setAlarm(true, true)) // will return false. both employed and vacationing are true
console.log(setAlarm(false, false)) // will return false. not employed so no alarm is needed
console.log(setAlarm(false, true)) // will return false. not employed so no alarm is needed AND vactioning
console.log(setAlarm(true, false)) // will return true. employed and not vacationing


// --Count Odd Numbers

//Write a function named oddNumberCount which receives one argument that should be a number. 
//The function should return how many positive odd numbers there are below the number passed into the argument.

//Write a function named oddNumber Count

function oddNumberCount(num) { //one argument in the function that is a number
    if (num < 0) { //if statement declaring what num is greater than
        return []; //return in an array
    }
    
    const oddNumbers = []; //declare a variable named oddNumbers
    for (let i = 1; i < num; i += 2) { //set at 1 because we want odd numbers. 1 += 2 to add 2 each time
        oddNumbers.push(i); //push i each time and add to the array
    }
    return oddNumbers;


}

console.log(oddNumberCount(7))
console.log(oddNumberCount(16))

// --Disemvoweling Trolls

//Trolls are attacking your comment section! 
//Let's neutralize the threat by removing all vowels from their comments. 
//That'll make them look real silly.

//Write a function named trollsBeGone which receives one argument that should be a sentence (a string). 
//The function should return a new string with all the vowels removed from the original string.

//write a function name TrollBeGone
function trollBeGone("This website is for losers LOL") { //in the argument, should be the string "This website is for losers LOL"
//iterate over all vowels in the string
//replace(/[aeiou]/)
//console.log the new string