const filmek=[];
class Film {
    constructor(nev, rendezo, kiadási_ev) {
      this.nev = nev;
      this.rendezo = rendezo;
      this.kiadási_ev=kiadási_ev;
    }
  }
function hozzaad(){
    const hozzaad=new Film(document.getElementById('film_nev'),document.getElementById('film_rendezo'),document.getElementById('film_ev').value)
    filmek.push(hozzaad);
}