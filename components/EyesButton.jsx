import { eyes } from "@/data/Placeholder";

const EyesButton = () => {
  return (
    <div>
      <button>Eyes</button>

      <h3>Eyes</h3>
      {eyes.map((eye, index) => (
        <img
          key={index}
          src={eye.img}
          alt="Eyes"
          onClick={() => setSelectedEyes(eye.img)}
          className="eyesImg"
        />
      ))}
    </div>
  );
};

export default EyesButton;
