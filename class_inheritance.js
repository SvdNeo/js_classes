class car {
    constructor(name) {
        this.name = name;
    }

    present() {
        return `I have a car with name ${this.name}`;
    }
}

class model extends car {
    constructor(name, mod) {
        super(name);
        this.mod = mod;
    }

    show() {
        return `${this.present()}  and its model is ${this.mod}`;
    }
}
const myCar = new model("Ford", "Freestyle");
console.log(myCar.show());

class employee{
    constructor(empName,empAge,empSalary){
    this.empName = empName;
    this.empAge = empAge;
    this.empSalary = empSalary;
}
info(){
    document.write(`<h3>Employee class</h3> Name:${this.empName} <br> Age:${this.empAge}<br> salary:${this.empSalary} <br>`)
}
}

class manager extends employee{
    info(){
        let ta = 2000;
        let da = 5000;
        let totalSal = this.empSalary+ta+da;
        document.write(`<h3>Employee class</h3> Name:${this.empName} <br> Age:${this.empAge}<br> salary:${totalSal} <br>`)
    }
}

const emp1 = new employee("Sanjay",29,25000)
const manager1 = new manager("Lakshmikant",30,50000)
emp1.info()
manager1.info()

//task1 Error creating an instance
class Animal {

    constructor(name) {
      this.name = name;
    }
  
  }
  
  class Rabbit extends Animal {
    constructor(name) {
      super(name)
      this.created = Date.now();
    }
  }
  
  let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
  alert(rabbit.name);

//Extended clock
class Clock {
    constructor({ template }) {
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

  class ExtendedClock extends Clock{
    constructor(options){
        super(options);
               const {precision = 1000} = options
        this.precision = precision
    }
    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
      }
  }