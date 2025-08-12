
"use client";

import { ArrowDownToLine } from "lucide-react";
import AutoSlider from "../autoSlider";
import Link from "next/link";
import Image from "next/image";

import Footer from "../footer";
export default function Home() {

   const educators = [
    { name: "CA Parveen Sharma", subject: "Tax & Audit", img: "12" },
    { name: "Prof. Sanjay Saraf", subject: "Accounts", img: "33" },
    { name: "CA Shubham Keswani", subject: "Law", img: "5" },
    { name: "Anshul Agrawal", subject: "Economics", img: "45" },
    { name: "Sankalp Kansal", subject: "Current Affairs", img: "21" },
    { name: "Raj Kumar", subject: "Quant & Reasoning", img: "30" },
  ];
 
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


{/* addon */}

<header className="bg-white shadow-sm sticky top-0 z-40 text-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-600 to-purple-500 flex items-center justify-center text-white font-bold">
                B
              </div>
              <div>
                <h1 className="text-lg font-semibold">Brain Bucks</h1>
                <p className="text-xs text-gray-500">Learn · Compete · Win</p>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link href="#notes" className="hover:text-indigo-600">
                Smart Notes
              </Link>
              <Link href="#quizzes" className="hover:text-indigo-600">
                Quiz Competitions
              </Link>
              <Link href="#leaderboard" className="hover:text-indigo-600">
                Leaderboard
              </Link>
              <Link href="#educators" className="hover:text-indigo-600">
                Top Educators
              </Link>
              <Link href="#about" className="hover:text-indigo-600">
                About
              </Link>
              <Link href="#store" className="hover:text-indigo-600">
                Store
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              <Link
                href="#download"
                className="hidden sm:inline-block px-3 py-1.5 bg-indigo-600 text-white rounded-md text-sm"
              >
                Download App
              </Link>
              <Link
                href="#login"
                className="px-3 py-1.5 border border-gray-200 rounded-md text-sm"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-12 pb-16 bg-white text-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
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
                  <div className="text-lg font-bold">₹10,000</div>
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
                  Hosted by <strong>CA Parveen Sharma</strong>
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
              <h3 className="font-bold text-lg">
                Learn Smarter — Smart Notes
              </h3>
              <p className="mt-3 text-sm text-gray-600">
                Condensed notes for quick revision: UPSC, RPSC, SSC, Teacher
                Exams & Olympiads. Downloadable PDFs and printable summaries.
              </p>
              <ul className="mt-4 text-sm space-y-2 text-gray-700">
                <li>Handwritten & typed notes</li>
                <li>Topic-wise summaries & quick MCQs</li>
                <li>Offline downloads for study on-the-go</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg">
                Short Reels — 60–120s Lessons
              </h3>
              <p className="mt-3 text-sm text-gray-600">
                Bite-sized lessons by top educators that explain the gist
                quickly so you can revise anytime.
              </p>
              <ul className="mt-4 text-sm space-y-2 text-gray-700">
                <li>Tag-based discovery (by topic & exam)</li>
                <li>Save reels to personal playlists</li>
                <li>Auto-transcripts & bookmarks</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg">
                Compete — Quiz Competitions
              </h3>
              <p className="mt-3 text-sm text-gray-600">
                Daily public quizzes, influencer-hosted close rooms, and grand
                leagues with cash prizes.
              </p>
              <ul className="mt-4 text-sm space-y-2 text-gray-700">
                <li>70% prize pool to top rankers</li>
                <li>
                  Educators earn 50% of platform fee when they host
                </li>
                <li>Instant rankings & detailed analytics</li>
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
            <Link href="#educator-list" className="text-sm text-indigo-600">
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
                  src={`https://i.pravatar.cc/100?img=${educator.img}`}
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
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="text-2xl">1</div>
              <div className="font-semibold mt-2">Learn</div>
              <div className="mt-2 text-sm text-gray-600">
                Watch short reels & read smart notes from top educators.
              </div>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="text-2xl">2</div>
              <div className="font-semibold mt-2">Compete</div>
              <div className="mt-2 text-sm text-gray-600">
                Join public or influencer-hosted quiz rooms.
              </div>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="text-2xl">3</div>
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
            <Link
              href="#"
              className="px-4 py-2 bg-black text-white rounded-md"
            >
              App Store
            </Link>
            <Link
              href="#"
              className="px-4 py-2 bg-black text-white rounded-md"
            >
              Google Play
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t mt-12">
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
      </footer>

      <Footer/> 
    </>
  );
}
