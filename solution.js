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
const meanTroll = `This website is for losers LOL` //named meanTroll

function trollBeGone() { //function called trollBeGone
    const noVowels = meanTroll.replace(/[aeiou]/gi, ''); //name a variable called noVowels which is = to meanTroll but aeiou is replaced
console.log(noVowels) //console log the result
    
}

trollBeGone() //invoke the function

// --Bank Account Summary

//Make an object named bankInfo with your banking info that includes the keys listed below. 
//Each key should have a number value that can either be negative or positive (e.g. -500 or 500)

//keys required
//savings
//checking
//moneyMarket
//creditCard

const bankInfo = { //object called bankInfo
    savings: 600, //key called savings
    checking: 800, //key called checking
    moneyMarket: 200, //key called moneyMarket
    creditCard: -2000, //key called creditCard
}

console.log( //console.log to check I can pull it. set to 0 to view. This is the whole object
    bankInfo.savings,
    bankInfo.checking,
    bankInfo.moneyMarket,
    bankInfo.creditCard
)

console.log(bankInfo.savings) //result should be 600
console.log(bankInfo.checking) //should be 800
console.log(bankInfo.moneyMarket) //should be 200
console.log(bankInfo.creditCard) //should be -2000

function bankAccountSummary() { //write a function called bankAccountSummary
    const myBalance = Object.keys(bankInfo);
    let sum = 0;
    for (const key of myBalance) { // I have to look up line 96-101. I don't fully understand this but do remember this vaguely
                                    //can't find the notes on it but I get that I'm using Object.keys
        sum += bankInfo[key];
    }
    return sum;
}

const bankTotal = bankAccountSummary() //store the value in a variable called bankTotal
console.log(bankTotal) // console log the bankTotal variable


//Write another function called inTheRed that accepts your bank account summary total (number) as an argument. 
//The function should return true if your total is less than 0, and false otherwise.

function inTheRed() { //create a function called inTheRed
    if(bankTotal < 0) {
        return true;
    }else; {
        return false;
    }

}
console.log(inTheRed(bankTotal)) //console log the result. Returns true. below 0