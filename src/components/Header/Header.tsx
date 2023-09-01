import React, { JSX } from "react";
import {
  UserCircleIcon,
  Bars3BottomLeftIcon,
} from "@heroicons/react/24/solid";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Header = () => {
  return (
    <div className="shadow-sm p-4 grid grid-flow-col">
      <div className="col-span-1 flex gap-4 items-center">
        <Bars3BottomLeftIcon className="h-8 cursor-pointer" />
        <h1 className="text-2xl font-semibold text-gray-700 cursor-pointer">
          Code
          <span className="text-blue-500">
            <span className="text-3xl  font-bold">Z</span>enith
          </span>
        </h1>
      </div>
      <div className="col-span-10 flex items-center justify-center">
        <input
          type="search"
          className="border border-gray-300 focus:border-blue-500 outline-none rounded-l-full h-8 px-4 w-5/12 text-gray-600"
          placeholder="Search"
        />
        <button className="border-gray-300 border rounded-r-full px-4 h-8 bg-gray-100">
          <SearchOutlinedIcon />
        </button>
      </div>
      <div className="col-span-1 flex items-center justify-center gap-6">
        <UserCircleIcon className="w-8 h-8" />
        <button className="h-8 px-5 bg-blue-300 drop-shadow-sm rounded-md">
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;
