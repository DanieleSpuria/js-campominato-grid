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



//************************************************************************ Bottoni ***
btnClick(btn100, btnReturn, btn100, btn81, btn49, 100, 'calc(100% / 10)', griglia, '100%');
btnClick(btn81, btnReturn, btn100, btn81, btn49, 81, 'calc(100% / 9)', griglia, '90%');
btnClick(btn49, btnReturn, btn100, btn81, btn49, 49, 'calc(100% / 7)', griglia, '70%');

btnReturn.addEventListener('click', function() {
    
  griglia.classList.remove('d-flex');
  btnReturn.classList.add('d-none');
  btn100.classList.remove('d-none');
  btn81.classList.remove('d-none');
  btn49.classList.remove('d-none');
  
}) 



//*********************************************************************** Funzioni ***
function cells(num, width, box) {
  
  for (let i = 0; i < num; i++) {
    
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.style.width = width;
    cell.id = i + 1;
    box.appendChild(cell);
    
    cell.addEventListener('click', function() {
      
      cell.classList.toggle('active');
      console.log(cell.id);

    })
  } 
}

function btnClick(btn, btn1, btn2, btn3, btn4, num, width, box, widthBox) {
  
  btn.addEventListener('click', function() {

    box.innerHTML = '';
    box.style.width = widthBox;
    box.classList.add('d-flex');
    cells(num, width, box);
    btn1.classList.remove('d-none');
    btn2.classList.add('d-none');
    btn3.classList.add('d-none');
    btn4.classList.add('d-none');

  })  
}