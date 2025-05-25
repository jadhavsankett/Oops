//2 chained promises : User : posts : commants;
//TASK : 
// 1. create getuser()=>resolve with {id:1 , name: "sanket"}
// 2. getposts(userid)=> resolve with list of the titles 
// 3. getcomments(postid)=>resolve with the comments
// chain them together using .them () and log the final output 

//second time
function getuser(){
    return new Promise((res,rej)=>{
      setTimeout(() => {
        res({id:1,name:"sanket"})
      }, 1000);
    })
}
function getpost(userid){
    return new Promise((res , rej)=>{
        setTimeout(() => {
            res(["titel1","title2"])
        }, 1000);
    })
}
function getcomments(postid){
    return new Promise((res, rej)=>{
        setTimeout(() => {
            res(['alice in borderland','squid game'])
        }, 1000);
    })
}
getuser()
.then(function(data){
  console.log(data)
  return getpost(data.id)
})
.then(function(titles){
    console.log(titles);
    return getcomments("jsfjfjnn")
})
.then(function(cmts){
    console.log(cmts);
})
.finally(function(){
    console.log("all data are the fatched ");
})