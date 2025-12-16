/**
 * =========================================================
 * DEMONSTRATION: ES5 → ES6+ → TypeScript
 * Project: "Animals OOP Demo"
 * This file walks through TypeScript version of the code.
 * Shows OOP concepts using classes and adding type safety.
 * =========================================================
 */

class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak(): void {
    console.log(`${this.name} makes a sound.`);
  }

  printPrototypeChain(): void {
    let current: any = this; // 'any' because prototype chain can have various shapes
    const chain: string[] = [];

    while (current !== null) {
      const ctorName = current.constructor ? current.constructor.name : "null";
      if (!chain.includes(ctorName)) {
        chain.push(ctorName);
      }
      current = Object.getPrototypeOf(current);
    }

    console.log(chain.join(" → "));
  }
}

class Dog extends Animal {
  breed: string;

  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }

  bark(): void {
    console.log(`${this.name} barks.`);
  }
}

// Example usage
const myDog = new Dog("Rex", "German Shepherd");
myDog.printPrototypeChain(); 
// Output: Dog → Animal → Object → null
