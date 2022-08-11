


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// // Ex1
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function tellFortune(number_of_children, partners_name, geographic_location, job_title){
    console.log( "You will be a " + " " + number_of_children + " " + 'in'+ " " + partners_name + " " +'and married to' + " " +geographic_location + " " + "with" + job_title + ' kids.')
    }
    tellFortune('software engineer', 'Jordan', 'Alice', 3)



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// // Ex2
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function testNum(a) {
var y= (a * 7);
if (y >= 0){
console.log('Your doggie is ' + " " + y + " " + 'years old in dog years!')
}
else if (y < 0){
alert("Not exist");
}}

testNum (-15)


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// // Ex3
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function calculateSupply(age, amountPerDay) {
    var maxAge = 100;
    var totalConsumed = (amountPerDay * 365) * (maxAge - age);
    var amount = 'You will need ' + totalConsumed + ' to last you until the ripe old age of ' + maxAge;
    console.log(amount);
}
calculateSupply(26, 1);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// // Ex4
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function cube (prise , value){
var product = (prise * 4)
console.log( product)
var product = (value * 4)
console.log( product)
}
cube (5,3)

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// // Ex5
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function fullName (firstName, LastName){
    console.log (firstName + " " + LastName)
}
fullName ("Abdulla" , "Nsour");

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// // Ex6
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// // function average (a,b,c,d,e){
// //     var all=(a + b + c + d + e )
// //     console.log(all)
// //     var cul = (all / 5)
// //     console.log(cul)
// // }
// // average(1,2,3,4,5)


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// // Ex6
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function average (a,b,c,d,e){
    var all=((a + b + c + d + e)/5 )
    console.log(all)
}
average(1,2,3,4,5)

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// // Ex7 calculate the cube number
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function randomNumber (){
    let randomNumber= Math.random() .toFixed(3)
console.log(randomNumber)
}
randomNumber ()

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// // Ex8  calculate the multiply of 2 numbers
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function multiply(amount1, amount2) {
    console.log(amount1 * amount2)
  };
  
  multiply(3, 4)
  multiply(5, 4)
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// // Ex9
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function canIGetADrivingLicense (age){
    if (age >= 20){
        return "yes u can";
    } else {
        return `please come back after ${20-age}years to get one`;
    }
}
console.log(canIGetADrivingLicense(7))
console.log(canIGetADrivingLicense(19.5))
console.log(canIGetADrivingLicense(20))
console.log(canIGetADrivingLicense(100))
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// // Ex10
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function sameLength(st1,st2){
    if(st1.length == st2.length){
return true;
    }
    else return false;
}
console.log(sameLength("tee","tree"));


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// // Ex11
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function largerNubmer(num1,num2){
    if(num1>num2){
return "the largerNubmer is: "+num1;
    }
    if(num1==num2){
return "the number is equal";
    }
    return "the largerNubmer is: "+ num2;

}
console.log(largerNubmer(3,4));
  //console.log(largerNubmer(3,3));
console.log(largerNubmer(7,4));

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// // Ex12
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function smallerNubmer(num1,num2,num3){
    if(num1<num2 && num1<num3){
return "the smallerNubmer is: "+num1;
    }
if(num1>num2 && num3>num2){
    return "the smallerNubmer is: "+ num2;}
    else  return "the smallerNubmer is: "+ num3;

}
console.log(smallerNubmer(3,4,2));
console.log(smallerNubmer(1,3,6));
console.log(smallerNubmer(7,4,8));

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// // Ex13
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function shorterString(f1,f2,f3,f4,f5){
    if(f1.length<f2.length && f1.length<f3.length && f1.length<f4.length && f1.length<f5.length){
return f1;
    }
    if(f2.length<f1.length && f2.length<f3.length && f2.length<f4.length && f2.length<f5.length){
return f2;
    }
    if(f3.length<f1.length && f3.length<f2.length && f3.length<f4.length && f3.length<f5.length){
    return f3;
}
if(f4.length<f1.length && f4.length<f2 && f4.length<f3.length && f4.length<f5.length){
    return f4;
}
return f5;

}
console.log(shorterString("air","tr","car","github","byyyyyyyy") + '   ' + 'this is ex13');
console.log(shorterString("air","t","car","github","by"));

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// // Ex14
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function longerString(n1,n2,n3,n4,n5){
if(n1.length>n2.length && n1.length>n3.length && n1.length>n4.length && n1.length>n5.length){
return n1;
    }
    if(n2.length>n1.length && n2.length>n3.length && n2.length>n4.length && n2.length>n5.length){
return n2;
    }
    if(n3.length>n1.length && n3.length>n2.length && n3.length>n4.length && n3.length>n5.length){
    return n3;
}
if(n4.length>n1.length && n4.length>n2.length && n4.length>n3.length && n4.length>n5.length){
    return n4;
}
return n5;

}
console.log(longerString("air","tr","car","github","byyyyyyyy") + ' ' + 'this is ex14');
console.log(longerString("air","t","car","github","by"));


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Ex15
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function isEven (number){
    let remainder = (number % 2)
    if (remainder == 0)
    {
        console.log(`${number} is True` + " " + ' & this is Task 15')
    }else {
        console.log(`${number} is false`+ " " +' & this is Task 15')
    }
}
isEven (6)

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Ex16
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function isOdd (number){
let remainder = (number % 2)
if (remainder == 0)
{
    console.log(`${number} is False`)
}else {
    console.log(`${number} is True`)
}
}
isOdd(5)

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Ex17
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function positive (number){

if (number >= 0)
{
    console.log(number)
}else {
    console.log(number * -1)
}
}
positive(-5)

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Ex18
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function fullName(fname, lname) {
console.log(fname + ' ' + lname);
}
fullName("Adam", "McCallen")


// Ex19 & Ex20 is the same task with, Ex6 & Ex7 

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Ex21
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function randomBetweenNumbers(min,max){
    return Math.floor(Math.random()*(max - min +1)+ min) 
}

randNum = randomBetweenNumbers(1,8);
console.log(randNum)

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Ex22
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function scoreInUniversty (score){
if (score >=101){
    console.log( 'undefined')}
else if (score >=95){
    console.log( 'A')
}
else if (score >=85){
    console.log( 'B')
}
else if (score >=70){
    console.log( 'C')
}
else if (score >=50){
    console.log( 'D')
}
else if (score >=0){
    console.log( 'F')
}
else if (score <=0){
    console.log( 'undefined')}
}
scoreInUniversty (99)

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Ex22 Switch statement
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function grade (g) {
    switch (g >= 0){
    // switch (True){  >>research the solution for this case<<
        case g >= 95 && g <=100:
        console.log('A');
        break;
        case g >= 85 && g <=94:
        console.log('B');
        break;
        case g >= 70 && g <=84:
        console.log('C');
        break;
        case g >= 60 && g <=69:
        console.log('D');
        break;
        default:
        g >=0 && g <=49
        console.log('F')
        break
    }
}
grade (80)


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Ex23
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
count=0;
function counters(){
return count += 1 ;
}
console.log(counters());
console.log(counters());
console.log(counters());
console.log(counters());
console.log(counters());

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// //Ex24
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function resetCounters(){
count=0;
console.log (" the counters reset");
}
resetCounters();

console.log(counters());
console.log(counters());
console.log(counters());
console.log(counters());


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Have a nice Day 
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>