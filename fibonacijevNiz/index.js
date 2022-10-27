var pocetniNiz = [0, 1]
var i;
var iPrviSabirak = 0
var iDrugiSabirak = 1
for (var i = 2; i < 20; i++) {
    var num = pocetniNiz[iPrviSabirak] + pocetniNiz[iDrugiSabirak];
    pocetniNiz.push(num);
    iPrviSabirak++
    iDrugiSabirak++
    console.log("Fibonacijev Niz: ",pocetniNiz)
}
for (var delilac = 0; delilac < pocetniNiz.length; delilac++){

    if (pocetniNiz[delilac] % 3 == 0) {
        console.log("Brojevi koji su deljivi sa 3: ", pocetniNiz[delilac])
    }
    else;
}
