// // METRES 1ST PHASE
// var tilesEstimator = (function () {
var clear = function (list_no) {
   document.getElementById("list" + list_no).style.display = "none";
};

function metresPhase1() {
   document.getElementById("list0").style.display = "block";
   if (number1Phase1.value.trim() === "" || number2Phase1.value.trim() === "") {
      alert("Please enter the total length and height of the walls");
   } else {
      var field1Phase1 = document.getElementById("number1Phase1").value;

      var field2Phase1 = document.getElementById("number2Phase1").value;

      var resultPhase1 = parseFloat(field1Phase1) / parseFloat(field2Phase1);

      if (!isNaN(resultPhase1)) {
         document.getElementById("list0").innerHTML =
            "The total of number of tiles required is " +
            Math.round(resultPhase1) +
            " pcs";
      }
   }
}

function metresPhase1clear() {
   clear(0);
}

function metresPhase1Box() {
   document.getElementById("list1").style.display = "block";
   if (
      number1Phase1.value.trim() === "" ||
      number2Phase1.value.trim() === "" ||
      number3Phase1.value.trim() === ""
   ) {
      alert("Please enter the total length and height of the walls");
   } else {
      var field1Phase1 = document.getElementById("number1Phase1").value;
      var field2Phase1 = document.getElementById("number2Phase1").value;
      var field3Phase1 = document.getElementById("number3Phase1").value;

      var resultPhase1 = parseFloat(field1Phase1) / parseFloat(field2Phase1);
      var resultPhase2 = resultPhase1 / parseFloat(field3Phase1);

      if (resultPhase1 > field3Phase1) {
         if (Math.round(resultPhase1) % field3Phase1 === 0) {
            document.getElementById("list1").innerHTML =
               Math.round(resultPhase2) + " box";
         } else {
            document.getElementById("list1").innerHTML =
               Math.round(resultPhase2 + 1) + " boxes";
         }
      }
   }
}

function metresPhase1Boxclear() {
   clear(1);
}

// FEET ------- METRES

// METRES 1ST PHASE
function feetMetresPhase2() {
   document.getElementById("list2").style.display = "block";
   if (number1Phase2.value.trim() === "" || number2Phase2.value.trim() === "") {
      alert("Please enter the total length and height of the walls");
   } else {
      var field1Phase2 = document.getElementById("number1Phase2").value;

      var field2Phase2 = document.getElementById("number2Phase2").value;

      var resultPhase2 =
         parseFloat(field1Phase2 / 3.2808) / parseFloat(field2Phase2);

      if (!isNaN(resultPhase2)) {
         document.getElementById("list2").innerHTML =
            "The total of number of tiles required is " +
            Math.round(resultPhase2) +
            " pcs";
      }
   }
}

function feetMetresPhase2clear() {
   clear(2);
}

function feetMetresPhase2Box() {
   document.getElementById("list3").style.display = "block";

   if (
      number1Phase2.value.trim() === "" ||
      number2Phase2.value.trim() === "" ||
      number3Phase2.value.trim() === ""
   ) {
      alert("Please enter the total length and height of the walls");
   } else {
      var field1Phase2 = document.getElementById("number1Phase2").value;
      var field2Phase2 = document.getElementById("number2Phase2").value;
      var field3Phase2 = document.getElementById("number3Phase2").value;

      var resultPhase3 =
         parseFloat(field1Phase2 / 3.2808) / parseFloat(field2Phase2);
      var resultPhase4 = resultPhase3 / parseFloat(field3Phase2);
      console.log(resultPhase4);

      if (resultPhase3 > field3Phase2) {
         if (Math.round(resultPhase3) % field3Phase2 === 0) {
            document.getElementById("list3").innerHTML =
               Math.round(resultPhase4) + " box";
         } else {
            document.getElementById("list3").innerHTML =
               Math.round(resultPhase4 + 1) + " boxes";
         }
      }
   }
}
function feetMetresPhase2Boxclear() {
   clear(3);
}

// // FEET ------- CENTIMETRES

// METRES 1ST PHASE
function feetCentimetresPhase3() {
   if (number1Phase3.value.trim() === "" || number2Phase3.value.trim() === "") {
      alert("Please enter the total length and height of the walls");
   } else {
      var field1Phase3 = document.getElementById("number1Phase3").value;

      var field2Phase3 = document.getElementById("number2Phase3").value;

      var resultPhase3 =
         parseFloat(field1Phase3 / 3.2808) / parseFloat(field2Phase3 / 100);

      if (!isNaN(resultPhase3)) {
         document.getElementById("list4").innerHTML =
            "The total of number of tiles required is " +
            Math.round(resultPhase3) +
            " pcs";
      }
   }
}

function feetCentimetresPhase3clear() {
   clear(4);
}

function feetCentimetresPhase3Box() {
   if (
      number1Phase3.value.trim() === "" ||
      number2Phase3.value.trim() === "" ||
      number3Phase3.value.trim() === ""
   ) {
      alert("Please enter the total length and height of the walls");
   } else {
      var field1Phase3 = document.getElementById("number1Phase3").value;
      var field2Phase3 = document.getElementById("number2Phase3").value;
      var field3Phase3 = document.getElementById("number3Phase3").value;

      var resultPhase5 =
         parseFloat(field1Phase3 / 3.2808) / parseFloat(field2Phase3 / 100);
      var resultPhase6 = resultPhase5 / parseFloat(field3Phase3);

      if (resultPhase5 > field3Phase3) {
         if (Math.round(resultPhase5) % field3Phase3 === 0) {
            document.getElementById("list5").innerHTML =
               Math.round(resultPhase6) + " box";
         } else {
            document.getElementById("list5").innerHTML =
               Math.round(resultPhase6 + 1) + " boxes";
         }
      }
   }
}

function feetCentimetresPhase3Boxclear() {
   clear(5);
}
// })();

// tilesEstimator.metresPhase1();
// tilesEstimator.metresPhase1Box();
// tilesEstimator.metresPhase1clear();
// tilesEstimator.metresPhase1Boxclear();
// tilesEstimator.feetMetresPhase2();
// tilesEstimator.feetMetresPhase2Box();
// tilesEstimator.feetMetresPhase2clear;
// tilesEstimator.feetMetresPhase2Boxclear();
// tilesEstimator.feetCentimetresPhase3();
// tilesEstimator.feetCentimetresPhase3Box();
// tilesEstimator.feetCentimetresPhase3clear();
// tilesEstimator.feetCentimetresPhase3Boxclear();
