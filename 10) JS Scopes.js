//Global scope
//Local scope
//Block scope

// Global scope
for(var i=0;i<5;i++)
{
    console.log(i);
}
console.log("Global variable last value",i);

//Local scope and block scope
for(var i=0;i<5;i++)
{
    let x=10;//can't be accessed outside 
             //cause error
    console.log(i);
}
console.log();


// Mix of all scopes.....

//Try it and take output...
var a=10;
var b=10;
{
    let a=5;
    let b=5;
    console.log(a);
    console.log(b);
}
console.log(a);
console.log(b);

//OUTPUT : 10 5 5 10

console.log();

//Try it and take output...
var a=10;
var b=10;
{
    var a=5;
    var b=5;
    console.log(a);
    console.log(b);
}
console.log(a);
console.log(b);

//OUTPUT : 5 5 5 5
