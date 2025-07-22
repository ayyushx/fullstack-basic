// This is created to give the response to the user

class ApiResponse{
    constructor( statusCode, data, message = "success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}