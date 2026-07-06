import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import assets from "../assets/assets";
import { AuthContext } from "../../context/AuthContext";

const Profilepage = () => {
  const { authUser, updateProfile } = useContext(AuthContext);

  const [selectedImg, setSelectedImg] = useState(null);
  const navigate = useNavigate();
  const [name, setName] = useState(authUser.fullName);
  const [bio, setBio] = useState(authUser.bio);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedImg) {
      await updateProfile({ fullName: name, bio });
      navigate("/");
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(selectedImg);
    reader.onload = async () => {
      const base64Image = reader.result;
      await updateProfile({ profilePic: base64Image, fullName: name, bio });
      navigate("/");
    };

    navigate("/");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat flex items-center
justify-center"
    >
      <div
        className="w-5/6 max-w-2xl backdrop-blur-2xl text-gray-300 border-2 border-gray-600 flex items-center justify-between max-sm:flex-col-reverse rounded-lg"
      >
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 p-10 flex-1"
        >
          <h3 className="text-3xl font-bold text-white">Profile details</h3>
          <label
            htmlFor="avatar"
            className="flex items-center gap-4
bg-white/5
border border-white/10
rounded-2xl
p-3
cursor-pointer
hover:bg-white/10
transition-all"
          >
            <input
              onChange={(e) => setSelectedImg(e.target.files[0])}
              type="file"
              id="avatar"
              accept=".png, .jpg, .jpeg"
              hidden
            />
            <img
              src={
                selectedImg
                  ? URL.createObjectURL(selectedImg)
                  : assets.avatar_icon
              }
              alt=""
              className={`w-12 h-12 ${selectedImg && "rounded-full"}`}
            />
            Upload Profile Image
          </label>

          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            required
            placeholder="Your name"
            className="bg-white/5
border border-white/10
rounded-xl
px-4 py-3
text-white
placeholder-gray-400
focus:outline-none
focus:border-violet-500
focus:ring-2
focus:ring-violet-500/30
transition-all"
          />
          <textarea
            onChange={(e) => setBio(e.target.value)}
            value={bio}
            placeholder="Write profile bio"
            required
            className="bg-white/5
border border-white/10
rounded-xl
px-4 py-3
text-white
placeholder-gray-400
focus:outline-none
focus:border-violet-500
focus:ring-2
focus:ring-violet-500/30
transition-all
resize-none"
            rows={4}
          ></textarea>

          <button
            type="submit"
            className="
    w-full
    py-3
    rounded-full
    bg-gradient-to-r
    from-cyan-500
    to-violet-600
    text-white
    font-medium
    shadow-lg
    shadow-violet-500/30
    hover:scale-[1.02]
    hover:shadow-violet-500/50
    active:scale-95
    transition-all
    duration-300
  "
          >
            Save Changes
          </button>
        </form>

        <img
          className={`max-w-44 asspect-square rounded-full mx-10 mx-sm:mt-10 ${selectedImg && "rounded-full"}`}
          src={authUser?.profilePic || assets.logo_icon}
          alt=""
        />
      </div>
    </div>
  );
};

export default Profilepage;
