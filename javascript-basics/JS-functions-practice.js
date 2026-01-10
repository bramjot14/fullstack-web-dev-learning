/*****************************************************
 * JavaScript Functions Practice
 * Covers:
 * - Creating & calling functions
 * - Parameters and arguments
 * - Conditional logic
 * - Return values vs console output
 *****************************************************/


/* ===================================================
   Challenge 1: Life in Weeks
   ---------------------------------------------------
   Calculate how many days, weeks, and months are left
   if a person lives until 90 years old, based on
   their current age.
   =================================================== */

function lifeInWeeks(age) {
  const yearsLeft = 90 - age;

  const daysLeft = yearsLeft * 365;
  const weeksLeft = yearsLeft * 52;
  const monthsLeft = yearsLeft * 12;

  console.log(
    `You have ${daysLeft} days, ${weeksLeft} weeks, and ${monthsLeft} months left.`
  );
}

// Example usage
lifeInWeeks(20);


/* ===================================================
   Challenge 2: BMI Calculator (Advanced – IF/ELSE)
   ---------------------------------------------------
   Calculate BMI and return a message based on:
   - BMI < 18.5     → underweight
   - BMI 18.5–24.9 → normal weight
   - BMI > 24.9     → overweight
   =================================================== */

function bmiCalculator(weight, height) {
  const bmi = weight / (height * height);
  const roundedBMI = Math.round(bmi);

  if (bmi < 18.5) {
    return "Your BMI is " + roundedBMI + ", so you are underweight.";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Your BMI is " + roundedBMI + ", so you have a normal weight.";
  } else {
    return "Your BMI is " + roundedBMI + ", so you are overweight.";
  }
}

// Example usage (for testing only)
// var result = bmiCalculator(65, 1.8);

   
/* ===================================================
   Challenge 3: Leap Year Checker
   ---------------------------------------------------
   Determine whether a given year is a leap year.
   Rules:
   - Divisible by 4 → leap year
   - Except divisible by 100 → not a leap year
   - Unless divisible by 400 → leap year
   =================================================== */

function isLeap(year) {
  if (year % 400 === 0) {
    return "Leap year.";
  } else if (year % 100 === 0) {
    return "Not leap year.";
  } else if (year % 4 === 0) {
    return "Leap year.";
  } else {
    return "Not leap year.";
  }
}

// Example usage (for testing only)
// var result = isLeap(2000);


/* ===================================================
   Challenge 4: Who's Paying (Random Selection)
   ---------------------------------------------------
   Given an array of names, randomly select one person
   who will buy lunch and return a sentence.
   Example:
   Input: ["Angela", "Ben", "Jenny", "Michael", "Chloe"]
   Output: "Jenny is going to buy lunch today!"
   =================================================== */

function whosPaying(names) {
  var randomIndex = Math.floor(Math.random() * names.length);
  var selectedName = names[randomIndex];

  return selectedName + " is going to buy lunch today!";
}

// Example usage
var namesList = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
console.log(whosPaying(namesList));

   
/* ===================================================
   Challenge 5: Fibonacci Generator
   ---------------------------------------------------
   Generate the first n numbers of the Fibonacci sequence.
   The sequence starts with:
   0, 1, 1, 2, 3, 5, 8, ...

   Rules:
   - The first number must be 0
   - The second number must be 1
   - Every number after that is the sum of the two previous numbers

   Example:
   fibonacciGenerator(3) → [0, 1, 1]
   fibonacciGenerator(6) → [0, 1, 1, 2, 3, 5]
   =================================================== */

function fibonacciGenerator(n) {
  var array = [];

  for (var i = 0; i < n; i++) {
    if (i === 0) {
      array.push(0);
    } else if (i === 1) {
      array.push(1);
    } else {
      array.push(array[i - 1] + array[i - 2]);
    }
  }

  return array;
}

// Example usage
console.log(fibonacciGenerator(6));

