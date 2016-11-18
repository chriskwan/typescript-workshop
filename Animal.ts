export default class Animal {
  public name: string;
  constructor(name: string){
    this.name = name;
  }
  move(distance: number) {
    console.log(this.name + " moved " + distance);
  }
  roar() {
    console.log("ROAR!!!");
  }
}
