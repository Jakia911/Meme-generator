"use client";

import EyesButton from "@/components/EyesButton";
import FacesButton from "@/components/FacesButton";
import GlassesButton from "@/components/GlassesButton";
import HatsButton from "@/components/HatsButton";
import MouthsButton from "@/components/MouthsButton";
import { useRef, useState } from "react";
s; // CSS module for styling
export default function Home() {
  const canvasRef = useRef(null);
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [baseImage, setBaseImage] = useState(null);

  // Arrays of accessory images

  // Track selected images and positions
  const [selectedHat, setSelectedHat] = useState(null);
  const [selectedMouth, setSelectedMouth] = useState(null);
  const [selectedEyes, setSelectedEyes] = useState(null);

  // Position states for accessories
  const [hatPosition, setHatPosition] = useState({ x: 50, y: 50 });
  const [mouthPosition, setMouthPosition] = useState({ x: 100, y: 150 });
  const [eyesPosition, setEyesPosition] = useState({ x: 100, y: 80 });
  const [scale, setScale] = useState(1);
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Meme Generator</h2>

      {/* Base Image Upload */}
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files[0];
          const reader = new FileReader();
          reader.onload = () => setBaseImage(reader.result);
          reader.readAsDataURL(file);
        }}
      />
      {/* Meme Canvas Area */}
      <div className={styles.canvasContainer}>
        {baseImage && (
          <img
            src={baseImage}
            alt="Base"
            className={styles.baseImage}
            ref={canvasRef}
          />
        )}

        {/* Positionable Accessory Images */}
        {selectedHat && (
          <img
            src={selectedHat}
            alt="Hat"
            className={styles.accessory}
            style={{
              top: `${hatPosition.y}px`,
              left: `${hatPosition.x}px`,
              transform: `scale(${scale})`,
            }}
          />
        )}
        {selectedMouth && (
          <img
            src={selectedMouth}
            alt="Mouth"
            className={styles.accessory}
            style={{
              top: `${mouthPosition.y}px`,
              left: `${mouthPosition.x}px`,
              transform: `scale(${scale})`,
            }}
          />
        )}
        {selectedEyes && (
          <img
            src={selectedEyes}
            alt="Eyes"
            className={styles.accessory}
            style={{
              top: `${eyesPosition.y}px`,
              left: `${eyesPosition.x}px`,
              transform: `scale(${scale})`,
            }}
          />
        )}
      </div>
      {/* <input
        type="text"
        placeholder="Top Text"
        value={topText}
        onChange={(e) => setTopText(e.target.value)}
      />
      <input
        type="text"
        placeholder="Bottom Text"
        value={bottomText}
        onChange={(e) => setBottomText(e.target.value)}
      /> */}

      {/* Accessory Selection */}

      <div>
        <HatsButton />
        <MouthsButton />
        <EyesButton />
        <FacesButton />
        <GlassesButton />
      </div>
    </div>
  );
}
