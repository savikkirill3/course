function  Animal(name, kg) {
    var name = name;
    var kg = kg;
    var eat = function() {
        return kg;
    };
    this.getName = function () {
        return name;
    };
    this.getKg = function () {
        return kg;
    };
}
    Animal.prototype.run = function () {
        console.log(this.getName()  + ` runs`)
    };


    Animal.prototype.howManyEat = function () {
        console.log( this.getName() + ` ест ` + this.getKg() + ` килограмм`);
    };

function Cat(name, kg) {
    Animal.apply(this, arguments);
}
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;
Cat.prototype.catEat = function () {
    console.log(`Cat’s name is ` + this.getName());
};

function Dog(name, kg) {
    Animal.apply(this, arguments);
}
Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;
Dog.prototype.dogEat = function () {
    console.log(`Dog’s name is ` + this.getName());
};
var animal = new Animal('molly', 5);
animal.run();
animal.howManyEat();

var cat = new Cat(`вася`, 3);
var dog = new Dog(`шарик`, 10);
cat.catEat();
dog.dogEat();
cat.howManyEat();
dog.run();