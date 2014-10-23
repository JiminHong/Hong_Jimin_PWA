/*
    Mid Terms for PWA1
    do NOT modify the included HTML/CSS file
    read comments in HTML
    Make sure the first student's information is displayed when the browser loads
*/

//Name:Jimin Hong


(function(){

    //Create an array of 3 student objects(Object Literals) containing 3 properties.
    var student1 = {name:"Kim",
                    address:{street:"888 O'Farrell", city:"San Francisco", state:"CA"},
                    grades:[50,60,70]
    };

    var student2 = {name:"Park",
                    address:{street:"650 Jones", city:"San Jose", state:"CA"},
                    grades:[50,90,10]
    };

    var student3 = {name:"Lee",
                    address:{street:"79 New Montgomery", city:"San Francisco", state:"CA"},
                    grades:[100,90,90]
    };

    students=[student1,student2,student3];

    document.querySelector("#button").addEventListener("click",onClick);

    studentNum=0;


    var dom = {
                name:document.querySelector("#name"),
                address:document.querySelector("#address"),
                grades:document.querySelector("#grades"),
                avg:document.querySelector("#avg"),
                btn:document.querySelector("#button")
    };


    dom.btn.addEventListener("click",display);

    display();

    function display(){

        dom.name.innerHTML = students[studentNum].name;
        dom.address.innerHTML = students[studentNum].address.street + " " + students[studentNum].address.city;

        dom.grades.innerHTML = "grades:"+students[studentNum].grades;
        dom.avg.innerHTML = getAverage();
        studentNum++;

        if(studentNum == students.length){
            studentNum=0;
        }

    }


    function getAverage(){
        total=0;
        for(var i=0; i<students[studentNum].grades.length; i++){
            total+=students[studentNum].grades[i];
        }

        return Math.round(total/students[studentNum].grades.length);
    }




})();  // end self executing closure