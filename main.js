









//CLICK BOTTONE TOTALE
const element = document.getElementById("bottone");
element.addEventListener("click", importo)

function importo(){
    let moltiplicazione;
    let typeOfWork = document.getElementById("tipoDiLavoro").value;
    let ore = parseFloat(document.getElementById("oreDiLavoro").value);
    if(typeOfWork == 1){
        moltiplicazione = ore * 20.5;
    }else if(typeOfWork == 2){
        moltiplicazione = ore * 15.3;
    }else if(typeOfWork == 3){
        moltiplicazione = ore * 33.6;
    }
    console.log(moltiplicazione);

    let arrSconto =["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24",];
    const sconto=0.25;
    let discountCode = document.getElementById("discountCode").value;
    
    for(let i=0; i<=arrSconto.length; i++){
        if(discountCode == arrSconto[i]){
            let risultatoSconto = moltiplicazione * sconto;
            moltiplicazione = moltiplicazione - risultatoSconto;
            
            document.getElementById("totale").innerHTML = "Il prezzo finale è di " + moltiplicazione.toFixed(2) + "&euro;";
            i = arrSconto.length;

        }else if(discountCode != arrSconto[i] && i==arrSconto.length ){
            alert("Il codice inserito non è valido");
            document.getElementById("totale").innerHTML = "Il prezzo finale è di " + moltiplicazione.toFixed(2) + "&euro;";
        }
    } console.log(moltiplicazione);
    
    

}





