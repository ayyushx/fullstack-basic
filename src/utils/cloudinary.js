import {v2 as cloudinary} from "cloudinary"
import fs from "fs" // File System module to handle file operations 

// Gives permission to access the Cloudinary API
cloudinary.config({  // Here we configure the cloudinary instance with our credentials
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_API_SECRET
})

// While accessing the values from the server or the place where file is being uploaded, for that we need to use file path
const uploadOnCloudinary = async (filePath) => {
    try{
        if( !filePath ) return null // if filepath not valid then return null
        
        //Upload the file on cloudinary
        const reponse = await cloudinary.uploader.upload(filePath, {
            resource_type : "auto" // This will automatically detect the resource type (image, video, etc.)
        })

        // Hence , file uploaded successfully
        console.log("File uploaded successfully on Clouinary", reponse.url); // reponse.url will give the url of the uploaded file
        return reponse // returning the response which contains the url of the uploaded file( generally only the url is returned ) 
    }
    catch( error ){
        // This is done because the unuploaded file will remain their on the server and hence will consume space, so we need to delete it
        fs.unlinkSync(filePath) // If there is an error, we delete the file from the local system( locally saved temporary file)
        return null // returning null if there is an error
    }
}


export default uploadOnCloudinary;