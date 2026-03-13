"use client";

import { useEffect, useRef, useState } from "react";

const CURTAIN_ANIMATION_MS = 5000;

export default function HomeCurtainIntro() {
  const [isOpening, setIsOpening] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const hasPlayedApplauseRef = useRef(false);
  const applauseAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isOpening) {
      return;
    }

    const fadeTimeoutId = window.setTimeout(() => {
      setIsFadingOut(true);
    }, CURTAIN_ANIMATION_MS - 700);

    const timeoutId = window.setTimeout(() => {
      setIsVisible(false);
    }, CURTAIN_ANIMATION_MS);

    return () => {
      window.clearTimeout(fadeTimeoutId);
      window.clearTimeout(timeoutId);
    };
  }, [isOpening]);

  useEffect(() => {
    return () => {
      hasPlayedApplauseRef.current = false;
      if (applauseAudioRef.current) {
        applauseAudioRef.current.pause();
        applauseAudioRef.current.currentTime = 0;
      }
    };
  }, []);

  const handleOpen = () => {
    if (isOpening) {
      return;
    }

    if (!hasPlayedApplauseRef.current) {
      hasPlayedApplauseRef.current = true;
      const applause = new Audio("/applause.mp3");
      applause.volume = 1;
      applause.preload = "auto";
      applauseAudioRef.current = applause;
      applause.currentTime = 0;
      void applause.play().catch(() => {
        hasPlayedApplauseRef.current = false;
      });
    }

    setIsOpening(true);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[300] overflow-hidden bg-[#150407] transition-opacity duration-700 ${
        isOpening ? "pointer-events-none" : ""
      } ${isFadingOut ? "opacity-0" : "opacity-100"}`}
      aria-hidden={isOpening}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,233,214,0.22),_transparent_32%),linear-gradient(180deg,_rgba(38,7,9,0.16),_rgba(0,0,0,0.64))]" />

      <div className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,_#a11320_0%,_#7c0d17_48%,_#4f0710_82%,_rgba(79,7,16,0)_100%)] shadow-[0_26px_48px_rgba(0,0,0,0.46)]" />
      <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_10%_0%,_rgba(255,223,186,0.34),_transparent_22%),radial-gradient(circle_at_30%_0%,_rgba(255,223,186,0.2),_transparent_18%),radial-gradient(circle_at_50%_0%,_rgba(255,223,186,0.3),_transparent_19%),radial-gradient(circle_at_70%_0%,_rgba(255,223,186,0.2),_transparent_18%),radial-gradient(circle_at_90%_0%,_rgba(255,223,186,0.34),_transparent_22%)] opacity-70" />
      <div className="absolute inset-x-6 top-14 h-20 rounded-b-[999px] bg-[radial-gradient(circle_at_8%_0%,_#9d1420_0,_#9d1420_14%,_transparent_15%),radial-gradient(circle_at_22%_0%,_#9d1420_0,_#9d1420_14%,_transparent_15%),radial-gradient(circle_at_36%_0%,_#9d1420_0,_#9d1420_14%,_transparent_15%),radial-gradient(circle_at_50%_0%,_#9d1420_0,_#9d1420_14%,_transparent_15%),radial-gradient(circle_at_64%_0%,_#9d1420_0,_#9d1420_14%,_transparent_15%),radial-gradient(circle_at_78%_0%,_#9d1420_0,_#9d1420_14%,_transparent_15%),radial-gradient(circle_at_92%_0%,_#9d1420_0,_#9d1420_14%,_transparent_15%)] opacity-90" />

      <div
        className={`absolute inset-y-0 left-0 w-1/2 origin-left border-r border-white/10 bg-[linear-gradient(90deg,_#2c0307_0%,_#5e0811_9%,_#8f121d_18%,_#68101a_26%,_#bc2430_36%,_#741019_48%,_#c92836_60%,_#76101a_73%,_#a41522_85%,_#42050b_100%)] shadow-[inset_-44px_0_95px_rgba(0,0,0,0.48)] transition-transform duration-[5000ms] ease-[cubic-bezier(0.16,0.84,0.2,1)] ${
          isOpening ? "-translate-x-[110%] -rotate-[2deg] scale-x-110" : "translate-x-0"
        }`}
      >
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.14)_0,rgba(255,255,255,0.14)_2px,rgba(70,7,13,0.1)_2px,rgba(70,7,13,0.1)_24px,transparent_24px,transparent_44px)] opacity-45" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,248,233,0.18)_0%,transparent_16%,transparent_74%,rgba(0,0,0,0.32)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,_rgba(255,255,255,0.18),_transparent_26%),radial-gradient(circle_at_42%_50%,_rgba(255,255,255,0.1),_transparent_28%),radial-gradient(circle_at_74%_22%,_rgba(255,255,255,0.12),_transparent_24%)]" />
        <div className="absolute inset-y-0 right-0 w-24 bg-[linear-gradient(90deg,transparent,rgba(255,243,214,0.22)_38%,rgba(0,0,0,0.56)_100%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.34),_transparent_72%)]" />
        <div className="absolute left-8 top-1/2 h-24 w-5 -translate-y-1/2 rounded-full bg-[linear-gradient(180deg,_#f2cf77_0%,_#d9a640_55%,_#8e5b11_100%)] opacity-70 shadow-[0_0_0_3px_rgba(94,8,17,0.35)]" />
      </div>

      <div
        className={`absolute inset-y-0 right-0 w-1/2 origin-right border-l border-white/10 bg-[linear-gradient(270deg,_#2c0307_0%,_#5e0811_9%,_#8f121d_18%,_#68101a_26%,_#bc2430_36%,_#741019_48%,_#c92836_60%,_#76101a_73%,_#a41522_85%,_#42050b_100%)] shadow-[inset_44px_0_95px_rgba(0,0,0,0.48)] transition-transform duration-[5000ms] ease-[cubic-bezier(0.16,0.84,0.2,1)] ${
          isOpening ? "translate-x-[110%] rotate-[2deg] scale-x-110" : "translate-x-0"
        }`}
      >
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.14)_0,rgba(255,255,255,0.14)_2px,rgba(70,7,13,0.1)_2px,rgba(70,7,13,0.1)_24px,transparent_24px,transparent_44px)] opacity-45" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,248,233,0.18)_0%,transparent_16%,transparent_74%,rgba(0,0,0,0.32)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_30%,_rgba(255,255,255,0.18),_transparent_26%),radial-gradient(circle_at_58%_50%,_rgba(255,255,255,0.1),_transparent_28%),radial-gradient(circle_at_26%_22%,_rgba(255,255,255,0.12),_transparent_24%)]" />
        <div className="absolute inset-y-0 left-0 w-24 bg-[linear-gradient(270deg,transparent,rgba(255,243,214,0.22)_38%,rgba(0,0,0,0.56)_100%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.34),_transparent_72%)]" />
        <div className="absolute right-8 top-1/2 h-24 w-5 -translate-y-1/2 rounded-full bg-[linear-gradient(180deg,_#f2cf77_0%,_#d9a640_55%,_#8e5b11_100%)] opacity-70 shadow-[0_0_0_3px_rgba(94,8,17,0.35)]" />
      </div>

      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/20" />
      <div className="absolute left-1/2 top-0 h-20 w-20 -translate-x-1/2 rounded-b-full border border-amber-200/50 bg-gradient-to-b from-[#f8d16f] via-[#ddb14e] to-[#9b6517] shadow-[0_14px_34px_rgba(251,191,36,0.35)]" />
      <div className="absolute left-1/2 top-16 h-24 w-1 -translate-x-1/2 bg-gradient-to-b from-amber-200/80 to-transparent" />

      <div
        className={`relative z-10 flex min-h-screen items-center justify-center px-6 transition-all duration-[1400ms] ${
          isOpening ? "scale-95 opacity-0 blur-sm" : "scale-100 opacity-100"
        }`}
      >
        <div className="max-w-2xl text-center text-white">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.5em] text-amber-200/90">
            Opening Ceremony
          </p>
          <h1 className="text-4xl font-extrabold uppercase tracking-[0.18em] text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.55)] sm:text-6xl">
            SheConnect
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-rose-50/90 sm:text-lg">
            Designed and Developed by Gaurav Madaan
          </p>
          <button
            type="button"
            onClick={handleOpen}
            disabled={isOpening}
            className="mt-10 inline-flex min-w-52 items-center justify-center rounded-full border border-amber-200/60 bg-white px-8 py-3 text-sm font-bold uppercase tracking-[0.28em] text-[#5f0a12] shadow-[0_18px_45px_rgba(0,0,0,0.28)] transition hover:-translate-y-1 hover:bg-amber-100 disabled:cursor-default disabled:opacity-70"
          >
            {isOpening ? "Welcome In" : "Open Website"}
          </button>
        </div>
      </div>
    </div>
  );
}
