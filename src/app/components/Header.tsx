// "use client";
// import Link from "next/link";

// export default function Header() {
//   return (
//     <header className="flex flex-wrap sm:justify-center sm:flex-nowrap z-50 w-full text-lg py-3 sm:py-0">
//       <nav className="relative max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-center sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between">
//           <Link className="w-full flex-none text-4xl text-white font-semibold p-6" href="/" aria-label="Brand">
//             To-Do-List Generator
//           </Link>
//         </div>
//       </nav>
      
//     </header>
//   );
// }

"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const setGradient = (gradient: string) => {
    document.documentElement.style.setProperty('--background-gradient', gradient);
    setIsOpen(false);
  };

  return (
    <header className="flex flex-wrap sm:justify-center sm:flex-nowrap z-50 w-full text-lg py-3 sm:py-0">
      <nav className="relative max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex-1"/> {/* Left spacer */}
        
        <div className="flex items-center justify-center flex-grow">
          <Link 
            className="text-4xl text-white font-semibold p-6" 
            href="/" 
            aria-label="Brand"
          >
            To-Do-List Generator
          </Link>
        </div>

        <div className="flex items-center justify-end flex-1 relative">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-white hover:bg-white/20 transition-colors"
          >
            Theme
          </button>

          {isOpen && (
            <div className="absolute top-full right-0 mt-2 p-3 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg z-50">
              <div className="grid grid-cols-3 gap-2">
                <button 
                  onClick={() => setGradient(`var(--circle-one)`)}
                  className="gradient-box one"
                  aria-label="Gradient 1"
                />
                <button 
                  onClick={() => setGradient(`var(--circle-two)`)}
                  className="gradient-box two"
                  aria-label="Gradient 2"
                />
                <button 
                  onClick={() => setGradient(`var(--circle-three)`)}
                  className="gradient-box three"
                  aria-label="Gradient 3"
                />
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}