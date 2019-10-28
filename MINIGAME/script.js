
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
        this._x = Math.random()*1500;
        this._y = fruit.offsetTop;
    }

    down() {
        this._y += 10;
    }

}

class MoveFruits {
    static RenderElement (Fruit, domFruit) {
        
       
        domFruit.style.top = Fruit._y + "px" ;
    }

    static move(fruit){
        setInterval(){
            
        }
    }

}


class Move{
    static RenderElement (Player, ludzik) {
        
        ludzik.style.left = Player._x + "px" ;
        ludzik.style.top = Player._y + "px" ;
    }

    static move(event, Player1) {
        if (event.key === 'ArrowDown') {
                Player1.down();
                Move.RenderElement(Player1, domRectagle)
                console.log('moved down')
        }
        else if (event.key === 'ArrowUp'){
            Player1.up();
            Move.RenderElement(Player1, domRectagle)
            console.log('moved up')
        }
        else if (event.key === 'ArrowLeft'){
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
        // switch w zaleznosci od strzałka gore, dol, bok
     } //  case Player left
    
const domRectagle = document.querySelector('.human');
const domFruit = document.querySelector('.fruit')
const player1 = new Player(domRectagle);
const fruit1 = new Fruit(domFruit);

document.addEventListener('keydown', (event) => Move.move(event, player1))

console.log(player1);

// &&  x != 600