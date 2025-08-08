import Link from "next/link";
import Footer from "./footer"
export default function Page(){
    return(
        <>
          <main className="w-full bg-white text-[#1a1a1a] mt-12">
            <section className="flex flex-col-reverse md:flex-row items-center gap-20 justify-between px-4 md:px-16 py-16 bg-white">
              <div className="w-full md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                  Learn Smart, Earn Rewards
                </h1>
                <p className="text-gray-600 text-lg mb-8">
                  India’s First Learning Platform with Cash Rewards
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-100 p-4 rounded-lg flex items-center gap-3">
                    <span className="text-purple-600 text-2xl"><img src="play.svg" alt="paybtn" className="w-6"/></span>
                    <p className="text-sm font-medium">Short Video Lessons</p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg flex items-center gap-3">
                    <span className="text-purple-600 text-2xl"><img src="notebookk.svg" alt="notebook" className="w-6"/></span>
                    <p className="text-sm font-medium">Smart Study Notes</p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg flex items-center gap-3">
                    <span className="text-purple-600 text-2xl"><img src="trophy.svg" alt="trophy" className="w-8"/></span>
                    <p className="text-sm font-medium">Daily Cash Rewards</p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg flex items-center gap-3">
                    <span className="text-purple-600 text-2xl"><img src="men.svg" alt="men" /></span>
                    <p className="text-sm font-medium">Expert Educators</p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <img
                  src="/homebrain.png"
                  alt="Hero"
                  className="w-full rounded-bl-4xl rounded-tr-3xl rounded"
                />
              </div>
            </section>


            <section className="px-4 md:px-20 py-16 bg-white text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-12">
                Why Choose Brain Bucks
              </h2>

              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-white shadow-md rounded-lg p-6">
                  <p className="text-3xl text-purple-700 mb-2 flex items-center justify-center"><img src="/watch.svg" alt="watch..." /></p>
                  <h3 className="font-semibold mb-1">Reel-Style Learning</h3>
                  <p className="text-gray-500 text-sm">Short, Sharp & Effective</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                  <p className="text-3xl text-purple-700 mb-2 flex items-center justify-center"><img src="/rocketSVG.svg" alt="rocket..." /></p>
                  <h3 className="font-semibold mb-1">All-in-One Platform</h3>
                  <p className="text-gray-500 text-sm">No more confusion of coaching</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                  <p className="text-3xl text-purple-700 mb-2 flex items-center justify-center"><img src="/education.svg" alt="education" /></p>
                  <h3 className="font-semibold mb-1">Expert Educators</h3>
                  <p className="text-gray-500 text-sm">Right on your phone</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                  <p className="text-3xl text-purple-700 mb-2 flex items-center justify-center"><img src="/winner.svg" alt="winner" /></p>
                  <h3 className="font-semibold mb-1">Win Cash Rewards</h3>
                  <p className="text-gray-500 text-sm">Top 20% winners in every quiz</p>
                </div>
              </div>
            </section>
          </main>
           <div className="bg-[#f7f5ff] text-[#14053e] font-sans">
      <div className="text-center py-10 px-5">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          Prepare for All Major Exams
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {[
            "SSC",
            "UPSC",
            "NEET",
            "JEE",
            "RPSC",
            "REET",
            "CUET",
            "More",
          ].map((exam) => (
            <div
              key={exam}
              className="bg-white rounded-xl shadow-sm border border-[#e0e0e0] p-6 hover:shadow-md transition"
            >
              <div className="text-purple-600 text-2xl mb-3 flex items-center justify-center"><img src="/h80.png" alt="graph" className=""/></div>
              <div className="font-medium text-lg mb-2">{exam}</div>
              <button className="text-purple-600 border border-purple-600 rounded-full px-4 py-1 text-sm hover:bg-purple-50">
                Start Learning
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white py-12 px-5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Empowering Education <br /> Through Innovation
            </h2>
            <p className="text-gray-600 mb-6">
              Join millions of learners achieving their goals with Brain Bucks
            </p>
            <Link href="https://wa.me/917887940832" className="inline-block bg-[#6a00ff] hover:bg-[#5200c9] text-white font-medium px-6 py-2 rounded-full">
              Get Started Now
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {[
              { title: "1M+", subtitle: "Students" },
              { title: "10K+", subtitle: "Daily Winners" },
              { title: "500+", subtitle: "Expert Educators" },
              { title: "₹10L+", subtitle: "Rewards Given" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white shadow-md rounded-xl p-5 border-t-4 border-purple-600"
              >
                <div className="text-xl font-semibold text-[#14053e]">
                  {item.title}
                </div>
                <div className="text-sm text-gray-500">{item.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
            <div className="bg-white text-[#1a1a1a] py-16 px-4 md:px-16">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Brain Bucks?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-purple-600 text-3xl mb-2 flex justify-center items-center"><img src="daller.svg" alt="" className="w-5"/></div>
                  <h4 className="font-semibold text-lg">Zero Registration Fee</h4>
                  <p className="text-sm text-gray-600">Start your learning journey without any initial investment</p>
                </div>
                <div>
                  <div className="text-purple-600 text-3xl mb-2 flex justify-center items-center"><img src="cash.svg" alt="" className="w-10"/></div>
                  <h4 className="font-semibold text-lg">Daily Cash Rewards</h4>
                  <p className="text-sm text-gray-600">Earn rewards for your consistent learning efforts</p>
                </div>
                <div>
                  <div className="text-purple-600 text-3xl mb-2 flex justify-center items-center"><img src="degreee.svg" alt="" className="w-10"/></div>
                  <h4 className="font-semibold text-lg">Expert-led Content</h4>
                  <p className="text-sm text-gray-600">Learn from industry experts and experienced educators</p>
                </div>
                <div>
                  <div className="text-purple-600 text-3xl mb-2 flex justify-center items-center"><img src="notebookk.svg" alt="" className="w-6"/></div>
                  <h4 className="font-semibold text-lg">Comprehensive Study Material</h4>
                  <p className="text-sm text-gray-600">Access a wide range of well-structured learning resources</p>
                </div>
                <div>
                  <div className="text-purple-600 text-3xl mb-2 flex justify-center items-center"><img src="watchh.svg" alt="" className="w-8"/></div>
                  <h4 className="font-semibold text-lg">24/7 Learning Access</h4>
                  <p className="text-sm text-gray-600">Learn at your own pace, anytime and anywhere</p>
                </div>
                <div>
                  <div className="text-purple-600 text-3xl mb-2 flex justify-center items-center"><img src="growth.svg" alt="" className="w-10"/></div>
                  <h4 className="font-semibold text-lg">Performance Analytics</h4>
                  <p className="text-sm text-gray-600">Track your progress with detailed insights and reports</p>
                </div>
              </div>
            </div>

              <div className="text-[#1a1a1a] bg-white ">
                <img src="/homefooter.svg" alt="" className="w-full"/>
              </div>

           <Footer/>
        </>
    )
}