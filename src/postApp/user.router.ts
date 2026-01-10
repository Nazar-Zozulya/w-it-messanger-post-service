import { Router } from 'express'
import { postController } from './user.controller'



const router = Router()

router.post("/create", postController.createPost)



export default router