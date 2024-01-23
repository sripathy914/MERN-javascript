/*
function saving_reel()
{
    console.log("Reel is saving...");
    setTimeout(function(){
        saved_reel();
    },2000);
}
function saved_reel()
{
    console.log("Reel saved to collection");
}

*/

function isValid(loc)
{
    return loc==="Tokyo"
}

function location(correct,error)
{
    return new Promise(function(correct,error){
        setTimeout(function(){
            console.log("Location entered");
            var loc="Tokyo";
            if(isValid(loc))
            {
                correct("location valid");
            }
            else
            {
                error("Location invalid..add your location");
            }
        }, 1000);
    });
} 

location().then(function(correct){
    console.log(correct);
}).catch(function(error){
    console.log(error);
})