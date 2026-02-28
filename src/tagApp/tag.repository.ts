import { prismaClient } from "../prisma/clients";
import { error, success } from "../tools/result";
import { TagRepository } from "../types/tag.types";



export const tagRepository: TagRepository = {
    // createOrAddTagsToPosts: async (tags, postId) => {
    //     try {
    //         tags.map((tag) => {
                
    //         })


    //         return success("Tags created or added to posts");
    //     } catch (e) {
    //         return error(`${e}`)
    //     }
    // },
    addTagToPost: async (tag, postId) => {
        try {
            const updatedTag = await prismaClient.tag.update({
                where: {
                    name: tag
                },
                data: {
                    posts: {
                        connect: {
                            id: postId
                        }
                    }
                },
                include: {
                    posts: true
                }
            })

            if (!updatedTag) {
                return error("Failde to add tag to post")
            }


            return success(updatedTag)

        } catch(err) {
            console.log(`addPostToTag tagApp repository ${err}`)
            return error(`${err}`)
        }
    },

    createNewTag: async (tag) => {
        try {
            const newTag = await prismaClient.tag.create({
                data: {
                    name: tag
                }
            })

            if (!newTag) {
                return error("Failde to create tag")
            }


            return success(newTag)

        } catch (err) {
            console.log(`createNewPost tagApp repository ${err}`)
            return error(`${err}`)
        }
    },

    findTag: async (tag) => {
        try{

            const findedTag = await prismaClient.tag.findUnique({
                where: {
                    name: tag
                }
            })

            if (!findedTag) {
                return error("Failde to create tag")
            }
            
            
            return success(findedTag)
        } catch (err) {
            console.log(`findTag tagApp repository ${err}`)
            return error(`${err}`)
        }
    },

    findTagInPost: async (tag, postId) => {
        try {
            // const findTag = await prismaClient.tag.findUnique({
            //     where: {
            //         name: tag,
            //         posts: {
            //             where: {

            //             }
            //         }
            //     },

            //     include: {
            //         posts: true
            //     }
            // })
            const findTag = await prismaClient.tag.findUnique({
                where: {name: tag},

                include: {
                    posts: true
                }
            })

            
            const post = await prismaClient.post.findUnique({
                where: { id: postId }
                
            })
            
            const a = [1,2,3]
            // a.find

            if (!findTag) {
                return error("Failed to find tag")
            }

            if (!post) {
                return error("Failed to find post")
            }

            
            if (!findTag) {
                return success(false)
            }



            const findedPost = findTag.posts.find((findPost) => {
                return findPost.id === post.id
            })

            if (!findedPost) return success(false)
            
            return success(true)
        } catch (err) {
            console.log(`findTagInPost tagApp repository ${err}`)
            return error(`${err}`)
        }
    },

    getPostsByTag: async (tag) => {
        return error("23")
    },

    isHasTag: async (tag) => {
        try{

            const findedTag = await prismaClient.tag.findUnique({
                where: {
                    name: tag
                }
            })

            if (!findedTag) {
                return success(false)
            }
            
            
            return success(true)
        } catch (err) {
            console.log(`findTag tagApp repository ${err}`)
            return error(`${err}`)
        }
    },
}