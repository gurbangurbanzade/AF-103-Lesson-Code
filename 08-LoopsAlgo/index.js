let arr = [
  {
    fullName: "Eli Eliyev",
    age: 100,
    isMarred: false,
    isMale: "Male",
    salary: 7500,
    departement: "Marketing",
    hobbies: ["oyun", "voleybol"],
    password: {
      email: "mail.com",
      family: {
        sister: "sister",
      },
    },
  },
  {
    fullName: "Ismayil Ismayilli",
    age: 19,
    isMarred: true,
    isMale: "Male",
    salary: 2500,
    departement: "Finace",
    hobbies: ["oyun", "voleybol", "futbol"],
    password: {
      email: "mail.com",
      family: {
        sister: "sister",
      },
    },
  },
  {
    fullName: "Zamir Guliyev",
    age: 20,
    isMarred: false,
    isMale: "Male",
    salary: 1500,
    departement: "Finace",
    hobbies: ["oyun", "voleybol", "futbol", "shopping"],
    password: {
      email: "mail.com",
      family: {
        sister: "sister",
      },
    },
  },
];

// numArr.sort((a, b) => a - b);
// console.log(numArr); // Output: [5, 10, 80]
arr.sort((a, b) => a.salary - b.salary);
console.log(arr);
// console.log(employees[1].age);
// console.log(employees[2].age);
// console.log(employees[2].departement);
// console.log(employees[2].hobbies);
// console.log(employees[2].hobbies[0]);
// console.log(employees[2].password);
// console.log(employees[2].password.email);

let sum = 0;
let max = 0;
let name = "";
let arr2 = [];
for (let i = 0; i < arr.length; i++) {
  // sum += arr[i].age;
  // if (arr[i].salary < 1000) {
  //   arr[i].salary += 500;
  // }
  // if (arr[i].age < 60) {
  //   arr2.push(arr[i]);
  // }

  if (arr[i].departement == "Finace") {
    if (arr[i].salary > max) {
      name = arr[i].fullName;
    }
  }
}

// console.log(name);
// console.log(sum / arr.length);
// console.log(arr2);

// let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];
// let count = 0;

// // let max = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   count = 0;

//   if (typeof arr[i] == "string") {
//     for (let j = 0; j < arr[i].length; j++) {
//       // console.log(arr[i][j]);
//       if (arr[i][j] == arr[i][j].toUpperCase()) {
//         // console.log(arr[i][j]);
//         count++;
//       }
//     }

//     if (count > 2) {
//       console.log(arr[i]);
//     }
//   }
// }
// console.log(count);

// // let index;
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] == "string") {
//     if (arr[i] == arr[i].toUpperCase()) {
//       console.log(arr[i]);
//     }
//   }

// if (arr[i].toString().length > max.toString().length) {
//   max = arr[i];
// }
// }
// console.log(max);

// let max = arr[0];
// // let index;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].toString().length > max.toString().length) {
//     max = arr[i];
//   }
// }
// console.log(max);

// let index;
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] == "boolean") {
//     console.log(arr[i]);
//     console.log(i);
//     index = i;
//   }
// }
// console.log(arr[index - 1]);
// console.log(arr[index + 1]);

// let arr = [2, 9, -5, -4, 182, 4];
// let max = arr[0];
// let min = arr[0];
// let maxIndex;
// let minIndex;

// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] == "number") {
//     if (arr[i] > max) {
//       max = arr[i];
//       maxIndex = i;
//     }
//     if (arr[i] < min) {
//       min = arr[i];
//       minIndex = i;
//     }
//   }
// }
// console.log("min", min);
// console.log("minIndex", minIndex);
// console.log("max", max);
// console.log("maxIndex", maxIndex);
// console.log(arr);

// arr[minIndex] = max;
// arr[maxIndex] = min;
// console.log(arr);
// salam();
// let salam = function () {
//   console.log("salam");
// };

// (function () {
//   console.log("sagol");
// })();

function sagol() {
  console.log(this);
}

sagol();

let salam = () => {
  console.log(this);
};
salam();

let obj = {
  name: "ad",
  soyad: "soyad",

  getFullName() {
    console.log(this.name + this.soyad);
    console.log(this);
  },
  cagir: () => {
    console.log(this);
  },
};

console.log(obj);
console.log(obj.getFullName());
obj.cagir();

obj.surname = "qurban";
console.log(obj);

function getName(name = "sagol", sagol) {
  // console.log(arguments.callee);
  console.log(name);
}
getName();
