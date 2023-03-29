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
const containerGriglia = document.getElementsByClassName('container-griglia')[0];
const griglia = document.getElementsByClassName('griglia')[0];
const btnReturn = document.getElementById('return');
      btnReturn.classList.add('d-none');
const btn100 = document.getElementById('100');
const btn81 = document.getElementById('81');
const btn49 = document.getElementById('49');



//************************************************************************ Bottoni ***
btnClick(btn100, btnReturn, btn100, btn81, btn49, 100, 'calc(100% / 10)', containerGriglia, griglia, '100%', '100%');
btnClick(btn81, btnReturn, btn100, btn81, btn49, 81, 'calc(100% / 9)', containerGriglia, griglia, '90%', '90%');
btnClick(btn49, btnReturn, btn100, btn81, btn49, 49, 'calc(100% / 7)', containerGriglia, griglia, '70%', '70%');

btnReturn.addEventListener('click', function() {
    
  containerGriglia.classList.remove('d-flex');
  btnReturn.classList.add('d-none');
  btn100.classList.remove('d-none');
  btn81.classList.remove('d-none');
  btn49.classList.remove('d-none');
  
}) 



//*********************************************************************** Funzioni ***
function cells(num, width, box2) {
  
  for (let i = 0; i < num; i++) {
    
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.style.width = width;
    cell.id = i + 1;
    box2.appendChild(cell);
    
    cell.addEventListener('click', function() {
      
      cell.classList.toggle('active');
      console.log(cell.id);

    })
  } 
}

function btnClick(btn, btn1, btn2, btn3, btn4, num, width, box, box2, widthBox2, heigthBox2) {
  
  btn.addEventListener('click', function() {

    box2.innerHTML = '';
    box2.style.width = widthBox2;
    box2.style.heigth = heigthBox2;
    cells(num, width, box2);
    box.classList.add('d-flex');
    btn1.classList.remove('d-none');
    btn2.classList.add('d-none');
    btn3.classList.add('d-none');
    btn4.classList.add('d-none');

  })  
}