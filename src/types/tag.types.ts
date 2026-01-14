import { Prisma } from "../generated/prisma";
import { Post } from "./post.types";
import { Result } from "./result";




export type Tag  = Prisma.TagGetPayload<{}>;

export interface TagService {
    createOrAddTagsToPosts(tags: string[]): Promise<Result<string>>
    getPostsByTag(tag: string): Promise<Result<Post[]>>

}

export interface TagRepository {
    createOrAddTagsToPosts(tags: string[]): Promise<Result<string>>
    // createTag(tag: string): Promise<Result<string>>
    getPostsByTag(tag: string): Promise<Result<Post[]>>
    // findTag(tag: string): Promise<Result<Tag | null>>
}