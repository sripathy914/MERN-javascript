// 1
var student={
    "Name":"Sri",
    "Age":20,
    "rollno":"21CDR050", 
}
console.log(student);

//INTERVIEW QNS
// " , " is optional for your keypair value


//2
student["Final_Marks"]=96.10;
student["Status"]="Unmarried";
console.log(student);

//INTERVIEW QNS
// why key dont have double quotes in output..
//ANS : the key already have internal quotes so..


//3
//change exiting object key
student["Name"]="Sripathy";
console.log(student);

//4
var staff=new Object();
staff["Name"]="Sachin";
staff["Dept"]="CSD";
staff["Cou rse"]="Game Design";
console.log(staff);


// BONUS PRINT
//print in specific way

console.log(staff)
console.log(staff.Name);
console.log(staff["Cou rse"]);