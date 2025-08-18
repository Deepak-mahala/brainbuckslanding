'use client'
import { usePathname, useRouter } from "next/navigation";
import { MoveRight } from "lucide-react";
import { useEffect, useState } from "react";
import Footer from "@/app/footer"
export default function ParticularBlog(){
    const pathname = usePathname()
    const router = useRouter()
      const id = pathname?.split("/")[2];

      const IMAGE_BASE_URL = 'https://auth.brainbucks.in/stream/get/public?blobname='
              const [detailsData, setDetailsData] = useState([])
          
              const fetchDetails = async () => {
                  const response = await fetch(`https://prerec.brainbucks.in/learning/page/get/particular/blog?blog_id=${id}`, { method: "GET", headers: { "Content-Type": "Application/Json" } })
      
          
                  const data =await response.json()
                  if (data) {
                      setDetailsData(data.data)
                  }
              }
          
              useEffect(() => {
                  fetchDetails();
              }, []);
      
    return(

        <>
            <div className="mx-auto bg-white">
                  <div className="mx-auto max-w-7xl py-10 px-4">
                    <div className="flex flex-col md:flex-row justify-center gap-0.5 md:gap-20 ">
                    {detailsData?.map((read, index) => (
                     <> <div 
                        key={index}
                         className="md:w-full lg:w-2/3 mt-14 md:mt-20">
                        <h1 className="text-gray-800 text-2xl md:text-5xl">{read?.title}</h1>
                        <div className="flex items-center gap-3 text-gray-400 mt-5">
                         <img src="/logobook.png" alt="" className="w-10"/>
                          <h1>BrainBucks</h1>
                          <h1>{read?.scheduleDateTime}</h1>
                        </div>
                        <div className="mt-8">
                          <img src={IMAGE_BASE_URL + read?.banner} alt="" className="w-auto h-auto rounded-xl" />
                        </div>
                        <div className="text-gray-800 mt-10">
                          <p>{read?.introduction}</p>
                            <div className="mt-4">
                              <h1 className="font-medium text-xl mt-4">{read?.heading}</h1>
                              <p dangerouslySetInnerHTML={{ __html: read?.body }}></p>
                            </div>
                          <br />
                        
                        </div>
                      </div>
                      <div className="md:w-1/2 lg:w-1/3 mt-1 md:mt-22">
                        <div className="mb-10">
                          <h1 
                          onClick={()=>{router.push(`/blogs`)}}
                           className="border-2 border-gray-400 rounded-lg justify-center items-center gap-3 py-5 text-gray-700 cursor-pointer flex hover:text-sky-400">
                            View All Related Blogs <MoveRight className="mt-1" />
                          </h1>
                        </div>
                        <div>
                          <img src="/public (10).png" alt="" className="w-full h-auto rounded-lg" />
                        </div>
                      </div></>
                    ))}
                      
                    </div>
                  </div>
                </div>
                <Footer />
           
        </>
    )
}