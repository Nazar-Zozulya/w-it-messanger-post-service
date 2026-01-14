import { error, success } from "../tools/result";
import { TagRepository } from "../types/tag.types";



export const tagRepository: TagRepository = {
    createOrAddTagsToPosts: async (tags) => {
        try {
            tags.map((tag) => {
                
            })


            return success("Tags created or added to posts");
        } catch (e) {
            return error(`${e}`)
        }
    },
    getPostsByTag: async (tag) => {
        return error("23")
    }
}