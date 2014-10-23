/*
 Name : Jimin Hong
 Date : 10/04/2014
 Assignment : Goal1 Duel1
 */

//self-executing function
(function () {

    var round=0;

    var kabal = {
        name1: "Spiderman",
        damage1: 20,
        health1: 100};

    var kratos = {
        name2: "Batman",
        damage2: 20,
        health2: 100};

    var fighters = [kabal, kratos];


    var dom = {
        health1: document.querySelector("#kabal p"),
        health2: document.querySelector("#kratos p"),
        btn: document.querySelector(".buttonblue"),
        round:document.querySelector("#round"),
        input: document.querySelector("#round_number input"),
        result:document.querySelector("#result")
    };


    if( dom.btn.addEventListener("click", fight)){
        fight();
    }

    //
    //dom.btn.addEventListener("click",calcHealth);

    function fight() {
        round++;
        //round number
        dom.input.value = "Round: "+round;
        //round over
        dom.round.innerHTML= "ROUND "+round+" OVER! ";


        //Minimum damage points
        var minDamage1 = kabal.damage1 * .5;
        var minDamage2 = kratos.damage2 * .5;

        //random number of the damage
        var f1 = Math.floor(Math.random() * (kabal.damage1 - minDamage1) + minDamage1);
        var f2 = Math.floor(Math.random() * (kratos.damage2 - minDamage2) + minDamage2);

        //inflict damage
        kabal.health1 -= f1;
        kratos.health2 -= f2;

        //results
        dom.health1.innerHTML = kabal.name1 + " : " + kabal.health1;
        dom.health2.innerHTML = kratos.name2 + " : " + kratos.health2;
/////////////////

        //if the health is less than 1
        if(kabal.health1<1){
            kabal.health=0
        }

        else if(kratos.health2<1){
            kratos.health2=0
        }

        if(kabal.health <1 && kratos.health2<1){
            winnerCheck();
            dom.btn.removeEventListener("click", fight)
        } else if(kratos.health2<1){
            winnerCheck();
            dom.btn.removeEventListener("click", fight)
        } else if(kabal.health1<1){
            winnerCheck();
            dom.btn.removeEventListener("click", fight)
        }
    }


/*
    function calcHealth() {

        console.log(kabal.name1 + ": " + kabal.health1 + " " + kratos.name2 + ":" + kratos.health2);

        //check for victor
        var result = winnerCheck();

        console.log(result);
        if (result === "no winner") {
            round++;
            console.log(kabal.name1 + ":" + kabal.health1 + "  *ROUND " + round + " OVER" + "*  " + kratos.name2 + ":" + kratos.health2);

        }else {
            console.log(result);
        }

    }
*/
    function winnerCheck() {
        var result = "no winner";
        if (kabal.health1 < 1 && kabal.health2 < 1) {
            dom.health1.innerHTML = kabal.name1+" : "+kabal.health1;
            dom.health2.innerHTML = kratos.name1+" : "+kratos.health2;
            dom.round.innerHTML = "You Both Die"

        } else if (kabal.health1 < 1) {
            dom.health1.innerHTML = kabal.name1+" : "+kabal.health1;
            dom.health2.innerHTML = kratos.name2+" : "+kratos.health2;
            dom.round.innerHTML = kratos.name2 + " WINS!!!";

        } else if (kratos.health2 < 1) {
            dom.health1.innerHTML = kabal.name1+" : "+kabal.health1;
            dom.health2.innerHTML = kratos.name1+" : "+kratos.health2;
            dom.round.innerHTML = kabal.name1 + " WINS!!!";
        }

        return result;

    }


})();