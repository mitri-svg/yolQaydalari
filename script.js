let suret = +prompt('Suret-iviz necedir?');
let cerime;

if (suret < 60) {
   cerime = (`Siz ${suret} km/saat suretinde getdiyivize gore sizden cerime alinmir`);
} else if (suret < 90 && suret > 60 ) {
   cerime = (`Siz ${suret} km/saat suretinde getdiyivize gore sizden 20 manat cerime alinir`);
} else if (suret < 120 && suret > 90 ) {
   cerime = (`Siz ${suret} km/saat suretinde getdiyivize gore sizden 100 manat cerime alinir`);
} else {
   cerime = (`Siz ${suret} km/saat suretinde getdiyivize gore siz hebs olunursunuz`);
} 

document.getElementById('yolQaydalari').innerHTML = cerime;