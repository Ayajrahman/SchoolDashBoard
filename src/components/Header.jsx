
import React from "react";
import { UserCircle } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <div>
        <h1 className="text-xl font-bold text-blue-600">Student Performance Dashboard</h1>
      </div>
      <div className="flex gap-3">
        <a href="http://">Login</a>
        <a href="http://">Logup</a>
        <UserCircle className="w-8 h-8 text-gray-600 cursor-pointer" />
      </div>
    </header>
  );
};
export default Header;
