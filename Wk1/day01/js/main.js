/*
 //Find the lowest number!

 console.log(lowest([4,5,2,6,5,1])); // does not matter where you call the function. it can be at the end of your code.

 function lowest(n){
 var lowNum=n[0];

 for (var i=1; i<n.length; i++){
 //console.log(n[i]);//그냥 데이타 보여주는 코드
 if (n[i]<lowNum){
 lowNum=n[i];
 }

 }

 return lowNum;
 }

 */



//Celsius to Fahrenheit
//Fahrenheit to Celsius


console.log(convertTemp(0,"f"))

function convertTemp(a,b){

    var temp=0;
    if (b=="f")//from Celsius to Fahrenheit
    {
        temp = a*(9/5)+32;

    }else{
        temp = (a-32)*(5/9)
    }


    return temp;
}


