console.log("hello world")

// --MAD LIBS!



//Part 1 - Building an Object

//First, create an object called words with the keys given below. 
//Each key's property should be an empty string. 
//This is where we will save the user's input later.

const words = {
    number: "",
    adjective: "",
    pluralNoun: "",
    adverb: "",
    anotherAdjective: "",
}

// ----------


//Part 2 -- Interact With the User

//Now that we have our object set up, we want to work on accepting user input 
//so that we can save it to the object.


//Start by creating a function called startMadlib that prompts a user to enter each word type and save their input to the appropriate object key. 
//For example, the following prompt's user input should be saved to the number key in our words object:

function startMadlib() { //my function called startMadlib
    {
        alert("This is a madlibs game. You will be prompted to submit certain responses. At the end, your responses will be plugged into the whole paragraph. Lets begin!");

    }
    let chosenNumber = prompt("Enter a number!"); {
    words.number = chosenNumber; //I believe this is correct but I don't understand why
    //chosenNumber = words.number(number) //This is incorrect and I know that now. Why though?
    console.log(words.number = chosenNumber); //confirming number works
   } 
   
    let chosenAdjective = prompt("Enter an adjective"); {
    words.adjective = chosenAdjective;//I believe this is correct but I don't understand why
    //chosenAdjective = words.adjective(adjective)
    console.log(chosenAdjective) //confirming adjective works
   } 
   
    let chosenPluralNoun = prompt("Enter a plural noun"); {
    words.pluralNoun = chosenPluralNoun;//I believe this is correct but I don't understand why
    console.log(chosenPluralNoun) //confirming pluralNoun works
   } 
   
    let chosenAdverb = prompt("Enter an adverb"); {
    words.adverb = chosenAdverb;//I believe this is correct but I don't understand why
    console.log(chosenAdverb)//cofirming adverb works
   } 
   
    let chosenAnotherAdjective = prompt("Enter another adjective"); {
    words.anotherAdjective = chosenAnotherAdjective//I believe this is correct but I don't understand why
    console.log(chosenAnotherAdjective)//confirming anotherAdjective works
   }

   alert(
    `Once upon a time a group of ${chosenNumber} General Assembly graduates got together and made a startup called ${chosenAdjective} Technologies. 
    Their goal was to create smart ${chosenPluralNoun}. 
    They approached the challenge ${chosenAdverb} which ultimately lead them to ${chosenAnotherAdjective} fame.`
    );

console.log(words.number.chosenNumber, words.adjective.chosenAdjective, words.pluralNoun.chosenPluralNoun, words.adverb.chosenAdverb, words.anotherAdjective.chosenAnotherAdjective)
//console.log((words.number, 'number'), (words.adjective, 'adjective'), (words.pluralNoun, 'pluralNoun'), (words.adverb, 'adverb'), (words.anotherAdjective, 'anotherAdjective'))
//This is not logging correctly like the prompt on the homework. I don't think I'm logging my variable?
}

startMadlib() //will invoke the function to begin upon opening the page

