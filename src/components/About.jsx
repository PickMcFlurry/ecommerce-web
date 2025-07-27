import React from "react";
import { bannerimg } from "../utils/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
const About = () => {
  useGSAP(() => {
    gsap.set(".scroll", { opacity: 0, x: -100 });

    gsap.to(".scroll", {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".scroll",
        start: "top 5%",
        end: "top 20%",
        toggleActions: "play none none reverse",
      },
    });
    // gsap.set(".scroll h1", { opacity: 0, y: 50 });
    // gsap.to(".scroll h1", {
    //   opacity: 1,
    //   y: 0,
    //   duration: 1,
    //   stagger: 0.2,
    //   scrollTrigger: {
    //     trigger: ".scroll",
    //     start: "top 5%",
    //     end: "top 50%",
    //     scrub: 1, // Animation tied to scroll progress
    //     toggleActions: "play none none reverse",
    //   },
    // });

    gsap.from(".img-ani", {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".img-ani",
        start: "top 5%",
        end: "top 20%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);
  return (
    <>
      <div className="w-full bg-[#F1F3FB]">
        <section className="min-width m-auto flex justify-between  pt-12 ">
          <div className="flex flex-col gap-6 justify-center scroll">
            <h1 className="font-signpainter text-[40px]">About us</h1>
            <h1 className="text-[36px] font-bold leading-[42px] text-custom-pink">
              Sustainable Fashion, Timeless <br />
              Style
            </h1>
            <div className="max-w-[553px] text-[#3C3C3C] flex flex-col gap-6">
              <p>
                At VintageVibe, we believe in givingpre-loved items a second
                chance. Our carefully curated collection features unique pieces
                that combine sustainability with style, helping you create a
                wardrobe that's both environmentally conscious and
                fashion-forward.
              </p>
              <p>
                Every item in our store is handpicked for quality, authenticity,
                and character. We're not just selling clothes and accessories –
                we're preserving stories and promoting a more sustainable
                future.
              </p>
            </div>
            <div>
              <button className="bg-[#136DF4] text-white py-[15px] px-6 rounded-[10px] mt-4">
                Learn our story
              </button>
            </div>
          </div>
          <div className="flex justify-center overflow-hidden">
            <img
              src={bannerimg}
              alt="banner"
              width={487}
              height={731}
              loading="lazy"
              className="img-ani"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
