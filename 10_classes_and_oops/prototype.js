// // let myName="hitesh     "

// // console.log(myName.trim().length)

// let myHeros=["thor","spiderman"]

// let heroPower={
//   thor: "hammer",
//   spiderman: "sling",
//   getSpiderPower: function(){
//     console.log(`Spider power is ${this.spiderman}`);
//   }
// }

// Object.prototype.rohit=function(){
//   console.log(`rohit is present in all objects`)
// }

// // heroPower.rohit()

// // myHeros.rohit()

// Array.prototype.heyRohit=function(){
//   console.log(`Rohit says hello`)
// }
// myHeros.rohit()
// myHeros.heyRohit()
// heroPower.rohit()
// heroPower.heyRohit()

// //inheritance || prototypial inheritance

// const User={
//   name: "chai",
//   email: "chai@google.com"
// }

// const Teacher={
//   makeVideo: true
// }

// const TeachingSupport={
//   isAvailable: false
// }

// const TASupport={
//   makeAssignment: 'JS Assignment',
//   fullTime: true,
//   __proto__: TeachingSupport
// }

// Teacher.__proto__=User

//modern syntax for prototypial inheritance
// Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUserName="ChaiAurCode    "

String.prototype.trueLength=function(){
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`)
}

anotherUserName.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()