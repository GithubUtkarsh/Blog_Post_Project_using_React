import React, { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input, Select, RTE } from '../index'
import appwriteService from '../../appwrite/appwrite.config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || '',
            slug: post?.slug || '',
            content: post?.content || '',
            status: post?.status || 'active',

        },
    })
    const navigate = useNavigate();
    const userData = useSelector(state => state.auth.userData);

    const submit = async (data) => {
        try {
            console.log("Form data:", data);
            console.log("User data:", userData);
            
            if (post) {
                const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null

                if (file) {
                    await appwriteService.deleteFile(post.featuredImage)
                }

                const dbPost = await appwriteService.updatePost(post.$id, {
                    ...data,
                    featuredImage: file ? file.$id : undefined,
                })
                
                if(dbPost) {
                    navigate(`/post/${dbPost.$id}`)
                }
            } else {
                if (!data.image || !data.image[0]) {
                    alert("Please select an image");
                    return;
                }
                
                const file = await appwriteService.uploadFile(data.image[0]);
                if (file) {
                    const fileId = file.$id
                    data.featuredImage = fileId
                    
                    console.log("About to create post with:", {
                        ...data,
                        userID: userData.$id,
                    });
                    
                    const dbPost = await appwriteService.createPost({
                        ...data,
                        userID: userData.$id,
                    })
                    if (dbPost) {
                        navigate(`/post/${dbPost.$id}`)
                    }
                }
            }
        } catch (error) {
            console.error("Submit error:", error);
            alert(`Error: ${error.message}`);
        }
    }

    const slugTransform = useCallback((value) => {
        if (value && typeof value === 'string') {
            return value
                .trim()
                .toLowerCase()
                // .replace(/^[a-zA-z\d\s]+/, '-')
                .replace(/\s+/g, '-')

            }
            return '' 
    }, [])

    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === 'title') {
                setValue('slug', slugTransform(value.title, { shouldValidate: true }))
            }
        })

        return () => {
            subscription.unsubscribe()
        }
    }, [watch, slugTransform, setValue])
    return (
        <form onSubmit={handleSubmit(submit)} className='mx-auto flex flex-wrap '>
            <div className="w-2/3 px-2">
                <Input
                    label="Title"
                    placeholder="Enter title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug"
                    placeholder="Enter slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                />
                <RTE
                    label="Content : " name="content" control={control} defaultValue={getValues("content")}
                />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image"
                    type="file"
                    className="mb-4"
                    accept="image/png , image/jpeg , image/jpg, image/webp, image/avif,image/gif"
                    {...register("image", { required: !post })}
                />
                {post && post.featuredImage && (
                    <div className='w-full mb-4'>
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className='rounded-lg w-full h-auto max-w-sm mx-auto'
                            onError={(e) => {
                                // Try alternative method if preview fails
                                const directUrl = appwriteService.getFileView(post.featuredImage);
                                e.target.src = directUrl;
                                e.target.onerror = () => {
                                    e.target.style.display = 'none';
                                    e.target.nextElementSibling.style.display = 'block';
                                };
                            }}
                        />
                        <div className='w-full p-4 bg-gray-100 rounded-lg text-center hidden'>
                            <p className='text-gray-600'>Current image not available</p>
                        </div>
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button
                    type='submit'
                    bgColor={post ? "bg-green-500 hover:bg-green-600 hover:cursor-pointer hover:text-gray-200" : "bg-blue-500 hover:bg-blue-600 hover:cursor-pointer hover:text-gray-200"}
                    className='w-full'
                >
                    {post ? "Update " : "Submit"}
                </Button>
            </div>
        </form>
    )
}

export default PostForm
