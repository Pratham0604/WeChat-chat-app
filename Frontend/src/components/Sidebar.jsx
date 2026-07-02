{/*
import React, { useContext, useEffect, useState } from "react";
import assets from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";

const Sidebar = ({}) => {
  const {
    getUsers,
    users,
    selectedUser,
    setSelectedUser,
    unseenMessages,
    setUnseenMessages,
  } = useContext(ChatContext);

  const { logout, onlineUsers } = useContext(AuthContext);

  const [input, setInput] = useState(false);

  const navigate = useNavigate();

  const filteredUsers = input
    ? users.filter((user) =>
        user.fullName.toLowerCase().includes(input.toLowerCase()),
      )
    : users;

  useEffect(() => {
    getUsers();
  }, [onlineUsers]);

  return (
    <div
      className={`
bg-white/5
backdrop-blur-2xl
h-full
p-5
overflow-y-auto
text-white
border-r
border-white/10
${selectedUser ? "max-md:hidden" : ""}
`}
    >
      <div className="pb-5">
        <div className="flex justify-between items-center">
          <img src={assets.logo} alt="logo" className="max-w-40" />

          <div className="relative py-2 group">
            <img
              src={assets.menu_icon}
              alt="Menu"
              className="max-h-5 cursor-pointer"
            />

            <div className="absolute top-full right-0 z-20 w-32 p-5 rounded-md bg-[#282142] border border-gray-600 text-gray-100 hidden group-hover:block">
              <p
                onClick={() => navigate("/profile")}
                className="cursor-pointer text-sm"
              >
                Edit Profile
              </p>
              <hr className="my-2 border-t border-gray-500" />
              <p onClick={() => logout()} className="cursor-pointer text-sm">
                LogOut
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white/5
  border
  border-white/10
  rounded-2xl
  flex items-center
  gap-3
  py-3
  px-4
  mt-6">
          <img src={assets.search_icon} alt="Search" className="w-3" />

          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="bg-transparent
outline-none
text-sm
text-white
placeholder-gray-400
flex-1"
            placeholder="Search User..."
          />
        </div>
      </div>

      <div className="flex flex-col">
        {filteredUsers.map((user, index) => (
          <div
            key={index}
            onClick={() => {setSelectedUser(user); setUnseenMessages(prev=>({...prev,[user._id]:0}))}}
            className={`relative flex items-center gap-2 p-2 pl-4 rounded cursor-pointer max-sm:text-sm ${
              selectedUser?._id === user._id ? "bg-[#282142]/50" : ""
            }`}
          >
            <img
              src={user?.profilePic || assets.avatar_icon}
              alt=""
              className="w-[35px] aspect-square rounded-full"
            />

            <div className="flex flex-col leading-5">
              <p>{user.fullName}</p>

              {onlineUsers.includes(user._id) ? (
                <span className="text-green-400 text-xs">Online</span>
              ) : (
                <span className="text-neutral-400 text-xs">Offline</span>
              )}
            </div>

            {unseenMessages[user._id] > 0 && (
              <p
                className="absolute top-4
right-4 text-xs h-5 w-5 flex justify-center items-center
rounded-full bg-violet-500/50"
              >
                {unseenMessages[user._id]}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

*/}


import React, { useContext, useEffect, useState } from "react";
import assets from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";

const Sidebar = () => {
  const {
    getUsers,
    users,
    selectedUser,
    setSelectedUser,
    unseenMessages,
    setUnseenMessages,
  } = useContext(ChatContext);

  const { logout, onlineUsers } = useContext(AuthContext);

  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const filteredUsers = input
    ? users.filter((user) =>
        user.fullName.toLowerCase().includes(input.toLowerCase())
      )
    : users;

  useEffect(() => {
    getUsers();
  }, [onlineUsers]);

  return (
    <div
      className={`
        bg-white/5
        backdrop-blur-2xl
        h-full
        p-5
        overflow-y-auto
        text-white
        border-r
        border-white/10
        ${selectedUser ? "max-md:hidden" : ""}
      `}
    >
      {/* Header */}
      <div className="pb-5">
        <div className="flex justify-between items-center">
  <img
    src={assets.logo}
    alt="logo"
    className="max-w-40 hover:scale-105 transition-all duration-300"
  />

  <div className="relative group">
    <button
      className="
        p-2
        rounded-xl
        hover:bg-white/10
        transition-all
        duration-300
      "
    >
      <img
        src={assets.menu_icon}
        alt="Menu"
        className="w-5 h-5"
      />
    </button>

    <div
      className="
        absolute
        top-full
        right-0
        mt-2
        w-36
        p-3
        rounded-xl
        bg-[#1E1B35]
        border
        border-white/10
        shadow-xl
        hidden
        group-hover:block
        z-20
      "
    >
      <p
        onClick={() => navigate("/profile")}
        className="
          cursor-pointer
          text-sm
          hover:text-violet-400
          transition-colors
        "
      >
        Edit Profile
      </p>

      <hr className="my-2 border-white/10" />

      <p
        onClick={logout}
        className="
          cursor-pointer
          text-sm
          hover:text-red-400
          transition-colors
        "
      >
        Logout
      </p>
    </div>
  </div>
</div>

        {/* Search */}
        <div
          className="
            bg-white/5
            border
            border-white/10
            rounded-2xl
            flex
            items-center
            gap-3
            py-3
            px-4
            mt-6
          "
        >
          <img src={assets.search_icon} alt="Search" className="w-4" />

          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Search User..."
            className="
              bg-transparent
              outline-none
              text-sm
              text-white
              placeholder-gray-400
              flex-1
            "
          />
        </div>
      </div>

      {/* Users */}
      <div className="flex flex-col gap-2">
        {filteredUsers.map((user) => (
          <div
            key={user._id}
            onClick={() => {
              setSelectedUser(user);
              setUnseenMessages((prev) => ({
                ...prev,
                [user._id]: 0,
              }));
            }}
            className={`
              relative
              flex
              items-center
              gap-3
              p-3
              rounded-2xl
              cursor-pointer
              transition-all
              duration-300
              hover:bg-white/10
              hover:scale-[1.02]
              ${
                selectedUser?._id === user._id
                  ? "bg-violet-500/20 border border-violet-500/30"
                  : ""
              }
            `}
          >
            {/* Avatar */}
            <div className="relative">
              <img
                src={user?.profilePic || assets.avatar_icon}
                alt=""
                className="
                  w-12
                  h-12
                  object-cover
                  rounded-full
                  border
                  border-white/10
                "
              />

              {onlineUsers.includes(user._id) && (
                <span
                  className="
                    absolute
                    bottom-0
                    right-0
                    w-3
                    h-3
                    rounded-full
                    bg-green-500
                    border-2
                    border-[#070B1A]
                  "
                />
              )}
            </div>

            {/* User Info */}
            <div className="flex flex-col">
              <p className="font-medium">{user.fullName}</p>

              <span
                className={`text-xs ${
                  onlineUsers.includes(user._id)
                    ? "text-green-400"
                    : "text-gray-400"
                }`}
              >
                {onlineUsers.includes(user._id)
                  ? "Online"
                  : "Offline"}
              </span>
            </div>

            {/* Unread Messages */}
            {unseenMessages[user._id] > 0 && (
              <div
                className="
                  absolute
                  right-3
                  top-1/2
                  -translate-y-1/2
                  h-6
                  min-w-6
                  px-2
                  flex
                  items-center
                  justify-center
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-500
                  to-violet-600
                  text-white
                  text-xs
                  font-semibold
                  shadow-lg
                "
              >
                {unseenMessages[user._id]}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

