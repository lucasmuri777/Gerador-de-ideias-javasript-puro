const tableForXLSX = document.querySelector('#planilhaInstagram');
let itens = []

function verificacao(array){
    let table = document.querySelector('#planilhaInstagram table')
    if(table){
        dawloadXLSX(array)
    }else{
        alert("Você não pode baixar uma planilha vazia!")
    }
}
 
const dawloadXLSX = (array) =>{
    let name = document.querySelector('#mes').value
    const wb = XLSX.utils.book_new();
    wb.Props = {
        Title: `Agenda de ${name}`,
        Subject: `Agenda de ${name}`,
        Author: 'Gerador de planilha exel',
        CreatedDate: new Date(),
    };

    wb.SheetNames.push(name);

    const dados = [];
    array.forEach((e)=>{
        dados.push(e)
    })
    

    const ws = XLSX.utils.aoa_to_sheet(dados);

    wb.Sheets[name] = ws;

    XLSX.writeFile(wb, `Agenda de ${name}.xlsx`,
    {bookType: 'xlsx', type:'bynary'});

};

let btnDawload = document.querySelector('#baixarPlanilha');
btnDawload.addEventListener('click', ()=>{
    let table = tableForXLSX.querySelectorAll(".table tr")
    let table2 = tableForXLSX.querySelectorAll(".table tr th")
    
    table.forEach((a)=>{
       let arr = [];
       let num = a.cells
       for (let i = 0; i < num.length; i++) {
        arr.push(num[i].innerHTML)
        }
       itens.push(arr)
    })
    verificacao(itens);
})