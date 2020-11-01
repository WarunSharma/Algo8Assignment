var callMe=function(func){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Async")
            resolve()
        },3000)
    })
    

}

function func(){
    console.log("CallBack")
}

callMe(func).then(()=>{
    func();
})