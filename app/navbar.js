'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Download } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router=useRouter();

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Left: Logo */}
          <div 
           onClick={()=> router.push("/")}
           className="flex-shrink-0 text-purple-800 font-bold text-xl cursor-pointer">
            {/* Brainbucks */}
            <img src="/logo23.png" alt="" className='w-50'/>
          </div>

          {/* Center: Nav links (hidden on mobile) */}
          <div className="hidden md:flex space-x-6 text-sm">
            <a href="/" className="text-black hover:text-purple-700">Home</a>
            <a href="/aboutus" className="text-black hover:text-purple-700">About Us</a>
            <a href="/blogsbycategory" className="text-black hover:text-purple-700">Blogs</a>
            <a href="/home" className="text-black hover:text-purple-700">How to Play</a>
            <a href="/updates" className="text-black hover:text-purple-700">Updates</a>
            <a href="/team" className="text-black hover:text-purple-700">Team</a>
          </div>

          {/* Right: Button (hidden on mobile) */}
          <div className="hidden md:block">
            <a
            onClick={() => window.open(
              'https://play.google.com/store/apps/details?id=com.brainbucks.android',
      '_blank'
            )}
              href="#"
              className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-full flex justify-center items-center gap-2"
            >
              Download Now <Download />
            </a>
          </div>

          {/* Mobile: Menu toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 shadow-md space-y-2">
          <a href="/" className="block text-black hover:text-purple-700">Home</a>
          <a href="/aboutus" className="block text-black hover:text-purple-700">About Us</a>
          <a href="/blogsbycategory" className="block text-black hover:text-purple-700">Blogs</a>
          <a href="/home" className="block text-black hover:text-purple-700">How to Play</a>
          <a href="/updates" className="block text-black hover:text-purple-700">Updates</a>
          <a href="/team" className="block text-black hover:text-purple-700">Team</a>
          <a
            onClick={() => window.open(
              'https://play.google.com/store/apps/details?id=com.brainbucks.android',
      '_blank'
            )}
            href="#"
            className="flex justify-center items-center gap-3 text-center bg-purple-700 hover:bg-purple-800 text-white py-2 rounded mt-2"
          >
            Download Now <Download />
          </a>
        </div>
      )}
    </nav>
  );
}
