import React from "react";
import { Search, ShoppingBag, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navigation() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="bg-[#fefeff] border-b border-b-neutral-200">
      <header>
        <nav className="flex items-center justify-between p-6">
          <div>
            <div className="block lg:hidden ">
              <Menu size={26} />
            </div>

            <ul className="hidden lg:flex items-center justify-between gap-8">
              <Link>SHOP</Link>
              <Link>CATEGORY</Link>
              <Link>REVIEWS</Link>
              <Link>CONTACT</Link>
            </ul>
          </div>
          <div>
            <Link className="text-xl font-semibold">CLOLA</Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden lg:block relative w-80 max-w-md">
              <input
                type="text"
                placeholder="Search..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-full p-2 ps-4 text-gray-700 bg-white border-2 border-gray-400 rounded-full"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors p-2">
                <Search size={20} />
              </button>
            </div>

            <div className="relative inline-block">
              <ShoppingBag size={26} />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navigation;
