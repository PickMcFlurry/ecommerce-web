import React from "react";
import { services1, services2, services3 } from "../utils/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useGSAP(() => {
    gsap.from("#txt", {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: "#img1",
        start: "top 45%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.from("#img1", {
      opacity: 0,
      x: -400,
      duration: 1,
      scrollTrigger: {
        trigger: "#img1",
        start: "top 5%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.from("#txt1", {
      opacity: 0,
      x: 1000,
      duration: 1,
      scrollTrigger: {
        trigger: "#txt1",
        start: "top 32%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.from("#img2", {
      opacity: 0,
      x: 1200,
      duration: 1,
      scrollTrigger: {
        trigger: "#img2",
        start: "top 5%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.from("#txt2", {
      opacity: 0,
      x: -400,
      duration: 1,
      scrollTrigger: {
        trigger: "#txt2",
        start: "top 32%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.from("#img3", {
      opacity: 0,
      x: -400,
      duration: 1,
      scrollTrigger: {
        trigger: "#img3",
        start: "top 5%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.from("#txt3", {
      opacity: 0,
      x: 1100,
      duration: 1,
      scrollTrigger: {
        trigger: "#txt3",
        start: "top 32%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <>
      <section className=" bg-pale-blue w-[1300px] h-[290vh] m-auto mt-24 rounded-[8px] py-12 md:py-24 lg:py-[5rem]  overflow-hidden ">
        <div>
          <div className="flex justify-center">
            <h1 id="txt" className="h1-style">
              Our Services
            </h1>
          </div>
        </div>
        <div className="p-text">
          <div className="relative">
            <div id="img1" className="half-hidden-left">
              <img src={services1} alt="" width={602} height={768} />
            </div>
            <div id="txt1" className="p-right txt-1">
              <p>
                With our secure payment no need to worry about the payment
                issues
              </p>
            </div>
          </div>
          <div className="relative">
            <div id="img2" className="half-hidden-right ">
              <img src={services2} alt="" width={602} height={768} />
            </div>
            <div id="txt2" className="p-left ">
              <p>
                Our 24/7 customer support system is here to answer all your
                queries.
              </p>
            </div>
          </div>
          <div className="relative">
            <div id="img3" className="half-hidden-left-down ">
              <img src={services3} alt="" width={602} height={768} />
            </div>
            <div id="txt3" className="p-right-down ">
              <p>
                We provide free shipping on the all the products above Rs.2000
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
