//Final Exam
//Jimin Hong



(function(){

    //The Weather object needs at least 7 properties with values provided in the JSON object.
    function Weather(){
        this.city = data.location.city;
        this.state = data.location.region;

        this.high = data.results.forecast[0].high;
        this.low = data.results.forecast[0].low;

        this.humidity = data.results.atmosphere.humidity;
        this.pressure = data.results.atmosphere.pressure;
        this.rising = data.results.atmosphere.rising;
    }

    var weather = new Weather();
    display();

    function display(){
        //Location
        var cityState = document.querySelector("#wd1").innerHTML = "Location : " + weather.city+", "+weather.state;

        //Today's high
        var todayHigh = document.querySelector("#wd2").innerHTML = "Today's Highest temp : " + weather.high +"°";

        //Today's Low
        var todayLow = document.querySelector("#wd3").innerHTML = "Today's Lowest temp : " + weather.low+"°";

        //Today's humidity
        var humidity = document.querySelector("#wd4").innerHTML = "humidity : " + weather.humidity+"%";

        //pressure
        var pressure = document.querySelector("#wd5").innerHTML = "pressure : " +weather.pressure;

        //rising
        var newElement = document.createElement("p");
        document.body.appendChild(newElement);
        newElement.innerHTML="Rising : "+weather.rising;

    }

    /*
    //High

    displayDataHigh();
    createForecastHigh();

    function displayDataHigh(){
        data.results.forecast.forEach(function(e){
            console.log("HIGH : " + e.high);
        })
    }


    function createForecastHigh(){
        //how many students? depends on the length of students array
        //loop through each object(classroom)
        data.results.forecast.forEach(function(e){
            var dayHigh = new Weather();
            dayHigh.high = e.high;
            //today.push(today);
        })
    }



    //Low

    displayDataHighLow();
    createForecastLow();

    function displayDataHighLow(){
        data.results.forecast.forEach(function(ele){
            console.log("LOW : " + ele.low);
        })
    }


    function createForecastLow(){
        //how many students? depends on the length of students array
        //loop through each object(classroom)
        data.results.forecast.forEach(function(ele){
            var dayLow = new Weather();
            dayLow.low = ele.low;
            //today.push(today);
        })
    }

    */


})();
