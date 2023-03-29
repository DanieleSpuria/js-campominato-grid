/*************************************************************************************
1. classi con css;
2. griglia con for;
3. bottone che crea la griglia;
4. bottone che ritorna indietro;
5. numerare le celle;
6. inserire tutto nel click di un bottone;
7. inserire toggle a click delle celle;
*************************************************************************************/



const container = document.getElementsByClassName('container')[0];
const griglia = document.getElementsByClassName('griglia')[0];
const btnReturn = document.getElementById('return');
      btnReturn.classList.add('d-none');
const btn100 = document.getElementById('100');
btnClick(btn100, btnReturn, griglia);






//*********************************************************************** Funzioni ***

function cells(num, box) {
  
  for (let i = 0; i < num; i++) {
    
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.id = i + 1;
    box.appendChild(cell);
    
    console.log(cell.id);
  }
  
}



function btnClick(btn1, btn2, box){

  btn1.addEventListener('click', function() {

    cells(100, griglia);
    box.classList.add('d-flex');
    btn1.classList.add('d-none');
    btn2.classList.remove('d-none');

  })

  btn2.addEventListener('click', function() {

    box.classList.remove('d-flex');
    btn1.classList.remove('d-none');
    btn2.classList.add('d-none');

  })
  

}

