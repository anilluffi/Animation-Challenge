import { useState } from "react";
import SpriteAnimation from "../components/SpriteAnimation";

const HomePage = () => {
  const [animation, setAnimation] = useState("idle");
  const [scale, setScale] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true); // Play/Pause control
  const [isFlipped, setIsFlipped] = useState(false); // Horizontal flip
  const spriteSheet = "/sprite_sheet.png";

  return (
    <div style={{ textAlign: "center", padding: "10px" }}>
      <h1 className="mb-5">Animation: {animation}</h1>

      <div
        className="border border-1 border-dark d-inline-block"
        style={{
          transform: `scale(${scale}) ${isFlipped ? "scaleX(-1)" : ""}`, // Horizontal flip
        }}
      >
        <SpriteAnimation
          animationName={animation}
          spriteSheet={spriteSheet}
          frameWidth={50}
          frameHeight={37}
          isPlaying={isPlaying}
        />
      </div>

      <div className="d-flex flex-wrap gap-2 p-3">
        <button className="rounded-2" onClick={() => setScale(1)}>1x</button>
        <button className="rounded-2" onClick={() => setScale(2)}>2x</button>
        <button className="rounded-2" onClick={() => setScale(3)}>3x</button>
      </div>

      <div className="d-flex flex-wrap gap-2 p-3">
        <button className="rounded-2" onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button className="rounded-2" onClick={() => setIsFlipped(!isFlipped)}>
          Flip
        </button>
      </div>

      <div className="d-flex flex-wrap gap-2 p-3">
        <button className="rounded-2" onClick={() => setAnimation("idle")}>Idle</button>
        <button className="rounded-2" onClick={() => setAnimation("crouch")}>Crouch</button>
        <button className="rounded-2" onClick={() => setAnimation("run")}>Run</button>
        <button className="rounded-2" onClick={() => setAnimation("jumpAndSlide")}>Jump & Slide</button>
        <button className="rounded-2" onClick={() => setAnimation("cornerGrab")}>Corner Grab</button>
        <button className="rounded-2" onClick={() => setAnimation("idle2")}>Idle (Weapon)</button>
        <button className="rounded-2" onClick={() => setAnimation("attack")}>Attack 1</button>
        <button className="rounded-2" onClick={() => setAnimation("attack2")}>Attack 2</button>
        <button className="rounded-2" onClick={() => setAnimation("attack3")}>Attack 3</button>
      </div>
    </div>
  );
};

export default HomePage;
