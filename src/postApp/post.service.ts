import { error, success } from "../tools/result"
import { PostService } from "../types/post.types";
import { postRepository } from "./post.repository";

export const postService: PostService = {
    createPost: async (data) => {
        if (!data) return error("Invalid data", 400);
        
        const newPost = await postRepository.createPost(data)

        if (newPost.status === "error") return error(newPost.message)

        return success(newPost.data)
    },

    getAllPosts: async () => {
        const posts = await postRepository.getAllPosts()
        return posts
    }
}