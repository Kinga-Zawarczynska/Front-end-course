const data = [
    {nazwa: 'kupić kwiaty', czas: 300},
    {nazwa: 'naprawić auto', czas: 6500},
    {nazwa: 'dodać przepis', czas: 120},
    {nazwa: 'zrobić pranie', czas: 900}
];
/* funkcja serverDataToTable zamienia to z góry na:
[
['kupić kwiaty', 300],
['naprawić auto', 6500]

]
*/ 


const headerData = [
    'Nazwa zadania',
    'Potrzebny czas',
    'Usuń'
]



/*function filterData(filterName){
    const index = headerData.indexOf(filterName);
    const sData = serverData.sort((item1, item2) => {
        return item1[index] - item2[index];
    });
    addContent(sData);


}*/



function dodajHeader () {
   const header =  document.getElementsByClassName('header-tab')[0];
   headerData.forEach(item => {
       const newCell = document.createElement('div');
       newCell.classList.add('table-cell');
       newCell.innerHTML = item;
       newCell.onclick = () => filterData(item)
       header.appendChild(newCell);
   });


    

   

};

function serverDataToTableData(sData) {
    const deleteAdded = sData.map(item => {
        return {...item, delete: 'usuń'}
    });
    return deleteAdded.map(item => Object.values(item));
}

function deleteElement(index) {
    
    data.splice(index, 1);
    addContent(data);
}

function addContent(){
    const tableData = serverDataToTableData(data);
    
    const tableContentElement = document.getElementsByClassName('tabela-content')[0];
    tableContentElement.innerHTML = '';
    tableData.forEach((dataSet, i) => {
        const newRow = document.createElement('div')
        newRow.classList.add('table-row');
        dataSet.forEach(item => {
            const newCell = document.createElement('div');
            newCell.classList.add('table-cell');
            if(item === 'usuń'){
                const newButton = document.createElement('button');
                newButton.innerHTML = 'usuń';
                newButton.onclick=() => deleteElement(i);
                newCell.appendChild(newButton);
            } else {
                newCell.innerHTML = item;
            }
            newRow.appendChild(newCell);

        });
        tableContentElement.appendChild(newRow);
    });
}

//SPRAWDZ TU FUNKCJE!!!
function onTaskAdd() {
    const newName = document.getElementById('zadanie').value;
    const newTime = document.getElementById('czas').value;
    data.push({nazwa: newName, czas: newTime});
    addContent();
    
}



/* COŚ TU JEST ŹLE

function formDataToTable(formData) {
    const formData = localStorage.getItem("nazwa zadania") === document.querySelector("#zadanie");
    return formData;
}


function addNew(){
    const daneForm = formDataToTable(data);
    
}*/
    


dodajHeader();
addContent();

