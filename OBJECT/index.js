var person1 = {
  name: "Kinga",
  adress: "Gdańsk",
  studentIdNUmber: "123",
  profile: "a",

  displayFullInfo: function() {
    console.log(
      "Imię: " +
        this.name +
        " Adres " +
        this.adress +
        " Profil: " +
        this.profile
    ); //podejście używane typowo w ES5
    console.log(`Imię: ${this.name} Adres: ${this.adress}`); //obecnie najlepsza metoda
  },

  changeId: function(newId) {
    this.studentIdNUmber = newId;
  }
};

var person2 = {
  name: "Wojtek",
  adress: "Gdańsk",
  studentIdNUmber: "134",
  profile: "b",

  displayFullInfo: function() {
    console.log(
      "Imię: " +
        this.name +
        " Adres " +
        this.adress +
        " Profil: " +
        this.profile
    ); //podejście używane typowo w ES5
    console.log(`Imię: ${this.name} Adres: ${this.adress}`); //obecnie najlepsza metoda
  },

  changeId: function(newId) {
    this.studentIdNUmber = newId;
  }
};

/*var studentsList = [];

var Pearson = {
  name: "",
  adress: "",
  Id: "",
  profile: "",
  setData: function(name, adress, Id, profile) {
    (this.name = name),
      (this.adress = adress),
      (this.Id = Id),
      (this.profile = profile);
  },
  displayData: function() {
    console.log(this.name, this.adress, this.Id, this.profile);
  }
};

var student1 = Object.create(Pearson);
student1.setData("Jan", "Gdańsk", "1230", "a");

var student2 = Object.create(Pearson);
student2.setData("Ala", "Gdańsk", "1130", "b");

var student3 = Object.create(Pearson);
student3.setData("Edek", "Wrocław", "1235", "a");

var student4 = Object.create(Pearson);
student4.setData("Klaudia", "Warszawa", "1234", "b");

var student5 = Object.create(Pearson);
student5.setData("Steff", "Wrocław", "1232", "b");

var student6 = Object.create(Pearson);
student6.setData("Marek", "Gdańsk", "1223", "a");

var student7 = Object.create(Pearson);
student7.setData("Ida", "Warszawa", "1253", "b");

var student8 = Object.create(Pearson);
student8.setData("Dagmara", "Wrocław", "1283", "a");

var student9 = Object.create(Pearson);
student9.setData("Sylwek", "Warszawa", "1213", "b");

var student10 = Object.create(Pearson);
student10.setData("Greta", "Gdańsk", "1203", "a");

var naglowek = Object.create(Pearson);
naglowek.setData("Imię", "Miasto", "Nr albumu", "Profil");

studentsList.push(
  naglowek,
  student1,
  student2,
  student3,
  student4,
  student5,
  student6,
  student7,
  student8,
  student9,
  student10
);

console.log(studentsList);


var o_count = document.querySelector("#display");

var o_html = "";

studentsList.map(element => {
  o_html += `<div class = "row"> 
<div class="item"> ${element.name}</div> 
<div class="item"> ${element.adress}</div>
<div class="item"> ${element.Id}</div>
<div class="item"> ${element.profile} </div>
</div>`;
});

o_count.innerHTML = o_html;

console.log(o_html);*/

//TO SAMO ZA POMOCĄ CONSTRUCTOR FUNCTION
function Pearson2(name, id, adress) {
  this.name = name;
  this.id = id;
  this.adress = adress;
  this.changeId = function(newId) {
    this.id = newId;
  };
}

Pearson2.prototype.displayInfo = function() {
  console.log(this.role + this.name + this.adress + this.id);
};

function Student(name, id, adress) {
  Pearson2.call(this, name, id, adress);
  this.role = "student";
}
Student.prototype = Object.create(Pearson2.prototype);
Student.prototype.constructor = Student;

function Teacher(name, id, adress) {
  Pearson2.call(this, name, id, adress);
  this.role = "teacher";
}
Teacher.prototype = Object.create(Pearson2.prototype);
Teacher.prototype.constructor = Teacher;

// var students = [
//     new Pearson2("Kamil", 1203, "Gdańsk"),
//     new Pearson2("Ada", 1206, "Gdańsk"),
//     new Pearson2("Andrzej", 1209, "Gdańsk"),
//     new Pearson2("Franek", 1208, "Gdańsk"),
//     new Pearson2("Doris", 1207, "Gdańsk")
// ]

var students = [
  new Student("Kamil", 1203, "Gdańsk"),
  new Student("Ada", 1206, "Gdańsk"),
  new Student("Andrzej", 1209, "Gdańsk"),
  new Student("Franek", 1208, "Gdańsk"),
  new Student("Doris", 1207, "Gdańsk")
];
var teachers = [
  new Teacher("Kamil", 1203, "Gdańsk"),
  new Teacher("Ada", 1206, "Gdańsk"),
  new Teacher("Andrzej", 1209, "Gdańsk"),
  new Teacher("Franek", 1208, "Gdańsk"),
  new Teacher("Doris", 1207, "Gdańsk")
];

var o_count2 = document.querySelector("#display");

var o_html2 = "";

students.map(element => {
  o_html2 = `<div class="naglowek"> ${"Studenci"} </div>`;
  o_html2 += ` 
  <div class = "row"> 
<div class="item"> ${element.name}</div> 
<div class="item"> ${element.adress}</div>
<div class="item"> ${element.id}</div>
<div class="item"> ${element.role}</div>

</div>`;
});

teachers.map(element => {
  o_html2 += `<div class = "row"> 
  <div class="item"> ${element.name}</div> 
  <div class="item"> ${element.adress}</div>
  <div class="item"> ${element.id}</div>
  <div class="item"> ${element.role}</div>
  
  </div>`;
});

o_count2.innerHTML = o_html2;

// console.log(o_html2);
