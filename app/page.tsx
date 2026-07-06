"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FloatingHearts, SadCatSVG, HeartSVG, PawPrintSVG } from "@/components/SVGs";

export default function Home() {
  const [forgiven, setForgiven] = useState(false);
  const [noClicks, setNoClicks] = useState(0);
  const [showHearts, setShowHearts] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentChar, setCurrentChar] = useState(0);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const fullMessage =
    "I know I messed up, and I'm not going to pretend I didn't. You deserve better than what I gave you, and I'm sorry. I'm working on it. You're important to me, and I don't want to lose that.";

  const noMessages = [
    "Not yet",
    "Are you sure?",
    "Really?",
    "I'll wait.",
    "Okay. I'll keep trying.",
  ];

  useEffect(() => {
    if (currentChar < fullMessage.length) {
      const timer = setTimeout(() => {
        setTypedText(fullMessage.slice(0, currentChar + 1));
        setCurrentChar(currentChar + 1);
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [currentChar]);

  const handleNoClick = () => {
    setNoClicks((prev) => prev + 1);
    if (noButtonRef.current && noClicks >= 1) {
      const btn = noButtonRef.current;
      const btnRect = btn.getBoundingClientRect();
      const btnW = btnRect.width;
      const btnH = btnRect.height;
      const margin = 16;
      const maxX = window.innerWidth - btnW - margin;
      const maxY = window.innerHeight - btnH - margin;
      const randomX = Math.random() * Math.max(maxX - margin, margin) + margin;
      const randomY = Math.random() * Math.max(maxY - margin, margin) + margin;
      btn.style.position = "fixed";
      btn.style.left = `${randomX}px`;
      btn.style.top = `${randomY}px`;
      btn.style.width = `${btnW}px`;
      btn.style.zIndex = "50";
    }
  };

  const handleForgive = () => {
    setForgiven(true);
    setShowHearts(true);
    setTimeout(() => setShowHearts(false), 4000);
  };

  return (
    <main className="relative min-h-screen overflow-hidden">
      <FloatingHearts />

      {/* Subtle decorative paws - desktop only */}
      <div className="absolute bottom-16 left-8 animate-float-slow opacity-40 hidden lg:block" aria-hidden="true">
        <PawPrintSVG />
      </div>
      <div className="absolute top-24 right-12 animate-float-subtle opacity-30 hidden lg:block" aria-hidden="true">
        <PawPrintSVG />
      </div>

      {/* Content container - mobile first */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 py-12 sm:px-6 md:px-8">
        {/* Header */}
        <header className="mb-8 animate-fade-up text-center sm:mb-10">
          <div className="mb-4 flex justify-center">
            <SadCatSVG />
          </div>
          <h1 className="font-script text-4xl text-ink-primary sm:text-5xl md:text-6xl">
            i&apos;m sorry
          </h1>
        </header>

        {/* Kitten image */}
        <div className="mb-8 sm:mb-10">
          <div className="relative">
            <Image
              src="/cute-kitten.gif"
              alt="A kitten looking apologetic"
              width={380}
              height={288}
              unoptimized
              priority
              className="rounded-2xl border border-white/60 shadow-lg w-full h-auto max-w-[280px] sm:max-w-[340px] md:max-w-[380px]"
            />
          </div>
        </div>

        {/* Message card */}
        <article
          className="glass-card mb-10 w-full max-w-md animate-fade-up rounded-2xl p-6 sm:max-w-lg sm:p-8 md:max-w-xl"
          style={{ animationDelay: "0.3s" }}
          aria-live="polite"
        >
          <p className="text-center text-base leading-relaxed text-ink-secondary sm:text-lg min-h-[80px]">
            {typedText}
            {currentChar < fullMessage.length && (
              <span className="ml-0.5 inline-block w-0.5 h-4 bg-ink-muted animate-pulse" />
            )}
          </p>
        </article>

        {/* Interaction area */}
        {!forgiven ? (
          <section
            className="flex w-full max-w-md flex-col items-center gap-5 animate-fade-up sm:max-w-lg"
            style={{ animationDelay: "0.45s" }}
          >
            <p className="font-script text-2xl text-ink-primary sm:text-3xl">
              can you forgive me?
            </p>
            <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
              <button
                onClick={handleForgive}
                className="btn-primary w-full rounded-xl px-6 py-3.5 text-base font-medium sm:w-auto"
                aria-label="Yes, I forgive you"
              >
                I forgive you
              </button>
              <button
                ref={noButtonRef}
                onClick={handleNoClick}
                className="btn-secondary w-full rounded-xl px-6 py-3.5 text-base font-medium sm:w-auto"
                aria-label="Not yet"
              >
                {noClicks < noMessages.length ? noMessages[noClicks] : "No"}
              </button>
            </div>
            {noClicks > 2 && noClicks < noMessages.length && (
              <p className="text-sm text-ink-muted animate-fade-in">
                the button seems to be running away
              </p>
            )}
          </section>
        ) : (
          <section
            className="flex w-full max-w-md flex-col items-center gap-6 animate-fade-up sm:max-w-lg"
          >
            <h2 className="font-script text-3xl text-ink-primary sm:text-4xl">
              thank you
            </h2>
            <p className="text-center text-base text-ink-secondary sm:text-lg">
              I don&apos;t take it for granted. I&apos;ll show you, not just tell you.
            </p>
            <div className="flex items-center gap-2">
              <HeartSVG className="animate-breathe" />
              <HeartSVG className="animate-breathe" style={{ animationDelay: "0.5s" }} />
              <HeartSVG className="animate-breathe" style={{ animationDelay: "1s" }} />
            </div>
          </section>
        )}

        {/* Footer */}
        <footer
          className="mt-16 flex items-center gap-1.5 text-sm text-ink-muted animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          <span>made with care</span>
          <HeartSVG className="inline" />
        </footer>
      </div>

      {/* Celebration overlay */}
      {showHearts && (
        <div className="fixed inset-0 pointer-events-none z-50" aria-hidden="true">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `popHeart 0.8s ease-out ${Math.random() * 1.5}s`,
              }}
            >
              <HeartSVG />
            </div>
          ))}
          <style jsx>{`
            @keyframes popHeart {
              0% { transform: scale(0); opacity: 0; }
              40% { transform: scale(1.2); opacity: 1; }
              100% { transform: scale(0.6); opacity: 0; }
            }
          `}</style>
        </div>
      )}
    </main>
  );
}
