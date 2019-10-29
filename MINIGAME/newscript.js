
class Player {
    constructor(human){
        this._x = human.offsetLeft,
        this._y = human.offsetTop

    
    
    };


    left() {
        this._x -= 10;
    }
    right() {
        this._x += 10;
    }
    up() {
        this._y -= 10;
    }
    down() {
        this._y += 10;
    }

    reset(){
        


        this._x = 750
        this._y = 680
        
    }
    
}

class Fruit {
    constructor(fruit){
        this.domFruit = fruit;
        this._x = Math.random()*1500;
        this._y = fruit.offsetTop;
    }

    down() {
        this._y += stepOfFalling;
    }

}

const stepOfFalling = 2;
const intervalOfFalling = 10;
const intervalOfNewFruit = 2000;

class MoveFruits {
    static RenderElement (Fruit, domFruit) {
        domFruit.style.top = Fruit._y + "px" ;
        domFruit.style.left = Fruit._x + "px" ;
    }

    static move(fruit, domFruit){
            fruit.down();
            MoveFruits.RenderElement(fruit, domFruit);

            if (domFruit._y > 760){
                domFruit.reset();
                MoveFruits.RenderElement(Fruit, domFruit);
            }
        }
    }



class Move{
    static RenderElement (Player, ludzik) {
        
        ludzik.style.left = Player._x + "px" ;
        ludzik.style.top = Player._y + "px" ;
    }

    static move(event, Player1) {
        if  (event.key === 'ArrowLeft'){
            Player1.left();
            Move.RenderElement(Player1, domRectagle)
            console.log('moved left')
        }
        else if (event.key === 'ArrowRight'){
            Player1.right();
            Move.RenderElement(Player1, domRectagle)
            console.log('moved right')
        }

        if (Player1._y >=775){
            alert('YOU LOST! PLAY AGAIN :)')
            Player1.reset();
            Move.RenderElement(Player1, domRectagle)
        }
        else if (Player1._y <=0){
            alert('YOU LOST! PLAY AGAIN :)')
            Player1.reset();
            Move.RenderElement(Player1, domRectagle)

        }
        else if (Player1._x >=1600){
            alert('YOU LOST! PLAY AGAIN :)')
            Player1.reset();
            Move.RenderElement(Player1, domRectagle)

        }
        else if (Player1._x <=0){
            alert('YOU LOST! PLAY AGAIN :)')
            Player1.reset();
            Move.RenderElement(Player1, domRectagle)

        }
       }  
     }

const domContainer = document.querySelector('.container');
const domRectagle = document.querySelector('.human');
const player1 = new Player(domRectagle);

document.addEventListener('keydown', (event) => Move.move(event, player1))

function start() {
    const fruits = [];
    setInterval(() =>{
        const newDomFruit = document.createElement('div');
        newDomFruit.classList.add('fruit');
        domContainer.appendChild(newDomFruit);

        const newFruit = new Fruit(newDomFruit);

        fruits.push(newFruit);
    }, intervalOfNewFruit);

    setInterval(() => {
        fruits.forEach(fruit => {
            MoveFruits.move(fruit, fruit.domFruit);
        })
        
    }, intervalOfFalling
)
}

start()

console.log(player1);
