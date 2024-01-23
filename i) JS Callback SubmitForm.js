//SCENARIO
//Let's take example of instagram post ....

// 1) we click the save button,
// 2) reel is saving in backend,..
// 3) reel got save to "collections" in your insta cloud.

function story(buttonclick,saving_reel)
{
    setTimeout(function(){
        console.log(buttonclick);
        saving_reel();
    }, 1000);
}
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

story("Save button clicked",saving_reel);
