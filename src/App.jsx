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

  const moveButton = (e) => {
    const el = e.currentTarget;
    el.style.position = "absolute";
    el.style.transition = "all 0.2s ease";
    el.style.top = Math.random() * (window.innerHeight - 80) + "px";
    el.style.left = Math.random() * (window.innerWidth - 120) + "px";
    el.style.transform = `scale(${0.9 + Math.random() * 0.3}) rotate(${Math.random() * 20 - 10}deg)`;
  };

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      textAlign: "center",
      paddingTop: "80px",
      background: "linear-gradient(135deg, #ff758c, #ff7eb3)",
      overflow: "hidden",
      color: "#fff"
    }}>

      {/* FLOATING HEARTS */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            fontSize: "22px",
            opacity: 0.8,
            animation: `float ${3 + Math.random() * 5}s ease-in-out infinite`
          }}
        >
          ❤️
        </div>
      ))}

      <style>{`
        body { margin: 0; }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
          100% { transform: translateY(0px); }
        }
      `}</style>

      <audio ref={audioRef} loop>
        <source src="https://www.bensound.com/bensound-music/bensound-romantic.mp3" />
      </audio>

      {step === 1 && (
        <>
          <h1>I want to say something to you...</h1>
          <button style={{ ...btn, background: "green", color: "white" }} onClick={next}>Yes 💖</button>
          <button style={{ ...btn, background: "red", color: "white", position: "absolute" }} onMouseEnter={moveButton} onClick={moveButton}>No 😢</button>
        </>
      )}

      {step === 2 && (
        <>
          <h1>Kya Aap Cute ho?</h1>
          <button style={{ ...btn, background: "green", color: "white" }} onClick={next}>Yes 😍</button>
          <button style={{ ...btn, background: "red", color: "white", position: "absolute" }} onMouseEnter={moveButton} onClick={moveButton}>No 🙈</button>
        </>
      )}

      {step === 3 && (
        <>
          <h1>Have you eaten?</h1>
          <button style={{ ...btn, background: "green", color: "white" }} onClick={next}>Yes 😋</button>
          <button style={{ ...btn, background: "red", color: "white", position: "absolute" }} onMouseEnter={moveButton} onClick={moveButton}>No 😅</button>
        </>
      )}

      {step === 4 && (
        <>
          <h1>Choose One</h1>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <button style={{ ...btn, background: "pink", color: "white", width: 260 }} onMouseEnter={moveButton}>A. Korean BF 😅</button>
            <button style={{ ...btn, background: "pink", color: "white", width: 260 }} onMouseEnter={moveButton}>B. Chinese 😆</button>
            <button style={{ ...btn, background: "pink", color: "white", width: 260 }} onClick={next}>C. ME ❤️</button>
          </div>
        </>
      )}

      {step === 5 && (
        <>
          <h1>I LOVE YOU ❤️</h1>

          {!celebrate && !showReason && (
            <>
              <button style={{ ...btn, background: "green", color: "white" }} onClick={() => { setCelebrate(true); fire(); }}>Yes 💖</button>
              <button style={{ ...btn, background: "red", color: "white" }} onClick={() => setShowReason(true)}>No 😢</button>
            </>
          )}

          {celebrate && <h2>From Today You Are Everything for Me ❤️</h2>}

          {showReason && <p>Its Ok I understand but please tell the reason 💬</p>}
        </>
      )}

    </div>
  );
}
