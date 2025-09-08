// const marvel_heros=["thor","Ironman","spiderman"]
// const dc_heros=["superman","flash","batman"]
// marvel_heros.push(dc_heros)

// console.log(marvel_heros)

// // marvel_heros.concat(dc_heros)
// // console.log(marvel_heros)

// const allHeros=marvel_heros.concat(dc_heros)
// console.log(allHeros)

// const all_new_heros=[...marvel_heros,...dc_heros]
// console.log(all_new_heros)

// const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

// const real_another_array=another_array.flat(Infinity);
// console.log(real_another_array)

// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"))

// console.log(Array.from({name: "Hitesh"}))   //interesting

// let score1=100
// let score2=200
// let score3=300

// console.log(Array.of(score1,score2,score3))


// const myArr=[0,1,2,3,4,5]

// const myHeros=["Ironman","captain america"]
// const myArr2=new Array(1,2,3,4)

// console.log(myArr)

// myArr.push(6)
// myArr.push(7)
// myArr.push(10)
// myArr.pop()
// myArr.unshift(9)
// myArr.shift()
// console.log(myArr)
// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3))

// const newArr=myArr.join()
// console.log(myArr)
// console.log(newArr)

// const marvel_heros=["thor","Ironman","spiderman"]
// const dc_heros=["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3][1]);

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros)

// const all_new_heros=[...marvel_heros,...dc_heros]
// console.log(all_new_heros);

// const another_array=[1,2,3,[4,5,6],7,[6,7,]]
// const real_another_array=another_array.flat(Infinity)
// console.log(real_another_array)

// console.log(Array.isArray("Rohit"))
// console.log(Array.from("Rohit"))
// console.log(Array.from({name: "Rohit"}))


// let score1=100
// let score2=200
// let score3=300

// console.log(Array.of(score1,score2,score3))


// const mySym=Symbol("key1")

// const JsUser= {
//   name: "Rohit",
//   age: 24,
//   location: "Jaipur",
//   email: "imrohitgupta2001@gmail.com",
//   isLoggedIn: false,
//   lastLoginDays: ["Monday","Saturday"]
// }

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["name"])

// JsUser.email="hitesh@gmail.com"
// Object.freeze(JsUser)
// JsUser.age="example@gmail.com"
// console.log(JsUser.email)
// JsUser.greeting=function(){
//   console.log("Hello JS user")
// }

// JsUser.greeting=function(){
//   console.log("Hello JS user")
// }

// const tinderUser=new Object();
// // console.log(tinderUser) 

// tinderUser.id="1234"
// tinderUser.name="Sammy"
// tinderUser.isLoggedIn=false

// // console.log(tinderUser)

// const regularUser={
//   email: "some@gmail.com",
//   fullName: {
//     userfullname:{
//       firstname: "rohit",
//       lastname: "gupta"
//     }
//   }
// }

// // console.log(regularUser)
// // console.log(regularUser.fullName.userfullname)

// // const obj1={1: "a",2: "b"}
// // const obj2={3: "c",4: "d"}
// // const obj3={obj1,obj2}
// // console.log(obj3)

// const obj4=Object.assign({},obj1,obj2)
// const obj5={...obj1,...obj2}
// const users=[{
//   id: 1,
//   email: "h@gmail.com"
// },
// {
//   id: 2,
//   email: "r@gmail.com"
// }
// ]

// users[1].email;
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// const course={
//   coursename: "js in hindi",
//   price: "999",
//   courseInstructor: "rohit"
// }

// const {courseInstructor: instructor}=course;
// // console.log(courseInstructor)
// console.log(instructor)

// // {
// //   "name": "hitesh",
// //   "coursename": "jsin hindi",
// //   "price": "free"
// // }

// function add(number1,number2){
//   console.log(number1+number2);
// }

// add(2,3)



// let a=20
// const b=20
// let c=30

// console.log(a);
// console.log(b);
// console.log(c);

// function one(){
//   const username="hitesh"

//   function two(){
//     const website="youtube"
//     console.log(username);
//   }
//   console.log(website)
//   two()
// }
// one()

// if(true){
//   const username="hitesh"
//   if(username==="hitesh"){
//     const website="youtube"
//     console.log(username+website)
//   }
// }

// console.log(website)
// console.log(username)

// addOne(5);
// function addOne(num){
//   console.log(num+1);
//   return num+1;
// }

// const addTwo= function(num){
//   console.log(num+2);
//   return num+2;
// }
// addTwo(6)

// const user={
//   username: "rohit",
//   price: 999,

//   welcomeMessage: function(){
//   console.log(`${this.username}, welcome to website`)
// }
// }

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
// console.log(this)

// function chai(){
//   let username="hitesh"
//   console.log(this.username)
// }

// chai()

// const chai=function(){
//   let username="hitesh"
//   console.log(this.username)
// }
// chai()

// const chai= () => {
//   let username="hitesh"
//   console.log(this.username)
// }
// chai()

// const addTwo=(num1,num2)=>{
//   return num1+num2;
// }

// const addTwo=(num1,num2) => num1+num2

// console.log(addTwo(3,4))

// const addTwo=(num1,num2)=>({username: "rohit"})
// console.log(addTwo(3,4))

//Immediately Invoked Function Expressions (IIFE)
// (function chai(){
//   console.log(`DB CONNECTED`);
// })();

// ( function aurcode(){
//   console.log(`DB CONNECTED TWO`);
// })();

// ( (name)=>{
//   console.log(`DB CONNECTED TWO ${name}`);
// })('rohit')

// const isUserLoggedIn=true
// const temperature=41

// if(2==="2"){
//   console.log("less than 50")
// }
// if(temperature<50){
//   console.log("temperature is less than 50")
// }
// console.log("temperature is less than 50")
//<,>,<=,>=,==,!=,===
//=== is used for type checking as well.So it checks strictly.

// const score=200

// if(score>100){
//   let power="fly"
//   console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

// if(balance>500) console.log("test"),console.log("test2")

// const balance=1000
// if(balance<500){
//   console.log("less than");
// } else {
//   console.log("greater than");
// }


// const month="march"

// switch (month){
//   case "jan":
//     console.log("January")
//     break;
//   case "feb":
//     console.log("February")
//     break;
//   case "march":
//     console.log("March")
//     break;
//   case "april":
//     console.log("April")
//     break;
//   default:
//     console.log("default case match")
//     break;
// }

// const userEmail="h@hitesh.ai"
// if(userEmail){
//   console.log("Got user email")
// } else{
//   console.log("Don't have user email")
// }

//falsy values

//false, 0, -0, BigInt 0n,"",null,undefined,NaN

//truthy values 
//"0",'false', " ", [],{},function(){}

// if(userEmail.length===0){
//   console.log("Array is empty");
// }

// const emptyObj={}

// if(Object.keys(emptyObj).length===0){
//   console.log("Object is empty");
// }

//Nullish Coalescing Operator (??): null undefined
// let val1;
// val1=5 ?? 10
// val1=null ?? 10
// val1=undefined ?? 15

console.log(val1)

//Ternary operator

//condition ? true : false

const iceTeaPrice=100
iceTeaPrice>=80