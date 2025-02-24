import { useState } from "react";
import SpriteAnimation from "../components/SpriteAnimation";

const HomePage = () => {
  const [animation, setAnimation] = useState("idle");
  const [scale, setScale] = useState(1); // Управление масштабом
  const spriteSheet = "/sprite_sheet.png"; // Путь из public/

  return (
    <div style={{ textAlign: "center", padding: "10px" }}>
      <h1 className="mb-5">Анимация: {animation}</h1>

      <div className="border border-1 border-dark d-inline-block " style={{ transform: `scale(${scale})` }}>
        <SpriteAnimation
          animationName={animation}
          spriteSheet={spriteSheet}
          frameWidth={50}  // Оставляем фиксированным
          frameHeight={37} // Оставляем фиксированным
        />
      </div>
      <div className="d-flex flex-wrap gap-2 p-3">
        <button className="rounded-2" onClick={() => setScale(1)}>1x</button>
        <button className="rounded-2" onClick={() => setScale(2)}>2x</button>
        <button className="rounded-2" onClick={() => setScale(3)}>3x</button>
      </div>
      <div className="d-flex flex-wrap gap-2 p-3">
        <button className="rounded-2" onClick={() => setAnimation("idle")}>Ожидание</button>
        <button className="rounded-2" onClick={() => setAnimation("crouch")}>Приседание</button>
        <button className="rounded-2" onClick={() => setAnimation("run")}>Бег</button>
        <button className="rounded-2" onClick={() => setAnimation("jumpAndSlide")}>Прыжок и скольжение</button>
        <button className="rounded-2" onClick={() => setAnimation("cornerGrab")}>Хват за угол</button>
        <button className="rounded-2" onClick={() => setAnimation("idle2")}>Ожидание с оружием</button>
        <button className="rounded-2" onClick={() => setAnimation("attack")}>Атака 1</button>
        <button className="rounded-2" onClick={() => setAnimation("attack2")}>Атака 2</button>
        <button className="rounded-2" onClick={() => setAnimation("attack3")}>Атака 3</button>
      </div>


    </div>
  );
};

export default HomePage;
