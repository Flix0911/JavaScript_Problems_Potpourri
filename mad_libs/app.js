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
function startMadLib() {
   let number = prompt("Enter a number!"); {
    //number = words.number(number)
   console.log(number); //confirming number works
   } 
   
   let adjective = prompt("Enter an adjective"); {
    //adjective = wordsAdjective(adjective)
    console.log(adjective) //confirming adjective works
   } 
   
   let pluralNoun = prompt("Enter a plural noun"); {
    console.log(pluralNoun) //confirming pluralNoun works
   } 
   
   let adverb = prompt("Enter an adverb"); {
    console.log(adverb)//cofirming adverb works
   } 
   
   let anotherAdjective = prompt("Enter another adjective"); {
    console.log(anotherAdjective)//confirming anotherAdjective works
   }
console.log((words.number, 'number'), (words.adjective, 'adjective'), (words.pluralNoun, 'pluralNoun'), (words.adverb, 'adverb'), (words.anotherAdjective, 'anotherAdjective'))
//This is not logging correctly like the prompt on the homework. I don't think I'm logging my variable?
}

startMadLib()

//Start by creating a function called startMadlib that prompts a user to enter each word type and save their input to the appropriate object key. 
//For example, the following prompt's user input should be saved to the number key in our words object: