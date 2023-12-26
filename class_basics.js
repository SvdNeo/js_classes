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

  //class expression
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