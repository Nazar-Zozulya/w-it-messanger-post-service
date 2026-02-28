import { Router } from 'express'
import { postController } from './post.controller'



const router = Router()

router.post("/create", postController.createPost)
router.get("/all", postController.getAllPosts)
router.delete("/delete",postController.deletePost)



export default router