class User{
  constructor(email,password){
    this.email=email;
    this.password=password;
  }
  get email(){
    return this._email.toUpperCase();
  }
  set email(value){
    this._email=value;
  }
  get password(){
    return `${this._password}rohit`;
  }
  set password(value){
    this._password=value;
  }
}
//In getter and setter if one is defined then another should be defined
const rohit=new User("h@hitesh.ai","123")
console.log(rohit.email)