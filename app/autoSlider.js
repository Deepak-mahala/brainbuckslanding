"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const cardData = [
  {
    img: "/public.png",
    title: "Daily Quiz Challenges",
    desc: "Compete daily and boost your skills while earning rewards.",
    btn: "Play Now",
  },
  {
    img: "/public (1).png",
    title: "Invite & Earn",
    desc: "Invite your friends and earn bonus coins instantly.",
    btn: "Invite Now",
  },
  {
    img: "/public (2).png",
    title: "Real-Time Leaderboard",
    desc: "Track your progress and see where you stand in real time.",
    btn: "Check Rankings",
  },
  {
    img: "/public (3).png",
    title: "Instant Rewards",
    desc: "Get rewarded instantly after completing each quiz.",
    btn: "Claim Now",
  },
  {
    img: "/public (4).png",
    title: "Custom Rooms",
    desc: "Create private quiz rooms to play with friends.",
    btn: "Create Room",
  },
  {
    img: "/public (5).png",
    title: "Brain Power Mode",
    desc: "Challenge yourself with advanced-level quizzes.",
    btn: "Start Now",
  },
  {
    img: "/public (6).png",
    title: "Brain Power Mode",
    desc: "Challenge yourself with advanced-level quizzes.",
    btn: "Start Now",
  },
  {
    img: "/public.jpg",
    title: "Brain Power Mode",
    desc: "Challenge yourself with advanced-level quizzes.",
    btn: "Start Now",
  },
];

export default function AutoCardSlider() {
  return (
    <div className="w-full px-4 py-8">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {cardData.map((card, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white shadow-xl rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 flex flex-col h-full">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex flex-col justify-between flex-grow">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{card.desc}</p>
                <button className="mt-auto bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition">
                  {card.btn}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
