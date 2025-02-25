import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SpriteAnimation from "../components/SpriteAnimation";
import Sidebar from "../components/Sidebar";

const HomePage = () => {
  const { animation } = useParams(); // Получаем анимацию из URL
  const navigate = useNavigate();

  const validAnimations = [
    "idle", "crouch", "run", "jumpAndSlide", 
    "cornerGrab", "idle2", "attack", "attack2", "attack3"
  ];

  useEffect(() => {
    if (!validAnimations.includes(animation || "")) {
      navigate("/animation/idle"); // Если анимация некорректная, перенаправляем на idle
    }
  }, [animation, navigate]);

  const [scale, setScale] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFlipped, setIsFlipped] = useState(false);
  const spriteSheet = "/sprite_sheet.png";

  const isAuthenticated = Boolean(localStorage.getItem("token"));

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, textAlign: "center", padding: "10px" }}>
        <h1 className="mb-5">Animation: {animation}</h1>

        <div
          className="border border-1 border-dark d-inline-block"
          style={{
            transform: `scale(${scale}) ${isFlipped ? "scaleX(-1)" : ""}`,
          }}
        >
          <SpriteAnimation
            animationName={animation || "idle"}
            spriteSheet={spriteSheet}
            frameWidth={50}
            frameHeight={37}
            isPlaying={isPlaying}
          />
        </div>

        <div className="d-flex flex-wrap gap-2 p-3">
          <button className="rounded-2" onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? "Pause" : "Play"}
          </button>
        </div>

        {isAuthenticated && (
          <>
            <div className="d-flex flex-wrap gap-2 p-3">
              <button className="rounded-2" onClick={() => setScale(1)}>1x</button>
              <button className="rounded-2" onClick={() => setScale(2)}>2x</button>
              <button className="rounded-2" onClick={() => setScale(3)}>3x</button>
            </div>

            <div className="d-flex flex-wrap gap-2 p-3">
              <button className="rounded-2" onClick={() => setIsFlipped(!isFlipped)}>
                Flip
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
