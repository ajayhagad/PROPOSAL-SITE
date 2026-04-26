import React, { useState, useRef } from "react";
import confetti from "canvas-confetti";

export default function App() {
  const [step, setStep] = useState(1);
  const [celebrate, setCelebrate] = useState(false);
  const [showReason, setShowReason] = useState(false);
  const audioRef = useRef(null);

  const next = () => {
    setStep((s) => s + 1);
    if (audioRef.current) audioRef.current.play().catch(() => {});
  };

  const fire = () => {
    confetti({ particleCount: 150, spread: 100 });
  };

  const btn = {
    padding: "12px 20px",
    margin: "10px",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px"
  };

  const runAway = (e) => {
    const el = e.currentTarget;
    el.style.position = "absolute";
    el.style.top = Math.random() * (window.innerHeight - 60) + "px";
    el.style.left = Math.random() * (window.innerWidth - 120) + "px";
  };

  return (
    <div style={{ textAlign: "center", padding: "20px", position: "relative", minHeight: "100vh" }}>
      <audio ref={audioRef} loop>
        <source src="https://www.bensound.com/bensound-music/bensound-romantic.mp3" />
      </audio>

      {/* STEP 1 */}
      {step === 1 && (
        <>
          <h1>I want to say something to you...</h1>

          <button style={{ ...btn, background: "green", color: "white" }} onClick={next}>
            Yes 💖
          </button>

          <button
            style={{ ...btn, background: "red", color: "white", position: "absolute" }}
            onMouseEnter={runAway}
          >
            No 😢
          </button>
        </>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <>
          <h1>Kya Aap Cute ho?</h1>
          <button style={{ ...btn, background: "green", color: "white" }} onClick={next}>Yes 😍</button>
          <button style={{ ...btn, background: "red", color: "white", position: "absolute" }} onMouseEnter={runAway}>No 🙈</button>
        </>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <>
          <h1>Have you eaten?</h1>
          <button style={{ ...btn, background: "green", color: "white" }} onClick={next}>Yes 😋</button>
          <button style={{ ...btn, background: "red", color: "white", position: "absolute" }} onMouseEnter={runAway}>No 😅</button>
        </>
      )}

      {/* STEP 4 */}
      {step === 4 && (
        <>
          <h1>Choose One</h1>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <button style={{ ...btn, background: "pink", color: "white", width: 260 }} onMouseEnter={runAway}>
              A. Korean BF with 0000% Love 😅
            </button>
            <button style={{ ...btn, background: "pink", color: "white", width: 260 }} onMouseEnter={runAway}>
              B. Chinese (EWWW) but no fav food 😆
            </button>
            <button style={{ ...btn, background: "pink", color: "white", width: 260 }} onClick={next}>
              C. ME ❤️
            </button>
          </div>
        </>
      )}

      {/* STEP 5 */}
      {step === 5 && (
        <>
          <h1>I LOVE YOU ❤️</h1>

          {!celebrate && !showReason && (
            <>
              <button
                style={{ ...btn, background: "green", color: "white" }}
                onClick={() => {
                  setCelebrate(true);
                  fire();
                }}
              >
                Yes 💖
              </button>

              <button
                style={{ ...btn, background: "red", color: "white" }}
                onClick={() => setShowReason(true)}
              >
                No 😢
              </button>
            </>
          )}

          {celebrate && <h2>From Today You Are Everything for Me ❤️</h2>}

          {showReason && (
            <p>Its Ok I understand but please tell the reason 💬</p>
          )}
        </>
      )}
    </div>
  );
}
