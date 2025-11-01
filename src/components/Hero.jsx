import { Loader } from "@react-three/drei";
import React, { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      video.playbackRate = 2;
      video.play();
    };

    video.addEventListener("canplay", handleCanPlay);
    return () => video.removeEventListener("canplay", handleCanPlay);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center text-center py-10"
    >
      <div className="z-10">
        <h1 className="text-4xl font-bold mb-4">MacBook Pro</h1>
        {/* لا تستخدم loading="lazy" لأن هذه الصورة تظهر في الـ viewport */}
        <img
          src="/title.png"
          alt="MacBook Title"
          fetchPriority="high"
          decoding="async"
          width="400"
          height="120"
        />
      </div>

      <video
        ref={videoRef}
        className="w-full h-auto object-cover"
        src="/videos/hero.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        fetchPriority="high"
        poster={<Loader />}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        {/* نص بديل في حال لم يُعرض الفيديو */}
        متصفحك لا يدعم تشغيل الفيديو.
      </video>
      <button>Buy</button>
      <p className="mt-2 text-gray-600">From $1599 or $133/mo for 12 months</p>
    </section>
  );
};

export default React.memo(Hero);
