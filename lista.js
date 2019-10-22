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
    'Potrzebny czas'
]

function dodajHeader () {
   const header =  document.getElementsByClassName('header-tab')[0];
   headerData.forEach(item => {
       const newCell = document.createElement('div');
       newCell.classList.add('table-cell');
       newCell.innerHTML = item;
       header.appendChild(newCell);
   });


    

   

};

function serverDataToTableData(sData) {
    return sData.map(item => Object.values(item));
}

function addContent(){
    const tableData = serverDataToTableData(data);
    const tableContentElement = document.getElementsByClassName('tabela-content')[0];
    tableData.forEach(dataSet => {
        const newRow = document.createElement('div')
        newRow.classList.add('table-row');
        dataSet.forEach(item => {
            const newCell = document.createElement('div');
            newCell.classList.add('table-cell');
            newCell.innerHTML = item;
            newRow.appendChild(newCell);

        });
        tableContentElement.appendChild(newRow);
    });
}



dodajHeader();
addContent();

