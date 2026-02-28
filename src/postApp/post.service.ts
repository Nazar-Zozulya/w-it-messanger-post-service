import { tagService } from "../tagApp/tag.service";
import { error, success } from "../tools/result"
import { PostService } from "../types/post.types";
import { postRepository } from "./post.repository";

export const postService: PostService = {
    createPost: async (data) => {
        if (!data) return error("Invalid data", 400);

        // разделяю дату поста и теги на 2 разные переменные
        const { tags, ...postData } = data
        
        console.log(data.tags)

        
        const newPost = await postRepository.createPost(postData)
        
        if (tags.length !== 0 && newPost.status === "success") {
            const getTags = tags.map(async (tag) => {
                const tagResult = await tagService.createOrAddTagToPost(tag, newPost.data.id)
                console.log("added tag: ", tagResult)
                return tagResult
            })
        }

        if (newPost.status === "error") return error(newPost.message)

        return success(newPost.data)
    },

    getAllPosts: async () => {
        const posts = await postRepository.getAllPosts()
        return posts
    },
    
    deletePost: async (id) => {
        const deletedPost = await postRepository.deletePost(id)
        return deletedPost
    }
}