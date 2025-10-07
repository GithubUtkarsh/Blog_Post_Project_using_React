import React, { useState, useEffect } from 'react'
import { Container, PostCard } from '../components'
import appwriteService from '../appwrite/appwrite.config'

function AllPosts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if(posts && posts.documents) {
                setPosts(posts.documents)
            }
        }).catch((error) => {
            console.error('Error fetching posts:', error)
        }).finally(() => {
            setLoading(false)
        })
    }, [])
    if(loading) {
        return (
            <div className='py-8'>
                <Container>
                    <div className="flex flex-wrap">
                        <div className="w-full p-2 text-center">
                            <h1 className='text-2xl font-bold'>Loading posts...</h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    return (    
        <div className='py-8'>
            <Container className='w-full'>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <div key={post.$id} className="p-2 w-1/4">
                            <PostCard post={post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts
