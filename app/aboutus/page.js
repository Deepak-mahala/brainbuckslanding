"use client";

import { Youtube } from "lucide-react";
import { MousePointerClick } from "lucide-react";
import Footer from "../footer";
export default function Aboutus() {
    return(
        <>
            <div className="mx-auto bg-white">
                <div className="px-4 py-10 mx-auto max-w-7xl">
                    <div className=" mt-5 mb-10">
                        <h1 className="text-4xl text-black font-medium mt-21">Meet the Backbone of Brainbucks</h1>
                    </div>
                    <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
                        <div className="">
                            <img src="/nandkji.jpg" alt="nkjii" className="w-350 h-auto rounded-2xl"/>
                        </div>
                        <div className="text-black font-medium">
                            <h1>"Our foundation has always been built on innovation, value, and the vision of transforming education into opportunity. As we continue to scale new heights, it is the unwavering support of our users and the dedication of our team that fuels our mission. From humble beginnings to becoming a recognized name in EdTech, our journey reflects the spirit of persistence and purpose. I express my deepest gratitude to everyone who believes in Brain Bucks and contributes to its success, every single day."</h1><br />
                            <h1>"We sincerely hope that every aspirant receives the true value of their precious time and efforts, invested in the pursuit of their dream job."</h1><br />
                            <h1>Co-Founder</h1>
                            <h1>Nand K Yadav</h1><br /> <br />
                            <div className="flex flex-col md:flex-row gap-5 items-center md:items-start justify-center md:justify-start">
                                <button type="submit" className="self-start px-8 py-2 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg transition duration-300 cursor-pointer flex items-center gap-2" >{" "}<a href="/team" className="flex items-center gap-2">View All Contributors <MousePointerClick /></a></button>
                                <button type="submit" className="self-start px-8 py-2 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg transition duration-300 cursor-pointer flex items-center gap-2" >Watch Sucess Stories <Youtube className="text-red-500"/></button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-10 justify-center items-center mt-15">
                        <div className="text-black font-medium order-2 md:order-1">
                            <h1>It has been a wonderful journey, the users of our Platform have kept trust on us, since our inception in year 2022, we all have came a long way from a small startup to a magnificent Ed Tech Giant, since this global industry ows it’s every penny to it’s users, we are extremely delightful for the users who trusts us. And especially we kudos to the users who are so keen into building their careers in such a passionate way.</h1><br />
                            <h1>We hope that every aspirant gets the value of his/her time which they have invested in the preparation of their dream job.</h1><br />
                            <h1>Co-Founder & CEO</h1>
                            <h1>Santosh Kumar Yadav</h1><br /> <br />
                            <div className="flex flex-col md:flex-row gap-5 items-center md:items-start justify-center md:justify-start">
                                <button type="submit" className="self-start px-8 py-2 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg transition duration-300 cursor-pointer " >{" "}<a href="/team" className="flex items-center gap-2">View All Contributors <MousePointerClick /></a></button>
                                <button type="submit" className="self-start px-8 py-2 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg transition duration-300 cursor-pointer flex items-center gap-2" >Watch Sucess Stories <Youtube className="text-red-500"/></button>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <img src="/santoshsir.jpg" alt="" className="w-300 h-auto rounded-2xl"/>
                        </div>
                    </div>
                </div>
            </div>
                    <Footer />
        </>
    )
}