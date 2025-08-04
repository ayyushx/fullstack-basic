import { Router } from "express"
import registerUser from "../controllers/user.controller.js" // Importing the registerUser function from user.controller.js

const router  = Router()

router.route("/register").post(registerUser) // now this will handle the /users/register route

export default router; // exported the router as userRouter