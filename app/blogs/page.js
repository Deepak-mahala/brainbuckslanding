"use client";
import { Search } from "lucide-react";
import Footer from "../footer"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
export default function AllBlogs() {

   const IMAGE_BASE_URL = 'https://auth.brainbucks.in/stream/get/public?blobname='
      const [blogPosts, setBlogPosts] = useState([])
       const [searchText, setSearchText] = useState("");
  
      const fetchBlogs = async () => {
          const response = await fetch(`https://prerec.brainbucks.in/learning/page/get/blog?search=${searchText}&page=1&blog_id=`, { method: "GET", headers: { "Content-Type": "Application/Json" } })
  
          const data =await response.json()
          if (data) {
              setBlogPosts(data.final_blogs)
          }
      }
  
  
  
      useEffect(() => {
          fetchBlogs(searchText);
      }, [searchText]);

  const router = useRouter();
  // const blogs = [
  //   {
  //     image: "/public (7).png",
  //     title: "How to Start a Blog in 2025",
  //     description: "Learn the basics of starting your own blog in just a few steps. We cover everything from choosing a platform to publishing your first post."
  //   },
  //   {
  //     image: "/public (8).png",
  //     title: "Top 10 Web Development Trends",
  //     description: "Stay ahead of the curve with the latest trends in web development. This blog explores popular frameworks, tools, and design patterns."
  //   },
  //   {
  //     image: "/public (1).jpg",
  //     title: "Beginner's Guide to React",
  //     description: "React is one of the most popular JavaScript libraries. This guide helps beginners get started with components, state, and props."
  //   },
  //   {
  //     image: "/public (1).jpg",
  //     title: "Beginner's Guide to React",
  //     description: "React is one of the most popular JavaScript libraries. This guide helps beginners get started with components, state, and props."
  //   },
  //   {
  //     image: "/public (1).jpg",
  //     title: "Beginner's Guide to React",
  //     description: "React is one of the most popular JavaScript libraries. This guide helps beginners get started with components, state, and props."
  //   },
  //   {
  //     image: "/public (1).jpg",
  //     title: "Beginner's Guide to React",
  //     description: "React is one of the most popular JavaScript libraries. This guide helps beginners get started with components, state, and props."
  //   },
  //   {
  //     image: "/public (1).jpg",
  //     title: "Beginner's Guide to React",
  //     description: "React is one of the most popular JavaScript libraries. This guide helps beginners get started with components, state, and props."
  //   },
  // ];



  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchText(value);
    console.log(value);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8 mt-21">All Blogs</h1>

       <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
                        <div className="max-w-md mb-14">
                            <div className="relative border-2 rounded-4xl">
                                <input
                                type="search"
                                placeholder="Search for a blog"
                                value={searchText}
                                onChange={handleInputChange}
                                className="w-100 h-12 pl-4 pr-12 text-base text-gray-700 bg-gray-50 border-0 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300 focus:bg-white transition-all duration-200"
                                />
                                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 flex items-center justify-center bg-gray-800 text-white rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors duration-200">
                                <Search className="h-4 w-4" />
                                <span className="sr-only">Search</span>
                                </button>
                            </div>
                            </div>
                    </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogPosts.map((blog, index) => (
          <div
            key={index}
            onClick={()=>{router.push(`/blogs/${blog?._id}`)}}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={IMAGE_BASE_URL + blog?.banner}
              alt={blog?.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-sm font-semibold text-gray-800">{blog?.scheduleDateTime}</h2>
              <p className="text-gray-600 mt-2">{blog?.title}</p>
              <button 
             onClick={()=>{router.push(`/blogs/${blog?._id}`)}}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer">
                Read More &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}
