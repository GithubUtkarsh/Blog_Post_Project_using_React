import React from 'react'
import appwriteService from '../appwrite/appwrite.config'
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`}>
            <div
                className='w-full bg-gray-100 rounded-xl p-4'>
                <div className='w-full justify-center mb-4'>
                    <img 
                        src={appwriteService.getFilePreview(featuredImage)} 
                        alt={title}
                        className='rounded-xl w-full h-70 object-cover'
                        onError={(e) => {
                            // Try alternative method if preview fails
                            const directUrl = appwriteService.getFileView(featuredImage);
                            e.target.src = directUrl;
                            e.target.onerror = () => {
                                e.target.src = 'https://via.placeholder.com/400x200?text=Image+Not+Found';
                            };
                        }}
                    />
                </div>
                <h2 className='text-xl font-bold text-center'>{title}</h2>

            </div>
        </Link>
    )
}

export default PostCard
