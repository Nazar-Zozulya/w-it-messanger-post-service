import { error, success } from "../tools/result"
import { TagService } from "../types/tag.types"
import { tagRepository } from "./tag.repository"

export const tagService: TagService = {
	createOrAddTagToPost: async (tag, postId) => {
		const fixedTag = () => {
			if (tag.startsWith("#")) {
				return tag.slice(1)
			} else {
				const newTag = `#${tag}`
				return newTag
			}
		}

		const tagIsReal = await tagRepository.isHasTag(tag)

		if (tagIsReal.status === "error") return tagIsReal

		if (!tagIsReal.data) {
			const newTag = await tagRepository.createNewTag(tag)

			if (newTag.status === "error") return newTag

			const addedTag = await tagRepository.addTagToPost(tag, postId)

			if (addedTag.status === "error") return addedTag

			return success("Тег успішно додано")
		} else {
			const addedTag = await tagRepository.addTagToPost(tag, postId)
			if (addedTag.status === "error") return addedTag

			return success("Тег успішно додано")
		}
	},
	getPostsByTag: async (tag) => {
		return error("1213")
	},
}
