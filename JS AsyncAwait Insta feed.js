 // create your own instagram
 async function like()
 {
     return new Promise(
         function(like_post){
             setTimeout(function(){
                like_post("1st post's like");
             }, 1000);
         }
     )
 }

 async function comment()
 {
     return new Promise(
         function(comment_post){
             setTimeout(function(){
                comment_post("1st post's comment");
             }, 1000);
         }
     )
 }
 
 async function share()
 {
    return new Promise(
        function(share_post){
            setTimeout(function(){
                share_post("1st post's share");
            }, 1000);
        }
    )
 }

 async function post()
 {
    var post=new Promise(function(postresponse){
        setTimeout(function(){
            postresponse("1st post");
        }, 1000);
    });

    var [feed,commentp,likep,sharep]=await Promise.all([post,like(),comment(),share()]);
    console.log(await post);
    console.log(await likep);
    console.log(await commentp);
    console.log(await sharep);
}
post();