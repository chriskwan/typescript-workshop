import Animal from './Animal';

class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distance: number) {
    console.log("Slithering.");
    super.move(distance);
  }
  hiss() {
    console.log("hiss");
  }
}

// let jim: Snake;
// jim = new Snake("wee");
// jim.move(7);

class Horse extends Animal {
  move(distance: number) {
    console.log("Galloping");
    super.move(distance);
  }
  jump() {
    console.log("I jumped");
  }
}

let jim : Snake;
jim = new Snake("Jim");
jim.roar();

let anne : Animal = new Horse("Anne");

(<Horse>anne).jump();

jim.move(15);
jim.hiss();

anne.move(20);

if (anne instanceof Horse) {
  console.log("Yeah it's a horse...");
}
