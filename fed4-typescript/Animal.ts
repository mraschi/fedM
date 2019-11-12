class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
    brush() {
        return "I am brushing" + this.name;
    }
}

class Dog extends Animal {
    race: string;
    constructor(name: string, race: string) {
        super(name);
        this.race = race;
    }
    brush() {
        return super.brush() + "of race" + this.race;
    }
}
class Cat extends Animal {
    race: string;
    constructor(name: string, race: string) {
        super(name);
        this.race = race;
    }
    brush() {
        return super.brush() + "of race" + this.race;
    }
}

let array: Animal[] = []
array.forEach((x) => console.log(x.brush()));


class Toy {
    type: string;
    constructor(type: string) {

        this.type =type