import multer from "multer"


// If we will directly upload from multer from frontend then we won't be able to specify the file name and hence we will not be able to access the file later on
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/temp') // Specify the directory where files will be stored
    },
    filename: (req, file, cb) => {
        // cb is a callback function that takes two arguments: error and filename
        // full form of cb is "callback"
        // working of cb is that it will be called when the file is successfully stored and perform the next operation
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9); // Generate a unique suffix
        cb(null, file.fieldname+ '-' + uniqueSuffix) // Append timestamp to the original file name
    }
})

export const upload = multer({
    storage : storage // Use the storage to store the files
})