
import React from "react";
import { Link } from "react-router-dom";
import { BarChart3, Users , Settings} from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-600  p-6 hidden md:block ">
      <img src="./public/logo.png" alt="" />
      <ul className="space-y-4 pt-10 flex flex-col text-cyan-100">
        <Link to="/">
          <li className="flex items-center gap-2 cursor-pointer hover:text-gray-300">
            <BarChart3 size={18} /> Dashboard
          </li>
        </Link>
        <Link to="/Students">
          <li className="flex items-center gap-2 cursor-pointer hover:text-gray-300">
            <Users size={20} /> Students
          </li>
        </Link>
        <Link to="/Setting">
          <li className="flex items-center gap-2 cursor-pointer hover:text-gray-300">
            <Settings size={18} /> Settings
          </li>
        </Link>
      </ul>
    </aside>
  );
};

export default Sidebar;
