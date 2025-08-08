"use client";
// import { Avatar } from "@heroui/avatar";
import { Search } from "lucide-react";
import AutoSlider from "../autoSlider";
import Link from "next/link";
import Footer from "../footer"
import { useRouter } from "next/navigation";
export default function blogsbycategory () {
    const router = useRouter();

    const members = [
        {
            name: "Deepal Choudhary Ringus",
            image: "https://www.fridaynightcars.com/cdn/shop/articles/my25-escalade-gallery-exterior-modal-front_520x500_520x500_2e33b5e9-ce18-491b-bb39-3a0335108693.jpg?v=1745580568",
        },
        {
            name: "Ganpat Yadav",
            image: "https://i.pravatar.cc/150?u=a042581f4e29026705d",
        },
        {
            name: "Netram Ji",
            image: "https://www.fridaynightcars.com/cdn/shop/articles/main_45ada437b5.webp?v=1745907690&width=1100",
        },
        {
            name: "Amrinder Singh",
            image: "https://i.pravatar.cc/150?u=a042581f4e29026706d",
        },
        {
            name: "Aadi Sir RNS",
            image: "https://i.pravatar.cc/150?u=a042581f4e29026706d",
        },
        {
            name: "Vikas Yadav Sabalpura",
            image: "https://i.pravatar.cc/150?u=a042581f4e29026706d",
        },
        {
            name: "Nitan Sahu",
            image: "https://i.pravatar.cc/150?u=a042581f4e29026706d",
        },
        {
            name: "Kajal Yadav",
            image: "https://i.pravatar.cc/150?u=a042581f4e29026706d",
        },
        {
            name: "Aishwariya Beniwal",
            image: "https://i.pravatar.cc/150?u=a042581f4e29026706d",
        },
        {
            name: "Roshan Sharma",
            image: "https://i.pravatar.cc/150?u=a042581f4e29026706d",
        },
        {
            name: "Pooran Yadav",
            image: "https://i.pravatar.cc/150?u=a042581f4e29026706d",
        },
        {
            name: "Gajju dada RNS",
            image: "https://i.pravatar.cc/150?u=a042581f4e29026706d",
        },
        
    ];

    return(
        <>
            <div className="mx-auto bg-white">
                <div className="mx-auto max-w-7xl py-10 px-4">
                <div className="text-center">
                     <h2 className=" text-5xl  text-gray-800 font-semibold mt-21">Blogs</h2>
                        <h2 className="text-gray-500 mt-4">Read our Daily Updated blogs to keep yourself acknowledged and updated about the latest happening around the globe.</h2>
                </div>
                    <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
                        <div className="max-w-md mt-7">
                            <div className="relative border-2 rounded-4xl">
                                <input
                                type="search"
                                placeholder="Search for a blog"
                                className="w-100 h-12 pl-4 pr-12 text-base text-gray-700 bg-gray-50 border-0 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300 focus:bg-white transition-all duration-200"
                                />
                                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 flex items-center justify-center bg-gray-800 text-white rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors duration-200">
                                <Search className="h-4 w-4" />
                                <span className="sr-only">Search</span>
                                </button>
                            </div>
                            </div>
                    </div>
                    <div className="text-center text-gray-800 mt-10">
                        <h1 className="text-2xl font-semibold">Browse by Categories</h1>
                    </div>
                    <div className="flex gap-10 justify-center items-center flex-wrap mt-14">
                       {members.map((member, index) => (
                        <div key={index}  className="max-w-md cursor-pointer transition-all duration-300 hover:scale-[1.03]">
                        <div onClick={() => router.push("/blogs")} className="border-2 rounded-b-xl px-4 py-2 bg-white/70 backdrop-blur-sm shadow-md hover:shadow-xl hover:bg-white/90 hover:border-purple-500 transition-all duration-300">
                            <div className="flex gap-4 items-center justify-center">
                            <img
                                className="w-10 h-10 rounded-full object-cover ring-2 ring-purple-400 hover:ring-purple-600 transition-all duration-300"
                                src={member.image}
                                alt={member.name}
                            />
                            {/* <Avatar size="md" src="https://i.pravatar.cc/150?u=a04258114e29026302d" /> */}
                            <h1 className="text-sm sm:text-base break-words overflow-hidden max-w-[220px] text-gray-800 font-semibold">
                                {member.name} 
                            </h1>
                            </div>
                        </div>
                        </div>
                       )

                       )}
                    </div>
                    {/* <div className="text-center text-black mt-5">
                        <h1>Latest Blogs</h1>
                    </div> */}

                     <div className=" mx-auto">
                        <div className=" px-4 py-10 max-w-5xl mx-auto">
                            <h1 className="text-2xl lg:text-2xl text-center text-gray-800 font-semibold">Read our Latest Blogs Remain Updated</h1>

                        <AutoSlider/>

                        <div className="text-center ">
                        <Link href="/blogs">
                            <button className="text-blue-500 text-xl rounded-2xl bg-blue-200 px-5 py-1.5 cursor-pointer transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white hover:scale-105">
                        View all Blogs
                        </button>
                            </Link>
                        </div>

                        </div>
                        </div>

                </div>
            </div>
            <Footer/>
        </>
    )
}