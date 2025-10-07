import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import appwriteService from '../appwrite/appwrite.config'
import { Button, Container } from '../components'
import parse from 'html-react-parser'
import { useSelector } from 'react-redux'

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);
    const isAuthor = post && userData ? post.userID === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            })
        } else {
            navigate("/")
        }
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };
    return post ? (
        <div className='py-8'>
            <Container className=''>
                <div className='w-full h-auto relative flex justify-center mb-4 border rounded-xl p-2 '>
                    {post.featuredImage ? (
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className='rounded-lg px-20 '
                            onError={(e) => {
                                // Try alternative method if preview fails
                                const directUrl = appwriteService.getFileView(post.featuredImage);
                                e.target.src = directUrl;
                                e.target.onerror = () => {
                                    e.target.style.display = 'none';
                                    e.target.nextElementSibling.style.display = 'flex';
                                };
                            }}
                        />
                    ) : (
                        <div className='w-full h-48 bg-gray-200 rounded-xl flex items-center justify-center'>
                            <p className='text-gray-500'>No featured image ID found</p>
                        </div>
                    )}
                    <div className='w-full h-48 bg-gray-100 rounded-xl flex-col items-center justify-center hidden'>
                        <p className='text-gray-600 text-center'>Image not available</p>
                    </div>
                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button
                                    bgColor='bg-green-500'
                                    className='m-3 hover:bg-green-600 hover:cursor-pointer px-5'
                                >
                                    Edit
                                </Button>
                            </Link>
                            <Button
                                bgColor='bg-red-500'
                                onClick={deletePost}
                                className='hover:bg-red-600 hover:cursor-pointer m-4 px-5'
                            >
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className='w-full mb-6'>
                    <h1 className='text-2xl font-bold'>
                        {post.title}
                    </h1>
                </div>
                <div className='browser-css'>{parse(post.content)}</div>
            </Container>
        </div>
    ) : null
}
