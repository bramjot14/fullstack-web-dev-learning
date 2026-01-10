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
   - BMI < 18.5  → underweight
   - BMI 18.5–24.9 → normal weight
   - BMI > 24.9  → overweight
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
