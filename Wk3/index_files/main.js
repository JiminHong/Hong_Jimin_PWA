

//----------Constructors Object--------------

console.log("loaded");
/*
(function(){
    //This is object literal
    //var dog = {name:"Pippi", age:9, breed:"German Shepard"};


    //**********Constructor Object**********

    // 2.
    var jeffDog = new Dog();
    jeffDog.name = "Pippi";

    var alexDog = new Dog();
    alexDog.name = "Eevee";

    // 4.
    var kennel = [jeffDog, alexDog];

    // 3.
    console.log(jeffDog.name);

    function Dog(){
        console.log("Dog created");

        //create properties
        // 1. Blueprint of Dog
        this.name = "";
        this.age = 0;
        this.breed = "";
    }

})();
*/


//************************************* 2nd activity *************************************

//Problem : We need 101 dogs with random names and random ages

/*
(function(){

    //We need 101 dogs

    // 1. create a list of names
    var names = ["Bob","Scott","Princess","Fido","Lassie"];
    var maxAge = 15;
    // 4.
    var kennel = [];


    // 3. it needs to run 101 times
    for (var i = 0; i<101; i++){
        var dog = new Dog();
        //5.
        kennel.push(dog);
        //3.
        console.log(i,dog.name);
    }

    // 2. Blueprint of blueprint of dog

    function Dog(){
        console.log("dog created");
        //We need random name
        this.name = names[~~(Math.random()*names.length)];

        //Age : 1-15
        this.age = ~~(Math.random()*maxAge+1);
    }

    // 6.
    kennel[31].name = "kewl";
    console.log(kennel[31]);


})();
*/

//************************************* 3rd activity *************************************

//Problem : We need 5 dog names from the array, it should be random. But NO DUPLICATE NAMES!!!
/*
(function(){


    var names = ["Bob","Scott","Princess","Fido","Lassie"];
    var maxAge = 15;
    var kennel = [];


    for (var i = 0; i<5; i++){
        var dog = new Dog();
        kennel.push(dog);
        //console.log(i,dog.name);
    }


    // 3.
    displayDogNames();


    function Dog(){
        // 1.
        var rn = ~~(Math.random()*names.length);
        this.name = names[rn];
        names.splice(rn,1);

        this.age = ~~(Math.random()*maxAge+1);
    }

    // 2.
    function displayDogNames (){
        kennel.forEach(function(dogNameElement){ //Translate : for each dog in the Kennel, console.log the names
            console.log(dogNameElement);

        })
    }


})();
*/

//************************************* Activity with JSAN *************************************

(function(){
    // 2. set up variables
    var students = [];
    var studNum = 0;

    // 4.
    createStudents();
    console.log(students);
    // 3.
    function createStudents(){
        //how many students? depends on the length of students array
        //loop through each object(classroom)
        classRoom.students.forEach(function(e){
            var kid = new Kid();
            kid.name = e.name;
            kid.id = e.id;
            students.push(kid);
        })
    }

    // 1. constructor (Blue print of student)
    function Kid(){
        this.name = "";
        this.id = 0;
    }
})();




























