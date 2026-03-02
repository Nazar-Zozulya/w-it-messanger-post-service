import { Prisma } from "../generated/prisma";
import { Post } from "./post.types";
import { Result } from "./result";




export type Tag = Prisma.TagGetPayload<{}>;

export interface TagService {
    createOrAddTagToPost(tag: string, postId: number): Promise<Result<string>>
    getPostsByTag(tag: string): Promise<Result<Post[]>>
}

export interface TagRepository {
    // createOrAddTagsToPosts(tags: string[], postId: number): Promise<Result<string>>
    addTagToPost(tag:string, postId:number): Promise<Result<Tag>>
    createNewTag(tag:string): Promise<Result<Tag>>
    findTag(tag:string): Promise<Result<Tag>>
    isHasTag(tag: string): Promise<Result<boolean>>
    findTagInPost(tag: string, postId: number): Promise<Result<boolean>>


    // createTag(tag: string): Promise<Result<string>>
    getPostsByTag(tag: string): Promise<Result<Post[]>>

    // findTag(tag: string): Promise<Result<Tag | null>>
}