class Character{
    constructor(name,energy,id){
        this.name=name;
        this.energy=energy;
        this.id=id;
    }

    display = function(){
        document.getElementById(this.id).innerHTML=`<p> Name: ${this.name} </p> <p> Energy: ${this.energy} </p>`;
    }

    attack = function(opponent,item){
        let newEnergy = opponent.energy - item.iHitPoints;
        opponent.energy = newEnergy;
        opponent.display();
        document.getElementById("console").innerHTML=`<p> ${this.name} is attacking ${opponent.name} with a ${item.iName} ${item.img} ... </p>`;

        // print game over on the HTML console when energy = 0
        if (opponent.energy <= 0 ){
            document.getElementById(opponent.id).innerHTML=`<p> You Died </p>`
            document.getElementById("console").innerHTML=`<p> Game Over! ${this.name} wins! ${opponent.name} looses! </p>`;
        }
    }
}

const character1= new Character("Yoshi", 100, "c1");
const character2 = new Character("Toad", 100, "c2");

character1.display();
character2.display();

class Item{
    constructor(iName, iHitPoints, img){
        this.iName=iName;
        this.iHitPoints=iHitPoints;
        this.img=img;
    }
}

const item1 = new Item('Goomba',20, '<img class="imgItem" src="img/goomba.jpg">');
const item2 = new Item('Banana',5, '<img class="imgItem" src="img/banana.jpg">');
const item3 = new Item('Green Shell',10, '<img class="imgItem" src="img/greenshell.jpg">');

const items = [item1,item2,item3];

function selectItem(){
    let selection = Math.floor(Math.random()*3);
    return items[selection];
}

// restart function --- global

const restart = function(){
    if (opponent.energy <= 0 ){
    document.getElementById(this.id).innerHTML=`<p> Name: ${this.name} </p> <p> Energy: ${this.energy} </p>`;
    }

    const character1= new Character("Yoshi", 100, "c1");
    const character2 = new Character("Toad", 100, "c2");

    character1.display();
    character2.display();
    }
