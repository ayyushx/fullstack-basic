const asyncHandler = (requestHandler ) => {
    return (req, res, next) => {
        Promise
        .resolve(requestHandler(req, res, next))
        .catch( (err) => next(err) )
    }
}

export  default asyncHandler

// Example of higher order functions i.e., a function is given as a parameter to another function

// const asyncHandler = (fn) => async (req, res, next) =>  {
//     try {
//         await fn(req, res, next);
//     } catch (error) {
//         res.status( error.code || 500 ).json({
//             success : false,
//             message : error.message
//         });
//     }
// }