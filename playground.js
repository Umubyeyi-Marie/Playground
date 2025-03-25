var usersName = "Rebecca";
const birthYear = 2004;
const currentYear = 2025;

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

const age = calculateAge(birthYear, currentYear);

console.log(age);
console.log(usersName);

const birthYearCalculator = (age) =>
    currentYear - age
console.log(birthYear)

const userProfile = {
    name: 'Rebecca',
    age: 21,
    country: "Rwanda"

}

const { name, country } = userProfile;
console.log(userProfile.name);
console.log(userProfile.age);
console.log(userProfile.country);

const colors = ["yellow", "red", "blue", "pink"];

const { yellow, red } = colors;

console.log("yellow");
console.log("red");



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

function setGoal(goal, shouldSucceed) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldSucceed) {
                resolve({ message: `Goal set successfully!` });
            } else {
                reject(new Error(`Failed to set goal.`));
            }
        }, 1000);
    });
}


setGoal("Run a marathon", true)
    .then((response) => {
        console.log("Success:", response.message);
    })
    .catch((error) => {
        console.error("Error:", error.message);
    });
