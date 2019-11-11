class Person {
    first: string;
    last: string;
    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }
    fullInfo(): string {
        return this.first + ' ' + this.last;
    }
    get fullName() {
        return this.first + ' ' + this.last;
    }
    set fullName(name: string) {
        let buffer = name.split(' ');
        this.first = buffer[0];
        this.last = buffer[1];
    }
}


let p = new Person('Tom', 'Jones');
p.fullName = 'Bob Hope';
console.log(p.fullName);







