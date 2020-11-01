const express=require('express')
var jwt=require('jsonwebtoken')
const router=express.Router()

let Users=[]
//const {check,validationResult}=require('express-validator/check')
//@route POST api/users
//@description Register user
//@access Public
router.post('/posts',verifyToken,(req,res)=>{
    jwt.verify(req.token,'secretKey',(err,authData)=>{
        if(err){
            res.sendStatus(403)
        }
        else
        {
            res.json({
                message:'Post created.................................................',
                authData
            })

        }
    })
})

router.post('/login',(req,res)=>{
    let userObj={
        id:req.body.id,
        name:req.body.name
    }
    Users.forEach((user)=>{
        //res.send(user)
        if(userObj.id==obj.id && userObj.name==obj.name)
        {
            jwt.sign({user:userObj},'secretkey',(err,token)=>{
                res.json({
                    message:"Login successfully",
                    token:token
                })
            })
        }
        
        /*if(JSON.parse(JSON.stringify(user))==JSON.parse(JSON.stringify(obj)))
            {
                res.json(
                    {
                        Message:"User Login"
                    }
                )
            }*/
    })
    
    //res.send("In")
})

router.post('/signup',(req,res)=>{
    let user={
        id:req.body.id,
        name:req.body.name
    }

    Users.push(user)
    
    console.log(Users);
})

function verifyToken(req,res,next){

    const bearerheader=req.headers['authorization']
    if(typeof(bearerheader)!=='undefined')
    {
        const bearer=bearerheader.split(' ')
        const bearerToken=bearer[1]
        req.token=bearerToken;
        next();
    }
    else{
        res.sendStatus(403)
    }
}

module.exports=router