import mongoose from "mongoose";

const userSchema=new  mongoose.Schema({
    name:{
          type:String,
          require:true
      },
       email:{
        type:String,
        require:true
     },
     address:{
        type:String,
        require:true
     },
     foodname:{
      type:String,
      require:true

     },
     price:{
      type:Number,
      require:true
     },
     orderstatus:{
      type:String,
      require:true

     },
     quantity:{
      type:Number,
      require:true
     }

})

export default mongoose.model("Users",userSchema)