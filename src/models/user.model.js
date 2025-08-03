import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true, 
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowecase: true,
            trim: true, 
        },
        fullName: {
            type: String,
            required: true,
            trim: true, 
            index: true
        },
        avatar: {
            type: String, // cloudinary url
            required: true,
        },
        coverImage: {
            type: String, // cloudinary url
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        refreshToken: {
            type: String
        }

    },
    {
        timestamps: true
    }
)

// Async function because we will be using bcrypt to hash the password
// Now we will add middleware to perform an action just before saving the document
userSchema.pre("save", async function(next) { // next to tell that , execute next middleware (save is a middleware)
    if( this.isModified("password") ) return next(); // if the password is not modified, then we don't need to hash it again, so we call next() to skip hashing
    this.password = await bcrypt.hash(this.password, 10) // hashing the password before saving it( done using bcrypt)
    next();
})

// Gives whether password is correct or not
userSchema.methods.isPasswordCorrect = async function( password ){
    return await bcrypt.compare( password, this.password )
}

// JWT is like, whosoever is having the token that user is authenticated and given the data
userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        { // These are the payload data that will be encoded in the token when the user logs in and asks for an access token
            _id : this._id, // this._id refers to the user id
            email : this.email,
            username : this.username,
            fullName : this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET, // This is the secret key that will be used to sign the token
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY // This is the expiration time of the token, after which the token will be invalid
        }  
    ) // This method will generate an access token for the user
}
userSchema.methods.generateRefreshToken = function(){ // These are frequently refreshed therefore we have less number of values in them
    return jwt.sign(
        { // These are the payload data that will be encoded in the token when the user logs in and asks for an access token
            _id : this._id // this._id refers to the user id
        },
        process.env.REFRESH_TOKEN_SECRET, // This is the secret key that will be used to sign the token
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY // This is the expiration time of the token, after which the token will be invalid
        }  
    ) // This method will generate an access token for the user
}

export const User = mongoose.model("User", userSchema)