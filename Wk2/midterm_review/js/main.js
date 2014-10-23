
(function(){

    var student1 = {name:"Joe",
                   grades:[90,80,95],
                   address:{street:"960 Rolling Hills", city:"Orlando"}
                    };
    var student2 = {name:"Dave",
                    grades:[44,32,10],
                    address:{street:"beer street", city:"Pizza"}
                    };
    var student3 = {name:"Shelly",
                    grades:[6,3,100],
                    address:{street:"Gatoraide", city:"Tampa"}
                    };


    var students = [student1,student2,student3];
    var studentNum = 0; // index number of student array... so it starts from zero



    var dom = {
        name:document.querySelector("#name1"),
        address:document.querySelector("#address"),
        grades:document.querySelector("#grades"),
        btn:document.querySelector("button")
    };

    //when you click btn,
    dom.btn.addEventListener("click",display);





    //call the function
    display();

    //every time I run display, the html will be updated
    function display(){

        dom.name.innerHTML = students[studentNum].name;
        dom.address.innerHTML = students[studentNum].address.street + " " + students[studentNum].address.city;
        dom.grades.innerHTML = avg();

        //after show student1, go to student2
        studentNum++;

        if (studentNum == students.length){
            studentNum = 0;
        }

    }




    function avg(){

        var total=0;

        for(var i=0; i<students[studentNum].grades.length; i++){
           total+=students[studentNum].grades[i]

        }

        return total/students[studentNum].grades.length;
    }



})();














































