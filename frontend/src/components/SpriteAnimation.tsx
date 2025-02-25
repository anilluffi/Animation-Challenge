import { useEffect, useState } from "react";

interface AnimationInfo {
  name: string;
  start: { col: number; row: number };
  frameCount: number;
}

interface AnimationData {
  [key: string]: AnimationInfo;
}

interface Frame {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface Props {
  animationName: string;
  spriteSheet: string;
  frameRate?: number;
  frameWidth: number;
  frameHeight: number;
  isPlaying: boolean; // Управление воспроизведением
}

const SpriteAnimation = ({
  animationName,
  spriteSheet,
  frameRate = 100,
  frameWidth,
  frameHeight,
  isPlaying,
}: Props) => {
  const [frames, setFrames] = useState<Frame[]>([]);
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/api/animations")
      .then((res) => res.json())
      .then((data: AnimationData) => {
        const anim = data[animationName];

        if (anim) {
          const { start, frameCount } = anim;
          const calculatedFrames: Frame[] = [];

          let col = start.col;
          let row = start.row;

          for (let i = 0; i < frameCount; i++) {
            calculatedFrames.push({
              x: col * frameWidth,
              y: row * frameHeight,
              width: frameWidth,
              height: frameHeight,
            });

            col++;

            if (col > 6) {
              col = 0;
              row++;
            }
          }

          setFrames(calculatedFrames);
        } else {
          console.warn(`Анимация "${animationName}" не найдена`);
          setFrames([]);
        }
      })
      .catch((err) => console.error("Ошибка загрузки анимации:", err));
  }, [animationName, frameWidth, frameHeight]);

  useEffect(() => {
    if (frames.length === 0 || !isPlaying) return;

    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % frames.length);
    }, frameRate);

    return () => clearInterval(interval);
  }, [frames, frameRate, isPlaying]);

  if (frames.length === 0 || !frames[currentFrame]) return <p>Загрузка...</p>;

  const frame = frames[currentFrame];

  return (
    <div
      style={{
        width: `${frame.width}px`,
        height: `${frame.height}px`,
        overflow: "hidden",
        background: `url(${spriteSheet}) -${frame.x}px -${frame.y}px no-repeat`,
      }}
    />
  );
};

export default SpriteAnimation;
