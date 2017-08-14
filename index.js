const moment = require('moment')
const chalk = require('chalk')
let date = new Date();
console.log("It is " + chalk.blue(moment().format("dddd,MMMM Do YYYY, h:mm:ss a")));

console.log("It is the " + chalk.magenta(moment().diff([2017,1,1], "days")) + " day of the year.");
console.log("It is " + chalk.cyan(moment().diff(0, "seconds")) + " seconds in the day.");
if (moment().isDST()=== true){
  console.log("It "+ chalk.green(" is ")+ "during Daylight Savings Time");
} else {
  console.log("It " + chalk.green("is ") + "not during Daylight Savings Time");
}
if (moment().isLeapYear()=== true){
  console.log("It " + chalk.red("is")+ " a Leap Year");
} else {
  console.log("It " + chalk.red("is not")+ " a Leap Year");
}
