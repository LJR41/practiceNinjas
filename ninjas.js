class Ninja{
    constructor(name="Anon Ninja"){
        this.name =name
        this.health = 90
        this.speed = 3
        this.strength = 3
    }

    sayName(){
        console.log(`My name is ${this.name}`)
        return this;
    }

    showStats(){
        console.log(`Name: ${this.name}`)
        console.log(`Strength: ${this.strength}`)
        console.log(`Speed: ${this.speed}`)
        console.log(`Health: ${this.health}`)
        return this;
    }

    drinkSake(){
        console.log(`${this.name} takes a drink of sake`)
        this.health += 10
        return this
    }
}


const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
