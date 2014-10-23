//FOR EACH!

/*
(function(){
    var stuff = [80,90,100,"Bob"];
    var trash = [5,9,23,"Scott",8,9,22];

    enumerate(stuff);
    console.log("*************************************");
    enumerate(trash);

    function enumerate(a){
        for (var i=0;i<a.length;i++){
            console.log(a[i]);
        }
    }

})();
*/

(function(){
    var stuff = [80,90,100];
    var trash = [5,9,23,"Scott",8,9,22,"Bob"];

    enumerate(stuff);
    //console.log(getAverage(stuff));
    //console.log(getAverage([90,70]));
    console.log(cool(trash,"string"));
    //console.log("*************************************");


    function enumerate(a){


        //for each function
                           //"e" can be anything like beer or pizza
        a.forEach(function(e){
            console.log("Cool!",e)

        })

    }



    function getAverage(n){
        var total=0;
        n.forEach(function(e){
            total+=e;

        });
        return total/n.length;

    }

    //cool([2,"Bob",4,"Joe",7],"string");
    function cool(arr,t){

        var counter = 0;

        arr.forEach(function(e){    //loop through the array "arr"
            //console.log(typeof e);
            if(typeof e == t) { //if the element is "t" which is the argument you provided
                counter ++; //adds one to our tally of numbers in the array.
            }
        });

        return counter;

    }



})();















































