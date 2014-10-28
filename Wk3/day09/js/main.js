
//********************** Scope &  Variable Hoisting **********************

/*
(function(){
    var name = "Bob";
    function greetings(){
        console.log(name);
        var name = "Scott";
    }
    greetings();

})();
*/

//********************** Scope &  Variable Hoisting **********************

/*
console.log("loaded");

var masterGlobal = "whoa";
(function(){
    var global = "global";

    function outerFunction(){
        var outer = "outside";
        //console.log(inner);

        function innerFunction(){
            var inner = "inside";
            console.log(outer);//I can see outside!
        }
    }

})();
*/

//********************** JSON object**********************
//********************** Constructor object **********************


//(function(){

/*
 //This is logic
 function Employee(n,d,s){
 console.log("Bob is created");

 //Three properties
 this.name = n; // instance of variable
 this.department = d;
 this.salary = s;
 var total = 0;

 }



 //Two methods : hire, fire (Since this is not a function, there will be not hoisted.)
 Employee.prototype.hire = function(){
 console.log(this.name+" is hired!");
 };

 Employee.prototype.fire = function(){
 console.log(this.name+" is fired!");
 };

 //I want "Employee" to be global.
 window.Employee = Employee; // it has been globalized.




    //create instances of Employee
    var person = new Employee();//var person = new Employee("Joe","Mascot",100); // this is same with line 60 - 63
    person.name = "Joe";
    person.department = "Mascot";
    person.salary = 100;

    person.hire();
    person.fire();



    var person = new Employee();
    var company = new Employee();
    person.hire();
    person.fire();



})();
*/


//********************** Creating tags! **********************



(function(){

    for (var i = 0; i<5; i++){
        var emp = new Employee("Joe"+i,"Teacher",100);

        var element = document.createElement("p");

        //I wanna add
        document.body.appendChild(element);
        element.innerHTML = emp.name;
    }
})();






































