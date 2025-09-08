//for

// for(let index=0;index<=10;index++){
//   const element=index;
//   if(element==5){
//     console.log("5 is the best element");
//   }
//   console.log(element);
// }

// const arr=[1,2,3,4,5]

// for(const num of arr){
//   console.log(num);
// }

// const greetings="Hello World!"

// for(const greet of greetings){
//   console.log(`Each char is ${greet}`)
// }

//Maps
// const map=new Map()
// map.set('In',"India")
// map.set('USA',"United States of America")
// map.set('Fr',"France")

// console.log(map)

// for(const [key,value] of map){
//   console.log(key,':-',value);
// }

// const myObject={
//   'game1': 'NFS',
//   'game2':'Spiderman',
// }

// const myObject={
//   js: 'javascript',
//   cpp: 'C++',
//   rb: 'ruby',
//   swift: 'swift by apple'
// }

// for (const key in myObject) {
//   console.log(`${key} shortcut is for ${myObject[key]}`)
// }

// const programming=["js","rb","py","java","cpp"]

// for(const key in programming){
//   console.log(programming[key]);
// }

// const map=new Map()
// map.set('In',"India")
// map.set('USA',"United States of America")
// map.set('Fr',"France")
// map.set('IN',"India")

// for(const key in map){
//   console.log(key)
// }

// const coding = ["js","ruby","java","python","cpp"]
// coding.forEach(function(val){
//   console.log(val)
// })

// coding.forEach((item)=>{
//   console.log(item);
// })

// const myCoding=[
//   {
//     languageName: "javascript",
//     languageFileName: "js"
//   },
//   {
//     languageName: "java",
//     languageFileName: "java"
//   },
//   {
//     languageName: "python",
//     languageFileName: "py"
//   }
// ]

// myCoding.forEach((item)=>{
//   console.log(item.languageFileName);
// })

// const coding=["js","ruby","java","python","cpp"]

// const values=coding.forEach((item)=>{
//   console.log(item);
//   return item
// })

// console.log(values)

// const myNums=[1,2,3,4,5,6,7,8,9]

// const newNums=myNums.filter((num)=>num>4)

// const newNums1=myNums.filter((num)=>{
//   return num>4
// })
// console.log(newNums)
// console.log(newNums1)

// const myNums=[1,2,3,4,5,6,7,8,9]

// const newNums=[]

// newNums.forEach((num)=>{
//   if(num>4){
//     newNums.push(num)
//   }
// })

// console.log(newNums)

// const books=[
//   {title: 'Book One', genre: 'Fiction',publish: 1981,edition: 2004},
//   {title: 'Book Two', genre: 'Non-Fiction',publish: 1992,edition: 2008},
//   {title: 'Book Three',genre: 'History',publish: 1999,edition: 2007},
//   {title: 'Book Four',genre: 'Non-Fiction',publish: 1989,edition: 2010}
// ]

// let userBooks = books.filter((bk)=>bk.genre==='History')
// userBooks = books.filter((bk)=>{bk.publish>=1882})

// console.log(userBooks)

// const myNumers=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNumers.map((num)=>num+10)
// const newNums=myNumers.map((num)=>{return num+10})

// const newNums=myNumers
//              .map((num)=>num*10)
//              .map((num)=>num+1)
//              .filter((num)=>num>=40)
// console.log(newNums)

const myNums=[1,2,3]

// const myTotal=myNums.reduce(function(acc,currVal){
//   console.log(`acc: ${acc} and currval: ${currVal}`)
//   return acc+currVal
// },0)

const myTotal=myNums.reduce((acc,curr)=>acc+curr,0)

console.log(myTotal)