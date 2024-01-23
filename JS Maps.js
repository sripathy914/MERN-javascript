//To map key and its value..

MapEx=new Map([
    ["Name","Sripathy"],
    ["Rollno","21CDR050"],

]);
console.log(MapEx);


//for in  usage
for(var i in MapEx)
{
    console.log(i);
}
//OUTPUT : empty output...

console.log();

//for of  usage
for(var i of MapEx)
{
    console.log(i);
}
//OUTPUT : empty output...

//printing at types

//check ELEMENT in map
console.log(MapEx.has("Name"));

//get value of that KEY in map
console.log(MapEx.get("Name"));

console.log(MapEx);

// TASKS for you
//print the parameters
//add new parameter
//delete parameter

//ANS :
console.log(MapEx);

console.log();

MapEx.set("Age",20);
MapEx.set("Phoneno","9998765431");
console.log(MapEx   ``);

console.log();

MapEx.delete("Phoneno");
console.log(MapEx);