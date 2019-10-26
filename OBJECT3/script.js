class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
}

class Student extends Person {
  constructor(name, surname, age) {
    super(name, surname);
    this.role = "student";
    this.age = age;
  }

  displayFullInfo() {
    console.log(
      "Student: " + this.name + " age: " + this.age + "" + this.profile
    );
  }
}

class Teacher extends Person {
  constructor(name, surname, age) {
    super(name, surname);
    this.role = "teacher";
    this.age = age;
  }

  displayFullInfo() {
    console.log(
      "Teacher: " + this.name + " age: " + this.age + "" + this.profile
    );
  }
}

/*function Render(display, button, button2, inputName, inputSurname, inputAge, inputRole, db) {
    this.display = document.getElementById(display);
    this.button = document.getElementById(button);
    this.button2 = document.getElementById(button2);
    this.inputName = document.getElementById(inputName);
    this.inputSurname = document.getElementById(inputSurname);
    this.inputAge = document.getElementById(inputAge);
    
  };

  Render.prototype.getValuesFromInput = function() {
    return {
      name: this.inputName.value,
      surname: this.inputSurname.value,
      age: this.inputAge.value,
    }
  };

  Render.prototype.addClick = function() {
    var self = this;
    this.button.addEventListener('click', function(){
      var person = self.getValuesFromInput();
  
      dbInstance.addPerson(person);
      renderInstance.setHtml(dbInstance.database, self.container);
    });

    this.button2.addEventListener('click', function(){
        var person = self.getValuesFromInput();
    
        dbInstance2.addPerson(person);
        renderInstance.setHtml(dbInstance2.database, self.container2);
      });
  };
  */

var students = [
  new Student("Kamil", "Kowalski", 12),
  new Student("Ada", "Kowalski", 12),
  new Student("Sylwek", "Kowalski", 12),
  new Student("Basia", "Kowalski", 12),
  new Student("Kacper", "Kowalski", 12)
];
var teachers = [
  new Teacher("Ida", "Kowalski", 42),
  new Teacher("Franciszek", "Kowalski", 52),
  new Teacher("Olga", "Kowalski", 42),
  new Teacher("Michał", "Kowalski", 52),
  new Teacher("Kamila", "Kowalski", 62)
];

var o_count = document.querySelector("#students");
var o_count2 = document.querySelector("#teachers");

function render(arrayToMap, elementToRender, groupOf) {
  console.log(students);
  var o_html = "";
  o_html = `<div class="naglowek"> ${groupOf} </div>`;
  arrayToMap.map(element => {
    o_html += ` 
    <div class = "row"> 
  <div class="item"> ${element.name}</div> 
  <div class="item"> ${element.surname}</div>
  <div class="item"> ${element.age}</div>
  <div class="item"> ${element.role}</div>
  
  
  </div>`;
  });
  elementToRender.innerHTML = o_html;
}

render(students, o_count, "Studenci");
render(teachers, o_count2, "Nauczyciele");

const inputName = document.querySelector("#inputName");

const inputSurname = document.querySelector("#inputSurname");

const inputAge = document.querySelector("#inputAge");

const buttonS = document.getElementById("addButton");
const buttonT = document.getElementById("addButton2");

function add(arrayToPush, classOnArray) {
  const o_count = "";
  const inputName = document.querySelector("#inputName");
  console.log(inputName.value);
  const inputSurname = document.querySelector("#inputSurname");
  console.log(inputSurname.value);
  const inputAge = document.querySelector("#inputAge");
  console.log(inputAge.value);

  arrayToPush.push(
    new classOnArray(inputName.value, inputSurname.value, inputAge.value)
  );
  render();
}


buttonS.addEventListener("click", add);
buttonT.addEventListener("click", add);

students.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 1));
teachers.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 1));
