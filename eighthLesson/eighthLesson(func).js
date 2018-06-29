function  Animal(name, kg) {
    this.name = name;
    this.kg = kg;
    this.run = function () {
        console.log(name  + ` runs`)
    };
    function eat() {
        return kg;
    };
    this.howManyEat = function () {
        console.log( this.name + ` ест ` + eat() + ` килограмм`);
    }
}
var animal = new Animal('molly', 5);
animal.run();
animal.howManyEat();


function Cat(name, kg) {
    Animal.apply(this, arguments);
    this.catEat = function () {
        console.log(`Cat’s name is ` + this.name);
    }
}

function Dog() {
    Animal.apply(this, arguments);
    this.dogEat = function () {
        console.log(`Dog’s name is ` + dog.name);
    }
}
var cat = new Cat(`вася`, 3);
var dog = new Dog(`шарик`, 10);

cat.catEat();
dog.dogEat();
cat.howManyEat();
dog.run();