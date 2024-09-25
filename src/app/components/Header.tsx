"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-wrap sm:justify-center sm:flex-nowrap z-50 w-full text-lg py-3 sm:py-0">
      <nav className="relative max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-center sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link className="w-full flex-none text-4xl text-white font-semibold p-6" href="/" aria-label="Brand">
            To-Do-List Generator
          </Link>
        </div>
      </nav>
      
    </header>
  );
}

