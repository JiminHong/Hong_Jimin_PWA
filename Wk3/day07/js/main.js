console.log("loaded");

(function(){
    var d = new Date();
    var months = ["Jan","Feb","March","April","May","June",'July',"Aug","Sept","October","Nov","Dec"];
    var days = ["Sun","Mon","Tues","Wed","Thur","Fri","Sat"];
    //console.log(d.getDate()); //Get date
    console.log(d.getFullYear());
    console.log(d.getDay());

    var month = d.getMonth()+1;
    var date = d.getDate();
    var year = d.getFullYear();
    var day = d.getDay();

    //var coolDate = month +"/"+ date+"/"+year;

    var coolDate2 = days[day]+", "+months[month]+" "+date+" "+year;
    console.log(coolDate2);

    //------------Regular Expression-------------



    var pattern = /^\d{3}-\d{2}-\d{4}$/;
    document.querySelector("button").addEventListener("click",onClick);

    function onClick(){
        var input = document.querySelector("#input").value;
        console.log(input);
        var pass = pattern.test(input); s//Boolean
        console.log(pass);
    }

})();