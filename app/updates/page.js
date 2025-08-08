"use client";

import { Button } from "@heroui/button";
import Footer from "../footer"


export default function updates () {
    return(
        <>
            <div className="mx-auto bg-white">
                <div className="mx-auto max-w-5xl py-10 px-4">
                    <div className="flex flex-col md:flex-row gap-24 mt-21">
                       <div className="md:w-1/5 md:sticky md:top-8 self-start">
                            <div className="md:text-center">
                                <h1 className="text-gray-800 text-3xl">Versions</h1>
                            <Button variant="ghost" className="text-sky-500 border rounded">BrainBucks 1.1</Button>
                            </div>
                       </div>
                       <div className="md:w-1/1">
                           <div className="flex justify-between">
                             <h1 className="text-gray-800 text-2xl ">Brain bucks Version 1.1</h1>
                            <Button variant="ghost" className="text-sky-500 border rounded">Update</Button>
                           </div>
                           <div className="mt-5">
                            <img src="/public (11).png" alt="public" />
                           </div>
                           <div className="mt-4">
                            <h1 className="text-green-800 hover:text-green-500 cursor-pointer">In Production since 23 May 2023</h1>
                           </div>
                           <div className="mt-8">
                            <h1 className="text-gray-800 font-medium text-2xl">Release Notes</h1>
                            <p className="text-gray-600">Welcome to release of Brain Bucks Version 3.1.0. There are many updates in
                                this version. We hope you will like our improvements. Here are the major
                                highlights of features we updated :</p>
                           </div>
                           <div className="mt-4 text-sky-600">
                            <h1 className="mt-2"><a href="">. Edit Rooms</a></h1>
                            <h1 className="mt-2"><a href="">. Browse Rooms</a></h1>
                            <h1 className="mt-2"><a href="">. Update Profile</a></h1>
                            <h1 className="mt-2"><a href="">. Select Exams</a></h1>
                            <h1 className="mt-2"><a href="">. Personalize your Dashboard</a></h1>
                            <h1 className="mt-2"><a href="">. Free Study Materials</a></h1>
                            <h1 className="mt-2"><a href="">. Password Less Login</a></h1>
                           </div>

                           <div className="mt-8">
                            <h1 className="text-gray-800 font-medium text-2xl">Edit Rooms</h1>
                            <p className="text-gray-600">Now you can Create your Rooms and also Browse popular rooms around you. Not only this we have added Room types as “Public” & “Private”. Anyone can join public room and participants can send the room joining request to the Leader of Room & Leader can Approve the Request or reject it.</p>
                            <div className="mt-4">
                                <img src="public (12).png" alt="" />
                            </div>
                           </div>
                           <div className="mt-8">
                            <h1 className="text-gray-800 font-medium text-2xl">Select Exams</h1>
                            <p className="text-gray-600">Now you can personalize your dashboard according to the exam you are preparing for, just select the exams on registration, or else you can modify them in future as well.</p>
                            <div className="mt-4">
                                <img src="public (13).png" alt="" />
                            </div>
                           </div>
                           <div className="mt-8">
                            <h1 className="text-gray-800 font-medium text-2xl">Update Profile</h1>
                            <p className="text-gray-600">Now you can update your avatar, Bank Details, Sharing, Email, Preferences and much more according to your preferences, now no need to worry about customization, Brain Bucks is now “Your Brainbucks”.</p>
                            <div className="mt-4">
                                <img src="public (14).png" alt="" />
                            </div>
                           </div>
                        
                       </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}