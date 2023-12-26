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