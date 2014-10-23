
(function(){
    var name = "SCOTT";

    //String
    console.log("*********************** String Iteration ***********************");
    var c = name.charAt(0); // 0번째 알파벳이 띄워짐! //characterAt!!! Loop through도 할 수 잇음!
    var part = name.substring(1,2); // starting at 0, and what position you wanna end
    var part2 = name.substr(1,2); // starting at 1 and how many character you want.

    console.log(c);
    console.log(part);
    console.log(part2);


    //Nested Loops
    console.log("*********************** Nested Loops ***********************");
    var grades = [[80,90,100],[66,77,88]];
    //how many grades? 6, how many elements? 2
    //Wanna count the number of grades you have! (We do not want "2" but 6!)
    for (var i=0; i<grades.length; i++){
        console.log("outer"+i+" "+grades[i]); // this is not we want.

        for(j=0; j<grades[i].length; j++){
            console.log("inner loop "+j+" : "+grades[i][j]);
        }
    }

    //For each = function (like push, pop, splice)
    console.log("*********************** For Each Loops ***********************");
    var stuff = [3,"bob", 14, true,[2,3,4]];
    //loop through each e(element) of "stuff"
    stuff.forEach(function(e){
        //"e" will equal "3" for the first time.
        console.log(e);
    });

    //without using forEach, can we have same result?
    for (ii=0; ii<stuff.length; ii++){
        console.log(stuff[ii]);
    }

    //helper functions for arrays
    console.log("*********************** Splice Examples ***********************");
    var spliceEx = [4,5,"Bob",6];
    //spliceEx.pop();
    //console.log("pop : "+spliceEx);

    //starting location & how many elements you wanna remove?
    var x = spliceEx.splice(2,1);
    console.log("spliced stuff : ",x,"spliceEx Array : ",spliceEx);


    //split = function for string
    console.log("*********************** Split ***********************");
    var words = "bob,scott,dave,john,kelly,car,book,pencil,desk";
    //wanna convert this(string) to ARRAYS!
    var cool = [];
    console.log("Before split : ",cool);
    cool = words.split(",");
    console.log("After split : ",cool);

    //Functions
    console.log("*********************** Name Functions ***********************");
    function getArea(l,w){
        //console.log("inside function",l*w);//we dont need this
        return l*w;
    }

    var area = getArea(5,4);
    console.log("Area is ",area);


    //DOM = HTML의 hierarchy 구조
    console.log("*********************** DOM ***********************");

    //I wanna change the text in HTML!
    var domNode = document.querySelector("p");
    domNode.innerHTML = "Eat Pizza";
    domNode.id = "New ID";
    console.log("new Id",domNode.id);

    //In one line!
    //var domNode = document.querySelector("p").innerHTML = "Eat chicken!";

    //how to create element in HTML? I wanna make a child in BODY attribute
    var newElement = document.createElement("canvas");
    document.body.appendChild(newElement);

    //Prototypes
    console.log("*********************** JSON ***********************");
    var json = {title:"1984", price:10, author:"George", stats:[{pages:135, coverStock:"paper"}]};

    //I wanna know what the actual properties are. I wanna loop through them all!
    //I wanna loop through all the properties in Json!
    for (var properties in json){
        console.log(properties,"  :  ",json[properties],"(",typeof json[properties],")");
    }

    //I want title of the book
    console.log("title of the book : ",json.title);

    //I wanna all values!!!


})();
























