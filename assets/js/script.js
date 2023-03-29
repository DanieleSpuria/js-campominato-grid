/*************************************************************************************
1. classi con css;
2. griglia con for;
3. numerare le celle;
3. inserire tutto nel click di un bottone;
4. inserire toggle a click delle celle;
*************************************************************************************/



const container = document.getElementsByClassName('container');
cell(100);






//*********************************************************************** Funzioni ***

function cell(num) {

  for (let i = 0; i < num; i++) {

    const cell = document.createElement('div');
    cell.className = 'cell';
    container[0].appendChild(cell);

  }

}

