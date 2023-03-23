// const a = 10

/*
NOTE: MultiLine
*/

var temp
temp = 'Google'

let temp2 = 100
temp2 = 50

const temp3 = true
// temp3 = false

var temp4

const a = 10
const b = 5
let c = 5
c = 'ABC'
const sum = a + b
// console.log(sum)
// console.log(a + b + c)

const temp5 = [1, 2, 3, 4, 5, 'A']
// console.log(temp5[0])

temp5.forEach((item) => {
  //   console.log(item)
})

const filterTemp = temp5.filter((item) => item >= 3)
// console.log('Filter number more than 3 is: ', filterTemp)

temp5.push(6)
// console.log('Insert 6 to array', temp5)

// const car1 = {
//   color: 'Red',
//   brand: 'Honda',
//   model: {
//     a1: 'ASD#R',
//     a2: 'FG$REWEFS'
//   },
// }

// console.log(car1.model.a2)

// function sayHello() {
//     console.log('Hi');
// }

// NOTE: Fuction arg.
const sayHello = (number, name) => {
  console.log(`Number is: ${number} by ${name}`)
}

const nickname = 'Golf'

// sayHello(100, nickname)

// NOTE: Fuction return
const fristName = 'Nat'
const lastName = 'Noppawong'

const mergeName = (firstName, lastName) => {
  // NOTE: 1.
  // return firstName + " " + lastName

  // NOTE: 2.
  // const fullName = firstName + " " + lastName
  // return fullName

  // NOTE: 3.
  return `${fristName} ${lastName}`
}

// const fullName = mergeName(fristName, lastName)
// console.log(mergeName(fristName, lastName));

// NOTE: Conditions (if else)
const number1 = 40
// if(number1 < 30) {
//     console.log("number1 is more 30");
// }

// if(number1 < 30) {
//     console.log("number1 is less 30");
// }else {
//     console.log("number1 is more 30");
// }

// number1 < 30
//   ? console.log('number1 is less 30')
//   : console.log('number1 is more 30')

// if (number1 < 20) {
//     console.log("number1 is less 20");
// } else if (number1 < 30) {
//     console.log("number1 is less 30");
// } else if (number1 < 40) {
//     console.log("number1 is less 40");
// }else {
//     console.log("number1 is more 40");
// }

// NOTE: switch case
// switch (number1) {
//     case 20:
//         console.log("number1 is equal 20");
//         break
//     case 30:
//         console.log("number1 is equal 30");
//         break
//     case 40:
//         console.log("number1 is equal 40");
//         break
//     default:
//         console.log("number1 is more 40");
//         break;
// }

// NOTE: Loops & Iterations
const myCars = ['Ford Rapter', 'Honda CRV', 'Toyota Fortuner', 'Lambogini']

for (let index = 0; index < myCars.length; index++) {
  const car = myCars[index]
  // console.log(car);
}

const car1 = {
  color: 'Red',
  brand: 'Honda',
  model: {
    a1: 'ASD#R',
    a2: 'FG$REWEFS',
  },
}

for (const key in car1) {
  if (Object.hasOwnProperty.call(car1, key)) {
    const element = car1[key]
    // console.log(element);
  }
}

for (const item of myCars) {
  // console.log(item);
}

let i = 0
while (i == 10) {
  console.log('The number is: ', i)
  i++
}
