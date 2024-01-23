//Collection unique values

//prints only first element,,
SetEx=new Set("Sripathy","Naga","Sachin");
console.log(SetEx)

//prints all elements
SetEx=new Set(["Sripathy","Naga","Sachin"]);
console.log(SetEx);


//prints only unique elements
SetEx.add("Sripathy");
SetEx.add("Mohanur");
console.log(SetEx);


for(var ele of SetEx)
    console.log(ele);

console.log();

for(var ele in SetEx)
    console.log(ele);

console.log("No output for 'for in'");

console.log();
//INTERVIEW BONUS QNS
//QNS : use for each for sets.....
//ANS : you can only use it on array / objects.

var setArray = Array.from(SetEx);

setArray.forEach(element=> {
    console.log(element);
});
