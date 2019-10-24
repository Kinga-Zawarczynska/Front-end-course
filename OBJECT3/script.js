class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }

}

class Student extends Person {
    constructor(name, age, profile, adress, id) {
        super(name, age);
    this.role = 'student';
    this.profile = profile;
    this.adress= adress;
    this.id=id;
    
    }

    displayFullInfo(){
        console.log('Student: ' + this.name +  " age: " + this.age + '' + this.profile)
    }
}

class Teacher extends Person {
    constructor(name, age, profile, adress, id) {
        super(name, age);
    this.role = 'teacher';
    this.profile = profile;
    this.adress= adress;
    this.id=id;
    
    }

    displayFullInfo(){
        console.log('Teacher: ' + this.name +  " age: " + this.age + '' + this.profile)
    }
}

var students = [
    new Student("Kamil", 12, 'A', "Gdańsk", 1223),
    new Student("Ada", 12, 'B', "Gdańsk", 4567),
    new Student("Andrzej", 12, 'A',"Gdańsk", 4563),
    new Student("Franek", 12, 'A', "Gdańsk", 8759),
    new Student("Doris", 12, 'B', "Gdańsk", 0927)
  ];
  var teachers = [
    new Teacher("Doris", 12, 'B', "Gdańsk", 0927),
    new Teacher("Franek", 12, 'A', "Gdańsk", 8759),
    new Teacher("Andrzej", 12, 'A',"Gdańsk", 4563),
    new Teacher("Ada", 12, 'B', "Gdańsk", 4567),
    new Teacher("Kamil", 12, 'A', "Gdańsk", 1223)
  ];
  
  var o_count2 = document.querySelector("#display");
  
  var o_html2 = "";
  o_html2 = `<div class="naglowek"> ${"Studenci"} </div>`;
  students.map(element => {
    
    o_html2 += ` 
    <div class = "row"> 
  <div class="item"> ${element.name}</div> 
  <div class="item"> ${element.adress}</div>
  <div class="item"> ${element.id}</div>
  <div class="item"> ${element.role}</div>
  <div class="item"> ${element.profile}</div>
  
  </div>`;
  });
  o_html2 += `<div class="naglowek"> ${"Nuczyciele"} </div>`;
  teachers.map(element => {
    o_html2 += `<div class = "row"> 
    <div class="item"> ${element.name}</div> 
    <div class="item"> ${element.adress}</div>
    <div class="item"> ${element.id}</div>
    <div class="item"> ${element.role}</div>
    <div class="item"> ${element.profile}</div>
    
    </div>`;
  });
  
  o_count2.innerHTML = o_html2;

