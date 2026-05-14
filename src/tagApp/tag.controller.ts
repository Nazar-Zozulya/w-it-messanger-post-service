import { TagController } from "../types/tag.types";
import { tagService } from "./tag.service";





export const tagController: TagController = {
    createTag: async (req, res) => {
        const tag = req.body

        const result = await tagService.createOrAddTagToPost(tag, 1)
        res.json(result)
    }
}