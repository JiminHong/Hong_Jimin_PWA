/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */
(function(){
    var names = ["bob","joe","scott","kelly","jeff"];

    for(var i=0; i < 3; i++){

      function Person(){
            //console.log("before",names);
            var rn = ~~(Math.random()*names.length);
            this.name = names[rn];
            names.splice(rn,1);
            //console.log("after",names);

            this.age = 0;
            this.grades = [40,50,60,70,80,90,100];
            this.job = "";

        }


      function populateHTML(){

      }

        var person = new Person();
        console.log("name : ",person.name);

        person.age = ~~(Math.random()*50+1);
        console.log("age : ",person.age);

        person.grades = person.grades[~~(Math.random()*person.grades.length)];
        console.log("Random grades : ",person.grades);
    }




})();
