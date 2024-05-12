const db=require('./db')

const Registration=(Name,Email,Mobile_No,Password)=>{
    return db.user.findOne({Email}).then(result=>{
         if(result){
             return {
                 statusCode:404,
                 message:"user already exist"
             }         
             }
             else{
                 const newUSER=new db.user({
                    Name,Email,Mobile_No,Password})
                    newUSER.save()
 
                 return{
                     statusCode:200,
                     message  :"user detailes added"                     
                 }
         }
     }) 
 }

const Signin=(Email,Password)=>{
    return db.user.findOne({Email,Password}).then(result=>{
         if(result){
             currentuser=result.Name
             currentemail=result.Email
             return {
                   statusCode:200,
                   message  :"login sucesess",
                   currentemail,
                   currentuser                   
             }
            
             }
             else{
                return{
                    statusCode:404,
                    message:"user not exist"
                     
                 }
         }
     })
 
 }

 const Addexpense=(Title,Description,Amount,Date,Email)=>{
    return db.expense.find({Title}).then(result=>{
       {
            const Newexpense =new db.expense({
                Title,Description,Amount,Date,Email})
                Newexpense.save()
             return{
                 statusCode:200,
                 message  :"Expense added"
        
            }
         }
        }
    )
}


const Addincome=(Title,Description,Amount,Date,Email)=>{
    return db.income.find({Title}).then(result=>{
       {
            const Newincome =new db.income({
                Title,Description,Amount,Date,Email})
                Newincome.save()
             return{
                 statusCode:200,
                 message  :"Income added"
        
            }
         }
        }
    )
}
const Listexpenses = (Email) => {
    console.log(Email);
    return db.expense.find({Email}).then(result => {
            if (result) {
               
                return {

                    statusCode: 200,
                    expense: result
                };
            } else {
                return {
                    statusCode: 404,
                    message: "No expenses found for the user"
                };
            }
        })
        .catch(error => {
            // Handle database errors or other errors
            console.error("Error:", error);
            return {
                statusCode: 500,
                message: "Internal server error"
            };
        });
};


const Listincomes = (Email) => {
    console.log(Email);
    return db.income.find({Email}).then(result => {
            if (result) {               
                return {

                    statusCode: 200,
                    income: result
                };
            } else {
                return {
                    statusCode: 404,
                    message: "No expenses found for the user"
                };
            }
        })
        .catch(error => {
            // Handle database errors or other errors
            console.error("Error:", error);
            return {
                statusCode: 500,
                message: "Internal server error"
            };
        });
};
const Updatepassword = (Email, Password) => {
return db.user.findOneAndUpdate({ Email },{Password},{  new: true }).then(result => {
        if(result){
            result.Password= Password
            result.save()

        return{
            statusCode :200,
            message :"Password Updated"
        }
    }
  })
}
 module.exports={
 
    Registration,Signin,Addexpense,Addincome,Listexpenses,Listincomes,Updatepassword
}