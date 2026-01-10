import { Prisma } from "../generated/prisma";
import { Request, Response } from "express";
import { Result } from "./result";

export type Post = Prisma.PostGetPayload<{}>;

export interface PostController {
  createPost: (req: Request<{}, {}, Post | undefined>, res: Response) => void;
}

export interface PostService {
  createPost: (data: Post | undefined) => Promise<Result<string>>;
}

export interface PostRepository {
  createPost: (data: Post) => Promise<Result<string>>;
}
