import React from "react";
import { logoimg } from "../utils/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  useGSAP(() => {
    gsap.from(".box", {
      y: 100,
      duration: 1,
      stagger: 0.1,
      opacity: 0,
    });
  });
  return (
    <>
      <div className="flex-center">
        <div className="w-[50%] h-max flex-center items-center">
          <div className="flex flex-col">
            <Link to="/" className="text-[15px] box flex">
              <ArrowLeft />
              &nbsp;Back to home
            </Link>
            <div className="my-6">
              <h1 className="text-[39px] font-bold box ">Welcome Back!</h1>
              <p className="text-custom-gray text-[16px] box">
                Happy to see you Back! Please sign in to your Account!
              </p>
            </div>
            <div className="box">
              <form action="" method="">
                <h3 className="input-title">Email address</h3>
                <input
                  type="email"
                  name="email"
                  id="emailid"
                  placeholder="Enter your email"
                  className="input-border placeholder:text-[15px] placeholder:text-[#989B9A] placeholder:font-light focus:outline-none focus:ring-0"
                />
                <h3 className="input-title"> Password</h3>
                <input
                  type="text"
                  name="password"
                  id="#"
                  placeholder="Enter your password"
                  className="input-border placeholder:text-[15px] placeholder:text-[#989B9A] placeholder:font-light focus:outline-none focus:ring-0"
                />
                <div className="flex justify-between mb-[18px]">
                  <div className="flex items-center">
                    <input type="checkbox" name="Remember Me" id="" />
                    <h3 className="text-[14px] font-medium ml-2">
                      Remember me
                    </h3>
                  </div>
                  <div>
                    <h3 className="text-[14px] font-medium ml-2 text-custom-pink hover:underline cursor-pointer">
                      Forgot-password?
                    </h3>
                  </div>
                </div>
                <button className="s-btn">Sign in</button>
              </form>
            </div>
            <h3 className="text-[15px] font-medium text-center my-7 box">
              Don't have an account?
              <span>
                {" "}
                <a className="text-[#0004FF] underline hover:cursor-pointer">
                  Signup here
                </a>
              </span>
            </h3>
          </div>
        </div>
        <div className="w-[50%] h-max background-img flex justify-center items-center">
          <div className="flex flex-col items-center pb-24 box">
            <img src={logoimg} alt="logoimg" width={200} height={200} />
            <h1 className="text-[30px] font-bold">Join Us Today!</h1>
            <p className=" text-center text-[18px] font-medium">
              Discover amazing fashion pieces and connect <br />
              with style enthusiasts worldwide
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
