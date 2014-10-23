/*

//1-6

for (var i=0; i<100;i++){
    var dice = Math.floor(Math.random()*6+1);
    console.log(dice);
}



// Two dice
//possible outcomes : 2,3,4,5,6,7,8,9,10,11,12 (total : 11) (range of the random number is 11)
//                    0,1,2,3,4,5,6,7,8,9,10 (total:11)

for (var i=0; i<100;i++){
    var dice = Math.floor(Math.random()*11+2);
    console.log(dice);
}

 */





//  -5 through 2
// 8 possibilities
//what is the lowest number? answer : -5

Math.floor(Math.random()*8-5);

//  5 through 10
Math.floor(Math.random()*6+5);
~~(Math.random()*6+5);