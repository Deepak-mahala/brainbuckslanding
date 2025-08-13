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
    name: "Rajendra Singh Maderna",
    title: "RAJ. GK Expert",
    image: "/rajendra.jpeg",
    description: "with 20+ years’ experience, has guided thousands of students to success in competitive exams through his mastery of the state’s history, culture, and geography.",
    // email: "joeylenerivera@gmail.com",
    linkedin: true,
    linkedinLink:"https://www.linkedin.com/in/dr-amitabh-rajan-ias-a8a26abap/"
    
  },

  {
    name: "Jitendra Singh Chauhan",
    title: "Chauhan Publication House",
    image: "/coreedu(3).jpeg",
    description: "Rajasthan GK & Current Affairs expert with 27+ years’ experience, has mentored countless aspirants, helping them excel in competitive exams with his vast knowledge and insightful teaching.",
    // email: "joeylenerivera@gmail.com",
    linkedin: true,
    linkedinLink:"https://www.linkedin.com/in/dr-amitabh-rajan-ias-a8a26abap/"
    
  },
    {
    name: "Dr. Pawan Gupta",
    title: "Ex. Allen, Aakash, Career Point",
    image: "/coreedu(10).jpeg",
    description: "NEET Physics faculty with 19+ years’ experience, is known for his clear concepts and result-oriented teaching, guiding countless students to top ranks in medical entrance exams.",
    // email: "joeylenerivera@gmail.com",
    linkedin: true,
    linkedinLink:"https://www.linkedin.com/in/dr-amitabh-rajan-ias-a8a26abap/"
    
  },
   {
    name: "KD Sir",
    title: "Ex. Allen, Motion, Career Point & Daswani Classes",
    image: "/coreedu(9).jpeg",
    description: "Physics faculty with 25 years’ experience, is known for simplifying complex concepts and guiding students to top exam results.",
    // email: "joeylenerivera@gmail.com",
    linkedin: true,
    linkedinLink:"https://www.linkedin.com/in/dr-amitabh-rajan-ias-a8a26abap/"
    
  },
  
  
  {
    name: "PC Yadav",
    title: "Geography Faculty",
    image: "/coreedu(6).jpeg",
    description: "P.C. Yadav, Geography faculty with 11 years’ experience, excels in making concepts clear and exam-focused.",
    // email: "joeylenerivera@gmail.com",
    linkedin: true,
    linkedinLink:"https://www.linkedin.com/in/dr-amitabh-rajan-ias-a8a26abap/"
    
  },
  {
    name: "Prof. Vaishaly Garg",
    title: "English Faculty",
    image: "/coreedu(7).jpeg",
    description: "English faculty for Banking & SSC exams with 20+ years’ experience, is known for her effective strategies and result-oriented teaching.",
    // email: "joeylenerivera@gmail.com",
    linkedin: true,
    linkedinLink:"https://www.linkedin.com/in/dr-amitabh-rajan-ias-a8a26abap/"
    
  },
  {
    name: "Sunil Lakhotia",
    title: "Ex. Allen, Bnsal, Resonance Classes",
    image: "/coreedu(8).jpeg",
    description: "Chemistry faculty for NEET aspirants with 22 years’ experience, is renowned for his clear explanations and result-driven teaching approach.",
    // email: "joeylenerivera@gmail.com",
    linkedin: true,
    linkedinLink:"https://www.linkedin.com/in/dr-amitabh-rajan-ias-a8a26abap/"
    
  },
 

  {
    name: "Pardeep Yadav (PNSY Sir)",
    title: "Ex. Allen, Aakash & Amity",
    image: "/coreedu(11).jpeg",
    description: "Zoology faculty for NEET aspirants with 25 years’ experience, is celebrated for his engaging teaching style and proven record of producing top ranks.",
    // email: "joeylenerivera@gmail.com",
    linkedin: true,
    linkedinLink:"https://www.linkedin.com/in/dr-amitabh-rajan-ias-a8a26abap/"
    
  },
  {
    name: "Pushpendra Gautam",
    title: "English Faculty (Banking & SSC)",
    image: "/coreedu(4).jpeg",
    description: "English faculty for Banking & SSC exams, is known for his smart techniques and result-oriented teaching.",
    // email: "joeylenerivera@gmail.com",
    linkedin: true,
    linkedinLink:"https://www.linkedin.com/in/dr-amitabh-rajan-ias-a8a26abap/"
    
  },
  {
    name: "Dr. Mahesh Sharma",
    title: "Ex. Allen Kota & Aariya Collage & LIET Alwar",
    image: "/coreedu(25).jpeg",
    description: "Chemistry faculty with 23+ years’ experience, is known for his deep subject expertise and success-driven teaching.",
    // email: "joeylenerivera@gmail.com",
    linkedin: true,
    linkedinLink:"https://www.linkedin.com/in/dr-amitabh-rajan-ias-a8a26abap/"
    
  },
  {
    name: "VD Yadav",
    title: "Reasoning Faculty For All Competive Exams",
    image: "/coreedu(12).jpeg",
    description: "Reasoning faculty for all competitive exams with 10 years’ experience, is known for his logical approach and exam-focused teaching.",
    // email: "joeylenerivera@gmail.com",
    linkedin: true,
    // linkedinLink:"https://www.linkedin.com/in/dr-amitabh-rajan-ias-a8a26abap/"
    
  },
  {
    name: "Prem Sharma",
    title: "Hindi Faculty For All Competive Exams",
    image: "/coreedu(13).jpeg",
    description: "Prem Sharma, Hindi faculty with 11 years’ experience, is known for his clear explanations and student-friendly teaching style.",
    // email: "joeylenerivera@gmail.com",
    linkedin: true,
    linkedinLink:"https://www.linkedin.com/in/dr-amitabh-rajan-ias-a8a26abap/"
    
  },
  {
    name: "Mahaveer Yadav",
    title: "Sanskrrit Faculty For All 1st&2nd Grade Competive Exams",
    image: "/coreedu(14).jpeg",
    description: "Sanskrit faculty specializing in 1st & 2nd Grade exams with 19 years’ experience, is known for his expertise and result-oriented teaching.",
    // email: "joeylenerivera@gmail.com",
    linkedin: true,
    linkedinLink:"https://www.linkedin.com/in/dr-amitabh-rajan-ias-a8a26abap/"
    
  },
  {
    name: "Vikas Agarwal",
    title: "Ex. Allen, Resonance, FIITJEE (Maths & Reasoning)",
    image: "/coreedu(15).jpeg",
    description: "Maths & Reasoning faculty with 19 years’ experience for IIT-JEE and other competitive exams, is known for his sharp problem-solving techniques and student-focused teaching.",
    // email: "joeylenerivera@gmail.com",
    linkedin: true,
    linkedinLink:"https://www.linkedin.com/in/dr-amitabh-rajan-ias-a8a26abap/"
    
  },
  {
    name: "Gambhir Bhadira",
    title: "Hindi Faculty 1st & 2nd Grade",
    image: "/coreedu(16).jpeg",
    description: "Hindi faculty for 1st & 2nd Grade exams with 22 years’ experience, is renowned for his in-depth knowledge and effective teaching methods.",
    // email: "joeylenerivera@gmail.com",
    linkedin: true,
    linkedinLink:"https://www.linkedin.com/in/dr-amitabh-rajan-ias-a8a26abap/"
    
  },
  {
    name: "Dharam Singh ",
    title: "Ex. Allen, Abhigyan & Mission Institute",
    image: "/coreedu(17).jpeg",
    description: "Zoology and General Science faculty with 18 years’ experience at renowned institutes, is known for his expertise and result-driven teaching.",
    // email: "joeylenerivera@gmail.com",
    linkedin: true,
    linkedinLink:"https://www.linkedin.com/in/dr-amitabh-rajan-ias-a8a26abap/"
    
  },
  {
    name: "Somesh Kumar",
    title: "Genral Science",
    image: "/coreedu(18).jpeg",
    description: "renowned General Science faculty with 11 years’ experience, is known for his clear concepts and exam-oriented teaching.",
    // email: "joeylenerivera@gmail.com",
    linkedin: true,
    linkedinLink:"https://www.linkedin.com/in/dr-amitabh-rajan-ias-a8a26abap/"
    
  },
  {
    name: "Umesh Sharma",
    title: "Genral Science",
    image: "/coreedu(19).jpeg",
    description: "General Science faculty with 15 years’ experience at renowned institutes, is known for his deep knowledge and effective teaching style.",
    // email: "joeylenerivera@gmail.com",
    linkedin: true,
    linkedinLink:"https://www.linkedin.com/in/dr-amitabh-rajan-ias-a8a26abap/"
    
  },
  {
    name: "Ajay Yadav",
    title: "Ex. Clear Vision Institute (HS Faculty)",
    image: "/coreedu(20).jpeg",
    description: "Ajay Yadav, a well-known History faculty with 16 years’ experience, is admired for his engaging teaching and deep subject expertise.",
    // email: "joeylenerivera@gmail.com",
    linkedin: true,
    linkedinLink:"https://www.linkedin.com/in/dr-amitabh-rajan-ias-a8a26abap/"
    
  },
  {
    name: "Tarun Rathi",
    title: "Ex. SMS , Samyak ,Engineers Academy & Allen",
    image: "/coreedu(21).jpeg",
    description: "well-known faculty for competitive exams in Rajasthan Art & History with 20 years’ experience, is renowned for his expertise and impactful teaching.",
    // email: "joeylenerivera@gmail.com",
    linkedin: true,
    linkedinLink:"https://www.linkedin.com/in/dr-amitabh-rajan-ias-a8a26abap/"
    
  },
  {
    name: "Kunwar Amit Singh",
    title: "History Faculty",
    image: "/coreedu(22).jpeg",
    description: "Kunwar Amit Singh, History faculty with 11 years’ experience, trusted by toppers for his clear explanations and exam-focused approach.",
    // email: "joeylenerivera@gmail.com",
    linkedin: true,
    linkedinLink:"https://www.linkedin.com/in/dr-amitabh-rajan-ias-a8a26abap/"
    
  },
  {
    name: "Vivek Choudhary",
    title: "Ex. Mission Institute, Science Frist & Maths Ki Duniya",
    image: "/coreedu(23).jpeg",
    description: "Vivek Choudhary – A Toppers’ Choice Mathematics Faculty with 13 Years of Excellence in Teaching",
    // email: "joeylenerivera@gmail.com",
    linkedin: true,
    linkedinLink:"https://www.linkedin.com/in/dr-amitabh-rajan-ias-a8a26abap/"
    
  },
  
  {
    name: "Ashok Sharma",
    title: "History & Political Science",
    image: "/coreedu(24).jpeg",
    description: "Ashok Sharma – Guiding Minds in History & Political Science for a Decade of Academic Excellence",
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
                <h1 className="text-5xl text-[#2c215d] font-semibold mb-10">Our Founder's</h1>
               
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
                    <div className=" rounded-3xl">
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