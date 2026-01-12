import { prismaClient } from "../prisma/clients"
import { error, success } from "../tools/result"
import { PostRepository } from "../types/post.types"





export const postRepository: PostRepository = {
    createPost: async (data) => {
        try {
            const newPost = await prismaClient.post.create({
                data
            })

            if (!newPost) return error("Failed to create post")

            return success("Post created successfully")
        } catch (err) {
            return error(`${err}`)
        }
    },
    getAllPosts: async () => {
        try {
            const allPosts = await prismaClient.post.findMany()

            if (!allPosts) return error("No posts found")

            return success(allPosts)
        } catch (err) {
            return error(`${err}`)
        }
    }
}