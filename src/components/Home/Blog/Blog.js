import React, { useEffect, useState } from 'react';

const Blog = () => {

    const blogs = [
        {
           "author": "Andrew Desiderio, Heather Caygle, Lara Seligman",
            "title": "Austin contradicts Biden, says Americans have been ‘beaten’ by the Taliban - POLITICO",
            "description": "The President said Friday that the U.S. was not aware of Americans having trouble getting to the airport in Kabul.",
            "url": "https://www.politico.com/news/2021/08/20/lloyd-austin-taliban-america-defeat-506475",
            "urlToImage": "https://static.politico.com/8a/3d/23ad98d1407b86ed09651b1ceacd/gettyimages-1335073257.jpg",
            "publishedAt": "2021-08-20T21:44:47Z", 
        },
        {
            "author": "Denitsa Tsekova",
            "title": "Ending unemployment benefits early didn't help U.S. states very much - Yahoo Money",
            "description": "One in 8 workers who lost some or all of their benefits in the 19 states that ended the unemployment programs in June found a new job by August 6, according ...",
            "url": "https://money.yahoo.com/ending-unemployment-benefits-early-didnt-help-us-states-very-much-182423121.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/Ls7IXdAXXSV1Ksk63PLdTA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTIwMDA7aD0xMzQx/https://s.yimg.com/os/creatr-uploaded-images/2021-08/83091980-01db-11ec-b7ff-fcd365674b92",
            "publishedAt": "2021-08-20T18:24:23Z",
        },
        {
            "author": "Andrew Paul",
            "title": "Mark Zuckerberg swears he has friends, they just live in a different Metaverse - The A.V. Club",
            "description": "Zuck's \"revolutionary\" technological announcement looks more like Wii Sports than The Matrix",
            "url": "https://www.avclub.com/mark-zuckerberg-swears-he-has-friends-they-just-live-i-1847519304",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/b164f83f4697255b5570f2874e125ac2.png",
            "publishedAt": "2021-08-20T19:45:00Z", 
        },
        {
            "author": "Nicole Karlis",
            "title": "Scientists finally know what happened to Perseverance's mysterious disappearing rock sample - Salon",
            "description": "Perseverance drilled a hole in a Martian rock to collect a sample — then the sample disappeared",
            "url": "https://www.salon.com/2021/08/20/scientists-finally-know-what-happened-to-perseverances-mysterious-disappearing-rock-sample/",
            "urlToImage": "https://mediaproxy.salon.com/width/1200/https://media.salon.com/2021/02/mars-rover-perseverance-0218211.jpg",
            "publishedAt": "2021-08-20T20:32:00Z",
        }
    ]
    return (
        <div class="bg-gray-300" id="blog">
            <div class="container mx-auto py-20">
                <h2 class="text-center md:text-left">Latest Blogs</h2>
                <p class="text-center md:text-left">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, omnis.</p>
                <div class="flex flex-col justify-center items-center">
                    {
                        blogs.map(blog => (
                            <div class="bg-white w-80 md:w-full flex flex-col md:flex-row my-7 rounded-2xl shadow-2xl items-center">
                                <img class="w-80 h-56 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none" src={blog.urlToImage} alt="" />
                                <div class="px-6 py-6 md:py-0">
                                    <h4 class="text-2xl">{blog.title}</h4>
                                    <div class="flex py-2 text-sm font-semibold">
                                        <p>By: {blog.author}</p>
                                        <p>Date: {blog.publishedAt}</p>
                                    </div>
                                    <p class="pb-2 text-sm">{blog.description}</p>
                                    <div>
                                        <a href={blog.url} rel="noreferrer " target="_blank">
                                            <button class="btn-gray">Read more</button>
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