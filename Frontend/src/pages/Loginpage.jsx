import React, { useContext, useState } from "react";
import assets from "../assets/assets";
import { AuthContext } from "../../context/AuthContext";

const Loginpage = () => {
  const [currState, setCurrState] = useState("Sign up");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [isDataSubmitted, setIsDataSubmitted] = useState(false);

  const { login } = useContext(AuthContext);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (currState === "Sign up" && !isDataSubmitted) {
      setIsDataSubmitted(true);
      return;
    }

    login(currState === "Sign up" ? "signup" : "login", {
      fullName,
      email,
      password,
      bio,
    });
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center 
        justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl"
    >
      {/* -------- left --------- */}


      {/*<img src={assets.logo_big} alt="" className="w-[min(30vw,250px)]" />


      <h1 className="text-5xl font-bold text-white mt-8">
        Welcome to WeChat
      </h1>

      <p className="text-gray-400 mt-4 max-w-md">
        Connect. Chat. Share. Experience real-time messaging
        with a modern and secure platform.
      </p>*/}

  

      <div className="hidden lg:flex flex-col items-center text-center">
      <img
        src={assets.logo_big}
        alt=""
        className="w-[min(30vw,250px)]"
      />

      <h1 className="text-5xl font-bold text-white mt-8">
        Welcome to WeChat
      </h1>

      <p className="text-gray-400 mt-4 max-w-md">
        Connect. Chat. Share. Experience real-time messaging
        with a modern and secure platform.
      </p>
    </div>





      {/* -------- right -------- */}

      {/*<form
        onSubmit={onSubmitHandler}
        className="border-2 bg-white/8 text-white border-gray-500 p-6 flex 
            flex-col gap-6 rounded-lg shadow-lg"
      >*/}
      <form
        onSubmit={onSubmitHandler}
        className="
    w-full max-w-md
backdrop-blur-2xl
bg-white/5
border border-white/10
rounded-3xl
p-8
flex flex-col gap-6
text-white
shadow-[0_0_40px_rgba(139,92,246,0.25)]
  "
      >
        <h2 className="font-medium text-2xl flex justify-between items-center">
          {currState}
          {isDataSubmitted && (
            <img
              onClick={() => setIsDataSubmitted(false)}
              src={assets.arrow_icon}
              alt=""
              className="w-5 cursor-pointer"
            />
          )}
        </h2>

        {currState === "Sign up" && !isDataSubmitted && (
          <input
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
            type="text"
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
            placeholder="Full Name"
            required
          />
        )}

        {!isDataSubmitted && (
          <>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email Address"
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
transition-all"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
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
transition-all"
            />
          </>
        )}

        {currState === "Sign up" && isDataSubmitted && (
          <textarea
            onChange={(e) => setBio(e.target.value)}
            value={bio}
            rows={4}
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
            placeholder="provide a short bio..."
            required
          ></textarea>
        )}

    {/* old submit button  */}
      {/*  <button
          type="submit"
          className="py-3 bg-gradient-to-r from-purple-400
to-violet-600 text-white rounded-md cursor-pointer"
        >
          {currState === "Sign up" ? "Create Account" : "Login Now"}
        </button>
      */}
      <button
  type="submit"
  className="
    py-3
    rounded-xl
    font-semibold
    bg-gradient-to-r
    from-cyan-500
    via-violet-500
    to-purple-600
    hover:scale-[1.02]
    active:scale-95
    transition-all
    duration-300
    shadow-lg
    shadow-violet-500/30
  "
>
  {currState === "Sign up" ? "Continue" : "Login"}
</button>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <input type="checkbox" />
          <p>Agree to the terms of use & privacy policy.</p>
        </div>

        <div className="flex flex-col gap-2">
          {currState === "Sign up" ? (
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <span
                onClick={() => {
                  setCurrState("Login");
                  setIsDataSubmitted(false);
                }}
                className="font-medium text-violet-500 cursor-pointer hover:text-violet-400 transition-colors duration-300"
              >
                Login here
              </span>
            </p>
          ) : (
            <p className="text-sm text-gray-600">
              Create an account?{" "}
              <span
                onClick={() => setCurrState("Sign up")}
                className="font-medium text-violet-500 cursor-pointer hover:text-violet-400 transition-colors duration-300"
              >
                Click here
              </span>
            </p>
          )}
        </div>
      </form>

     

    </div>
  );
};

export default Loginpage;
