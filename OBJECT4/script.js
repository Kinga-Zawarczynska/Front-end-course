class Student{
    constructor(name, accountNumber) {
        this._name = name;
        this._accountNumber = accountNumber;
    }

    get name(){
        return this._name;
    }

   



    get accountNumber(){
        // return this._accountNumber.replace(this._accountNumber.slice(2,22), "********************");  
        
        // var str = this._accountNumber.replace(this._accountNumber.slice(2,22), '********************');
        // return  str;

       

        var str = this._accountNumber.split('');
        str.splice(2, 20, ' **** **** **** **** **** ');
        str = str.join('');
        return str;
        
        
        
    }


    


 
}

var students = [
    new Student("Kamil", '83000000000000000000002345'),
    new Student("Ada", '83000000000000000000002545'),
    new Student("Sylwek", '83000000000560000000002365'),
    new Student("Basia", '83000000000000000000002385'),
    new Student("Kacper", '83000000000000000000002145'),
  ];



