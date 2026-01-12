import { Router } from 'express'
import { postController } from './user.controller'



const router = Router()

router.post("/create", postController.createPost)
router.get("/all", postController.getAllPosts)



export default router