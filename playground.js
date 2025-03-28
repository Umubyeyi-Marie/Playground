let usersName = "Rebecca";
const birthYear = 2004;
const currentYear = 2025;

//Calculating the age using birthYear and currentYear
function calculateAge(birthYear, currentYear) {
    if (typeof birthYear !== 'number' || typeof currentYear !== 'number') {
        return "Invalid input. Please provide numbers for birthYear and currentYear.";
    }

    const age = currentYear - birthYear;

    if (age < 0) {
        return "Birth year cannot be after current year.";
    }

    return age;
}
//Using Template Literals

const age = calculateAge(birthYear, currentYear);

console.log(age);
console.log(usersName);

const birthYearCalculator = (age) =>
    currentYear - age
console.log(birthYearCalculator(21));

// destructuring using object
const userProfile = {
    name: 'Rebecca',
    age: 21,
    country: "Rwanda"

}

const { name, country } = userProfile;
console.log(userProfile.name);
console.log(userProfile.age);
console.log(userProfile.country);

// array destructuring

const colors = ["yellow", "red", "blue", "pink"];

const [ yellow, red ] = colors;

console.log(yellow);
console.log(red);


// creating spread and rest operators

function sumNumbers(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

const numbersToSum = [1, 2, 3, 4, 5];
const sumResult = sumNumbers(...numbersToSum);
console.log(sumResult);


const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];
console.log(mergedArray);

// creating promises
function setGoal(goal, shouldSucceed) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldSucceed) {
                resolve({ message: `Goal set successfully!` });
            } else {
                reject(new Error(`Failed to set goal.`));
            }
        }, 1000); //1seconds delay
    

    });
}


setGoal("Run a marathon", false)
    .then((response) => {
        console.log("Success:", response.message);
    })
    .catch((error) => {
        console.error("Error:", error.message);
    });
/*currentYear - birthYear: This simple subtraction calculates the numerical difference between two years, which, in the context of age calculation, directly provides the age of an individual. It's a straightforward arithmetic operation crucial for determining the passage of time between two points.

Template literals: Instead of messy string concatenation, template literals offer a cleaner, more readable way to embed variables and expressions directly within strings using backticks and ${}. This improves code clarity and reduces the likelihood of errors, especially when dealing with complex string formatting.
 
Destructuring is a JavaScript feature that allows you to extract values from arrays or objects and assign them to distinct variables.

Rest/spread operator: 
Spread operator:
Spreads elements of an iterable (like an array or object) into individual elements.
Used to create copies of arrays or objects, or to combine them.
Rest operator:
Collects remaining elements of an array or object into a new array or object.
Used in function parameters to handle a variable number of arguments.
Key difference: Spread "expands" or "unpacks," while rest "collects" or "packs."

Rest Operator (...): COLLECT multiple values into an array.

Spread Operator (...): EXPAND elements from an array/object.

Promises: Promises enhance asynchronous code by providing a structured way to handle operations that may not complete immediately. They offer improved error handling, chaining of operations, and prevent callback hell, leading to more maintainable and readable asynchronous code.


*/ 