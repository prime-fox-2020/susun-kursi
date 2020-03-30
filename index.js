// bila ada 10 orang, ['a','b','c','d','e','f','g','h','i','j'].
// orang-orang tsb akan diatur tempat duduk nya berdasarkan urutannya secara vertikal,
// dan jumlah maksimal kursi per baris vertikal adalah 3.
// tampilkan siapa saja yg berada di baris 1, 2, dan 3 nya.

// hasil yg benar :
// Baris 0 :  [ 'a', 'd', 'g', 'j' ]
// Baris 1 :  [ 'b', 'e', 'h' ]
// Baris 2 :  [ 'c', 'f', 'i' ]

"use strict";

function generateSeats(row) {
  let seats = [];
  for (let i = 0; i < row; i++) {// rename rowa to row
    debugger;
    seats.push([]); //Rename seat to seats
  }
  return seats;
}

function managePerson(arr, rowSeats) {
  let seats = generateSeats(rowSeats);
  debugger;
  let row = 0;
  debugger;
  for (let i = 0; i < arr.length; i++) { //change loopping base case to arr.length
    debugger;
    seats[row].push(arr[i]);//rename seat to seats
    if (row < 2) { //change the case to to row less than 2
      row++;
    } else {
      row = 0; //change row == 0 to row = 0 because we are not comparing
    }
  }
  printSeats(seats);
}

function printSeats(seats) {
  for (let i = 0; i < seats.length; i++) { //change the starter point i from 1 to 0
    debugger;
    console.log(`Baris ${i} : `, seats[i]);
  }
}

managePerson(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"], 3);
