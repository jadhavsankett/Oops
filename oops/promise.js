//1. simulate a food Deliverd
// TASK : create the function orderfood that return a promise . It shoud resolve after 2 second with 
// "pizza deliverd"

function orderfood(){
    return new Promise((res , rej)=>{
        setTimeout(() => {
            let chance = Math.random() < .7;
            if(chance) res();
            else rej()
        }, 2000);
    })
}
orderfood()
.then(function(){
    console.log("✅pizza deliverd");
})
.catch(function(){
    console.log("❌delivery failed");
})