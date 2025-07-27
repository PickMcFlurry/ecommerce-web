import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Newsletter = () => {
  useGSAP(() => {
    gsap.from(".texts", {
      opacity: 0,
      y: 100,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".texts",
        start: "top 50%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(".form", {
      opacity: 0,
      y: 100,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".form",
        start: "top 50%",
        toggleActions: "play none none reverse",
      },
    });
  });
  return (
    <>
      <section className="min-width m-auto py-24 bg-pale-green rounded-[8px] mb-24">
        <div className="flex justify-center items-center gap-[14rem]">
          <div className="flex flex-col justify-center">
            <h1 className="text-[30px] font-medium text-white texts">
              {" "}
              Stay connected with us
            </h1>
            <p className="text-white text-[20px] texts">
              {" "}
              Far far away, behind the word of mountains
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <form action="" className="flex gap-4 ">
              <input
                type="email"
                placeholder="Enter your Email"
                name="email"
                id="email"
                className="w-[420px] h-[47px] rounded-[8px] pl-4 form"
              />
              <button className="bg-white text-black px-10 py-[12px] rounded-[8px] form">
                {" "}
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
