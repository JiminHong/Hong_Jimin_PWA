//loop (enumerate) through the properties of an Object literal
//For In loop

var coolDog = {breed:"Pitbull",color:"black",name:"Max",age:7};

//I wanna loop through all the properties in coolDog!!!
for (var prop in coolDog){
    //console.log(typeof prop);
    //console.log(prop);
    //console.log(coolDog[prop]);
    //console.log(prop,coolDog[prop]);

}

console.log(coolDog["name"]); // access notation