function  Animal(name, kg) {
    var name = name;
    var kg = kg;
    this.run = function () {
        console.log(name  + ` runs`)
    };
    var eat = function() {
        return kg;
    };
    this.howManyEat = function () {
        console.log( name + ` ест ` + eat() + ` килограмм`);
    }
    function getName() {
        return name;
    }
}

function Cat(name, kg) {
    Animal.apply(this, arguments);
    this.catEat = function () {
        console.log(`Cat’s name is ` + name);
    }
}

function Dog(name, kg) {
    Animal.apply(this, arguments);
    this.dogEat = function () {
        console.log(`Dog’s name is ` + name);
    }
}
var animal = new Animal('molly', 5);
animal.run();
animal.howManyEat();

var cat = new Cat(`вася`, 3);
var dog = new Dog(`шарик`, 10);
cat.catEat();
dog.dogEat();
cat.howManyEat();
dog.run();