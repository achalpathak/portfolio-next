'use client'
import Link from 'next/link';

import { usePathname } from 'next/navigation'
import {useState, useEffect} from "react";

function Header() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const spinners = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
      if (count === spinners.length - 1) {
        setCount(0); //reset spinner
      }
      document.title = `Achal Pathak ${spinners[count]}`;
    }, 100);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [count]);

  const pathname = usePathname()
  const [hamMenu, sethamMenu] = useState(false);

  return (
    <>
    <section className="flex justify-between  p-4 items-center border-b border-neutral-600 content-center">
      <div className="hover:-rotate-6 hover:scale-90 duration-300 text-xl font-mono font-semibold tracking-wide content-center">
        <Link href="/">
          <span className="text-neutral-400">://</span>
          <span className="">AP</span>
        </Link>
      </div>
      <button className={`sm:hidden ${hamMenu ? "text-purple-500" : ""}`} onClick={() => sethamMenu(!hamMenu)}>
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="1.5em"
          width="1.5em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>




      {/* BIGGER MENU */}
      <div className="hidden sm:flex px-2 gap-x-2 text-xl">
        <Link
          href="/"
          className={`px-2 py-1 border-2 rounded transition-colors duration-300 hover:text-blue-500 ${pathname === '/' ? 'border-purple-500 bg-purple-900' : 'border-transparent'}`}
        >
          &lt;/home&gt;
        </Link>

        <Link
          href="/experience"
          className={`px-2 py-1 border-2 rounded transition-colors duration-300 hover:text-blue-500 ${pathname === '/experience' ? 'border-purple-500 bg-purple-900' : 'border-transparent'}`}
        >
          &lt;/experience&gt;
        </Link>
        <Link
          href="/projects"
          className={`px-2 py-1 border-2 rounded transition-colors duration-300 hover:text-blue-500 ${pathname === '/projects' ? 'border-purple-500 bg-purple-900' : 'border-transparent'}`}
        >
          &lt;/projects&gt;
        </Link>
        <Link
          href="/blogs"
          className={`px-2 py-1 border-2 rounded transition-colors duration-300 hover:text-blue-500 ${pathname === '/blogs' ? 'border-purple-500 bg-purple-900' : 'border-transparent'}`}
        >
          &lt;/blogs&gt;
        </Link>
      </div>
    </section>


      {/* SMALL MENU */}
      <div className={`${hamMenu ? "":"hidden"} sm:hidden px-2 gap-x-2 text-xl border-b border-neutral-600`}>
        <Link
          href="/"
          onClick={() => sethamMenu(!hamMenu)}
          className={`5my-2 w-full block px-2 py-1 border-2 rounded transition-colors duration-300 hover:text-blue-500 ${pathname === '/' ? 'border-purple-500 bg-purple-900' : 'border-transparent'}`}
        >
          &lt;/home&gt;
        </Link>

        <Link
          href="/experience"
          onClick={() => sethamMenu(!hamMenu)}
          className={`5my-2 w-full block px-2 py-1 border-2 rounded transition-colors duration-300 hover:text-blue-500 ${pathname === '/experience' ? 'border-purple-500 bg-purple-900' : 'border-transparent'}`}
        >
          &lt;/experience&gt;
        </Link>
        <Link
          href="/projects"
          onClick={() => sethamMenu(!hamMenu)}
          className={`5my-2 w-full block px-2 py-1 border-2 rounded transition-colors duration-300 hover:text-blue-500 ${pathname === '/projects' ? 'border-purple-500 bg-purple-900' : 'border-transparent'}`}
        >
          &lt;/projects&gt;
        </Link>
        <Link
          href="/blogs"
          onClick={() => sethamMenu(!hamMenu)}
          className={`5my-2 w-full block px-2 py-1 border-2 rounded transition-colors duration-300 hover:text-blue-500 ${pathname === '/blogs' ? 'border-purple-500 bg-purple-900' : 'border-transparent'}`}
        >
          &lt;/blogs&gt;
        </Link>
      </div>
    </>

  );
}

export default Header;
