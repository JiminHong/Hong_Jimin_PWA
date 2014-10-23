(function(){

    for (var i=0; i<5; i++){
        console.log("outer : ", i);

            for(var j=0; j<3; j++){
                console.log("inner : ", j)
            }

    }

    var hard=[["a","b","c"],["d","e","f"],["g","h","i"]];
    var easy = ["x","y","z"];

    for (var k=0; k<easy.length; k++){
        console.log(easy[k]);
    }

        for (var m=0; m<hard.length; m++){
           for(var y=0; y<hard[m].length ; y++){
               console.log(hard[m][y]);
          }
    }



})();