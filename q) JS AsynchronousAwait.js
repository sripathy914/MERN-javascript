 // All at a time -- Async(--concurrent--)
 // Waiting and execute each at time -- Await

 async function asaw()
 {
    var promise=new Promise(function(response){
        setTimeout(function(){
            response("Async. Await");
        },3000);
    });
    console.log(await promise);
 }
 asaw();    

