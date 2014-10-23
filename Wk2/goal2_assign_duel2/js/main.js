/*
Name : Jimin Hong
Date : 10/10/2014
Assignment : Goal1 Duel2
*/

//self-executing function
(function(){

    console.log("FIGHT!");

    //object literal
    var playerOne = {name:"Spiderman", damage:20, health:100};
    var playerTwo = {name:"Batman", damage:20, health:100};


    var round=0;

    function fight(){
        console.log("in the fight function");

        alert(playerOne.name+":"+playerOne.health+" *START* "+playerTwo.name+":"+playerTwo.health)

        for(var i=0; i<10; i++){
            //random formula is -
            var minDamage1 = playerOne.damage*.5;
            var minDamage2 = playerTwo.damage*.5;
            var f1 = Math.floor(Math.random()*(playerOne.damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(playerTwo.damage-minDamage2)+minDamage2);

            //console.log(f1);
            //console.log(f2);

            //inflict damage
            playerOne.health-=f1;
            playerTwo.health-=f2;

            console.log(playerOne.name+":"+playerOne.health+" "+playerTwo.name+":"+playerTwo.health);

            var results = winnerCheck();
            console.log(results);

            if(results === "no winner"){
                round++;
                alert(playerOne.name+":"+playerOne.health+"*ROUND "+round+" OVER*"+playerTwo.name+":"+playerTwo.health);

            }else{
                alert(results);
                break;
            }
        }

    }

    function winnerCheck(){
        console.log("in winnerCheck FN");

        var result="no winner";

        if(playerOne.health<1 && playerTwo.health<1){
          result = "You Both Die";
        }else if(playerOne.health<1){
            result = playerTwo.name +"WINS!"
        }else if(playerTwo.health<1){
            result = playerOne.name +"WINS!!!"
        }

        return result;

    }


    //The program gets started below
    console.log("program starts here");
    //call the function
    fight();

})();