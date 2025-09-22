class User{
  constructor(username){
    this.username=username
  }
  logMe(){
    console.log(`Username: ${this.username}`);
  }

  static createId(){ //can't be accessed or used by any class object.
    return `123`
  }
}

const rohit=new User("rohit");
// console.log(rohit.createId());

class Teacher extends User{
  constructor(username,email){
    super(username);
    this.email=email;
  }
}

const iphone=new Teacher("iphone","i@phone.com")
console.log(iphone.createId())