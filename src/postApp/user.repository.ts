import { prismaClient } from "../prisma/clients"
import { error, success } from "../tools/result"
import { PostRepository } from "../types/post.types"





export const postRepository: PostRepository = {
    createPost: async (data) => {
        try {
            const newPost = await prismaClient.post.create({
                data
            })
            return success("Post created successfully")
        } catch (err) {
            return error(`${err}`)
        }
    }
}