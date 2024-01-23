// function calls another function which is embedded in same function 
//when calling, we can define its TIME PARAMETER incase it exceeds time...


function student(name,callback)
{
    setTimeout(function(){
        console.log(name);
        callback();
    }, 5000); //give output after --5 sec-- which is --5000 ms--
}
function details()
{
    console.log("Sripathy");
}
student("Your name is ",details);


//

