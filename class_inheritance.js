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

