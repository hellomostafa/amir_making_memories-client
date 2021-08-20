import React, { useEffect, useState } from 'react';

const Blog = () => {

    const [blogs, setBlogs] = useState([])
    
    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=faabcd9d92844c4c839cab67e0d8cf3d')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    const getTop = blogs.articles
    const topBlogs = getTop.slice(0, 4)

    console.log(topBlogs)
    return (
        <div class="bg-gray-300">
            <div class="container mx-auto py-20">
                <h2 class="text-center md:text-left">Latest Blogs</h2>
                <p class="text-center md:text-left">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, omnis.</p>
                <div class="flex flex-col justify-center items-center">
                    {
                        topBlogs.map(blog => (
                            <div class="w-80 md:w-full flex flex-col md:flex-row my-10 rounded-2xl shadow-2xl items-center">
                                <img class="w-80 h-56 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none" src={blog.urlToImage} alt="" />
                                <div class="px-6 py-6 md:py-0">
                                    <h4 class="text-2xl">{blog.title}</h4>
                                    <div class="flex py-2 text-sm font-semibold">
                                        <p>By: {blog.author}</p>
                                        <p>Date: {blog.publishedAt}</p>
                                    </div>
                                    <p class="pb-2 text-sm">{blog.description}</p>
                                    <div>
                                        <a href={blog.url} rel="noreferrer noopener" target="_blank">
                                            <button class="btn-gray">Full Blog</button>
                                        </a>
                                        
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Blog;