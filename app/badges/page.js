"use client";
import React from 'react';
import { Sparkles, Trophy, Rocket, Globe } from 'lucide-react';

const StudentLeaderboard = () => {
    // Ye component student leaderboard aur badges ka section banata hai.
    // Isme Tailwind CSS aur Lucide Icons ka use kiya gaya hai.
    // Ab har badge ke liye bhi ek mini-leaderboard hai jo top students ko dikhata hai.

    // Weekly Toppers ke liye data, ab isme aur students add kar diye hain
    const weeklyToppers = [
        { rank: 1, name: 'Vikram S.', city: 'Indore', amount: '₹1,50,000', avatar: 'V', avatarColor: 'a855f7', rankColor: 'text-amber-500' },
        { rank: 2, name: 'Priya M.', city: 'Nagpur', amount: '₹1,20,500', avatar: 'P', avatarColor: 'c026d3', rankColor: 'text-gray-400' },
        { rank: 3, name: 'Sameer K.', city: 'Bhopal', amount: '₹1,00,000', avatar: 'S', avatarColor: 'f472b6', rankColor: 'text-orange-500' },
        { rank: 4, name: 'Rohan A.', city: 'Delhi', amount: '₹95,000', avatar: 'R', avatarColor: '6366f1', rankColor: 'text-gray-500' },
        { rank: 5, name: 'Meera J.', city: 'Mumbai', amount: '₹88,000', avatar: 'M', avatarColor: '4f46e5', rankColor: 'text-gray-500' },
    ];

    // Har badge ke liye mini-leaderboard ka data
    const badgeData = [
        {
            title: 'Daily Streaker',
            icon: <Sparkles className="w-16 h-16 text-amber-500" />,
            winners: [
                { name: 'Anjali R.', city: 'Pune', score: '30 Din ka Streak', avatar: 'A', avatarColor: 'f97316' },
                { name: 'Karan L.', city: 'Indore', score: '25 Din ka Streak', avatar: 'K', avatarColor: 'fbbf24' },
                { name: 'Diya G.', city: 'Jaipur', score: '20 Din ka Streak', avatar: 'D', avatarColor: 'facc15' }
            ]
        },
        {
            title: 'Quiz Master',
            icon: <Trophy className="w-16 h-16 text-purple-600" />,
            winners: [
                { name: 'Mohit P.', city: 'Delhi', score: '50 Quizzes Win', avatar: 'M', avatarColor: '7c3aed' },
                { name: 'Sneha T.', city: 'Chennai', score: '45 Quizzes Win', avatar: 'S', avatarColor: '8b5cf6' },
                { name: 'Arjun B.', city: 'Bengaluru', score: '42 Quizzes Win', avatar: 'A', avatarColor: 'a78bfa' }
            ]
        },
        {
            title: 'Subject Pro',
            icon: <Rocket className="w-16 h-16 text-pink-500" />,
            winners: [
                { name: 'Simran L.', city: 'Mumbai', score: 'Mastery in 10 Subjects', avatar: 'S', avatarColor: 'db2777' },
                { name: 'Vivek K.', city: 'Nagpur', score: 'Mastery in 8 Subjects', avatar: 'V', avatarColor: 'ec4899' },
                { name: 'Nisha S.', city: 'Pune', score: 'Mastery in 7 Subjects', avatar: 'N', avatarColor: 'f472b6' }
            ]
        },
        {
            title: 'Top 20% Finisher',
            icon: <Globe className="w-16 h-16 text-green-500" />,
            winners: [
                { name: 'Rahul V.', city: 'Jaipur', score: 'Top 10 Rank', avatar: 'R', avatarColor: '10b981' },
                { name: 'Alok P.', city: 'Lucknow', score: 'Top 15 Rank', avatar: 'A', avatarColor: '34d399' },
                { name: 'Jiya M.', city: 'Bhopal', score: 'Top 18 Rank', avatar: 'J', avatarColor: '6ee7b7' }
            ]
        }
    ];

    return (
        <section id="student-leaderboard" className="py-14 pt-26 bg-gray-50 font-sans antialiased">
            <div className="container mx-auto px-6">
                {/* Main Heading with a gradient effect */}
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
                    Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Leaderboard & Badges</span>
                </h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Leaderboard Section */}
                    <div className="lg:col-span-1 bg-white shadow-xl p-6 rounded-xl border border-gray-200">
                        <h3 className="text-2xl font-bold mb-4 text-gray-900">Weekly Toppers</h3>
                        <ul className="space-y-4">
                            {weeklyToppers.map((topper, index) => (
                                <li key={index} className="flex items-center space-x-4">
                                    <span className={`text-xl font-bold ${topper.rankColor}`}>{topper.rank}.</span>
                                    <img
                                        src={`https://placehold.co/40x40/ffffff/${topper.avatarColor}?text=${topper.avatar}`}
                                        width={40}
                                        height={40}
                                        className={`w-10 h-10 rounded-full ring-2 ring-${topper.avatarColor.replace('a855f7', 'purple-500').replace('c026d3', 'fuchsia-500').replace('f472b6', 'pink-500').replace('6366f1', 'indigo-500').replace('4f46e5', 'indigo-600')}`}
                                        alt="Topper avatar"
                                    />
                                    <div className="flex-grow">
                                        <p className="font-semibold text-gray-800">{topper.name}</p>
                                        <p className="text-sm text-gray-500">{topper.city}</p>
                                    </div>
                                    <p className="ml-auto font-bold text-green-600">{topper.amount}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Badges Section with Mini-Leaderboards */}
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {badgeData.map((badge, index) => (
                            <div key={index} className="bg-white shadow-xl p-6 rounded-xl flex flex-col items-center justify-center border border-gray-200 text-center">
                                <div className="mb-4">{badge.icon}</div>
                                <h4 className="text-lg font-bold text-gray-900 mb-4">{badge.title}</h4>
                                <ul className="w-full space-y-3">
                                    {badge.winners.map((winner, winnerIndex) => (
                                        <li key={winnerIndex} className="w-full flex items-center space-x-4 p-2 rounded-lg bg-gray-100">
                                            <img
                                                src={`https://placehold.co/40x40/ffffff/${winner.avatarColor}?text=${winner.avatar}`}
                                                width={40}
                                                height={40}
                                                className="w-10 h-10 rounded-full ring-2 ring-gray-400"
                                                alt="Badge winner avatar"
                                            />
                                            <div className="flex-grow text-left">
                                                <p className="font-semibold text-gray-800">{winner.name}</p>
                                                <p className="text-sm text-gray-500">{winner.city}</p>
                                            </div>
                                            <p className="font-bold text-gray-700 whitespace-nowrap">{winner.score}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StudentLeaderboard;