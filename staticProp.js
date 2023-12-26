class Article{
    constructor(title,date){
    this.title = title
    this.date = date
}
static createTodays(){
    return new this("The Earth",new Date())
}
}
let article1 = Article.createTodays()
console.log(article1.title)

class Birds{
    static Planet = "Earth";
    constructor(name,speed){
        this.name = name;
        this.speed = speed;
    }
    run(speed=0){
        this.speed += speed
        console.log(`${this.name} flies at a speed of ${this.speed}`)
    }
    static compare(birdA,birdB){
        return birdA.speed - birdB.speed
    }
}
class swan extends Birds{
    fly(){
console.log(`${this.name} flies`)
}
}
let swans = [new swan("white swan",10),new swan("black swan",5)]
swans.sort(swan.compare)
swans[0].fly()

//Class extends Object?
class Rabbit extends Object {
    constructor(name) {
      super(); 
      this.name = name;
    }
  }
  
  let rabbit = new Rabbit("Rab");
  
  console.log( rabbit.hasOwnProperty('name') );