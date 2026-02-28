import { Prisma } from "../generated/prisma";
import { Request, Response } from "express";
import { Result } from "./result";

export type Post = Prisma.PostGetPayload<{}>;
export type PostWithTags = Prisma.PostGetPayload<{
    include: {
        tags: true
    }
}>;

export interface PostCreateCredentials extends Post {
    tags: string[]
}


export interface PostController {
    createPost: (req: Request<{}, {}, PostCreateCredentials | undefined>, res: Response) => void;
    getAllPosts: (req: Request<{}, {}, null>, res: Response) => void;
    deletePost: (req: Request<{}, {}, { id: number }>, res: Response) => void
}

export interface PostService {
    createPost: (data: PostCreateCredentials | undefined) => Promise<Result<Post>>;
    getAllPosts: () => Promise<Result<PostWithTags[]>>;
    deletePost: (id: number) => Promise<Result<Post>>
}

export interface PostRepository {
    createPost: (data: Post) => Promise<Result<Post>>;
    getAllPosts: () => Promise<Result<PostWithTags[]>>;
    deletePost: (id: number) => Promise<Result<Post>>
}
