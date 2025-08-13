"use client";
import Link from "next/link";
import Footer from "./footer"
export default function Page(){
    const educators = [
    { name: "Rajendra Singh Maderna", subject: "RAJ. GK Expert", img: "/rajendra.jpeg" },
    { name: "Jitendra Singh Chauhan", subject: "Chauhan Publication House", img: "/coreedu(3).jpeg" },
    { name: "Pardeep Yadav (PNSY Sir)", subject: "Ex. Allen, Aakash & Amity", img: "/coreedu(11).jpeg" },
    { name: "Sunil Lakhotia", subject: "Ex. Allen, Bnsal, Resonance Classes", img: "/coreedu(8).jpeg" },
    { name: "PC Yadav", subject: "Geography Faculty", img: "/coreedu(6).jpeg" },
    { name: "Dharam Singh", subject: "Ex. Allen, Abhigyan & Mission Institute", img: "/coreedu(17).jpeg" },
  ];
    return(
        <>
        {/* HERO */}
              <section className="pt-30 pb-16 bg-white text-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                      India’s Top Educators. Gamified Learning. Real Rewards.
                    </h2>
                    <p className="mt-4 text-gray-600">
                      Learn from <strong>India’s best teachers</strong> through short
                      reels and smart notes. Join live quiz competitions, win cash
                      prizes, and track your rank among{" "}
                      <strong>lakhs of students</strong>.
                    </p>
        
                    <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                      <li className="flex items-start gap-3">
                        <span className="inline-block mt-1 text-indigo-600">🏆</span>
                        <div>
                          <b>Compete & Win:</b> Cash prizes & Brain Bucks points in
                          daily quizzes.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="inline-block mt-1 text-indigo-600">🎥</span>
                        <div>
                          <b>Short Reels:</b> 60–120s lessons from top educators.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="inline-block mt-1 text-indigo-600">📚</span>
                        <div>
                          <b>Smart Notes:</b> Compact, exam-focused revision material.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="inline-block mt-1 text-indigo-600">📊</span>
                        <div>
                          <b>National Leaderboard:</b> See where you stand among lakhs
                          of students.
                        </div>
                      </li>
                    </ul>
        
                    <div className="mt-8 flex gap-3">
                      <Link
                        href="#register"
                        className="px-5 py-3 bg-indigo-600 text-white rounded-md font-medium shadow"
                      >
                        Get Started — Join Now
                      </Link>
                      <Link
                        href="#quizzes"
                        className="px-5 py-3 border border-indigo-200 rounded-md text-indigo-600"
                      >
                        Explore Quizzes
                      </Link>
                    </div>
        
                    <div className="mt-6 text-xs text-gray-500">
                      Trusted by <strong>500,000+</strong> students • 24×7 mentorship
                      support
                    </div>
                  </div>
        
                  <div>
                    <div className="bg-white rounded-2xl shadow-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs text-gray-500">Live Now</div>
                          <div className="text-sm font-semibold">
                            Daily Quiz — UPSC Current Affairs
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-gray-500">Prize Pool</div>
                          <div className="text-lg font-bold">₹1,00000</div>
                        </div>
                      </div>
        
                      <div className="mt-4">
                        <img
                          src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=abcdef"
                          alt="reel"
                          className="reel-thumb w-full"
                        />
                      </div>
        
                      <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
                        <div>
                          Hosted by <strong>CA Natasha Sharma</strong>
                        </div>
                        <div>Entry ₹20 • 5,000+ players</div>
                      </div>
        
                      <div className="mt-4 flex gap-2">
                        <Link
                          href="#join"
                          className="flex-1 px-3 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-md text-center"
                        >
                          Join Quiz
                        </Link>
                        <Link
                          href="#rules"
                          className="px-3 py-2 border rounded-md text-sm"
                        >
                          Rules
                        </Link>
                      </div>
                    </div>
        
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="bg-white p-3 rounded-lg shadow-sm text-sm">
                        <div className="text-xs text-gray-500">Smart Notes</div>
                        <div className="font-semibold">10,000+ downloadable notes</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg shadow-sm text-sm">
                        <div className="text-xs text-gray-500">Mentorship</div>
                        <div className="font-semibold">24×7 Ask CA Mentor AI</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
        
              {/* FEATURES */}
              <section id="notes" className="py-12  bg-white text-black">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="mb-2">
                      <img src="/FRAME.svg" alt="" className="w-15"/>
                    </div>
                      <h3 className="font-bold text-lg">
                        Learn Smarter — Smart Notes
                      </h3>
                      <p className="mt-3 text-sm text-gray-600">
                        Condensed notes for quick revision: UPSC, RPSC, SSC, Teacher
                        Exams & Olympiads. 
                      </p>
                      <ul className="mt-4 text-sm space-y-2 text-gray-700">
                        <li className="flex gap-2 items-center"> <img src="/download.svg" alt="" /> Downloadable PDFs and printable summaries.</li>
                        <li className="flex gap-2 items-center"> <img src="/bars.svg" alt="" />Handwritten & typed notes</li>
                        <li className="flex gap-2 items-center"> <img src="/right.svg" alt="" /> Topic-wise summaries & quick MCQs</li>
                        <li className="flex gap-2 items-center"> <img src="/phone.svg" alt="" />Offline downloads for study on-the-go</li>
                      </ul>
                    </div>
        
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                     <div className="mb-2">
                      <img src="/FRAME (1).svg" alt="" className="w-15"/>
                    </div>
                      <h3 className="font-bold text-lg">
                        Short Reels — 60–120s Lessons
                      </h3>
                      <p className="mt-3 text-sm text-gray-600">
                        Bite-sized lessons by top educators that explain the gist
                        quickly so you can revise anytime.
                      </p>
                      <ul className="mt-4 text-sm space-y-2 text-gray-700">
                        <li className="flex gap-2 items-center mb-3"> <img src="/yello.svg" alt="" />Tag-based discovery (by topic & exam)</li>
                        <li className="flex gap-2 items-center mb-3"> <img src="/saved.svg" alt="" />Save reels to personal playlists</li>
                        <li className="flex gap-2 items-center mb-3"> <img src="/yelloright.svg" alt="" />Auto-transcripts & bookmarks</li>
                      </ul>
                    </div>
        
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                     <div className="mb-2">
                      <img src="/FRAME (2).svg" alt="" className="w-15"/>
                    </div>
                      <h3 className="font-bold text-lg">
                        Compete — Quiz Competitions
                      </h3>
                      <p className="mt-3 text-sm text-gray-600">
                        Daily public quizzes, influencer-hosted close rooms, and grand
                        leagues with cash prizes.
                      </p>
                      <ul className="mt-4 text-sm space-y-2 text-gray-700">
                        <li className="flex gap-2 items-center mb-3"> <img src="/trophy1.svg" alt="" />70% prize pool to top rankers</li>
                        <li className="flex gap-2 items-center mb-3"> <img src="/right.svg" alt="" />
                          Educators earn 50% of platform fee when they host
                        </li>
                        <li className="flex gap-2 items-center mb-3"> <img src="/graph1.svg" alt="" />Instant rankings & detailed analytics</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
        
              {/* EDUCATORS */}
              <section
                id="educators"
                className="py-12 bg-gradient-to-b from-white to-gray-50 text-black"
              >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold">Top Educators Onboard</h3>
                    <Link href="/team" className="text-sm text-indigo-600">
                      View all
                    </Link>
                  </div>
        
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                    {educators.map((educator) => (
                      <div
                        key={educator.name}
                        className="bg-white p-4 rounded-lg text-center shadow-sm"
                      >
                        <img
                          src={educator.img}
                          alt="educator"
                          width={80}
                          height={80}
                          className="w-20 h-20 rounded-full mx-auto"
                        />
                        <div className="mt-3 font-semibold text-sm">
                          {educator.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {educator.subject}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
        
              {/* TESTIMONIALS & STATS */}
              <section className="py-12  bg-white text-black">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 items-start">
                  <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-lg font-bold">What Students Say</h3>
                    <div className="mt-4 space-y-4">
                      <blockquote className="p-4 bg-gray-50 rounded-md">
                        “Brain Bucks made learning fun. The quizzes kept me hooked, and
                        I loved winning cash while preparing!” — <b>Ritika Sharma</b>,
                        UPSC Aspirant
                      </blockquote>
                      <blockquote className="p-4 bg-gray-50 rounded-md">
                        “The smart notes saved me hours of revision time. Highly
                        recommended!” — <b>Arjun Meena</b>, RPSC Student
                      </blockquote>
                      <blockquote className="p-4 bg-gray-50 rounded-md">
                        “I never thought studying could feel like a game. The national
                        leaderboard is addictive!” — <b>Sahil Verma</b>, SSC Aspirant
                      </blockquote>
                    </div>
                  </div>
        
                  <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white p-6 rounded-xl shadow-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs uppercase opacity-80">
                          Platform Stats
                        </div>
                        <div className="text-3xl font-bold mt-2">500k+</div>
                        <div className="text-sm opacity-80">Registered Students</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold mt-2">10k+</div>
                        <div className="text-sm opacity-80">Smart Notes</div>
                      </div>
                    </div>
        
                    <div className="mt-6 text-sm opacity-90">
                      24×7 mentorship support • Trusted educators • Demo lectures &
                      special offers
                    </div>
                  </div>
                </div>
              </section>
        
              {/* HOW IT WORKS */}
              <section id="how" className="py-12 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <h3 className="text-2xl font-bold text-black">How Brain Bucks Works</h3>
                  <p className="mt-3 text-gray-600">
                    Simple — learn short, revise fast, compete often, win rewards.
                  </p>
        
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-black">
                    <div className="p-6 bg-gray-50 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
                    <div className="border-t-3 border-[#701DDB] mb-3"></div>
                    <div className="justify-center items-center flex mb-3"><img src="degree3.svg" alt="" /></div>
                      <div className="text-2xl text-[#701DDB] font-bold">1</div>
                      <div className="font-semibold mt-2">Learn</div>
                      <div className="mt-2 text-sm text-gray-600">
                        Watch short reels & read smart notes from top educators.
                      </div>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
                     <div className="border-t-3 border-[#701DDB] mb-3"></div>
                    <div className="justify-center items-center flex mb-3"><img src="trophy2.svg" alt="" /></div>
                      <div className="text-2xl text-[#701DDB] font-bold">2</div>
                      <div className="font-semibold mt-2">Compete</div>
                      <div className="mt-2 text-sm text-gray-600">
                        Join public or influencer-hosted quiz rooms.
                      </div>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
                     <div className="border-t-3 border-[#701DDB] mb-3"></div>
                    <div className="justify-center items-center flex mb-3"><img src="medal2.svg" alt="" /></div>
                      <div className="text-2xl text-[#701DDB] font-bold">3</div>
                      <div className="font-semibold mt-2">Win</div>
                      <div className="mt-2 text-sm text-gray-600">
                        Claim cash prizes and improve your national rank.
                      </div>
                    </div>
                  </div>
                </div>
              </section>
        
              {/* CTA */}
              <section id="download" className="py-12 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-r from-indigo-600 to-purple-500 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-black">
                    Ready to learn, compete & win?
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Download the Brain Bucks app and start earning while you learn.
                  </p>
                  <div className="mt-6 flex items-center justify-center gap-4">
                    {/* <Link
                      href="#"
                      className="px-4 py-2 bg-black text-white rounded-md"
                    >
                      App Store
                    </Link> */}
                    <a onClick={() => window.open(
                    'https://play.google.com/store/apps/details?id=com.brainbucks.android','_blank'
                      )}
                      href="#"
                      className="px-4 py-2 bg-black text-white rounded-md"
                    >
                      Google Play
                    </a>
                  </div>
                </div>
              </section>
          {/* <main className="w-full bg-white text-[#1a1a1a] mt-12">
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
              </div> */}

           <Footer/>
        </>
    )
}