/*************************************************************************************
1. classi con css;
2. griglia con for;
3. bottone che crea la griglia;
4. bottone che ritorna indietro;
5. numerare le celle;
6. inserire tutto nel click di un bottone;
7. inserire toggle a click delle celle;
*************************************************************************************/



//*************************************************************************** Html ***
const container = document.getElementsByClassName('container')[0];
const griglia = document.getElementsByClassName('griglia')[0];
const btnReturn = document.getElementById('return');
      btnReturn.classList.add('d-none');
const btn100 = document.getElementById('100');
const btn81 = document.getElementById('81');
const btn49 = document.getElementById('49');
btnClick1(btnReturn, btn100, btn81, btn49, griglia);
cells(100, griglia);
// cells(81, griglia);



//*********************************************************************** Funzioni ***
function cells(num, box) {
  
  for (let i = 0; i < num; i++) {
    
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.id = i + 1;
    box.appendChild(cell);
    
    cell.addEventListener('click', function() {
      
      cell.classList.toggle('active');
      console.log(cell.id);

    })
  } 
}
function btnClick1(btn1, btn2, btn3, btn4, box) {
  
  btn1.addEventListener('click', function() {
    
    box.classList.remove('d-flex');
    btn1.classList.add('d-none');
    btn2.classList.remove('d-none');
    btn3.classList.remove('d-none');
    btn4.classList.remove('d-none');
    
  }) 

  btn2.addEventListener('click', function() {

    box.classList.add('d-flex');
    btn1.classList.remove('d-none');
    btn2.classList.add('d-none');
    btn3.classList.add('d-none');
    btn4.classList.add('d-none');

  })  
}