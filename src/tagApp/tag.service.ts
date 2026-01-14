import { error } from "../tools/result";
import { TagService } from "../types/tag.types";
import { tagRepository } from "./tag.repository";




export const tagService: TagService = {
    createOrAddTagsToPosts: async (tags) => {
        const fixedTags = tags.map((tag) => {
            if (tag.startsWith("#")) {
                return tag.slice(1);
            } else {
                const newTag = `#${tag}`;
                return newTag;
            }
        })


        const tagResult = await tagRepository.createOrAddTagsToPosts(fixedTags);
        return tagResult;
    },
    getPostsByTag: async (tag) => {
        return error("1213")
    }
}