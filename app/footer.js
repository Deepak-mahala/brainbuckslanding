"use client";

import { useState } from "react";
import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";
import { Youtube } from "lucide-react";
import { Linkedin } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function footer() {
    const [message, setMessage] = useState("");
     const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      console.log("User Feedback:", message);
      alert("Thank you for your feedback! 🙏");
      setMessage(""); 
    }
  };
    return(
      <>
        <div className="mx-auto bg-gray-700 text-white ">
          <div className="px-4 py-10 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-10 justify-center">
              <div className="">
              <img 
              onClick={()=> router.push("/")}
               src="/brainbuckss.svg" alt="brainbucks" className="w-40 cursor-pointer"/>
              <div className="flex gap-2 mt-3 px-2">
              <a href="https://www.instagram.com/brainbucks_india/"><Instagram className="cursor-pointer font-medium transform transition duration-500 ease-in-out hover:scale-105 hover:text-pink-500"/></a>
              <a href="https://www.facebook.com/brain.bucks.98"><Facebook className="cursor-pointer font-medium transform transition duration-500 ease-in-out hover:scale-105 hover:text-blue-700"/></a>
              <a href="https://www.youtube.com/@BrainBucksIndia"><Youtube className="cursor-pointer font-medium transform transition duration-500 ease-in-out hover:scale-105 hover:text-red-500"/></a>
              <a href="https://www.linkedin.com/company/brainbucksindia/"><Linkedin className="cursor-pointer font-medium transform transition duration-500 ease-in-out hover:scale-105 hover:text-sky-400"/></a>
              </div>
                <div className="px-2">
                  <h1 className="mt-3">Tech Brainbucks Infosoft Private Limited.</h1>
                <h1 className="mt-1"><span className="font-bold">Head Office :</span>{" "} <a href="https://maps.app.goo.gl/xPbAutK5chnL4LHXA" target="_blank" rel="noopener noreferrer" className="inline-block transform transition duration-500 ease-in-out hover:scale-102 hover:text-sky-400">101-103, Chanda Tower,Vaishali Nagar, Jaipur,RJ - 302021</a> </h1>
                <h1 className="mt-1"><span className="font-bold">E-Mail :</span>{" "} <a href="mailto:info@brainbucks.co.in" className="inline-block transform transition duration-500 ease-in-out hover:scale-105 hover:text-sky-400">info@brainbucks.co.in</a></h1>
                <h1 className="mt-1"><span className="font-bold">Phone :</span>{" "} <a href="tel:+917887940832" className="inline-block transform transition duration-500 ease-in-out hover:scale-105 hover:text-sky-400"> +91-788 794 0832 </a></h1>
                </div>
              </div>
              <div className="mt-0 md:mt-11">
                <img src="/Google_Play_Store_badge_EN.png" alt="" className="w-50 cursor-pointer font-medium transform transition duration-500 ease-in-out hover:scale-105"  onClick={() =>
              window.open(
              'https://play.google.com/store/apps/details?id=com.brainbucks.android',
              '_blank'
                )
              }/>
              <div className="mt-4">
                 <h1
                    onClick={() => router.push("/home")}
                    className="mt-3 cursor-pointer font-medium transform transition duration-500 ease-in-out hover:scale-105 hover:text-sky-400"
                  >
                    How to Play ?
                  </h1>
              <Link href="/aboutus">
              <h1 className="mt-3 cursor-pointer font-medium transform transition duration-500 ease-in-out hover:scale-105 hover:text-sky-400">About Us</h1>
              </Link>
              <Link href="/blogsbycategory">
                <h1 className="mt-3 cursor-pointer font-medium transform transition duration-500 ease-in-out hover:scale-105 hover:text-sky-400">Blogs</h1>
              </Link>
              </div>
              </div>
              <div className="mt-0 md:mt-11">
              <Link href="/updates">
                <h2 className=" font-medium mb-1 cursor-pointer transform transition duration-500 ease-in-out hover:scale-105 hover:text-sky-400">Updates</h2>
              </Link>
                <h2 className=" mb-4">We’d love your feedback!</h2>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write your feedback here..."
                      className="p-3 rounded-lg text-black h-20 resize-none focus:outline-none focus:ring-2 focus:ring-sky-400 border-amber-50 border"
                        ></textarea>
                      <button
                        type="submit"
                        className="self-start px-8 py-2 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg transition duration-300 cursor-pointer"
                        >Submit Feedback
                      </button>
                  </form>
              </div>
              <div className="mt-0 md:mt-11">
                <h1 
                onClick={()=>router.push("/privacyPolicy")}
                 className=" cursor-pointer  transform transition duration-500 ease-in-out hover:scale-105 hover:text-sky-400">Privacy Policy</h1>
                <h1 
                onClick={()=>router.push("/rulesRegulation")}
                 className=" mt-2 cursor-pointer  transform transition duration-500 ease-in-out hover:scale-105 hover:text-sky-400">Rules & Regulation</h1>
                <h1 
                onClick={()=>router.push("/termsConditions")}
                className=" mt-2 cursor-pointer  transform transition duration-500 ease-in-out hover:scale-105 hover:text-sky-400">Terms & Conditions</h1>
                <h1 
                onClick={()=>router.push("/userLisence")}
                className=" mt-2 cursor-pointer  transform transition duration-500 ease-in-out hover:scale-105 hover:text-sky-400">User License Agreement</h1>
                <h1
                 onClick={()=>router.push("/refundCancellation")}
                 className=" mt-2 cursor-pointer  transform transition duration-500 ease-in-out hover:scale-105 hover:text-sky-400">Refund/Cancellation Policy</h1>
                <h1
                  onClick={()=>router.push("/deletaccount")}
                 className=" mt-2 cursor-pointer  transform transition duration-500 ease-in-out hover:scale-105 hover:text-sky-400">Delete Account</h1>
              </div>
            </div>
          </div>

      </div>

      <div >
      <h1 className="text-center p-3"> ©️All Rights Reserved | Tech Brainbucks Infosoft Private Limited</h1> 
      </div>
      </>
    )
}