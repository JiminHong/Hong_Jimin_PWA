/*


var numbers = [5,10,25];

//"e" for 'e'lements
//it will run three times!
numbers.forEach(function(e){
    console.log(e);

});







//How to have "total"?
var numbers = [5,10,25];
var total = 0;
                        //"e" for 'e'lements
                        //it will run three times!
numbers.forEach(function(e){
    total+=e;
});

console.log(total);




*/
/*







//How to get the numbers of even numbers in the array?
(function(){
    //Don't put the console.log in the function just in case you don't wanna console log it.
    console.log(evenNumbers([2,3,4,5,6,7,8]));
                        //arguments
    function evenNumbers(arr){
        var total = 0;
        //Loop thru the array using forEach() function
        arr.forEach(function(e){

            //determine if the element is even!
            if(e%2==0) {
                //add to our total of even numbers
                total++;

            }
        });
        return total;
    }
})();






//How to get the numbers of even numbers in the array?
(function(){
                    //If we don't know the name and age of a dog! This is default!
    var dog = {name : "" , age : 0};

    //Use Dot Syntax to access breed property!

    dog.name = "Max";
    dog.breed="German Shepard";

    //array access notation
    //dog["age"] = 9;
    var prop="age";
    dog[prop] = 9;

    //This is "for in loop"
    //Loop thru all the properties in dog!
    //       I can use 'p' or whatever I want instead of using 'properties'.
    for (var p in dog){ //Since the number of 'dog' is three, the loop will run three times
        //dog."name"; ___ you cannot do this.
        //dog.p; ___ you cannot do this.
        //console.log(dog[p]);
        //console.log(dog["name"])___ you can do this.
        //console.log(dog["beer"])___No you cannot do this.

       console.log(p,dog[p]);
    }


    //arguments
    function evenNumbers(arr){
        var total = 0;
        //Loop thru the array using forEach() function
        arr.forEach(function(e){

            //determine if the element is even!
            if(e%2==0) {
                //add to our total of even numbers
                total++;

            }
        });
        return total;
    }
})();

*/




//***************JSON******************

(function(){
/*
    console.log(person);

    //I want John to show up!
    console.log(person.first);
    //Array access notation
    //console.log(person["first"]); another way to loop thru the array.

    //I want "reading" to show up!
    console.log(person.interests[0]);

    //I want the number of interests.
    console.log(person.interests.length);

    //I want "spaghetti"
    console.log(person.favorites.food);
    //Array access notation
    console.log(person.favorites["food"]);

    //I want '90'
    console.log(person.skills[0].tests[0].score);

    //Couch DB
    console.log(person.skills[1].category);

*/

 //   console.log(person.skills[0].category);


     for(var i = 0; i < person.skills.length; i++){

        console.log(person.skills[i].category);

         for(var j=0; j<person.skills[i].tests.length; j++){

             console.log("name : "+person.skills[i].tests[j].name + ", score : " + person.skills[i].tests[j].score);
         }

         console.log("-----------------------------------");

        }

})();



//Another Example!!

var books = {
    title : "Killer",
    author : "Bob",
    chapters : [{chapterName:"c1", pages:100},{chapterName:"c2", pages:200}]

};

for (var i=0; i<books.chapters.length; i++){

        console.log("Chapter name : "+books.chapters[i].chapterName+" "+books.chapters[i].pages);


}












