var callMe=function(func){
    setTimeout(()=>{
        console.log("Async")
        func()
    },3000)

}

function func(){
    console.log("CallBack")
}

callMe(func)