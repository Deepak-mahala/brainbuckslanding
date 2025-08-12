"use client";

import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Mail } from "lucide-react";
import { Twitter } from "lucide-react";
import Footer from "../footer"
import React from "react";
export default function Aboutus() {

 const teamMembers = [
     {
    name: "Santosh Yadav",
    title: "Founder & CEO",
    image: "/santoshsir.jpg",
    description: "Leading with passion and purpose to ensure every student receives the guidance and growth they deserve.",
    // email: "joeylenerivera@gmail.com",
    linkedin: true,
    linkedinLink: "https://www.linkedin.com/in/santosh-yadav-88b71a12b/",
    
  },
  {
    name: "Nand K. Yadav",
    title: "Founder & Chairman",
    image: "/nandkji.jpg",
    description: "An inspiring leader focused on shaping bright futures through innovative and value-based education.",
    // email: "joeylenerivera@gmail.com",
    linkedin: true,
    linkedinLink: "https://www.linkedin.com/in/nand-k-yadav-28848120/",
    
  },
 
  {
    name: "Mahavir Partap Sharma",
    title: "Lead Investor & Advisor",
    image: "/mahaveir.png",
    description: "General Partner, Swishin Ventures; Past Chair, TiE Global Board of Trustees; Co-Founder and Chair, RAIN (Rajasthan Angels) and Founding Chair, TiE India Angels.",
    // email: "joeylenerivera@gmail.com",
    linkedin: true,
    linkedinLink: "https://www.linkedin.com/in/ajit-kr-singh-ias-rtd-19385b153/"
  },
  {
    name: "Manoj Kumar",
    title: "IAS (03), MBA (IIRM)",
    image: "/manoj.jpg",
    description: "An IAS officer with an MBA, deeply committed to advancing education and uplifting youth from all walks of life.",
    // email: "joeylenerivera@gmail.com",
    // linkedin: true,
    twitter:"true",
    twitterLink:"https://x.com/iasmanojkumars2"
  },
  {
    name: "Dr. Amitabh Rajan",
    title: "IAS(79), Public Policy & Governance",
    image: "/amitabh.jpg",
    description: "With decades in governance and policy, he continues to inspire educational transformation across the country.",
    // email: "joeylenerivera@gmail.com",
    linkedin: true,
    linkedinLink:"https://www.linkedin.com/in/dr-amitabh-rajan-ias-a8a26abap/"
    
  },
  {
    name: "Dr. Amitabh Rajan",
    title: "IAS(79), Public Policy & Governance",
    image: "/coreedu(1).jpeg",
    description: "With decades in governance and policy, he continues to inspire educational transformation across the country.",
    // email: "joeylenerivera@gmail.com",
    linkedin: true,
    linkedinLink:"https://www.linkedin.com/in/dr-amitabh-rajan-ias-a8a26abap/"
    
  },
  {
    name: "Dr. Amitabh Rajan",
    title: "IAS(79), Public Policy & Governance",
    image: "/coreedu(2).jpeg",
    description: "With decades in governance and policy, he continues to inspire educational transformation across the country.",
    // email: "joeylenerivera@gmail.com",
    linkedin: true,
    linkedinLink:"https://www.linkedin.com/in/dr-amitabh-rajan-ias-a8a26abap/"
    
  },
  {
    name: "Dr. Amitabh Rajan",
    title: "IAS(79), Public Policy & Governance",
    image: "/coreedu(3).jpeg",
    description: "With decades in governance and policy, he continues to inspire educational transformation across the country.",
    // email: "joeylenerivera@gmail.com",
    linkedin: true,
    linkedinLink:"https://www.linkedin.com/in/dr-amitabh-rajan-ias-a8a26abap/"
    
  },
  {
    name: "Dr. Amitabh Rajan",
    title: "IAS(79), Public Policy & Governance",
    image: "/coreedu(4).jpeg",
    description: "With decades in governance and policy, he continues to inspire educational transformation across the country.",
    // email: "joeylenerivera@gmail.com",
    linkedin: true,
    linkedinLink:"https://www.linkedin.com/in/dr-amitabh-rajan-ias-a8a26abap/"
    
  },
  {
    name: "Dr. Amitabh Rajan",
    title: "IAS(79), Public Policy & Governance",
    image: "/coreedu(5).jpeg",
    description: "With decades in governance and policy, he continues to inspire educational transformation across the country.",
    // email: "joeylenerivera@gmail.com",
    linkedin: true,
    linkedinLink:"https://www.linkedin.com/in/dr-amitabh-rajan-ias-a8a26abap/"
    
  },
  {
    name: "Dr. Amitabh Rajan",
    title: "IAS(79), Public Policy & Governance",
    image: "/coreedu(6).jpeg",
    description: "With decades in governance and policy, he continues to inspire educational transformation across the country.",
    // email: "joeylenerivera@gmail.com",
    linkedin: true,
    linkedinLink:"https://www.linkedin.com/in/dr-amitabh-rajan-ias-a8a26abap/"
    
  },
  {
    name: "Dr. Amitabh Rajan",
    title: "IAS(79), Public Policy & Governance",
    image: "/coreedu(7).jpeg",
    description: "With decades in governance and policy, he continues to inspire educational transformation across the country.",
    // email: "joeylenerivera@gmail.com",
    linkedin: true,
    linkedinLink:"https://www.linkedin.com/in/dr-amitabh-rajan-ias-a8a26abap/"
    
  },
  {
    name: "Dr. Amitabh Rajan",
    title: "IAS(79), Public Policy & Governance",
    image: "/coreedu(8).jpeg",
    description: "With decades in governance and policy, he continues to inspire educational transformation across the country.",
    // email: "joeylenerivera@gmail.com",
    linkedin: true,
    linkedinLink:"https://www.linkedin.com/in/dr-amitabh-rajan-ias-a8a26abap/"
    
  },
  {
    name: "Dr. Amitabh Rajan",
    title: "IAS(79), Public Policy & Governance",
    image: "/coreedu(9).jpeg",
    description: "With decades in governance and policy, he continues to inspire educational transformation across the country.",
    // email: "joeylenerivera@gmail.com",
    linkedin: true,
    linkedinLink:"https://www.linkedin.com/in/dr-amitabh-rajan-ias-a8a26abap/"
    
  },
  {
    name: "Dr. Amitabh Rajan",
    title: "IAS(79), Public Policy & Governance",
    image: "/coreedu(10).jpeg",
    description: "With decades in governance and policy, he continues to inspire educational transformation across the country.",
    // email: "joeylenerivera@gmail.com",
    linkedin: true,
    linkedinLink:"https://www.linkedin.com/in/dr-amitabh-rajan-ias-a8a26abap/"
    
  },
  {
    name: "Dr. Amitabh Rajan",
    title: "IAS(79), Public Policy & Governance",
    image: "/coreedu(11).jpeg",
    description: "With decades in governance and policy, he continues to inspire educational transformation across the country.",
    // email: "joeylenerivera@gmail.com",
    linkedin: true,
    linkedinLink:"https://www.linkedin.com/in/dr-amitabh-rajan-ias-a8a26abap/"
    
  },
  {
    name: "Dr. Amitabh Rajan",
    title: "IAS(79), Public Policy & Governance",
    image: "/coreedu(12).jpeg",
    description: "With decades in governance and policy, he continues to inspire educational transformation across the country.",
    // email: "joeylenerivera@gmail.com",
    linkedin: true,
    linkedinLink:"https://www.linkedin.com/in/dr-amitabh-rajan-ias-a8a26abap/"
    
  },
  {
    name: "Dr. Amitabh Rajan",
    title: "IAS(79), Public Policy & Governance",
    image: "/coreedu(13).jpeg",
    description: "With decades in governance and policy, he continues to inspire educational transformation across the country.",
    // email: "joeylenerivera@gmail.com",
    linkedin: true,
    linkedinLink:"https://www.linkedin.com/in/dr-amitabh-rajan-ias-a8a26abap/"
    
  },
  {
    name: "Dr. Amitabh Rajan",
    title: "IAS(79), Public Policy & Governance",
    image: "/coreedu(14).jpeg",
    description: "With decades in governance and policy, he continues to inspire educational transformation across the country.",
    // email: "joeylenerivera@gmail.com",
    linkedin: true,
    linkedinLink:"https://www.linkedin.com/in/dr-amitabh-rajan-ias-a8a26abap/"
    
  },
  {
    name: "Dr. Amitabh Rajan",
    title: "IAS(79), Public Policy & Governance",
    image: "/coreedu(15).jpeg",
    description: "With decades in governance and policy, he continues to inspire educational transformation across the country.",
    // email: "joeylenerivera@gmail.com",
    linkedin: true,
    linkedinLink:"https://www.linkedin.com/in/dr-amitabh-rajan-ias-a8a26abap/"
    
  },
  {
    name: "Dr. Amitabh Rajan",
    title: "IAS(79), Public Policy & Governance",
    image: "/coreedu(16).jpeg",
    description: "With decades in governance and policy, he continues to inspire educational transformation across the country.",
    // email: "joeylenerivera@gmail.com",
    linkedin: true,
    linkedinLink:"https://www.linkedin.com/in/dr-amitabh-rajan-ias-a8a26abap/"
    
  },
  {
    name: "Dr. Amitabh Rajan",
    title: "IAS(79), Public Policy & Governance",
    image: "/coreedu(17).jpeg",
    description: "With decades in governance and policy, he continues to inspire educational transformation across the country.",
    // email: "joeylenerivera@gmail.com",
    linkedin: true,
    linkedinLink:"https://www.linkedin.com/in/dr-amitabh-rajan-ias-a8a26abap/"
    
  },
  {
    name: "Dr. Amitabh Rajan",
    title: "IAS(79), Public Policy & Governance",
    image: "/coreedu(18).jpeg",
    description: "With decades in governance and policy, he continues to inspire educational transformation across the country.",
    // email: "joeylenerivera@gmail.com",
    linkedin: true,
    linkedinLink:"https://www.linkedin.com/in/dr-amitabh-rajan-ias-a8a26abap/"
    
  },
  {
    name: "Dr. Amitabh Rajan",
    title: "IAS(79), Public Policy & Governance",
    image: "/coreedu(19).jpeg",
    description: "With decades in governance and policy, he continues to inspire educational transformation across the country.",
    // email: "joeylenerivera@gmail.com",
    linkedin: true,
    linkedinLink:"https://www.linkedin.com/in/dr-amitabh-rajan-ias-a8a26abap/"
    
  },
  {
    name: "Dr. Amitabh Rajan",
    title: "IAS(79), Public Policy & Governance",
    image: "/coreedu(20).jpeg",
    description: "With decades in governance and policy, he continues to inspire educational transformation across the country.",
    // email: "joeylenerivera@gmail.com",
    linkedin: true,
    linkedinLink:"https://www.linkedin.com/in/dr-amitabh-rajan-ias-a8a26abap/"
    
  },
];

    return(
        <>
           <div className="mx-auto bg-white">
            <div className="px-4 py-10 mx-auto max-w-7xl">
                <div className="text-center mt-21">
                <h1 className="text-4xl text-[#2c215d] font-medium mb-10">OUR FOUNDER'S</h1>
               
                </div>

                {/* <div className="flex flex-wrap justify-center gap-10">
                {teamMembers.map((member, index) => (
                    <div key={index} className="border rounded-3xl">
                    <div className="bg-white rounded-3xl shadow-md p-6 w-full sm:w-80 text-center relative overflow-hidden border-b-8 border-[#2c215d] transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                        <div className="w-28 h-28 rounded-full overflow-hidden mx-auto border-4 border-white shadow-md">
                        <img src={member.image} width={112} height={112} alt={member.name} />
                        </div>
                        <h2 className="text-lg font-bold mt-4 text-[#2c215d]">{member.name}</h2>
                        <p className="text-sm text-blue-600 font-medium">{member.title}</p>
                        <p className="text-sm text-gray-600 mt-3">"{member.description}"</p>
                        
                        <div className="flex justify-center gap-5 mt-5 text-[#2c215d] text-xl">
                            {member.twitter && (
                                <a href={member.twitterLink} target="_blank" rel="noopener noreferrer">
                                <Twitter className="hover:text-blue-500 cursor-pointer" />
                                </a>
                            )}
                            {member.instagram && (
                                <a href={member.instagramLink} target="_blank" rel="noopener noreferrer">
                                <Instagram className="hover:text-pink-500 cursor-pointer" />
                                </a>
                            )}
                            {member.linkedin && (
                                <a href={member.linkedinLink} target="_blank" rel="noopener noreferrer">
                                <Linkedin className="hover:text-blue-600 cursor-pointer" />
                                </a>
                            )}
                            {member.mail && (
                                <a href={`mailto:${member.email}`}>
                                <Mail className="hover:text-red-500 cursor-pointer" />
                                </a>
                            )}
                        </div>
                    </div>
                    </div>
                ))}
                </div> */}
                <div className="flex flex-wrap justify-center gap-10">
                {teamMembers.map((member, index) => (
                    <React.Fragment key={index}>
                    {/* Card */}
                    <div className="border rounded-3xl">
                        <div className="bg-white rounded-3xl shadow-md p-6 w-full sm:w-80 text-center relative overflow-hidden border-b-8 border-[#2c215d] transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                        <div className="w-28 h-28 rounded-full overflow-hidden mx-auto border-4 border-white shadow-md">
                            <img src={member.image} width={112} height={112} alt={member.name} />
                        </div>
                        <h2 className="text-lg font-bold mt-4 text-[#2c215d]">{member.name}</h2>
                        <p className="text-sm text-blue-600 font-medium">{member.title}</p>
                        <p className="text-sm text-gray-600 mt-3">"{member.description}"</p>

                        <div className="flex justify-center gap-5 mt-5 text-[#2c215d] text-xl">
                            {member.twitter && (
                            <a href={member.twitterLink} target="_blank" rel="noopener noreferrer">
                                <Twitter className="hover:text-blue-500 cursor-pointer" />
                            </a>
                            )}
                            {member.instagram && (
                            <a href={member.instagramLink} target="_blank" rel="noopener noreferrer">
                                <Instagram className="hover:text-pink-500 cursor-pointer" />
                            </a>
                            )}
                            {member.linkedin && (
                            <a href={member.linkedinLink} target="_blank" rel="noopener noreferrer">
                                <Linkedin className="hover:text-blue-600 cursor-pointer" />
                            </a>
                            )}
                            {member.mail && (
                            <a href={`mailto:${member.email}`}>
                                <Mail className="hover:text-red-500 cursor-pointer" />
                            </a>
                            )}
                        </div>
                        </div>
                    </div>

                    {/* Heading after 3 cards */}
                    {index === 2 && (
                        <div className="w-full text-center mt-10">
                        <h2 className="text-4xl font-semibold text-[#2c215d]">
                            Our Core Educator's Team
                        </h2>
                         <h1 className="mb-10 text-black mt-5 ">
                            We have dedicated leaders along with Real IAS/IPS as partners, creators & trainers
                        </h1>
                        </div>
                    )}
                    </React.Fragment>
                ))}
                </div>
            </div>
            </div>

                <Footer/>

        </>
    )
}