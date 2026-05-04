import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  useGSAP(() => {
    if (isTablet) return;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#showcase",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinSpacing: true,
        invalidateOnRefresh: true,
      },
    });

    timeline
      .to(".mask img", {
        scale: 1.1,
      })
      .to(".content", {
        opacity: 1,
        y: 0,
        ease: "power1.in",
      });
  }, [isTablet]);

  // 🔥 مهم جداً لإعادة الحساب بعد تحميل العناصر
  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <section id="showcase" className="relative z-20">
      <div className="media">
        <video
          src="/videos/game.mp4"
          loop
          muted
          autoPlay
          playsInline
          preload="auto"
          onLoadedData={() => ScrollTrigger.refresh()}
        />

        <div className="mask">
          <img src="/mask-logo.svg" alt="Mask Logo" />
        </div>
      </div>

      <div className="content">
        <div className="wrapper">
          <div className="lg:max-w-md">
            <h2>Rocket Chip</h2>

            <div className="space-y-5 mt-7 pe-10">
              <p>
                Introducing{" "}
                <span className="text-white">
                  M4, the next generation of Apple silicon
                </span>
                . M4 powers
              </p>
              <p>
                It drives Apple Intelligence on iPad Pro, so you can write,
                create, and accomplish more with ease.
              </p>
              <p>
                A brand-new display engine delivers breathtaking precision,
                color accuracy, and brightness.
              </p>
              <p className="text-primary">
                Learn more about Apple Intelligence
              </p>
            </div>
          </div>

          <div className="max-w-3xs space-y-14">
            <div className="space-y-2">
              <p>Up to</p>
              <h3>4x faster</h3>
              <p>pro rendering performance than M2</p>
            </div>
            <div className="space-y-2">
              <p>Up to</p>
              <h3>1.5x faster</h3>
              <p>CPU performance than M2</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
