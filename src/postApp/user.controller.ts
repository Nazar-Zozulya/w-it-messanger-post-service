import { PostController } from "../types/post.types";
import { postService } from "./user.service";




export const postController: PostController = {
    createPost: async (req, res) => {
        const data = req.body;

        const result = await postService.createPost(data)

        res.json(result)
    }
}