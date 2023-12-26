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