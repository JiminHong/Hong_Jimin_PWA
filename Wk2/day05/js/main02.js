
(function(){
    //change text output in html (When there is an ID)
    //document.querySelector("#output").innerHTML = "Hello World";

    //change text output in html (When there is NO ID)
    //document.querySelector("p").innerHTML = "Hello World!!";

    var btn = document.querySelector("button");
    console.log(btn);
    btn.addEventListener("click",onClick);

    function onClick(){
        console.log("click Me");
    }

})();


