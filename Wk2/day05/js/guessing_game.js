
(function(){
    //random number 1 thru 10 (Add one to avoid getting random number 0 thru 9)
    var num = ~~(Math.random()*10+1);
    var guessRemain = 3;//tracking your guesses
    var userInput = 0;
    var dom = {
        btn:document.querySelector("button"),
        output:document.querySelector("#output"),
        input:document.querySelector("#input")
    };


    //Don't put parenthesis after onGuess, or it will run automatically. Self executing
    dom.btn.addEventListener("click",onGuess);




    console.log("This is magic random number :" + num);

    function onGuess(){
        console.log();
        userInput = parseInt(dom.input.value);

        //console.log("You typed : ", userInput);
        if(userInput>=1 && userInput<=10){
            guessRemain--;

            if(guessRemain>0){
                check();
            }
        }else{
            dom.output.innerHTML = "Can you read !!! 1 - 10!!!! DAMN DUDE!"
        }
    }

    function check(){
        //dom.output.innerHTML = "Guess my magic number between 1 - 10";

        if(userInput>num){
            dom.output.innerHTML="Too high , guesses remaining "+ guessRemain
        }else if (userInput<num){
            dom.output.innerHTML="Too low, guesses remaining "+ guessRemain
        }else{
            dom.output.innerHTML="Nice job!, guesses remaining "+ guessRemain
        }

    }

})();














































