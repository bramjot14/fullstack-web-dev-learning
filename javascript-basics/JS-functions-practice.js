// Challenge: Calculate how many days, weeks, and months are left
// if a person lives until 90 years old, based on their current age.

function lifeInWeeks(age) {
    const yearsLeft = 90 - age;
  
    const daysLeft = yearsLeft * 365;
    const weeksLeft = yearsLeft * 52;
    const monthsLeft = yearsLeft * 12;
  
    console.log(`You have ${daysLeft} days, ${weeksLeft} weeks, and ${monthsLeft} months left.`);
  }
  
  lifeInWeeks(20);
  