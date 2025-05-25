// 3. FAck ApI delay 
// TASK :
//write a function fackapicall (endpoint) that : 
// 1 accepts a string like "user" or "post";
// 2 resolve with same dammy data after a random delay [1-3 sec]


function fackapicall(endpoint){
  const data = {
    user : ["java",'java script','c++','python'],
    post : ["die for you","save the three","i was never theer"]
  }
  let delay = Math.random() * 2000 + 1000;
  return new Promise(( res , rej)=>{
    setTimeout(() => {
        res(data[endpoint])
    }, delay);
  })
}
fackapicall("user")
.then(function(data){
    console.log(data)
})
fackapicall("post")
.then(function(data){
    console.log(data)
})