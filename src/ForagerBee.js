class ForagerBee extends Bee {
  // TODO..
  constructor(props){
    super();
    this.age = 10;
    this.color = 'yellow';
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
  }
  forage () {
    this.treasureChest.push('treasure');
  }
};
