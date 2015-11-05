//BRUTE FORCE

// Logging utility functions


var PL  = document.getElementById("pLog");

var tr1 = document.getElementById("tr1");
var tr2 = document.getElementById("tr2");
var tr3 = document.getElementById("tr3");
var tr4 = document.getElementById("tr4");
var tr5 = document.getElementById("tr5");

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



function AddLocation(){

  var newLocation = document.getElementById("Location").value;
    var newmin = Number(document.getElementById("min").value);
      var newmax = Number(document.getElementById("max").value);
        var newavg = Number(document.getElementById("avg").value);

HMnew = new makeShop(newLocation, newmin, newmax, newavg);


// For HMnew:

var HMnew_7am = HMnew.donutsThisHour(); // Geneate random donut total for 6 am

var HMnew_8am = HMnew.donutsThisHour(); // Geneate random donut total for 7 am

var HMnew_9am = HMnew.donutsThisHour(); // Geneate random donut total for 8 am

var HMnew_10am = HMnew.donutsThisHour(); // Geneate random donut total for 9 am

var HMnew_11am = HMnew.donutsThisHour(); // Geneate random donut total for 10 am

var HMnew_12pm = HMnew.donutsThisHour(); // Geneate random donut total for 11 am

var HMnew_1pm= HMnew.donutsThisHour(); // Geneate random donut total for 12 pm

var HMnew_2pm = HMnew.donutsThisHour(); // Geneate random donut total for 1 pm

var HMnew_3pm = HMnew.donutsThisHour(); // Geneate random donut total for 2 pm

var HMnew_4pm = HMnew.donutsThisHour(); // Geneate random donut total for 3 pm

var HMnew_5pm = HMnew.donutsThisHour(); // Geneate random donut total for 4 pm

var HMnew_6pm = HMnew.donutsThisHour(); // Geneate random donut total for 5 pm

 // @HW ... but donut shops are sweat shops open 12 hours per day!

 var HMnew_total = HMnew_7am + HMnew_8am + HMnew_9am + HMnew_10am + HMnew_11am + HMnew_12pm + HMnew_1pm + HMnew_2pm + HMnew_3pm + HMnew_4pm + HMnew_5pm + HMnew_6pm;

trnew.innerHTML="<td>"+HMnew.location+"</td>";

trnew.innerHTML+="<td>"+HMnew_7am+"</td><td>"+HMnew_8am+"</td><td>"+HMnew_9am+"</td><td>"+HMnew_10am+"</td><td>"+HMnew_11am+"</td><td>"+HMnew_12pm+"</td><td>"+HMnew_1pm+"</td><td>"+HMnew_2pm+"</td><td>"+HMnew_3pm+"</td><td>"+HMnew_4pm+"</td><td>"+HMnew_5pm+"</td><td>"+HMnew_6pm+"</td><td>"+HMnew_total+"</td>";


}

var HMnew
//

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



// For San Rafael:

var HM2_7am = HM2.donutsThisHour(); // Geneate random donut total for 6 am

var HM2_8am = HM2.donutsThisHour(); // Geneate random donut total for 7 am

var HM2_9am = HM2.donutsThisHour(); // Geneate random donut total for 8 am

var HM2_10am = HM2.donutsThisHour(); // Geneate random donut total for 9 am

var HM2_11am = HM2.donutsThisHour(); // Geneate random donut total for 10 am

var HM2_12pm = HM2.donutsThisHour(); // Geneate random donut total for 11 am

var HM2_1pm= HM2.donutsThisHour(); // Geneate random donut total for 12 pm

var HM2_2pm = HM2.donutsThisHour(); // Geneate random donut total for 1 pm

var HM2_3pm = HM2.donutsThisHour(); // Geneate random donut total for 2 pm

var HM2_4pm = HM2.donutsThisHour(); // Geneate random donut total for 3 pm

var HM2_5pm = HM2.donutsThisHour(); // Geneate random donut total for 4 pm

var HM2_6pm = HM2.donutsThisHour(); // Geneate random donut total for 5 pm

 // @HW ... but donut shops are sweat shops open 12 hours per day!

 var HM2_total = HM2_7am + HM2_8am + HM2_9am + HM2_10am + HM2_11am + HM2_12pm + HM2_1pm + HM2_2pm + HM2_3pm + HM2_4pm + HM2_5pm + HM2_6pm;

tr2.innerHTML="<td>"+HM2.location+"</td>";

tr2.innerHTML+="<td>"+HM2_7am+"</td><td>"+HM2_8am+"</td><td>"+HM2_9am+"</td><td>"+HM2_10am+"</td><td>"+HM2_11am+"</td><td>"+HM2_12pm+"</td><td>"+HM2_1pm+"</td><td>"+HM2_2pm+"</td><td>"+HM2_3pm+"</td><td>"+HM2_4pm+"</td><td>"+HM2_5pm+"</td><td>"+HM2_6pm+"</td><td>"+HM2_total+"</td>";


// For Burnside:

var HM3_7am = HM3.donutsThisHour(); // Geneate random donut total for 6 am

var HM3_8am = HM3.donutsThisHour(); // Geneate random donut total for 7 am

var HM3_9am = HM3.donutsThisHour(); // Geneate random donut total for 8 am

var HM3_10am = HM3.donutsThisHour(); // Geneate random donut total for 9 am

var HM3_11am = HM3.donutsThisHour(); // Geneate random donut total for 10 am

var HM3_12pm = HM3.donutsThisHour(); // Geneate random donut total for 11 am

var HM3_1pm= HM3.donutsThisHour(); // Geneate random donut total for 12 pm

var HM3_2pm = HM3.donutsThisHour(); // Geneate random donut total for 1 pm

var HM3_3pm = HM3.donutsThisHour(); // Geneate random donut total for 2 pm

var HM3_4pm = HM3.donutsThisHour(); // Geneate random donut total for 3 pm

var HM3_5pm = HM3.donutsThisHour(); // Geneate random donut total for 4 pm

var HM3_6pm = HM3.donutsThisHour(); // Geneate random donut total for 5 pm

 // @HW ... but donut shops are sweat shops open 12 hours per day!

 var HM3_total = HM3_7am + HM3_8am + HM3_9am + HM3_10am + HM3_11am + HM3_12pm + HM3_1pm + HM3_2pm + HM3_3pm + HM3_4pm + HM3_5pm + HM3_6pm;

tr3.innerHTML="<td>"+HM3.location+"</td>";

tr3.innerHTML+="<td>"+HM3_7am+"</td><td>"+HM3_8am+"</td><td>"+HM3_9am+"</td><td>"+HM3_10am+"</td><td>"+HM3_11am+"</td><td>"+HM3_12pm+"</td><td>"+HM3_1pm+"</td><td>"+HM3_2pm+"</td><td>"+HM3_3pm+"</td><td>"+HM3_4pm+"</td><td>"+HM3_5pm+"</td><td>"+HM3_6pm+"</td><td>"+HM3_total+"</td>";


// For Taylor:

var HM4_7am = HM4.donutsThisHour(); // Geneate random donut total for 6 am

var HM4_8am = HM4.donutsThisHour(); // Geneate random donut total for 7 am

var HM4_9am = HM4.donutsThisHour(); // Geneate random donut total for 8 am

var HM4_10am = HM4.donutsThisHour(); // Geneate random donut total for 9 am

var HM4_11am = HM4.donutsThisHour(); // Geneate random donut total for 10 am

var HM4_12pm = HM4.donutsThisHour(); // Geneate random donut total for 11 am

var HM4_1pm= HM4.donutsThisHour(); // Geneate random donut total for 12 pm

var HM4_2pm = HM4.donutsThisHour(); // Geneate random donut total for 1 pm

var HM4_3pm = HM4.donutsThisHour(); // Geneate random donut total for 2 pm

var HM4_4pm = HM4.donutsThisHour(); // Geneate random donut total for 3 pm

var HM4_5pm = HM4.donutsThisHour(); // Geneate random donut total for 4 pm

var HM4_6pm = HM4.donutsThisHour(); // Geneate random donut total for 5 pm

 // @HW ... but donut shops are sweat shops open 12 hours per day!

 var HM4_total = HM4_7am + HM4_8am + HM4_9am + HM4_10am + HM4_11am + HM4_12pm + HM4_1pm + HM4_2pm + HM4_3pm + HM4_4pm + HM4_5pm + HM4_6pm;

tr4.innerHTML="<td>"+HM4.location+"</td>";

tr4.innerHTML+="<td>"+HM4_7am+"</td><td>"+HM4_8am+"</td><td>"+HM4_9am+"</td><td>"+HM4_10am+"</td><td>"+HM4_11am+"</td><td>"+HM4_12pm+"</td><td>"+HM4_1pm+"</td><td>"+HM4_2pm+"</td><td>"+HM4_3pm+"</td><td>"+HM4_4pm+"</td><td>"+HM4_5pm+"</td><td>"+HM4_6pm+"</td><td>"+HM4_total+"</td>";


// For Rocky Butte:

var HM5_7am = HM5.donutsThisHour(); // Geneate random donut total for 6 am

var HM5_8am = HM5.donutsThisHour(); // Geneate random donut total for 7 am

var HM5_9am = HM5.donutsThisHour(); // Geneate random donut total for 8 am

var HM5_10am = HM5.donutsThisHour(); // Geneate random donut total for 9 am

var HM5_11am = HM5.donutsThisHour(); // Geneate random donut total for 10 am

var HM5_12pm = HM5.donutsThisHour(); // Geneate random donut total for 11 am

var HM5_1pm= HM5.donutsThisHour(); // Geneate random donut total for 12 pm

var HM5_2pm = HM5.donutsThisHour(); // Geneate random donut total for 1 pm

var HM5_3pm = HM5.donutsThisHour(); // Geneate random donut total for 2 pm

var HM5_4pm = HM5.donutsThisHour(); // Geneate random donut total for 3 pm

var HM5_5pm = HM5.donutsThisHour(); // Geneate random donut total for 4 pm

var HM5_6pm = HM5.donutsThisHour(); // Geneate random donut total for 5 pm

 // @HW ... but donut shops are sweat shops open 12 hours per day!

 var HM5_total = HM5_7am + HM5_8am + HM5_9am + HM5_10am + HM5_11am + HM5_12pm + HM5_1pm + HM5_2pm + HM5_3pm + HM5_4pm + HM5_5pm + HM5_6pm;

tr5.innerHTML="<td>"+HM5.location+"</td>";

tr5.innerHTML+="<td>"+HM5_7am+"</td><td>"+HM5_8am+"</td><td>"+HM5_9am+"</td><td>"+HM5_10am+"</td><td>"+HM5_11am+"</td><td>"+HM5_12pm+"</td><td>"+HM5_1pm+"</td><td>"+HM5_2pm+"</td><td>"+HM5_3pm+"</td><td>"+HM5_4pm+"</td><td>"+HM5_5pm+"</td><td>"+HM5_6pm+"</td><td>"+HM5_total+"</td>";
