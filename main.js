









//CLICK BOTTONE TOTALE
const element = document.getElementById("bottone");
element.addEventListener("click", importo)

function importo(){
    let totale;
    let typeOfWork = document.getElementById("tipoDiLavoro").value;
    let ore = parseFloat(document.getElementById("oreDiLavoro").value);
    if(typeOfWork == 1){
        totale = ore * 20.5;
    }else if(typeOfWork == 2){
        totale = ore * 15.3;
    }else if(typeOfWork == 3){
        totale = ore * 33.6;
    }
    

    let arrSconto =["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24",];
    const sconto=0.25;
    let discountCode = document.getElementById("discountCode").value;
    
    for(let i=0; i<=arrSconto.length; i++){
        if(discountCode == arrSconto[i]){
            let risultatoSconto = totale * sconto;
            totale = totale - risultatoSconto;
            document.getElementById("totale").innerHTML = "Il prezzo finale è di " + totale.toFixed(2) + "&euro;";
            i = arrSconto.length;

        }else if(discountCode != arrSconto[i] && i==arrSconto.length ){
            document.getElementById("discountCode").style.color="red";
            document.getElementById("discountCode").style.borderColor="red";
            document.getElementById("totale").innerHTML = "Il prezzo finale è di " + totale.toFixed(2) + "&euro;";
        }
    } 
    
    

}





