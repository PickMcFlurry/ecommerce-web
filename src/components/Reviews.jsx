import { Star } from "lucide-react";
import { reviews } from "../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Reviews = () => {
  useGSAP(() => {
    gsap.from("#ani", {
      opacity: 0,
      y: 100,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: "#ani",
        start: "top 25%",
        end: "top 20%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.from("#stagger", {
      opacity: 0,
      y: 100,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: "#ani",
        start: "top 25%",
        end: "top 20",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <>
      <section className="w-full py-12 md:py-14 lg:py-24 bg-light-bg ">
        <div className="min-width m-auto px-4 md:px-6 flex flex-col justify center">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div id="ani" className="space-y-2">
              <h2 className="h1-style">What Our Customers Say</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear directly from the people who love our products.
              </p>
            </div>
          </div>
          <div className="mt-10 flex overflow-x-auto pb-4 scrollbar-hide [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden">
            <div className="flex flex-nowrap gap-6 px-2">
              {reviews.map((review) => (
                <div
                  id="stagger"
                  key={review.id}
                  className="rounded-lg border bg-card text-card-foreground shadow-2xs min-w-[300px] max-w-[350px] flex-shrink-0"
                >
                  <section className="flex flex-col space-y-1.5 p-6">
                    <div className="flex items-center gap-4">
                      <div className="overflow-hidden rounded-full h-10 w-10">
                        <img
                          src={review.pic}
                          alt={`@${review.name}`}
                          className="rounded"
                        />
                        <div>{review.name.charAt(0)}</div>
                      </div>
                      <div>
                        <h1 className="font-semibold tracking-tight text-lg">
                          {review.name}
                        </h1>
                        <div className="flex items-center gap-0.5 text-sm text-muted-foreground">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating
                                  ? "fill-primary text-primary"
                                  : "fill-muted stroke-muted-foreground"
                              }`}
                            />
                          ))}
                          <span className="ml-2">{review.date}</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <div className="px-6 pb-6">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {review.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
