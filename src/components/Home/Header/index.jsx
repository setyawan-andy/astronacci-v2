import React, { useState, useEffect } from "react";
import { Popover } from "@headlessui/react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { BsFillBellFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";

const Header = ({ setSearch }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/auth");
    setUser(null);
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <div className="py-3 flex justify-between border-b border-gray-200 items-center">
      <div className="text-xl font-semibold">ASTRONACCI</div>
      <div className="flex gap-6 justify-center items-center">
        <div className="relative ml-12 md:ml-0">
          <input
            type="text"
            className="border w-64 border-gray-200 rounded-md py-2 px-4 focus:outline-gray-300 text-xs text-gray-700"
            placeholder="Search by title or content"
            onChange={(e) => setSearch(e.target.value)}
          />
          <BiSearch
            className="absolute top-2 right-2 text-gray-400"
            size={20}
          />
        </div>
        <div>
          <BsFillBellFill
            size={18}
            className="text-gray-300 hover:text-gray-400 cursor-pointer md:block hidden"
          />
        </div>
        <div>
          <FaEnvelope
            size={18}
            className="text-gray-300 hover:text-gray-400 cursor-pointer md:block hidden"
          />
        </div>
        <div className="hidden md:block">
          <div>
            {user ? (
              <img
                src={user.picture || "/assets/images/avatar-2.jpg"}
                width={32}
                height={32}
                className="rounded-full object-cover"
                alt={user.name || user.result.name}
              />
            ) : (
              <img
                src="/assets/images/avatar-2.jpg"
                width={32}
                height={32}
                className="rounded-full object-cover"
                alt="avatar"
              />
            )}
          </div>
        </div>

        <Popover className="relative">
          <Popover.Button className="outline-none">
            <div className="md:flex gap-1 cursor-pointer hidden">
              {user ? (
                <h3 className="text-xs text-gray-700 font-medium">
                  {user.name || user.result.name}
                </h3>
              ) : (
                <h3 className="text-xs text-gray-700 font-medium">
                  Andy Setyawan
                </h3>
              )}
              <span>
                <MdOutlineKeyboardArrowDown
                  size={18}
                  className="text-gray-700"
                />
              </span>
            </div>
          </Popover.Button>
          <Popover.Panel className="absolute z-10 top-8 left-2">
            <div
              onClick={logout}
              className="border border-gray-200 bg-white py-2 px-4 text-xs text-gray-700 flex gap-2 items-center rounded-lg cursor-pointer hover:bg-black hover:text-white"
            >
              <FiLogOut size={16} />
              <div>Logout</div>
            </div>
          </Popover.Panel>
        </Popover>
      </div>
    </div>
  );
};

export default Header;
