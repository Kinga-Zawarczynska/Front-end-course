




const car = {
    company: 'Skoda',
    type: 'Octavia',
    color: 'red',
    cost: 34500,
}

const person = {
    name: 'Adam',
    city: 'Gdansk',
    jobs: ['Scalac', 'InfoShare'],
}

const objectArray = [
    {name: 'Adam', isMale: true, age: 77},
    {name: 'Ania', isMale: false, age: 22},
    {name: 'Mateusz', isMale: true, age: 34},
    {name: 'Hania', isMale: false, age: 64},
    {name: 'Grazyna', isMale: false, age: 43},
]

const initialData = [1, 2, 3, 'Adam', 'Ewelina'];

const initialData2 = [1, 3, 5, 1, 1, 6];

/*const hehe = {
    name: 'Anielka',
};*/

const dataForMath = [1, 1.44, 5, 8.99, 7];
function onActionButtonClick() {

    //zad 1
    /*const lancuch = initialData.join(' ');
    console.log(lancuch);

    const newString = lancuch.split(' ');
    console.log(newString);
    //zad 2
    let index = initialData2.indexOf(1);
    const indices = [];
    while(index !== -1){
        indices.push(index);
        index = initialData2.indexOf(1, index + 1);

    }
    console.log(indices);*/
    //zad 3
    /*const cont = initialData.concat('concat', initialData2);
    console.log(cont);*/

    //zad 4
    /*const cont = initialData.concat('concat', initialData2);
    console.log(cont);
    const sliced = cont.slice(cont.indexOf('concat')+1);
    console.log(sliced);
    console.log(cont);
    console.log(cont, sliced)*/

    //zad z instancja 
    /*
    const huhu = {
        name: 'Anielka',
    };
    huhu.name = 'Ula';
    console.log(hehe.name);*/

    //zad z Math
    /*const minn = Math.floor(Math.min(...dataForMath));
    const maxx = Math.ceil(Math.max(...dataForMath));
    const losowa = Math.round(Math.random()*(maxx-minn)+minn);
    console.log(minn, maxx, losowa);*/

    //zad z datą
    /*let date = new Date();
    console.log(date);
    
    console.log(date.toLocaleDateString());
   
    console.log(Date.now());*/

    //zad z forEach
    /*initialData.forEach((item, i) =>  {

        if (typeof (item)  == 'number') {
            initialData[i] = item +1

        } 
        
        console.log(item);

});*/
    //zad zamien forEach na map
    /*console.log(initialData.map((element) => typeof(element) == 'number' ? element +1 : element));*/

    //zad z find
    /*const finder = initialData2.find( (item) => item > 2 ? true : false); 
    console.log(finder);
    const finder = initialData2.find( (item) => item > 2); 
    console.log(finder);*/

    //zad wypisz imiona TYLKO dziewczyn
    /*const girls = objectArray.filter(item => !item.isMale);
    girls.forEach(item => console.log(item.name));*/

    //zad FINAL
    const doZwiekszenia = initialData.filter(item => typeof(item) == 'number');
    console.log(doZwiekszenia);
    const zwiekszone = doZwiekszenia.map (item );
    console.log(zwiekszone);
        
    




    


}

function onDataButtonClick() {
}