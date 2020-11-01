const express=require('express')

const app=express()

app.get('/',(req,res)=>{
    res.send('API running')
})

//Init Middleware
app.use(express.json({extended:true}))

//Defining Routes
app.use('/api/users', require('./routes/api/users'))

app.listen(5000,()=>{
    console.log("Server started at port 5000")
})