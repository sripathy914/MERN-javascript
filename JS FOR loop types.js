//for in 
//for of
//for each

var arr=[10,20,true,"Sripathy",96.10,false];

//for in
for(var i in arr) //takes only index
console.log(i);

console.log();//just space gap

for(var i in arr) //takes only index
    console.log("value present in ",i," is ",arr[i]);


console.log();
console.log();//think TOMMY think?


//for of
//used to access elements directly
for(var i of arr)
    console.log("Direct value ",i);

console.log();

//for each
//used to access elements directly
arr.forEach(value=>{
    console.log(value);
})

console.log();

//Objects with keys and for loop
var student={
    "Name":"Sri",
    "Age":20,
    "rollno":"21CDR050", 
}
for(var ele in student)
{
    console.log(ele);
}
console.log();




//NOW your test your MINDD...
//what is the output ??
var student={
    "Name":"Sri",
    "Age":20,
    "rollno":"21CDR050", 
}
for(var ele in student)
{
    console.log(student[ele]);
}

//that's it the For loop types..............