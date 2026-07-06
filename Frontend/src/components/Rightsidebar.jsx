import React, { useContext, useEffect, useState } from "react";
import assets, { imagesDummyData } from "../assets/assets";
import { ChatContext } from "../../context/ChatContext";
import { AuthContext } from "../../context/AuthContext";

const Rightsidebar = () => {
  const { selectedUser, messages } = useContext(ChatContext);
  const { logout, onlineUsers } = useContext(AuthContext);
  const [msgImages, setMsgImages] = useState([]);

  // get all images from message and set them to state

  useEffect(() => {
    setMsgImages(messages.filter((msg) => msg.image).map((msg) => msg.image));
  }, [messages]);

  return (
    selectedUser && (
      <div
        className={`bg-white/5 backdrop-blur-2xl text-white w-full relative overflow-y-auto border-l border-white/10 ${
          selectedUser ? "max-md:hidden" : ""
        }`}
      >
        <div className="pt-12 flex flex-col items-center text-center px-6">
          <img
            src={selectedUser?.profilePic || assets.avatar_icon}
            alt=""
            className="w-28
    h-28
    object-cover
    rounded-full
    border-4
    border-violet-500/30
    shadow-[0_0_30px_rgba(139,92,246,0.4)]"
          />
          <h1
            className="mt-4
    text-2xl
    font-semibold
    flex
    items-center
    gap-2"
          >
            {onlineUsers.includes(selectedUser._id) && (
              <p className="w-2 h-2 rounded-full bg-green-500"></p>
            )}
            {selectedUser.fullName}
          </h1>
          <p className="text-gray-400 text-sm mt-2 max-w-xs">
            {selectedUser.bio}
          </p>
        </div>

        <hr className="border-[#ffffff50] my-4" />

        <div className="px-6">
          <h2 className="font-semibold text-lg mb-4">Media</h2>
          <div
            className="max-h-[260px]
    overflow-y-auto
    grid
    grid-cols-2
    gap-3"
          >
            {msgImages.map((url, index) => (
              <div
                key={index}
                onClick={() => window.open(url)}
                className="cursor-pointer rounded"
              >
                <img
                  src={url}
                  alt=""
                  className="h-28
    w-full
    object-cover
    rounded-xl
    hover:scale-105
    transition-all
    duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/*---  log out button--------*/}

        <button
          onClick={() => logout()}
          className="
    absolute bottom-5 left-1/2 -translate-x-1/2
    bg-gradient-to-r from-cyan-500 to-violet-600
    text-white
    px-10 py-3
    rounded-full
    font-medium
    shadow-lg shadow-violet-500/30
    hover:shadow-violet-500/50
    hover:scale-105
    active:scale-95
    transition-all duration-300
  "
        >
          Logout
        </button>
      </div>
    )
  );
};

export default Rightsidebar;
