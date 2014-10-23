(function(){
    //prototype = adding functionality to object / initial model of object
    console.log("*********************** Prototypes ***********************");

    //here is your blueprint
    //1. Constructor objects
    function Person(n){
        //this = making properties
        this.name = n;
        //this.name = Person.prototype.list[~~(Math.random()*Person.prototype.list.length)];
        this.ssn = 123456789;
        this.age = 0;
        this.grades = [];
        this.list = ["bob","kelly","dave","Scott"];

    }


    //2. modifying the prototypes (functions)

    //Person.prototype.list = ["bob","kally","scott","dave"]

    Person.prototype.eat = function(){
        console.log(this.name, "is eating");
    };

    Person.prototype.sleep = function(){
        console.log(this.name, "is sleeping");
    };

    Person.prototype.getAverage = function(){
        total = 0;
        this.grades.forEach(function(e){
            total+=e;
        });
        return total/this.grades.length;
    };


    console.log("person.prototype : ",Person.prototype);

    //how to create "instance" of Person? "NEW"!
    var person = new Person("Dave");
    person.eat();
    person.grades = [10,20,30];
    var average = person.getAverage();
    console.log(person.name,"'s average is ",average);


    //this is the same thing with the one up
    var jeff = new Person();
    jeff.name = "Jeff";
    jeff.eat();
    jeff.sleep();
    jeff.grades = [80,50,70];
    var average = jeff.getAverage();
    console.log(jeff.name,"'s average is ",average);


})();