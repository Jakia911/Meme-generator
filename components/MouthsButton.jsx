import { mouths } from "@/data/Placeholder";

const MouthsButton = () => {
  return;
  <>
    <button className="">Mouths</button>
    <h3>Mouths</h3>
    {mouths.map((mouth, index) => (
      <img
        key={index}
        src={mouth.img}
        alt="Mouth"
        onClick={() => setSelectedMouth(mouth.img)}
        className="mouthImg"
      />
    ))}
  </>;
};

export default MouthsButton;
