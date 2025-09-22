const user={
  username: "rohit",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function(){
    // console.log("Got user details from database");
    console.log(`Username: ${this.username}`);
    console.log(user);
  }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this)

// const promiseOne=new Promise();
// const date=new Date();

function User(username,loginCount,isLoggedIn){
  this.username=username;
  this.loginCount=loginCount;
  this.isLoggedIn=isLoggedIn
  this.greeting=function(){
    console.log(`Welcome ${this.username}`)
  }
  return this
}

const userOne=new User("rohit",12,true)
const userTwo=new User("chaiaurcode",11,false)
// console.log(userOne)
// console.log(userTwo)

console.log(userOne.constructor)

//step 1: - When this keyword is used then at first a new object is created this is called instance.
//step 2:- Second a constructor function is created/called for new keyword.
//step 3:- In third step all the arguments are injected in the this keyword.
//step 4:- In the fourth step we get all of these.