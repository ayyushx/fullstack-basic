import asyncHandler from "../utils/asyncHandler.js";

// This function handles user registration
const registerUser = asyncHandler( async ( req, res ) => {
    res.status(200).json({
        message : "Done and Dusted"
    })
})

export default registerUser;