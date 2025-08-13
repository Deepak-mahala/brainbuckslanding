
"use client";

import { ArrowDownToLine } from "lucide-react";
import AutoSlider from "../autoSlider";
import Link from "next/link";


import Footer from "../footer";
export default function Home() {

 
 
  return (
    <>

      

      <div className="flex flex-col" id="Howtoplay">
      <div >
      {/* <h1 className=" font-bold">Introducing Brain Bucks</h1> */}
      </div>
      <div className="grow pt-5 bg-[#7339fa]">
      <h1 className="text-2xl lg:text-4xl text-center font-bold mt-21">Introducing Brain Bucks</h1>
        <h4 className=" text-center">India’s First <span className="text-amber-300">EdTech Platform</span> with Rewards</h4>
        <img src={'./brainbucksimg1.png'} alt="brainbucks" className="w-full h-full" />
         <div className="text-center pt-10 pb-10">
          <button
            onClick={() => window.open(
              'https://play.google.com/store/apps/details?id=com.brainbucks.android',
      '_blank'
            )}
           className=" cursor-pointer px-4 py-2 rounded font-semibold text-black" >
            <img src={'./Google_Play_Store_badge_EN.png'} alt="brainbucks" className="w-50" />
          </button>
         </div>
      </div>
      </div>

    <div className=" mx-auto  bg-white">
     <div className=" px-4 py-10 max-w-5xl mx-auto">
       <div className="flex flex-col md:flex-row items-center justify-center">
         <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-medium mb-4 text-black">Earn Rewards for Every Quiz you
              Participate</h1>
          <button
            onClick={() =>
            window.open(
            'https://play.google.com/store/apps/details?id=com.brainbucks.android',
            '_blank'
        )
      }
      className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition flex items-center gap-2 cursor-pointer mx-auto md:mx-0"
    >
      Download Brain Bucks <ArrowDownToLine />
    </button>
  </div>

        <div className="md:w-1/2 flex justify-center mt-10">
          <img
            src="/brainbucksimg2.png"
            alt="Download BrainBucks"
            className="w-80 h-auto transition duration-500 ease-in-out transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:brightness-105 rounded-xl bg-transparent"
          />
        </div>
      </div>

       <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="order-2 md:order-1 md:w-1/2 flex justify-center mt-10">
          <img
            src="/brainbucksimg2.png"
            alt="Download BrainBucks"
            className="w-80 h-auto transition duration-500 ease-in-out transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:brightness-105 rounded-xl bg-transparent"
          />
        </div>
         <div className="order-1 md:order-2 md:w-1/2 text-center md:text-left mb-6 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-medium mb-4 text-black">Play Free Trivia & Earn upto ₹ 50,000</h1>
          <button
            onClick={() =>
            window.open(
            'https://play.google.com/store/apps/details?id=com.brainbucks.android',
            '_blank'
        )
      }
      className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition flex items-center gap-2 cursor-pointer mx-auto md:mx-0"
    >
      Download Brain Bucks <ArrowDownToLine />
    </button>
  </div>
      </div>
     </div>
    </div>

    <div className=" mx-auto  bg-[#7339fa]">
     <div className=" px-4 py-10 max-w-5xl mx-auto">
       <div className="flex flex-col md:flex-row items-center justify-center">
         <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-medium mb-4 text-shadow-amber-100"> Make <span className="text-amber-300">Rooms</span> & Compete With Your <span className="text-amber-300">Friends</span></h1>

            <button
            onClick={() => window.open(
              'https://play.google.com/store/apps/details?id=com.brainbucks.android',
              '_blank'
            )}
           className=" cursor-pointer px-4 py-2 rounded font-semibold text-black" >
            <img src={'./Google_Play_Store_badge_EN.png'} alt="brainbucks" className="w-50" />
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center mt-10">
          <img
            src="/brainbucks3.png"
            alt="Download BrainBucks"
            className="w-80 h-auto transition duration-500 ease-in-out transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:brightness-105 rounded-xl bg-transparent"
          />
        </div>
      </div>

     </div>
    </div>

      <div className=" mx-auto  bg-white">
     <div className=" px-4 py-10 max-w-5xl mx-auto">
        
         <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="order-2 md:order-1 md:w-1/2 flex justify-center mt-10">
          <img
            src="/brainbucks4.png"
            alt="Download BrainBucks"
            className="w-80 h-auto transition duration-500 ease-in-out transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:brightness-105 rounded-xl bg-transparent"
          />
        </div>

         <div className="order-1 md:order-2 md:w-1/2 text-center md:text-left mb-6 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-medium mb-4 text-black">Free Study Materials and Topper’s Notes</h1>
          <button
            onClick={() =>
            window.open(
            'https://play.google.com/store/apps/details?id=com.brainbucks.android',
            '_blank'
        )
      }
      className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition flex items-center gap-2 cursor-pointer mx-auto md:mx-0"
    >
      Download Brain Bucks <ArrowDownToLine />
    </button>
  </div>
      </div>

       <div className="flex flex-col md:flex-row items-center justify-center">
         <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-medium mb-4 text-black mt-5">Personalize Brain Bucks according to your Preferences</h1>
          <button
            onClick={() =>
            window.open(
            'https://play.google.com/store/apps/details?id=com.brainbucks.android',
            '_blank'
        )
      }
      className="bg-blue-600 text-white mt-8 px-6 py-3 rounded hover:bg-blue-700 transition flex items-center gap-2 cursor-pointer mx-auto md:mx-0"
    >
      Download Brain Bucks <ArrowDownToLine />
    </button>
  </div>

        <div className="md:w-1/2 flex justify-center mt-10">
          <img
            src="/brainbucks4.png"
            alt="Download BrainBucks"
            className="w-80 h-auto transition duration-500 ease-in-out transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:brightness-105 rounded-xl bg-transparent"
          />
        </div>
      </div>

      
     </div>
    </div>

     <div className=" mx-auto  bg-[#F2F2F2]">
     <div className=" px-4 py-10 max-w-5xl mx-auto">
           <h1 className="text-2xl lg:text-4xl text-center text-[#212529] font-bold">Read our Latest Blogs Remain Updated</h1>

      <AutoSlider/>

      <div className="text-center">
      <Link href="/blogs">
         <button className="text-blue-500 text-xl rounded-2xl bg-white px-3 py-0.5 cursor-pointer transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white hover:scale-105">
    View all Blogs
  </button>
      </Link>
</div>

    </div>
    </div>

    <div className="mx-auto bg-[#701dd3] border">
      <div className="px-4 py-10 max-w-5xl mx-auto">
      <h1 className="text-center text-4xl pb-16 font-medium">Our Number</h1>
        <div className="flex flex-col md:flex-row items-center gap-10 justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-medium">1000+</h1>
            <h1 className="text-xl pt-3 text-amber-300 font-medium">Pre-Registrations</h1>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-medium">5000+</h1>
            <h1 className="text-xl pt-3 text-amber-300 font-medium">Community on Social Media</h1>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-medium">125+</h1>
            <h1 className="text-xl pt-3 text-amber-300 font-medium">Stakeholders & Team Members</h1>
          </div>
        </div>
      </div>
    </div>

      {/* FOOTER */}
      {/* <footer className="bg-white border-t mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-4 gap-6">
          <div>
            <h4 className="font-bold">Brain Bucks</h4>
            <p className="mt-2 text-sm text-gray-600">
              Learn from India's top educators. Short reels, smart notes,
              quizzes & cash prizes. Trusted by lakhs of students.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">Resources</h4>
            <ul className="mt-2 text-sm text-gray-600 space-y-2">
              <li>
                <Link href="#notes">Smart Notes</Link>
              </li>
              <li>
                <Link href="#quizzes">Quiz Competitions</Link>
              </li>
              <li>
                <Link href="#leaderboard">Leaderboard</Link>
              </li>
              <li>
                <Link href="#how">How it Works</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Company</h4>
            <ul className="mt-2 text-sm text-gray-600 space-y-2">
              <li>
                <Link href="#about">About Us</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
              <li>
                <Link href="#terms">Terms &amp; Privacy</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Contact</h4>
            <div className="text-sm text-gray-600 mt-2">
              +91 98XX XXX XXX
              <br />
              3rd Floor, The Corenthum, Sector 62, Noida, UP
              <br />
              info@brainbucks.example
            </div>
          </div>
        </div>

        <div className="border-t py-4 text-center text-sm text-gray-500">
          © 2025 Brain Bucks. All rights reserved.
        </div>
      </footer> */}

      <Footer/> 
    </>
  );
}
