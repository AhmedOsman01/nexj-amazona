import { useState } from "react";
import { ShoppingCart, Search } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <nav className="bg-gray-900 text-white p-3 flex items-center justify-between">
            {/* Left Section */}
            <div className="flex items-center space-x-4">
                <Image src="/amazon-logo.png" alt="Amazon" width={100} height={30} priority />
                <div className="text-sm flex items-center space-x-1">
                    <span className="text-gray-400">Deliver to</span>
                    <span className="font-bold">Egypt</span>
                </div>
            </div>

            {/* Search Bar */}
            <div className="flex flex-grow mx-4 max-w-2xl border border-gray-600 rounded-lg overflow-hidden">
                <select className="bg-gray-800 px-3 py-2 text-gray-300">
                    <option>All</option>
                </select>
                <input
                    type="text"
                    className="flex-grow px-3 py-2 text-black"
                    placeholder="Search Amazon"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="bg-yellow-500 p-2">
                    <Search size={20} color="black" />
                </button>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-6 text-sm">
                <div>
                    <p className="text-gray-400">Hello, sign in</p>
                    <p className="font-bold">Account & Lists</p>
                </div>
                <div>
                    <p className="font-bold">Returns & Orders</p>
                </div>
                <div className="relative">
                    <ShoppingCart size={24} />
                    <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold px-2 rounded-full">0</span>
                </div>
            </div>
        </nav>
    );
}