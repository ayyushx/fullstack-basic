import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        username : {
            type : String, 
            required : [true, "This field is required"],
            unique : true,
            index : true
        },
        email : {
            type : String,
            required : [true , "This field is required"],
            unique : true,
        },
        password : {
            type : String,
            required : [true, "This field is required"]
        }
    }
);

export const Users = new mongoose.model("Users", userSchema);