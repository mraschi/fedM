class Animal {
    constructor(name) {
        this.name = name;
    }
    brush() {
        return "I am brushing" + this.name;
    }
}
class Dog extends Animal {
    constructor(name, race) {
        super(name);
        this.race = race;
    }
    brush() {
        return super.brush() + "of race" + this.race;
    }
}
class Cat extends Animal {
    constructor(name, race) {
        super(name);
        this.race = race;
    }
    brush() {
        return super.brush() + "of race" + this.race;
    }
}
let array = [];
array.forEach;
{
    (x) => {
        console.log(x.brush());
    };
}
//# sourceMappingURL=Animal.js.map