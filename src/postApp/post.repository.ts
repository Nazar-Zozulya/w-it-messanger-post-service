import { prismaClient } from "../prisma/clients"
import { error, success } from "../tools/result"
import { PostRepository } from "../types/post.types"

export const postRepository: PostRepository = {
	createPost: async (data) => {
		try {
            console.log(data)

			const newPost = await prismaClient.post.create({
				data,
			})

			if (!newPost) return error("Failed to create post")

			return success(newPost)
		} catch (err) {
			return error(`${err}`)
		}
	},
	getAllPosts: async () => {
		try {
			const allPosts = await prismaClient.post.findMany({
				include: {
					tags: true,
				},
			})

			if (!allPosts) return error("No posts found")

			return success(allPosts)
		} catch (err) {
			return error(`${err}`)
		}
	},

	deletePost: async (id) => {
		try {
			const deletedPost = await prismaClient.post.delete({
				where: {
					id,
				},
			})

			if (!deletedPost) return error("problems with deleting post")

			return success(deletedPost)
		} catch (err) {
			console.log(`${err}`)
			return error(`${err}`)
		}
	},

	getPost: async (id) => {
		try {
			const findedPost = await prismaClient.post.findUnique({
				where: {
					id,
				},
			})

			if (!findedPost) return error("problems with finding post")

			return success(findedPost)
		} catch (err) {
			console.log(`${err}`)
			return error(`${err}`)
		}
	},

    getTagsFromPost: async (postId) => {
        try {
            const findedTags = await prismaClient.post.findUnique({
                where: {id: postId},
                select: {
                    tags: true
                }
            }) 

            if (!findedTags) return error("Не вдалося знайти теги")
            
            return success(findedTags)
        } catch (err) {
			console.log(`${err}`)
			return error(`${err}`)
		}
    }
}
