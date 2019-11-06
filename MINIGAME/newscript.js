const playerWidth = 30;
const fruitWidth = 30;
const playerHeight = 30;
const fruitHeight = 30;



class Player {
  constructor(human) {
    (this.x = human.offsetLeft), (this.y = human.offsetTop);
  }

  left() {
    this.x -= 10;
  }
  right() {
    this.x += 10;
  }
  // up() {
  //     this._y -= 10;
  // }
  down() {
    this.y += 10;
  }

  reset() {
    this.x = 750;
    this.y = 680;
  }
}

class Fruit {
  constructor(fruit, speed) {
    this.domFruit = fruit;
    this.speed = speed;
    this.x = Math.random() * 800;
    this.y = fruit.offsetTop;
  }

  down() {
    this.y += this.speed;
  }
}

class MoveFruits {
  static RenderElement(Fruit, domFruit) {
    domFruit.style.top = Fruit.y + "px";
    domFruit.style.left = Fruit.x + "px";
  }

  static move(fruit, domFruit) {
    if (fruit.y > 760) {
      setTimeout(() => {
        domFruit.remove();
      }, 1000);
    } else {
      fruit.down();
      MoveFruits.RenderElement(fruit, domFruit);
    }
  }

}

class Move {
  static RenderElement(Player, ludzik) {
    ludzik.style.left = Player.x + "px";
    ludzik.style.top = Player.y + "px";
  }

  static move(event, Player1) {
    if (event.key === "ArrowLeft") {
      Player1.left();
      Move.RenderElement(Player1, domRectagle);
      console.log("moved left");
    } else if (event.key === "ArrowRight") {
      Player1.right();
      Move.RenderElement(Player1, domRectagle);
      console.log("moved right");
    }

    if (Player1.y >= 775) {
      alert("YOU LOST! PLAY AGAIN :)");
      Player1.reset();
      Move.RenderElement(Player1, domRectagle);
    } else if (Player1.y <= 0) {
      alert("YOU LOST! PLAY AGAIN :)");
      Player1.reset();
      Move.RenderElement(Player1, domRectagle);
    } else if (Player1.x >= 1600) {
      alert("YOU LOST! PLAY AGAIN :)");
      Player1.reset();
      Move.RenderElement(Player1, domRectagle);
    } else if (Player1.x <= 0) {
      alert("YOU LOST! PLAY AGAIN :)");
      Player1.reset();
      Move.RenderElement(Player1, domRectagle);
    }
  }
}

const domContainer = document.querySelector(".container");
const domRectagle = document.querySelector(".human");
const player1 = new Player(domRectagle);

document.addEventListener("keydown", event => Move.move(event, player1));

function start() {
  // const stepOfFalling = 2;
  const intervalOfFalling = 100;
  const intervalOfNewFruit = 5000;
  let fruits = [];
  setInterval(() => {
    const newDomFruit = document.createElement("div");
    newDomFruit.classList.add("fruit");
    domContainer.appendChild(newDomFruit);
    Fruit;
    const newFruit = new Fruit(newDomFruit, Math.random() * 3 + 2);

    fruits.push(newFruit);

    // MoveFruits.addFruit(newFruit)
  }, intervalOfNewFruit);

  setInterval(() => {
    fruits.forEach(fruit => {
      MoveFruits.move(fruit, fruit.domFruit);
    });
    checkCollision(fruits, player1)
  }, intervalOfFalling);

  
  function checkCollision(fruits,player) {
 
    fruits.forEach(fruit => {
      //left edge fruit
      let leftEdgeFruit = fruit.x;
      let rightEdgeFruit = fruit.x + fruitWidth;
      let leftEdgePplayer = player.x;
      let rightEdgePlayer = player.x + playerWidth;
      let bottomEdgeFruit = fruit.y + fruitHeight;
      let topEdgePlayer = player.y;
      let bottomEdgePlayer = player.y + playerHeight;


      // console.log(fruitWidth)
       if ((((leftEdgePplayer <= leftEdgeFruit) && (leftEdgeFruit <= rightEdgePlayer  )) ||
          ((leftEdgePplayer <= rightEdgeFruit) && (rightEdgeFruit <= rightEdgePlayer ))) &&
          ((topEdgePlayer <= bottomEdgeFruit) && (bottomEdgeFruit <= bottomEdgePlayer)) ) {

            console.log('KOLIZJA'); 
            fruit.domFruit.remove();
          }
        // użytkownik dostaje ounkt
       else {
        // nieMaKolizji(); //uzytkownik traci punkt
        
      }
    });
 
  


}
}
start();


// console.log(player1);
