import { tagService } from "../tagApp/tag.service"
import { error, success } from "../tools/result"
import { PostService } from "../types/post.types"
import { postRepository } from "./post.repository"

export const postService: PostService = {
	createPost: async (data) => {
		if (!data) return error("Invalid data", 400)

		// разделяю дату поста и теги на 2 разные переменные
		const { tags, images, links, ...postData } = data

		const newPost = await postRepository.createPost(postData)

		if (newPost.status === "error") return newPost

		if (tags && newPost.status === "success") {
			await Promise.all(
				tags.map(async (tag) => {
					const tagResult = await tagService.createOrAddTagToPost(
						tag,
						newPost.data.id,
					)
					console.log("added tag: ", tagResult)
					return tagResult
				}),
			)
			const tagsFromPost = await postRepository.getTagsFromPost(
				newPost.data.id,
			)

			console.log("tagsgggg: ", tagsFromPost)

			const newPostData = {
				...newPost.data,
				tags:
					tagsFromPost.status === "success"
						? tagsFromPost.data.tags
						: [],
			}

			return success(newPostData)
		}

		return success(newPost.data)
	},

	getAllPosts: async () => {
		const posts = await postRepository.getAllPosts()
		return posts
	},

	deletePost: async (id, userId) => {
		const findPost = await postRepository.getPost(id)

		if (findPost.status === "error") return findPost

		console.log("math random: ", crypto.randomUUID().slice(0, 8))

		if (findPost.data.authorId !== userId)
			return error("it's not your post")

		const deletedPost = await postRepository.deletePost(id)
		return deletedPost
	},
}
