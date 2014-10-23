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
    studentNum=0;



    var dom = {
        name:document.querySelector("#name"),
        address:document.querySelector("#address"),
        grades:document.querySelector("#grades"),
        avg:document.querySelector("#avg")
    };

    document.querySelector("#button").addEventListener("click",onClick);

    updateHtml();

    function onClick(){
        //advance to the next student.
        studentNum++;

        //when studentNum is equal three, it needs to be
        if(studentNum === students.length){
            studentNum = 0;
        }

        //run this function
        updateHtml();
    }



    function updateHtml(){


        dom.name.innerHTML = students[studentNum].name;
        dom.address.innerHTML = students[studentNum].address.street + " " + students[studentNum].address.city;
        //dom.grades.innerHTML = students[studentNum].grades;

        //var gradeString 위치도 꼭 여기로 해야함.
        var gradeString = "";
        for(var i=0; i<students[studentNum].grades.length; i++){
            gradeString+="grade " +(i+1)+" : "+students[studentNum].grades[i]+" ";
        }
        dom.grades.innerHTML = gradeString;

        dom.avg.innerHTML = getAverage(students[studentNum].grades); //getAverage(arr)!! arr!!!
        studentNum++;

        if(studentNum == students.length){
            studentNum=0;
        }

    }


    function getAverage(arr){
        var total=0;
        arr.forEach(function(e){
            total+=e;
        });


        return Math.round(total/arr.length);
    }




})();  // end self executing closure/**
