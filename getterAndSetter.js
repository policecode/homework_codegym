class Person {
    constructor(name) {
        this.name= name;
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        this.name = newName;
    }
    walk() {
        return this.name + ' is moving';
    }
}

class Programmer extends Person { 
    constructor(name) {
        super(name);
    }

    getProgrammer() {
        return this.programmer;
      
    }
    setProgrammer(programmer) {
        this.programmer = programmer;
    }

    writeCode() {
        return 'run code ' + this.programmer;
    }
}

let programmer = new Programmer("Nguyễn Hoàng Đạt");
console.log("before use setName(): " + programmer.getName());
programmer.setName("Tên là Đạt")
console.log("after use setName(): " +programmer.getName());
console.log("use walk(): " +programmer.walk());

console.log("before use setProgrammer(): " + programmer.getProgrammer());
programmer.setProgrammer("Javascript")
console.log("after use setProgrammer(): " + programmer.getProgrammer());
console.log("use writeCode(): " +programmer.writeCode());