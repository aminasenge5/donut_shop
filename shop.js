//Holy Moly Donut Shop (shop.js)

// Logging utility functions

var PL  = document.getElementById("pLog");

var tr1 = document.getElementById("tr1");

function mylog(z)     { PL.innerHTML += (z + "<br>"); }

function mylogNoBr(z) { PL.innerHTML += z; }

function clearLog()   { PL.innerHTML = ""; }

// Donut shop object constructor

function makeShop(loc, min, max, avg) {

  this.location    = loc;

  this.minCR = min; // Minimum customers/hour

  this.maxCR = max; // Maximum customers/hour

  this.donutsPerCust = avg;

  // Generate pseudo-random integer on [min, max]

  this.randIntFullRange = function() {

    return Math.floor(Math.random() * (this.maxCR - this.minCR + 1)) + this.minCR;

  }

  this.donutsThisHour = function() {

    return Math.floor(this.donutsPerCust * this.randIntFullRange());

  }

}

var HM1= new makeShop("Halsey", 8, 43, 4.50); // Instantiate object
var HM2= new makeShop("San Rafael", 8, 43, 4.50);
var HM3= new makeShop("Burnside", 8, 43, 4.50);
var HM4= new makeShop("Taylor", 8, 43, 4.50);
var HM5= new makeShop("Rocky Butte", 8, 43, 4.50);
/* Theoretical Loop for creating random numbers

for (ii=0; ii<13; ii++){

  var HM1Array = [];

  var HM1DonutsPerHour = push.HM1.donutsThisHour();

}

*/

// For Halsey:

var HM1_7am = HM1.donutsThisHour(); // Geneate random donut total for 6 am

var HM1_8am = HM1.donutsThisHour(); // Geneate random donut total for 7 am

var HM1_9am = HM1.donutsThisHour(); // Geneate random donut total for 8 am

var HM1_10am = HM1.donutsThisHour(); // Geneate random donut total for 9 am

var HM1_11am = HM1.donutsThisHour(); // Geneate random donut total for 10 am

var HM1_12pm = HM1.donutsThisHour(); // Geneate random donut total for 11 am

var HM1_1pm= HM1.donutsThisHour(); // Geneate random donut total for 12 pm

var HM1_2pm = HM1.donutsThisHour(); // Geneate random donut total for 1 pm

var HM1_3pm = HM1.donutsThisHour(); // Geneate random donut total for 2 pm

var HM1_4pm = HM1.donutsThisHour(); // Geneate random donut total for 3 pm

var HM1_5pm = HM1.donutsThisHour(); // Geneate random donut total for 4 pm

var HM1_6pm = HM1.donutsThisHour(); // Geneate random donut total for 5 pm

 // @HW ... but donut shops are sweat shops open 12 hours per day!

 var HM1_total = HM1_7am + HM1_8am + HM1_9am + HM1_10am + HM1_11am + HM1_12pm + HM1_1pm + HM1_2pm + HM1_3pm + HM1_4pm + HM1_5pm + HM1_6pm;

tr1.innerHTML="<td>"+HM1.location+"</td>";

tr1.innerHTML+="<td>"+HM1_7am+"</td><td>"+HM1_8am+"</td><td>"+HM1_9am+"</td><td>"+HM1_10am+"</td><td>"+HM1_11am+"</td><td>"+HM1_12pm+"</td><td>"+HM1_1pm+"</td><td>"+HM1_2pm+"</td><td>"+HM1_3pm+"</td><td>"+HM1_4pm+"</td><td>"+HM1_5pm+"</td><td>"+HM1_6pm+"</td><td>"+HM1_total+"</td>";