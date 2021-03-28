/***********
 * 
 * 
 * 
 * IMPORTANTE LEGGERE ATTENTAMENTE TUTTO QUELLO CHE è
 * CONTENUTO NEI COMMENTI IN PARTICOLARMODO I COMMENTI TRA "" E 
 * QUELLI MESSI TRA ALTRI COMMENTI IMPORTANTI
 * 
 *  
 ************/


/*Il programma dovrà consentire di calcolare il prezzo
del panino selezionando o deselezionando gli ingredienti proposti.*/


//1. Elementi a cui fare riferimento nell html;
var btn = document.getElementById("button");
var nameBurger = document.getElementById("name");
var ingredienti = document.getElementsByClassName("ingredient-checkbox");
var prezzoTot = document.getElementById("price");
var coupon = document.getElementById("coupon");
var addBtn = document.getElementsByClassName("ingredient-add");


//2.AGGIUNTA EVENTO "AddEventListener ("click")" AL BOTTONE "btn" .
btn.addEventListener("click", function(){
    //UNA VOLTA CHE HO PRESO IL RIFERIMENTO NELL HTML HO BISOGNO DI LEGGERE
    //IL VALORE AL SUO INTERNO QUINDI USO LA PROPRIETà VALUE
    NameBurger = nameBurger.value;
    
    if(NameBurger.length === 0){
        //SE NON INSERISCO NESSUN CARATTERE ALL INTERNO DELL INPUT
        //CHIEDO UN ALERT
        alert("inscerisci un nome al tuo hamburger.")
    }else{//IN CASO DI SITUAZIONE FALSE ALL IF PROSEGUO
        var prezzo = 50;
        //ADESSO METTO IN LOOP IL PREZZO NEL CASO IN CUI
        //VOLESSI AGGIUNGERE UN INGREDIENTE
        for(i = 0; i < ingredienti.length; i++){
            //DO UNA VAR INGREDIENTCHECK COSì
            //DA NON ESSERE RIPETITIVO E SCRIVERE CONTINUAMENTE INGREDIENTI[i]
            var ingredientCheck = ingredienti[i];
            //IMPOSTO UNA CONDIZIONE NEL CASO IN CUI L ELEMENTO è SPUNTATO O MENO
            //LA CONDIZIONE SPUNTA LA VERIFICO CON LA PROPRIETà "CHECKED"
            if(ingredientCheck.checked === true){
                //NEL CASO IN CUI L ELEMENTO RISULTA CHECKED OVVER "TRUE"
                //VADO AD AGGIUNGERE IL PREZZO DELL ELEMENTO CHECKED
                //IL PREZZO DELL' ELEMENTO CHECKED LO TROVO
                //CON L ATTRIBBUTO VALUE
                prezzo += parseInt(ingredientCheck.value);
            }
        }
        //AGGIUNGO LO SCONTO NEL CASO IN CUI CI FOSSE UN COUPON
        //CREO ARRAY CON CODICI SCONTO
        var coupons = ["12354ABCDEF", "12354ABCDEG", "12354ABCDEH",]
        //CREO UNA VARIABILE CHE MI PERMETTE DI LEGGERE IL VALORE CHE
        //ANDRò A SCRIVERE NELL INPUT COUPON
        var couponCode = coupon.value;
        //ADESSO VEDO SE IN "COUPONS" è INCLUSO UN VALORE "COUPONCODE"
        //ATTRAVERSO LA PROPRIETà INLCUDES
        if(coupons.includes(couponCode)){
            prezzo = prezzo - (prezzo * 0.2);
        }
    }
    //STAMPO IL PREZZO TOTALE COMPRESO DI SCONTO
    prezzoTot.innerHTML = prezzo.toFixed(2);

})

//3. FAR SI CHE L ADD DIVENTI CHECKED AL CLICK

//AGGIUNGO L EVENTO "CLICK"IN MODO DA RENDERE LO SPAN ADD CLICCABILE
//PER RENDERE CLICCABILE UN ELEMENTO HTML COLLECTION CHE
//PUò SEMBRARE UN ARRAY GUARDARE "console.log(addBtn)"
//BISOGNA METTERE IL TUTTO IN UN FOR PER POI POTER RISALIRE AI SUOI ELEMENTI
for(i = 0; i < addBtn.length; i++){
    //CREO UNA VARIABILE PER RENDERE LA NAVIGABILITà NELL ARRAY PIù SEMPLICE
    var add = addBtn[i];
    //ADESSO CHE HO MESSO IN LOOP L "addBtn"
    //POSSO ASSEGNARE L EVENTO "CLICK!!!"
    /***** IMPORTANTE **********/
    //SE NON METTO IN UN LOOP L ELEMENTO QUESTO MI DA ERRORE NOT A FUNCTION
    add.addEventListener("click", function(){
        //ADESSO TRAMITE L ELEMENTO THIS IO SELEZIONO L ELEMENTO STESSO
        //GUARDA: "console.log"this""
        //PER POTER CHECKARE IL BOX IO HO BISOGNO DI RISALIRE AL FRATELLO PROSSIMO
        //USANDO IL COMANDO "previousElementSibling"
        thisCheck = this.previousElementSibling;
        //UNA VOLTA CHE SONO RISALITO ALL ELEMENTO FRATELLO TRAMITE IL CHECKED
        //POSSO VERIFICARE SE LA SPUNTA HA VALORI "TRUE" O "FALSE"
        //E QUINDI AL CLICK IN BASE AL VALORE "TRUE" O "FALSE" ANDRA AD ESEGUIRE IL COMANDO
        thisCheck.checked = ! thisCheck.checked; /***** IMPORTANTE: HO USATO LA NEGAZIONE "!" NEL CASO UN CUI DOVESSI APPLICARE LA SPUNTA AL BOX DA UN ALTRO ELEMENTO******/

    })
}

