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

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <audio ref={audioRef} loop>
        <source src="https://www.bensound.com/bensound-music/bensound-romantic.mp3" />
      </audio>

      {step === 1 && (
        <>
          <h1>I want to say something to you...</h1>
          <button style={{ ...btn, background: "green", color: "white" }} onClick={next}>
            Yes 💖
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <h1>Kya Aap Cute ho?</h1>
          <button style={{ ...btn, background: "green", color: "white" }} onClick={next}>
            Yes 😍
          </button>
        </>
      )}

      {step === 3 && (
        <>
          <h1>Have you eaten?</h1>
          <button style={{ ...btn, background: "green", color: "white" }} onClick={next}>
            Yes 😋
          </button>
        </>
      )}

      {step === 4 && (
        <>
          <h1>Choose One</h1>
          <button style={{ ...btn, background: "pink", color: "white" }} onClick={next}>
            C. ME ❤️
          </button>
        </>
      )}

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
