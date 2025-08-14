/**
 * =========================================================
 * DEMONSTRATION: ES5 → ES6+ → TypeScript
 * Project: "Animals OOP Demo"
 * This file walks through ES6+ version of the code.
 * Shows how to implement OOP concepts using classes.
 * =========================================================
 */

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }

    printPrototypeChain() {
    let current = this;
    const chain = [];

    // Walk up the prototype chain
    while (current !== null) {
      const ctor = current.constructor ? current.constructor.name : "null";
      if (!chain.includes(ctor)) {
        chain.push(ctor);
      }
      current = Object.getPrototypeOf(current);
    }

    console.log(chain.join(" → "));
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  bark() {
    console.log(`${this.name} barks.`);
  }
}

const myDog = new Dog("Rex", "German Shepherd");
myDog.printPrototypeChain();
