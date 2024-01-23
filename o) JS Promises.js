// In callback, we are not so sure that code will get executed in mentioned time
// due to this user/customer doesn't know what's happening, so we give promise which is.....

function isAuthenticated()
{
    return Math.random()<1;
}

function login(name,callback)
{
    return new Promise(function(response,noresponse){
        setTimeout(function(){
            if(isAuthenticated())
            {
                response("auth success");
            }
            else
            {
                noresponse("auth failed");
            }
        },1000)
    })
} 
login().then(function(message)
{
    console.log(message);
}).catch(function(){
    console.log(message)
})
