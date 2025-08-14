"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';
// import Image from 'next/image';
import Footer from "./footer"
import Link from 'next/link';

const BrainBucks = () => {
    useEffect(() => {

        // App Screen Changer
        const appScreen = document.getElementById('app-screen');
        const screenButtons = document.querySelectorAll('.app-screen-btn');
        const screens = [
            '/brainbucks3.png',
            '/brainbucks4.png',
            '/brainbucksimg2.png'
        ];

        window.changeScreen = (index) => {
            if (!appScreen) return;
            appScreen.style.opacity = 0;
            setTimeout(() => {
                appScreen.src = screens[index - 1];
                appScreen.style.opacity = 1;
            }, 300);
            screenButtons.forEach((btn, i) => {
                if ((i + 1) === index) {
                    btn.classList.remove('bg-gray-200', 'text-gray-800');
                    btn.classList.add('bg-purple-600', 'text-white');
                } else {
                    btn.classList.remove('bg-purple-600', 'text-white');
                    btn.classList.add('bg-gray-200', 'text-gray-800');
                }
            });
        };

        // Live Winner Feed
        const winners = [
            { name: "Priya S.", amount: 50000, subject: "Biology" },
            { name: "Amit K.", amount: 2500, subject: "Physics" },
            { name: "Rohan V.", amount: 1000, subject: "UPSC History" },
            { name: "Sneha M.", amount: 7500, subject: "Quant" },
            { name: "Vikas G.", amount: 5000, subject: "Chemistry" }
        ];
        const feedContainer = document.getElementById('winner-feed-container');
        let winnerIndex = 0;

        const showNextWinner = () => {
            if (!feedContainer) return;
            feedContainer.innerHTML = '';
            const winner = winners[winnerIndex];
            const item = document.createElement('div');
            item.className = 'winner-feed-item absolute inset-0 flex items-center p-2';
            item.innerHTML = `
                <img src="https://placehold.co/32x32/c026d3/ffffff?text=${winner.name.charAt(0)}" class="w-8 h-8 rounded-full mr-3" alt="winner avatar">
                <div>
                    <p class="font-semibold text-gray-800">${winner.name} just won <span class="text-green-600 font-bold">₹${winner.amount}</span></p>
                    <p class="text-sm text-gray-600">in ${winner.subject} quiz!</p>
                </div>
            `;
            feedContainer.appendChild(item);
            winnerIndex = (winnerIndex + 1) % winners.length;
        };

        const winnerInterval = setInterval(showNextWinner, 5000);

        // FAQ Accordion
        const detailsElements = document.querySelectorAll('.faq-item');
        detailsElements.forEach(details => {
            const handleToggle = () => {
                const arrow = details.querySelector('.details-arrow');
                if (details.open) {
                    arrow.style.transform = 'rotate(45deg)';
                } else {
                    arrow.style.transform = 'rotate(0deg)';
                }
            };
            details.addEventListener('toggle', handleToggle);
            // Cleanup function for event listener
            return () => details.removeEventListener('toggle', handleToggle);
        });
        
        // Initial call on component mount
        showNextWinner();

        // Cleanup on unmount
        return () => {
            mobileMenuButton.removeEventListener('click', toggleMobileMenu);
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.removeEventListener('click', () => mobileMenu.classList.add('hidden'));
            });
            clearInterval(winnerInterval);
        };
    }, []);

    const targetDate = new Date("2025-12-31T23:59:59").getTime();

    const [timeLeft, setTimeLeft] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
    });

     useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                // Timer has expired
                return { days: "00", hours: "00", minutes: "00", seconds: "00" };
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Format numbers with leading zeros
            const formatNumber = (num) => num.toString().padStart(2, '0');

            return {
                days: formatNumber(days),
                hours: formatNumber(hours),
                minutes: formatNumber(minutes),
                seconds: formatNumber(seconds),
            };
        };

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        // Clear the interval on component unmount to prevent memory leaks
        return () => clearInterval(timer);
    }, [targetDate]);

    const customStyles = `
    .hero-bg {
        background-color: #f9fafb;
    }
    .section-bg-alt {
        background-color: #f3e8ff;
    }
    .animated-gradient-text {
        background: linear-gradient(90deg, #a855f7, #c026d3, #f472b6, #fb923c, #a855f7);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: gradient-animation 8s ease infinite;
        background-size: 250% 250%;
    }
    @keyframes gradient-animation {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
    .countdown-box {
        background-color: #f3e8ff;
        border: 1px solid #d946ef;
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    }
    .cta-button-alt {
        transition: all 0.3s ease-in-out;
        background-color: #c026d3;
        box-shadow: 0 4px 20px rgba(192, 38, 211, 0.25);
    }
    .cta-button-alt:hover {
        transform: translateY(-4px) scale(1.05);
        background-color: #d946ef;
        box-shadow: 0 8px 30px rgba(192, 38, 211, 0.35);
    }
`;

    return (
        <div className="scroll-smooth">
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>BrainBucks - Learn, Play, and Earn Real Cash | Gamified Education</title>
                <meta name="description" content="BrainBucks is India's leading gamified learning platform where students can learn for free from top educators, play exciting quizzes, and win real cash daily. Prepare for NEET, JEE, UPSC, and more!" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Poppins:wght@700&display=swap" rel="stylesheet" />
            </Head>
            <style jsx global>{`
                body {
                    {/* font-family: 'Inter', sans-serif; */}
                    background-color: #FFFFFF;
                    color: #1f2937;
                }
                .font-hindi {
                    font-family: 'Poppins', sans-serif;
                }
                .hero-bg {
                    background-color: #f9fafb;
                }
                .section-bg-alt {
                    background-color: #f3e8ff;
                }
                .animated-gradient-text {
                    background: linear-gradient(90deg, #a855f7, #c026d3, #f472b6, #fb923c, #a855f7);
                    background-size: 250% 250%;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    animation: gradient-animation 8s ease infinite;
                }
                @keyframes gradient-animation {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .cta-button {
                    transition: all 0.3s ease-in-out;
                    background-color: #c026d3;
                    box-shadow: 0 4px 20px rgba(192, 38, 211, 0.25);
                }
                .cta-button:hover {
                    transform: translateY(-4px) scale(1.05);
                    background-color: #d946ef;
                    box-shadow: 0 8px 30px rgba(192, 38, 211, 0.35);
                }
                .card {
                    border: 1px solid #e5e7eb;
                    background: #FFFFFF;
                    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
                }
                .header {
                    background: rgba(255, 255, 255, 0.8);
                    backdrop-filter: blur(12px);
                    border-bottom: 1px solid #e5e7eb;
                }
                .faq-item summary::-webkit-details-marker {
                    display: none;
                }
                .details-arrow {
                    transition: transform 0.3s ease-in-out;
                }
                details[open] .details-arrow {
                    transform: rotate(45deg);
                }
                .winner-feed-item {
                    animation: fadeInOut 5s ease-in-out infinite;
                }
                @keyframes fadeInOut {
                    0%, 100% { opacity: 0; transform: translateY(10px); }
                    10%, 90% { opacity: 1; transform: translateY(0); }
                }
            `}</style>
            

            {/* Hero Section */}
            <main className="hero-bg pt-28 pb-10">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-gray-900">
                        Learn Smarter, Not Harder.<br />Win <span className="animated-gradient-text">Real Cash</span> Daily!
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        India&apos;s first platform where you learn for free and earn from your knowledge. <br className="hidden sm:block" />
                        <span className="font-semibold text-gray-800">Turn your screen time into earning time.</span>
                    </p>
                    <a
                     onClick={() => window.open(
                            'https://play.google.com/store/apps/details?id=com.brainbucks.android',
                    '_blank'
                          )} 
                     href="#download" className="cta-button text-white font-bold py-4 px-8 rounded-full text-lg inline-block">
                        Download App & Get ₹10 Bonus
                    </a>
                </div>
            </main>

            {/* App in Action Section */}
            <section id="app-in-action" className="py-14">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">The App in Action</h2>
                   <div className="flex justify-center">
                    <div className="relative w-[260px] h-[520px]">
                      <img
                        src="https://placehold.co/260x520/1f2937/ffffff?text="
                        alt="Phone frame"
                        className="w-full h-full rounded-[40px]"
                      />
                      
                      <div className="absolute top-[10px] left-[10px] right-[10px] bottom-[10px] overflow-hidden rounded-[24px]">
                        <img
                          id="app-screen"
                          src="/brainbucks3.png"
                          alt="App Screen"
                          className="w-100 mt-14 object-cover transition-opacity duration-500"
                        />
                      </div>
                      </div>
                    </div>

                    <div className="flex justify-center gap-4 mt-8">
                        <button onClick={() => window.changeScreen(1)} className="app-screen-btn bg-purple-600 text-white py-2 px-4 rounded-lg">Learn</button>
                        <button onClick={() => window.changeScreen(2)} className="app-screen-btn bg-gray-200 text-gray-800 py-2 px-4 rounded-lg">Play Quiz</button>
                        <button onClick={() => window.changeScreen(3)} className="app-screen-btn bg-gray-200 text-gray-800 py-2 px-4 rounded-lg">Win Cash</button>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section id="philosophy" className="py-10 md:py-22 section-bg-alt">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-2xl md:text-4xl font-bold  text-purple-800 font-hindi"> ब्रेनबक्स की आदत अच्छी है।</h2>
                    <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mt-4">
                        Stop wasting time on distracting apps. With BrainBucks, you get entertainment and career preparation, all in one place. This is productive entertainment.
                        <br /><span className="font-bold text-gray-900 mt-2 block font-hindi">#बुरी आदत छोड़ो, अच्छी आदत लगाओ।</span>
                    </p>
                </div>
            </section>

            {/* Exams Covered Section */}
            <section id="exams" className="py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">Exams We Cover</h2>
                    <p className="text-center text-gray-600 mb-12">And many more state-level exams coming soon!</p>
                    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
                        <div className="card py-4 px-8 rounded-lg font-bold text-lg text-purple-800">NEET</div>
                        <div className="card py-4 px-8 rounded-lg font-bold text-lg text-purple-800">JEE</div>
                        <div className="card py-4 px-8 rounded-lg font-bold text-lg text-purple-800">UPSC</div>
                        <div className="card py-4 px-8 rounded-lg font-bold text-lg text-purple-800">SSC CGL</div>
                        <div className="card py-4 px-8 rounded-lg font-bold text-lg text-purple-800">Banking</div>
                        <div className="card py-4 px-8 rounded-lg font-bold text-lg text-purple-800">Railways</div>
                    </div>
                </div>
            </section>

            {/* Today's Arena Section */}
            <section id="todays-arena" className="py-14 section-bg-alt">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-gray-900">Today&apos;s Live Arena</h2>
                    <p className="text-center text-lg text-pink-600 font-semibold mb-12">Where Everyone Wins!</p>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Today's Top Quizzes */}
                        <div className="lg:col-span-2 card p-6 rounded-xl">
                            <h3 className="text-2xl font-bold mb-4 text-gray-900">Today&apos;s Top Quizzes</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                                    <div>
                                        <p className="font-bold text-purple-800">NEET: Full Biology Mock</p>
                                        <p className="text-sm text-gray-600">By Dr. Anjali Verma | Prize: ₹5,000</p>
                                    </div>
                                    <a  onClick={() => window.open(
                                      'https://play.google.com/store/apps/details?id=com.brainbucks.android',
                                      '_blank'
                                    )} 
                                    className="bg-pink-500 cursor-pointer text-white font-bold py-2 px-4 rounded-lg text-sm hover:bg-pink-600">Play Now</a>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                                    <div>
                                        <p className="font-bold text-purple-800">UPSC: Modern History</p>
                                        <p className="text-sm text-gray-600">By Priya Kapoor | Prize: ₹3,500</p>
                                    </div>
                                    <a
                                     onClick={() => window.open(
                                                'https://play.google.com/store/apps/details?id=com.brainbucks.android',
                                        '_blank'
                                              )} 
                                     className="bg-pink-500 cursor-pointer text-white font-bold py-2 px-4 rounded-lg text-sm hover:bg-pink-600">Play Now</a>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                                    <div>
                                        <p className="font-bold text-purple-800">JEE: Kinematics Challenge</p>
                                        <p className="text-sm text-gray-600">By Rohan Sharma | Prize: ₹4,000</p>
                                    </div>
                                    <a 
                                     onClick={() => window.open(
                                            'https://play.google.com/store/apps/details?id=com.brainbucks.android',
                                    '_blank'
                                          )}
                                      className="bg-pink-500 cursor-pointer text-white font-bold py-2 px-4 rounded-lg text-sm hover:bg-pink-600">Play Now</a>
                                </div>
                            </div>
                        </div>
                        {/* Winners Feed & Trending Rooms */}
                        <div className="space-y-8">
                            <div className="card p-6 rounded-xl">
                                <h3 className="text-2xl font-bold mb-4 text-gray-900">Live Winners Feed</h3>
                                <div className="h-40 overflow-hidden relative">
                                    <div id="winner-feed-container">
                                        {/* JS will populate this */}
                                    </div>
                                </div>
                            </div>
                            <div className="card p-6 rounded-xl">
                                <h3 className="text-2xl font-bold mb-4 text-gray-900">Trending Rooms</h3>
                                <div className="space-y-3">
                                    <p className="font-semibold text-purple-700">#NEETWarriors</p>
                                    <p className="font-semibold text-purple-700">#JEERockstars</p>
                                    <p className="font-semibold text-purple-700">#UPSC2025</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Student Leaderboard & Badges Section */}
            <section id="student-leaderboard" className="py-14">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Student <span className="animated-gradient-text">Leaderboard & Badges</span></h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Leaderboard */}
                        <div className="lg:col-span-1 card p-6 rounded-xl">
                            <h3 className="text-2xl font-bold mb-4 text-gray-900">Weekly Toppers</h3>
                            <ul className="space-y-4">
                                <li className="flex items-center space-x-4">
                                    <span className="text-lg font-bold text-amber-500">1.</span>
                                    <img src="https://placehold.co/40x40/ffffff/a855f7?text=V" width={40} height={40} className="w-10 h-10 rounded-full" alt="Topper avatar" />
                                    <div>
                                        <p className="font-semibold text-gray-800">Vikram S.</p>
                                        <p className="text-sm text-gray-500">Indore</p>
                                    </div>
                                    <p className="ml-auto font-bold text-green-600">₹1,50,000</p>
                                </li>
                                <li className="flex items-center space-x-4">
                                    <span className="text-lg font-bold text-gray-400">2.</span>
                                    <img src="https://placehold.co/40x40/ffffff/c026d3?text=P" width={40} height={40} className="w-10 h-10 rounded-full" alt="Topper avatar" />
                                    <div>
                                        <p className="font-semibold text-gray-800">Priya M.</p>
                                        <p className="text-sm text-gray-500">Nagpur</p>
                                    </div>
                                    <p className="ml-auto font-bold text-green-600">₹1,20,500</p>
                                </li>
                                <li className="flex items-center space-x-4">
                                    <span className="text-lg font-bold text-orange-500">3.</span>
                                    <img src="https://placehold.co/40x40/ffffff/f472b6?text=S" width={40} height={40} className="w-10 h-10 rounded-full" alt="Topper avatar" />
                                    <div>
                                        <p className="font-semibold text-gray-800">Sameer K.</p>
                                        <p className="text-sm text-gray-500">Bhopal</p>
                                    </div>
                                    <p className="ml-auto font-bold text-green-600">₹1,00,000</p>
                                </li>
                            </ul>
                        </div>
                        {/* Badges */}
                        <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="card text-center p-6 rounded-xl">
                                <div className="flex justify-center items-center mb-4"><svg className="w-16 h-16 text-amber-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.362-1.44m0 2.44a8.042 8.042 0 00-3.362 1.44M12 21a8.25 8.25 0 005.962-13.952A8.287 8.287 0 0115 9.6a8.983 8.983 0 00-3.362-1.44m0 2.44a8.042 8.042 0 013.362 1.44" /></svg></div>
                                <h4 className="text-lg font-bold text-gray-900">Daily Streaker</h4>
                            </div>
                            <div className="card text-center p-6 rounded-xl">
                                <div className="flex justify-center items-center mb-4"><svg className="w-16 h-16 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0l15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 01-7.74-3.342z" /></svg></div>
                                <h4 className="text-lg font-bold text-gray-900">Quiz Master</h4>
                            </div>
                            <div className="card text-center p-6 rounded-xl">
                                <div className="flex justify-center items-center mb-4"><svg className="w-16 h-16 text-pink-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.472-2.472a3.375 3.375 0 00-4.773-4.773L4.75 11.42l5.877 5.877z" /></svg></div>
                                <h4 className="text-lg font-bold text-gray-900">Subject Pro</h4>
                            </div>
                            <div className="card text-center p-6 rounded-xl">
                                <div className="flex justify-center items-center mb-4"><svg className="w-16 h-16 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9a9.75 9.75 0 100-13.5h9a9.75 9.75 0 100 13.5z" /><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6.375c.621 0 1.247.044 1.855.128a5.25 5.25 0 014.542 4.796.94 0.94 0 001.077.833A9.71 9.71 0 0018 9.75M10.5 6.375a9.71 9.71 0 00-3.355.625A5.25 5.25 0 002.25 12c0 1.605.848 3.013 2.145 3.948.302.21.65.297.986.239a.94.94 0 00.832-1.077A5.25 5.25 0 018.25 12a5.25 5.25 0 012.25-4.125z" /></svg></div>
                                <h4 className="text-lg font-bold text-gray-900">Top 20% Finisher</h4>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-15">
                    <a href='badges' className="block px-3 py-2 rounded-md text-base font-medium text-white cursor-pointer cta-button">View All Badges &rarr;</a>
                    </div>
                </div>
            </section>

            {/* For Educators Section */}
            <section id="educators" className="py-8">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Don&apos;t Just Teach. <span className="animated-gradient-text">Build an Empire.</span></h2>
                        <p className="text-lg text-gray-600 mt-4 mb-8">Join India&apos;s most rewarding platform for educators. Get the true value for your knowledge, without the hassle of video production.</p>
                    </div>
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div className="card p-6 rounded-lg">
                            <h4 className="text-2xl font-bold text-pink-600">Focus on Expertise</h4>
                            <p className="text-gray-700">No camera, no problem. Create high-quality quiz questions. We value your subject matter expertise above all.</p>
                        </div>
                        <div className="card p-6 rounded-lg">
                            <h4 className="text-2xl font-bold text-pink-600">15% Direct Revenue</h4>
                            <p className="text-gray-700">Earn a direct 15% commission from the total prize pool of every quiz you create. Simple, transparent, and instant.</p>
                        </div>
                        <div className="card p-6 rounded-lg">
                            <h4 className="text-2xl font-bold text-pink-600">Powerful Tools</h4>
                            <p className="text-gray-700">Use our Educator App with analytics, quiz templates, and a supportive community to grow your reach and earnings.</p>
                        </div>
                    </div>
                    <div className="text-center mt-10">
                        <a 
                         onClick={() => window.open(
                          'https://play.google.com/store/apps/details?id=com.brainbucks.android',
                          '_blank'
                        )}
                         className="cta-button text-white font-bold py-3 px-8 rounded-full text-lg inline-block cursor-pointer">Become a BrainBucks Educator</a>
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <section id="blog" className="py-12 section-bg-alt">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">From Our <span className="animated-gradient-text">Blog</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="card rounded-xl overflow-hidden">
                            <img src="/public (4).png" width={600} height={400} className="w-full h-48 object-cover" alt="Blog post on study tips" />
                            <div className="p-6">
                                <p className="text-sm font-semibold text-purple-700">Study Tips</p>
                                <h3 className="text-xl font-bold mt-2 mb-4 text-gray-900">5 Killer Strategies to Crack NEET in Your First Attempt</h3>
                                <a href="readAsSomewhere" className="font-semibold text-pink-600 hover:text-pink-700">Read More &rarr;</a>
                            </div>
                        </div>
                        <div className="card rounded-xl overflow-hidden">
                            <img src="/public (3).png" width={600} height={400} className="w-full h-48 object-cover" alt="Blog post on motivation" />
                            <div className="p-6">
                                <p className="text-sm font-semibold text-purple-700">Motivation</p>
                                <h3 className="text-xl font-bold mt-2 mb-4 text-gray-900">How Gamification is Making Learning Fun Again</h3>
                                <a href="readAsSomewhere" className="font-semibold text-pink-600 hover:text-pink-700">Read More &rarr;</a>
                            </div>
                        </div>
                        <div className="card rounded-xl overflow-hidden">
                            <img src="/public (5).png" width={600} height={400} className="w-full h-48 object-cover" alt="Blog post on a success story" />
                            <div className="p-6">
                                <p className="text-sm font-semibold text-purple-700">Success Story</p>
                                <h3 className="text-xl font-bold mt-2 mb-4 text-gray-900">From Village to Victory: A BrainBucks Winner&apos;s Journey</h3>
                                <a href="readAsSomewhere" className="font-semibold text-pink-600 hover:text-pink-700">Read More &rarr;</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-15">
                    <a href='blogs' className="block px-3 py-2 rounded-md text-base font-medium text-white cursor-pointer cta-button">View All Blogs &rarr;</a>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-12">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <details className="faq-item card p-4 rounded-lg">
                            <summary className="font-semibold text-lg cursor-pointer flex justify-between items-center text-gray-800">
                                Is the learning content really free?
                                <span className="details-arrow text-purple-700 text-2xl font-light">+</span>
                            </summary>
                            <p className="text-gray-600 mt-4">
                                Yes, absolutely! All our micro-learning content, including short concept videos and PDF notes from our educators, is 100% free to access for everyone.
                            </p>
                        </details>
                        <details className="faq-item card p-4 rounded-lg">
                            <summary className="font-semibold text-lg cursor-pointer flex justify-between items-center text-gray-800">
                                How do I receive my winnings?
                                <span className="details-arrow text-purple-700 text-2xl font-light">+</span>
                            </summary>
                            <p className="text-gray-600 mt-4">
                                Winnings are transferred instantly and directly to the UPI account linked to your BrainBucks profile. It&apos;s fast, secure, and hassle-free.
                            </p>
                        </details>
                        <details className="faq-item card p-4 rounded-lg">
                            <summary className="font-semibold text-lg cursor-pointer flex justify-between items-center text-gray-800">
                                How does the &quot;Top 20% Win&quot; model work?
                                <span className="details-arrow text-purple-700 text-2xl font-light">+</span>
                            </summary>
                            <p className="text-gray-600 mt-4">
                                Instead of a single winner, we distribute the prize pool among the top 20% of participants in a quiz. This means your chances of winning are much higher and success is based on skill, not just luck.
                            </p>
                        </details>
                        <details className="faq-item card p-4 rounded-lg">
                            <summary className="font-semibold text-lg cursor-pointer flex justify-between items-center text-gray-800">
                                Is my data and payment information secure?
                                <span className="details-arrow text-purple-700 text-2xl font-light">+</span>
                            </summary>
                            <p className="text-gray-600 mt-4">
                                Yes. We use industry-standard encryption for all data. Payments are processed through secure, RBI-compliant gateways. Your privacy and security are our top priorities.
                            </p>
                        </details>
                    </div>
                </div>
            </section>

             <style jsx global>{customStyles}</style>

            <section id="abc-quiz" className="py-20 hero-bg">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                        THE ABC MEGA QUIZ IS HERE!
                    </h2>
                    <p className="text-2xl md:text-3xl font-bold mt-2 mb-4">
                        Aap Banoge <span className="animated-gradient-text">Crorepati</span>
                    </p>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        India's biggest educational quiz tournament. Are you ready for the ultimate challenge?
                    </p>
                    <div className="my-10 p-8 countdown-box rounded-2xl max-w-3xl mx-auto shadow-2xl">
                        <p className="text-xl font-semibold text-gray-700">
                            Next Mega Quiz Starts In:
                        </p>
                        <div id="countdown" className="flex justify-center space-x-2 sm:space-x-4 mt-4 text-gray-900">
                            <div className="countdown-box p-3 sm:p-4 rounded-lg w-20 sm:w-24">
                                <div id="days" className="text-3xl sm:text-4xl font-bold">{timeLeft.days}</div>
                                <div className="text-xs sm:text-sm text-purple-600">Days</div>
                            </div>
                            <div className="countdown-box p-3 sm:p-4 rounded-lg w-20 sm:w-24">
                                <div id="hours" className="text-3xl sm:text-4xl font-bold">{timeLeft.hours}</div>
                                <div className="text-xs sm:text-sm text-purple-600">Hours</div>
                            </div>
                            <div className="countdown-box p-3 sm:p-4 rounded-lg w-20 sm:w-24">
                                <div id="minutes" className="text-3xl sm:text-4xl font-bold">{timeLeft.minutes}</div>
                                <div className="text-xs sm:text-sm text-purple-600">Minutes</div>
                            </div>
                            <div className="countdown-box p-3 sm:p-4 rounded-lg w-20 sm:w-24">
                                <div id="seconds" className="text-3xl sm:text-4xl font-bold">{timeLeft.seconds}</div>
                                <div className="text-xs sm:text-sm text-purple-600">Seconds</div>
                            </div>
                        </div>
                    </div>
                    {/* The original code uses a simple anchor tag for the CTA */}
                    <a href="#download" className="cta-button-alt text-white font-bold py-4 px-10 rounded-full text-xl inline-block hover:bg-purple-600">
                        Register for ABC Quiz Now!
                    </a>
                </div>
            </section>

            {/* Final CTA Section */}
            <section id="download" className="py-20 hero-bg">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">What are you waiting for?</h2>
                    <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10">
                        Millions of students are already learning and earning with BrainBucks. It&apos;s your turn now!
                    </p>
                    <div className="flex justify-center items-center flex-col sm:flex-row gap-6">
                        <a 
                          onClick={() => window.open('https://play.google.com/store/apps/details?id=com.brainbucks.android',
                                '_blank'
                              )}
                         className="flex items-center justify-center bg-gray-800 text-white py-3 px-6 rounded-lg border border-gray-600 w-52 hover:bg-black transition-colors cursor-pointer">
                            <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.25,8.875A1.06,1.06,0,0,0,22,7.75a1,1,0,0,0-1-1,1,1,0,0,0-.75.31l-2.6,2.6V5a1,1,0,0,0-2,0V9.44l-2.47-2.47A1,1,0,0,0,13,7a1,1,0,0,0-1,1,1,1,0,0,0,.25.66L15,11.44l-3,3-1.47-1.47a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.41L11.59,17l-3,3a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l3-3,2.75,2.75A1,1,0,0,0,16,21a1,1,0,0,0,1-1,1,1,0,0,0-.31-.75l-2.6-2.6V12l2.47,2.47a1,1,0,0,0,.71.29,1,1,0,0,0,1-1,1,1,0,0,0-.25-.66L15.19,10.25,18,7.44,20.59,10,18,12.56a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0L22,11.41,21.94,11.34,22,11.25a1,1,0,0,0,0-1.41L19.41,7.25,21.25,8.875Z" /><path d="M9.12,9.12,2.29,15.94a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L9.88,11,11,9.88,9.12,9.12Z" /><path d="M11,2.12,9.88,1,3.29,7.59a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0L11,2.12Z" /></svg>
                            <div>
                                <p className="text-xs">GET IT ON</p>
                                <p className="text-xl font-semibold">Google Play</p>
                            </div>
                        </a>
                        {/* <a href="#" className="flex items-center justify-center bg-gray-800 text-white py-3 px-6 rounded-lg border border-gray-600 w-52 hover:bg-black transition-colors">
                            <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19.3,11.13a3.67,3.67,0,0,0-2.2-3.2,3.38,3.38,0,0,0-3.23.44,1,1,0,0,0-.37,1.09,1,1,0,0,0,1.09.37,1.41,1.41,0,0,1,1.35-.18,1.67,1.67,0,0,1,1,1.45,1.62,1.62,0,0,1-1.61,1.76H13.1a3.59,3.59,0,0,0-3.59,3.59,3.62,3.62,0,0,0,3.62,3.62,2.8,2.8,0,0,0,2.68-1.88,1,1,0,0,0-1-.75,1,1,0,0,0-.75,1, .81.81,0,0,1-.68.5,1.62,1.62,0,0,1-1.62-1.62,1.59,1.59,0,0,1,1.59-1.59h2.24a3.59,3.59,0,0,0,3.59-3.59A3.63,3.63,0,0,0,19.3,11.13Zm-8.43,4.13a1,1,0,0,0-1-1,3.63,3.63,0,0,0-3.59,3.62,3.57,3.57,0,0,0,3.57,3.57A3.73,3.73,0,0,0,13,18.8a1,1,0,0,0-1.11-.83A1,1,0,0,0,11,19.08a1.7,1.7,0,0,1-1.13.4,1.57,1.57,0,0,1-1.57-1.57A1.58,1.58,0,0,1,9.87,16.4a1,1,0,0,0,1-1.14Z" /></svg>
                            <div>
                                <p className="text-xs">Download on the</p>
                                <p className="text-xl font-semibold">Google Play</p>
                            </div>
                        </a> */}
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default BrainBucks;

// "use client";
// import Link from "next/link";
// import Footer from "./footer"
// export default function Page(){
//     const educators = [
//     { name: "Rajendra Singh Maderna", subject: "RAJ. GK Expert", img: "/rajendra.jpeg" },
//     { name: "Jitendra Singh Chauhan", subject: "Chauhan Publication House", img: "/coreedu(3).jpeg" },
//     { name: "Pardeep Yadav (PNSY Sir)", subject: "Ex. Allen, Aakash & Amity", img: "/coreedu(11).jpeg" },
//     { name: "Sunil Lakhotia", subject: "Ex. Allen, Bnsal, Resonance Classes", img: "/coreedu(8).jpeg" },
//     { name: "PC Yadav", subject: "Geography Faculty", img: "/coreedu(6).jpeg" },
//     { name: "Dharam Singh", subject: "Ex. Allen, Abhigyan & Mission Institute", img: "/coreedu(17).jpeg" },
//   ];
//     return(
//         <>
//               <section className="pt-30 pb-16 bg-white text-black">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//                   <div>
//                     <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
//                       India’s Top Educators. Gamified Learning. Real Rewards.
//                     </h2>
//                     <p className="mt-4 text-gray-600">
//                       Learn from <strong>India’s best teachers</strong> through short
//                       reels and smart notes. Join live quiz competitions, win cash
//                       prizes, and track your rank among{" "}
//                       <strong>lakhs of students</strong>.
//                     </p>
        
//                     <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
//                       <li className="flex items-start gap-3">
//                         <span className="inline-block mt-1 text-indigo-600">🏆</span>
//                         <div>
//                           <b>Compete & Win:</b> Cash prizes & Brain Bucks points in
//                           daily quizzes.
//                         </div>
//                       </li>
//                       <li className="flex items-start gap-3">
//                         <span className="inline-block mt-1 text-indigo-600">🎥</span>
//                         <div>
//                           <b>Short Reels:</b> 60–120s lessons from top educators.
//                         </div>
//                       </li>
//                       <li className="flex items-start gap-3">
//                         <span className="inline-block mt-1 text-indigo-600">📚</span>
//                         <div>
//                           <b>Smart Notes:</b> Compact, exam-focused revision material.
//                         </div>
//                       </li>
//                       <li className="flex items-start gap-3">
//                         <span className="inline-block mt-1 text-indigo-600">📊</span>
//                         <div>
//                           <b>National Leaderboard:</b> See where you stand among lakhs
//                           of students.
//                         </div>
//                       </li>
//                     </ul>
        
//                     <div className="mt-8 flex gap-3">
//                       <Link
//                         href="#register"
//                         className="px-5 py-3 bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-md font-medium shadow"
//                       >
//                         Get Started — Join Now
//                       </Link>
//                       <Link
//                         href="#quizzes"
//                         className="px-5 py-3 border border-indigo-200 rounded-md text-indigo-600"
//                       >
//                         Explore Quizzes
//                       </Link>
//                     </div>
        
//                     <div className="mt-6 text-xs text-gray-500">
//                       Trusted by <strong>500,000+</strong> students • 24×7 mentorship
//                       support
//                     </div>
//                   </div>
        
//                   <div>
//                     <div className="bg-white rounded-2xl shadow-lg p-4">
//                       <div className="flex items-center justify-between">
//                         <div>
//                           <div className="text-xs text-gray-500">Live Now</div>
//                           <div className="text-sm font-semibold">
//                             Daily Quiz — UPSC Current Affairs
//                           </div>
//                         </div>
//                         <div className="text-right">
//                           <div className="text-xs text-gray-500">Prize Pool</div>
//                           <div className="text-lg font-bold">₹1,00000</div>
//                         </div>
//                       </div>
        
//                       <div className="mt-4">
//                         <img
//                           src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=abcdef"
//                           alt="reel"
//                           className="reel-thumb w-full"
//                         />
//                       </div>
        
//                       <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
//                         <div>
//                           Hosted by <strong>CA Natasha Sharma</strong>
//                         </div>
//                         <div>Entry ₹20 • 5,000+ players</div>
//                       </div>
        
//                       <div className="mt-4 flex gap-2">
//                         <Link
//                           href="#join"
//                           className="flex-1 px-3 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-md text-center"
//                         >
//                           Join Quiz
//                         </Link>
//                         <Link
//                           href="#rules"
//                           className="px-3 py-2 border rounded-md text-sm"
//                         >
//                           Rules
//                         </Link>
//                       </div>
//                     </div>
        
//                     <div className="mt-4 grid grid-cols-2 gap-3">
//                       <div className="bg-white p-3 rounded-lg shadow-sm text-sm">
//                         <div className="text-xs text-gray-500">Smart Notes</div>
//                         <div className="font-semibold">10,000+ downloadable notes</div>
//                       </div>
//                       <div className="bg-white p-3 rounded-lg shadow-sm text-sm">
//                         <div className="text-xs text-gray-500">Mentorship</div>
//                         <div className="font-semibold">24×7 Ask CA Mentor AI</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </section>
        
//               <section id="notes" className="py-12  bg-white text-black">
//                 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//                   <div className="grid md:grid-cols-3 gap-8">
//                     <div className="bg-white p-6 rounded-xl shadow-sm">
//                     <div className="mb-2">
//                       <img src="/FRAME.svg" alt="" className="w-15"/>
//                     </div>
//                       <h3 className="font-bold text-lg">
//                         Learn Smarter — Smart Notes
//                       </h3>
//                       <p className="mt-3 text-sm text-gray-600">
//                         Condensed notes for quick revision: UPSC, RPSC, SSC, Teacher
//                         Exams & Olympiads. 
//                       </p>
//                       <ul className="mt-4 text-sm space-y-2 text-gray-700">
//                         <li className="flex gap-2 items-center"> <img src="/download.svg" alt="" /> Downloadable PDFs and printable summaries.</li>
//                         <li className="flex gap-2 items-center"> <img src="/bars.svg" alt="" />Handwritten & typed notes</li>
//                         <li className="flex gap-2 items-center"> <img src="/right.svg" alt="" /> Topic-wise summaries & quick MCQs</li>
//                         <li className="flex gap-2 items-center"> <img src="/phone.svg" alt="" />Offline downloads for study on-the-go</li>
//                       </ul>
//                     </div>
        
//                     <div className="bg-white p-6 rounded-xl shadow-sm">
//                      <div className="mb-2">
//                       <img src="/FRAME (1).svg" alt="" className="w-15"/>
//                     </div>
//                       <h3 className="font-bold text-lg">
//                         Short Reels — 60–120s Lessons
//                       </h3>
//                       <p className="mt-3 text-sm text-gray-600">
//                         Bite-sized lessons by top educators that explain the gist
//                         quickly so you can revise anytime.
//                       </p>
//                       <ul className="mt-4 text-sm space-y-2 text-gray-700">
//                         <li className="flex gap-2 items-center mb-3"> <img src="/yello.svg" alt="" />Tag-based discovery (by topic & exam)</li>
//                         <li className="flex gap-2 items-center mb-3"> <img src="/saved.svg" alt="" />Save reels to personal playlists</li>
//                         <li className="flex gap-2 items-center mb-3"> <img src="/yelloright.svg" alt="" />Auto-transcripts & bookmarks</li>
//                       </ul>
//                     </div>
        
//                     <div className="bg-white p-6 rounded-xl shadow-sm">
//                      <div className="mb-2">
//                       <img src="/FRAME (2).svg" alt="" className="w-15"/>
//                     </div>
//                       <h3 className="font-bold text-lg">
//                         Compete — Quiz Competitions
//                       </h3>
//                       <p className="mt-3 text-sm text-gray-600">
//                         Daily public quizzes, influencer-hosted close rooms, and grand
//                         leagues with cash prizes.
//                       </p>
//                       <ul className="mt-4 text-sm space-y-2 text-gray-700">
//                         <li className="flex gap-2 items-center mb-3"> <img src="/trophy1.svg" alt="" />70% prize pool to top rankers</li>
//                         <li className="flex gap-2 items-center mb-3"> <img src="/right.svg" alt="" />
//                           Educators earn 50% of platform fee when they host
//                         </li>
//                         <li className="flex gap-2 items-center mb-3"> <img src="/graph1.svg" alt="" />Instant rankings & detailed analytics</li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </section>
        
//               <section
//                 id="educators"
//                 className="py-12 bg-gradient-to-b from-white to-gray-50 text-black"
//               >
//                 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//                   <div className="flex items-center justify-between mb-6">
//                     <h3 className="text-xl font-bold">Top Educators Onboard</h3>
//                     <Link href="/team" className="text-sm text-indigo-600">
//                       View all
//                     </Link>
//                   </div>
        
//                   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
//                     {educators.map((educator) => (
//                       <div
//                         key={educator.name}
//                         className="bg-white p-4 rounded-lg text-center shadow-sm"
//                       >
//                         <img
//                           src={educator.img}
//                           alt="educator"
//                           width={80}
//                           height={80}
//                           className="w-20 h-20 rounded-full mx-auto"
//                         />
//                         <div className="mt-3 font-semibold text-sm">
//                           {educator.name}
//                         </div>
//                         <div className="text-xs text-gray-500">
//                           {educator.subject}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </section>
        
//               <section className="py-12  bg-white text-black">
//                 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 items-start">
//                   <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-sm">
//                     <h3 className="text-lg font-bold">What Students Say</h3>
//                     <div className="mt-4 space-y-4">
//                       <blockquote className="p-4 bg-gray-50 rounded-md">
//                         “Brain Bucks made learning fun. The quizzes kept me hooked, and
//                         I loved winning cash while preparing!” — <b>Ritika Sharma</b>,
//                         UPSC Aspirant
//                       </blockquote>
//                       <blockquote className="p-4 bg-gray-50 rounded-md">
//                         “The smart notes saved me hours of revision time. Highly
//                         recommended!” — <b>Arjun Meena</b>, RPSC Student
//                       </blockquote>
//                       <blockquote className="p-4 bg-gray-50 rounded-md">
//                         “I never thought studying could feel like a game. The national
//                         leaderboard is addictive!” — <b>Sahil Verma</b>, SSC Aspirant
//                       </blockquote>
//                     </div>
//                   </div>
        
//                   <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white p-6 rounded-xl shadow-md">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <div className="text-xs uppercase opacity-80">
//                           Platform Stats
//                         </div>
//                         <div className="text-3xl font-bold mt-2">500k+</div>
//                         <div className="text-sm opacity-80">Registered Students</div>
//                       </div>
//                       <div>
//                         <div className="text-3xl font-bold mt-2">10k+</div>
//                         <div className="text-sm opacity-80">Smart Notes</div>
//                       </div>
//                     </div>
        
//                     <div className="mt-6 text-sm opacity-90">
//                       24×7 mentorship support • Trusted educators • Demo lectures &
//                       special offers
//                     </div>
//                   </div>
//                 </div>
//               </section>
        
//               <section id="how" className="py-12 bg-white">
//                 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//                   <h3 className="text-2xl font-bold text-black">How Brain Bucks Works</h3>
//                   <p className="mt-3 text-gray-600">
//                     Simple — learn short, revise fast, compete often, win rewards.
//                   </p>
        
//                   <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-black">
//                     <div className="p-6 bg-gray-50 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
//                     <div className="border-t-3 border-[#701DDB] mb-3"></div>
//                     <div className="justify-center items-center flex mb-3"><img src="degree3.svg" alt="" /></div>
//                       <div className="text-2xl text-[#701DDB] font-bold">1</div>
//                       <div className="font-semibold mt-2">Learn</div>
//                       <div className="mt-2 text-sm text-gray-600">
//                         Watch short reels & read smart notes from top educators.
//                       </div>
//                     </div>
//                     <div className="p-6 bg-gray-50 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
//                      <div className="border-t-3 border-[#701DDB] mb-3"></div>
//                     <div className="justify-center items-center flex mb-3"><img src="trophy2.svg" alt="" /></div>
//                       <div className="text-2xl text-[#701DDB] font-bold">2</div>
//                       <div className="font-semibold mt-2">Compete</div>
//                       <div className="mt-2 text-sm text-gray-600">
//                         Join public or influencer-hosted quiz rooms.
//                       </div>
//                     </div>
//                     <div className="p-6 bg-gray-50 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
//                      <div className="border-t-3 border-[#701DDB] mb-3"></div>
//                     <div className="justify-center items-center flex mb-3"><img src="medal2.svg" alt="" /></div>
//                       <div className="text-2xl text-[#701DDB] font-bold">3</div>
//                       <div className="font-semibold mt-2">Win</div>
//                       <div className="mt-2 text-sm text-gray-600">
//                         Claim cash prizes and improve your national rank.
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </section>
        
//               <section id="download" className="py-12 bg-white">
//                 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-r from-indigo-600 to-purple-500 rounded-2xl p-8">
//                   <h3 className="text-2xl font-bold text-black">
//                     Ready to learn, compete & win?
//                   </h3>
//                   <p className="mt-2 text-gray-600">
//                     Download the Brain Bucks app and start earning while you learn.
//                   </p>
//                   <div className="mt-6 flex items-center justify-center gap-4">
                    
//                     <a onClick={() => window.open(
//                     'https://play.google.com/store/apps/details?id=com.brainbucks.android','_blank'
//                       )}
//                       href="#"
//                       className="px-4 py-2 bg-black text-white rounded-md"
//                     >
//                       Google Play
//                     </a>
//                   </div>
//                 </div>
//               </section>


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

           
        // </>
    // )
// }