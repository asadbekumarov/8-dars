// 1-
// function createCar(make, model, year) {
//   return {
//     make,
//     model,
//     year,
//     getCarInfo: function () {
//       return `${this.make} ${this.model} ${this.year}`;
//     },
//   };
// }
// let car1 = createCar("Gentra", "Chevrolet", "2024");
// console.log(car1.getCarInfo());

// 2-
// function processorder(orderNumber, callback) {
//   console.log(`Order number: ${orderNumber}`);
//   callback(orderNumber);
// }
// processorder(36950328460, function (orderNumber) {
//   console.log(`Order number ${orderNumber}`);
// });

// 3-
// (function () {
//   let vaaqt = new Date();
//   console.log(`joriy sana va vaqt ${vaaqt}`);
// })();

// 4-
// let numbers = [1, 2, 3, 4, 5];
// function filterItems(arr, predicate) {
//   return arr.filter(predicate);
// }
// console.log(filterItems(numbers, (n) => n > 3)

// 5-
// const person = {
//   fistName: "John",
//   lastname: "doe",
//   getFullName() {
//     return `${this.fistName} ${this.lastname}`;
//   },
// };
// console.log(person.getFullName());

// 6-
// const company = {
//   name: "TechCorp",
//   location: "San Francisco",
//   ceo: { name: "Jane Doe" },
// };

// console.log(company.ceo?.name);

// 7-
// let son = Number(prompt("Son kiriting"));
// let son2 = Number(prompt("Yana son kiriting"));
// let amal = prompt("Qanday amal qilmoqchisiz? (+, -, *, /.**)");

// let calculator = function (son, son2, amal) {
//   switch (amal) {
//     case "+":
//       return son + son2;
//     case "-":
//       return son - son2;
//     case "*":
//       return son * son2;
//     case "/":
//       return son / son2;
//     case "**":
//       return BigInt(son) ** BigInt(son2);
//     default:
//       return "Noto'g'ri amal kiritildi";
//   }
// };

// let natija = calculator(son, son2, amal);
// alert(`Natija ${natija}`);

// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------

// QOSHIMCHA

// const ELinput1 = document.querySelector("#window1");
// const ELinput2 = document.querySelector("#window2");
// const ELinputRES = document.querySelector("#el-input3");
// const btn1 = document.querySelector("#btn1");
// const btn2 = document.querySelector("#btn2");
// const btn3 = document.querySelector("#btn3");
// const btn4 = document.querySelector("#btn4"); 
// const btn5 = document.querySelector("#btn5");

// btn1.addEventListener("click", function () {
//   calcplus(ELinput1.value, ELinput2.value);
// });

// btn2.addEventListener("click", function () {
//   calcminus(ELinput1.value, ELinput2.value);
// });

// btn3.addEventListener("click", function () {
//   calcincrease(ELinput1.value, ELinput2.value);
// });

// btn4.addEventListener("click", function () {
//   calcdivide(ELinput1.value, ELinput2.value);
// });

// function calcplus(num1, num2) {
//   ELinputRES.value = Number(num1) + Number(num2);
// }

// function calcminus(num1, num2) {
//   ELinputRES.value = Number(num1) - Number(num2);
// }

// function calcincrease(num1, num2) {
//   ELinputRES.value = Number(num1) * Number(num2);
// }

// function calcdivide(num1, num2) {
//   ELinputRES.value = Number(num1) / Number(num2);
// }
