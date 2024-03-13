class UseStatic {
    constructor(name, desc) {
        this.name= name;
        this.desc= desc;
    }
    calculate(number = 1) {
        return number*3;
    }
}

class Geometry extends UseStatic {
    constructor(long, name, desc) {
        super(name,desc);
        this.long = long;
    }
    calculate(number) {
        return number*2 + 2;
    }
}

let geometry = new Geometry(20, 'Nguyễn Hoàng Đạt', 'Học viên lớp JS C0224L1-RJ102');
console.log('long: ' + geometry.long);
console.log('name: ' + geometry.name);
console.log('desc: ' + geometry.desc);
console.log('calculate(number): ' + geometry.calculate(4));

