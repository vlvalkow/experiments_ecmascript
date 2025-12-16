/**
 * =========================================================
 * DEMONSTRATION: ES5 → ES6+ → TypeScript
 * Project: "Animals OOP Demo"
 * This file walks through ES5 version of the code.
 * Shows how to implement OOP concepts using prototypes.
 * =========================================================
 */

function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(this.name + " makes a sound.");
};

Animal.prototype.printPrototypeChain = function() {
  let current = this;
  var chain = [];

  while (current !== null) {
    var ctor = current.constructor ? current.constructor.name : "null";
    if (chain.indexOf(ctor) === -1) {
      chain.push(ctor);
    }
    current = Object.getPrototypeOf(current);
  }

  console.log(chain.join(" → "));
};

// Child constructor
function Dog(name, breed) {
  Animal.call(this, name); // Call parent constructor
  this.breed = breed;
}

// Inherit from Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Add Dog-specific method
Dog.prototype.bark = function() {
  console.log(this.name + " barks.");
};

var myDog = new Dog("Rex", "German Shepherd");
myDog.printPrototypeChain();
