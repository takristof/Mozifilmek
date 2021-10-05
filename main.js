var filmek=[];
class Film {
    constructor(nev, rendezo, kiadási_ev) {
      this.nev = nev;
      this.rendezo = rendezo;
      this.kiadási_ev=kiadási_ev;
    }
  }
  function hozzaad() {
    nev = document.getElementById('film_nev').value;
    rendezo = document.getElementById('film_rendezo').value;
    ev = document.getElementById('film_ev').value;
    ujFilm=new Film(nev,rendezo,ev)
    filmek.push(ujFilm);  
    console.log(filmek);
    document.getElementById('film_nev').value='';
    document.getElementById('film_rendezo').value='';
    document.getElementById('film_ev').value='';
    return false;

  }
  

  function CreateTablazat() {

    var table = document.createElement('table');
    table.setAttribute('id', 'filmTable');

    var arrHead = new Array();
    arrHead = ['Film név', 'Film rendezője', 'Film kiadási éve'];


    var tr = table.insertRow(-1);

    for (var h = 0; h < arrHead.length; h++) {
        var th = document.createElement('th');             
        th.innerHTML = arrHead[h];
        tr.appendChild(th);
    }

    for (var c = 0; c <= filmek.length - 1; c++) {
        tr = table.insertRow(-1);

        for (var j = 0; j < arrHead.length; j++) {
            var td = document.createElement('td');        
            td = tr.insertCell(-1);
            td.innerHTML = filmek[c].nev; 
               
        }

    }


        var button = document.createElement('input');

        button.setAttribute('type', 'button');
        button.setAttribute('value', 'Listáz');

        button.setAttribute('onclick', 'listaz()');

        document.body.appendChild(table);
        document.body.appendChild(button);
}

function listaz() {

    var filmTable = document.getElementById('filmTable');
   
    var div = document.createElement('div');
    div.innerHTML = "";
    div.innerHTML = '<br />';

    
    for (var r = 1; r <= filmTable.rows.length - 1; r++) {       
        for (c = 0; c <= filmTable.rows[r].cells.length - 1; c++) {      
            div.innerHTML = div.innerHTML + ' ' +
                filmTable.rows[r].cells[c].innerHTML;

        }
        div.innerHTML = div.innerHTML + '<br />';
    }
    document.body.appendChild(div);     
}
