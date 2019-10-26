
class Player {
    constructor(human){
        this._x = human.offsetLeft,
        this._y = human.offsetTop

      
    
    }

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
        this._x = 285;
        this._y = 285;
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

        if (Player1._y >=565){
            alert('YOU LOST!')
            reset();
        }
        else if (Player1._y <=0){
            alert('YOU LOST!')
            reset();

        }
        else if (Player1._x >=565){
            alert('YOU LOST!')
            reset();

        }
        else if (Player1._x <=0){
            alert('YOU LOST!')
            reset();

        }
       

    
      

       }
        // switch w zaleznosci od strzałka gore, dol, bok
     } //  case Player left
    
const domRectagle = document.querySelector('.human');
const player1 = new Player(domRectagle);

document.addEventListener('keydown', (event) => Move.move(event, player1))

console.log(player1);

// &&  x != 600