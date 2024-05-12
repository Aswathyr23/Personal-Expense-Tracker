const express=require('express')
const logic=require('./service/logic')

const server=express()  
const cors=require('cors')
 server.use(cors({origin:'http://localhost:3000'}))

 server.use(express.json())

 server.listen(8000,()=>{
    console.log("server started at port 8000");
 })

 server.post('/Registration',(req,res)=>{
   logic.Registration(req.body.Name ,req.body.Email,req.body.Mobile_No,req.body.Password).then(result=>{
       res.status(result.statusCode).json(result)
   })
})

server.post('/Signin',(req,res)=>{
    logic.Signin(req.body.Email,req.body.Password).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

server.post('/Addexpense',(req,res)=>{
    logic.Addexpense(req.body.Title,req.body.Description,req.body.Amount,req.body.Date,req.body.Email ).then(result=>{
        res.status(result.statusCode
            ).json(result)
    })
})

server.post('/Addincome',(req,res)=>{
    logic.Addincome(req.body.Title,req.body.Description,req.body.Amount,req.body.Date,req.body.Email ).then(result=>{
        res.status(result.statusCode).json(result)
    })
})
server.post('/Listexpenses',(req,res)=>{
    logic.Listexpenses(req.body.Email ).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

// server.post('/Listincomes',(req,res)=>{
//     logic.Listincomes(req.body.Email ).then(result=>{
//         res.status(result.statusCode).json(result)
//     })
// })

server.post('/Listincomes', (req, res) => {
    console.log('Request to list incomes:', req.body.Email);
    logic.Listincomes(req.body.Email).then(result => {
        console.log('Response from Listincomes:', result);
        res.status(result.statusCode).json(result);
    });
});

// server.post('/Updatepassword',(req,res)=>{
//     logic.Updatepassword(req.body.Email,req.body.Password).then(result=>{
//         res.status(result.statusCode).json(result)
//     })
//   })
server.post('/Updatepassword', (req, res) => {
    logic.Updatepassword(req.body.Email, req.body.Password)
        .then(result => {
            res.status(result.statusCode).json(result);
        })
        .catch(error => {
            res.status(500).json({
                statusCode: 500,
                message: "Internal Server Error"
            });
        });
});