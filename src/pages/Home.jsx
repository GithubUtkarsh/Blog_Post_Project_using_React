import React, { useState, useEffect } from 'react'
import appwriteService from '../appwrite/appwrite.config'
import { Container, PostCard } from '../components'

function Home() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts && posts.documents) {
                setPosts(posts.documents)
            }
        }).catch((error) => {
            console.error('Error fetching posts:', error)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    if (loading) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className='flex flex-wrap'>
                        <div className="w-full p-2">
                            <h1 className='text-2xl font-bold'>Loading...</h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    if (posts.length === 0) {
        return (
            <div className="w-full text-center">
                <Container>
                    <div className='w-full min-h-[640px] flex flex-wrap justify-center items-center'>
                        <div className=''>
                            <div className="w-full p-2">
                                <h1 className='text-5xl font-bold hover:text-gray-500'>
                                    Login to read Post
                                </h1>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className="w-full min-h-[630px] py-8">
            <Container className='w-full'>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className="p-2 w-1/4">
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home
