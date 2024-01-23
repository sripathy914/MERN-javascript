// Set of statement in block to perform some operation

//Types of function pass...

// with parameter without return
function fun(a,b)
{
    var even=0;
    var odd=0;
    console.log("Function");
    for(var i=a;i<b;i++)
    {
        if(i%2==0)
        {
            console.log(i,"is even");
            even++;
        }
        else
        {
            console.log(i,"is odd");
            odd++;
        }
    }
    console.log("No of even :",even);
    console.log("No of odd :",odd);
}
fun(3,13);


console.log();

//with return and with parameter
function fun(a,b)
{
    var even=0;
    var odd=0;
    console.log("Function");
    for(var i=a;i<b;i++)
    {
        if(i%2==0)
        {
            console.log(i,"is even");
            even++;
        }
        else
        {
            console.log(i,"is odd");
            odd++;
        }
    }
    return [even,odd];
}
var result=fun(3,13);
console.log("No. of even numbers :",result[0]);
console.log("No. of odd numbers :",result[1]);

 //TASKS for you ...
 // Try for without parameter without return 
 // Try for without parameter with return
