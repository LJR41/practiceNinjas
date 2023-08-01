// Pair Programming with Eric, Anthony, Kye, Daisy, Rich,Viviana,Christian

class Ninja{
    constructor(name="Anon Ninja",health=90,speed=3,strength=3){
        this.name =name
        this.health = health
        this.speed = speed
        this.strength = strength
    }

    sayName(){
        console.log(`My name is ${this.name}`)
        return this;
    }

    showStats(){
        console.table(this)
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


class Sensei extends Ninja{
    constructor(name="Default"){
        super(name,200,10,10)
        this.wisdom = 10
    }

    showStats(){
        super.showStats()
    }

    speakWisdom(){
        super.drinkSake()
        console.log("Set your heart ablaze")
    }
}

const newSensei = new Sensei()

newSensei.showStats()
newSensei.speakWisdom()
newSensei.showStats()