class User{
    constructor(name){
        this.name = name
    }
    sayHi(){
        console.log(`Hello its me ${this.name}`)
    }
}
const user1 = new User("Sanjay");
console.log(user1.sayHi());
console.log(typeof user1)
console.log(typeof User)
console.log(User === User.prototype.constructor)
console.log(User.prototype.sayHi);

function user(name) {
    this.name = name;
  }
  // a function prototype has "constructor" property by default,
  // so we don't need to create it
  
  // 2. Add the method to prototype
  user.prototype.sayHi = function() {
    console.log(this.name);
  };
  
  // Usage:
  let user2 = new user("John");
  user2.sayHi();

  //unamed class expression
  let member = class{
    constructor(id){
        this.id =id
    }
    memberId(){
        return this.id
    }
  }
  const newMember = new member("12458")
  console.log(newMember.memberId())

  //make classes dynamically “on-demand”
  function members(iD){
    return class{
        memberId(){
            return iD
        }
    }
  }
  const member1 = members("456");
  console.log(new member1().memberId())

  class sports{
    constructor(team){
        this._team = team

    }
    get team(){
        return this._team
    }
    set team(val){
 this._team = val;
    }
  }
  let sports1 = new sports("India")
  console.log(sports1.team)
// class User {

//     constructor(name) {
//       // invokes the setter
//       this.name = name;
//     }
  
//     get name() {
//       return this._name;
//     }
  
//     set name(value) {
//       if (value.length < 4) {
//         alert("Name is too short.");
//         return;
//       }
//       this._name = value;
//     }
  
//   }
  
//   let user = new User("John");
//   alert(user.name); // John

//Making bound methods with class fields
class button{
    constructor(val){
        this.val = val
    }
    click = ()=>{
        console.log(` Button is  ${this.val}`)
    }
}
let btn = new button("Clicked")
setTimeout(btn.click(),1000);

//task 1 convert function to class constructor
class Clock {
  constructor({template}){
    this.template = template;

  }
    
     render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
    stop() {
        clearInterval(this.timer);
      }
    
      start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
      }
}
const clock = new Clock({template:'h:m:s'})
clock.start();

// class car{
//     constructor(name){
//         this.name = name
//     }
//     present (){
//         return `I have a car with name ${this.name}`
//     }
// }
// class model extends car{
//     constructor(name,mod){
//         super(name);
//         this.mod = mod;
//     }
//     show(){
//         return `this.present() is and its model is ${this.mod}`
//     }
// }
// const myCar = new car("Ford","Freestyle");
// console.log(myCar)