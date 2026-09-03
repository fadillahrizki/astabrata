import { ChevronDown, UserRound } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Dropdown({
  label = "Options",
  items = [],
  isUser = false,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle the dropdown visibility
  const toggleDropdown = () => setIsOpen(!isOpen);

  // Close the dropdown if a click occurs outside of the element
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div
        className="flex items-center gap-2 pl-2 border-l border-slate-200 cursor-pointer"
        onClick={toggleDropdown}
      >
        {isUser && (
          <span className="w-8 h-8 rounded-full bg-[#062b67] text-white flex items-center justify-center">
            <UserRound className="w-5 h-5" />
          </span>
        )}
        <span className="hidden md:inline">{label}</span>
        <ChevronDown />
      </div>

      {/* Dropdown Menu List */}
      {isOpen && (
        <div
          className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-all duration-100 ease-out scale-100 opacity-100"
          role="menu"
        >
          <div className="py-1" role="none">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  if (item.onClick) item.onClick();
                  setIsOpen(false); // Auto-close menu on item selection
                }}
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                role="menuitem"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
