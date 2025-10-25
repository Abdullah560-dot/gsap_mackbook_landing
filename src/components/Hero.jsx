import React, { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      video.playbackRate = 2;
      video.play();
    };

    video.addEventListener("canplay", handleCanPlay);

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, []);

  return (
    <section id="hero">
      <div>
        <h1>MacBook Pro</h1>
        <img src="/title.png" alt="MacBook Title" />
      </div>
      <video
        ref={videoRef}
        src="/videos/hero.mp4"
        autoPlay
        muted
        playsInline
        preload="metadata"
        // poster="/title.png"
      />
      <button>Buy</button>
      <p>From $1599 or $133/mo for 12 months</p>
    </section>
  );
};

export default React.memo(Hero);
