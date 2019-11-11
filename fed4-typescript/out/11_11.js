class Person {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    fullInfo() {
        return this.first + ' ' + this.last;
    }
    get fullName() {
        return this.first + ' ' + this.last;
    }
    set fullName(name) {
        let buffer = name.split(' ');
        this.first = buffer[0];
        this.last = buffer[1];
    }
}
let p = new Person('Tom', 'Jones');
p.fullName = 'Bob Hope';
console.log(p.fullName);
//# sourceMappingURL=11_11.js.map