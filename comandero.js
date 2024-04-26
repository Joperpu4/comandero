function calcularTotal(){
    var importeAgua = document.getElementById("agua").value * 1.00;
    var importeRefresco = document.getElementById("refresco").value * 2.00;
    var importeMonster = document.getElementById("monster").value * 2.00;
    var importeMedio = document.getElementById("medio").value * 1.50;
    var importeCerveza = document.getElementById("cerveza").value * 2.00;
    var importeCervezaSinFiltrar = document.getElementById("cervezasinfil").value * 2.50;
    var importeJarraCerveza = document.getElementById("jarracerveza").value * 8.00;
    var importeBono = document.getElementById("bono").value * 18.00;
    var importeBonoSinFiltrar = document.getElementById("bonosinfiltrar").value * 23.00;
    var importeFino = document.getElementById("fino").value * 6.00;
    var importeJarraRebujito = document.getElementById("jarrarebujito").value * 11.00;
    var importeCombinado = document.getElementById("combinado").value * 6.00;
    var importeCombinadoPremium = document.getElementById("combinadopremium").value * 8.00;

    var importeBSimple = document.getElementById("bsimple").value * 4.50;
    var importeBLomo = document.getElementById("blomo").value * 5.0;
    var importeBPinchitos = document.getElementById("bpinchitos").value * 4.0;
    var importeBDoble = document.getElementById("bdoble").value * 6.00;
    var importeBBaconQueso = document.getElementById("bbaconqueso").value * 5.0;
    var importeSerranito = document.getElementById("bserranito").value * 6.50;


    var importeRGeneral = document.getElementById("rgeneral").value * 7;
    var importeRQueso = document.getElementById("rqueso").value * 9;
    var importeBarco = document.getElementById("barco").value * 12;

    var importePincho = document.getElementById("pincho").value * 3;
    var importePulga = document.getElementById("pulga").value * 2;
    var importeSPulgas = document.getElementById("surtidopulgas").value * 11;
    var importeMontadito = document.getElementById("montadito").value * 2.50;
    var importeFlamenquin = document.getElementById("flamenquin").value * 7;
    var importeHamburguesa = document.getElementById("burguer").value * 2.5;
    var importePatatas = document.getElementById("patatas").value * 1.00;

    var importeSorpresa = document.getElementById("sorpresa").value * 1;

    var total = 0;
    var total = importeAgua + importeRefresco + importeMonster + importeMedio + importeCerveza + importeCervezaSinFiltrar + importeJarraCerveza + importeBono + importeBonoSinFiltrar + importeFino + importeJarraRebujito + importeCombinado + importeCombinadoPremium + importeBSimple + importeBLomo + importeBPinchitos + importeBDoble + importeBBaconQueso + importeSerranito + importeRGeneral + importeRQueso + importeBarco + importePincho + importePulga + importeSPulgas + importeMontadito + importeFlamenquin + importeHamburguesa + importePatatas + importeSorpresa;
    var total = Math.round(total*100)/100;
    
    document.getElementById("total").value = total;
}

function vuelta(){
    var total = document.getElementById("total").value;
    var entrega = document.getElementById("entrega").value;
    var vuelta = entrega - total;
    
    var vuelta = Math.round(vuelta*100)/100;

    document.getElementById("cambio").innerHTML = vuelta;
}

