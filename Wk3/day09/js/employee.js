

(function () {

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


})();