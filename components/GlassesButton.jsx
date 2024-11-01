import { glasses } from "@/data/Placeholder";

const GlassesButton = () => {
  return;
  <div>
    <button>Sun Glasses</button>

    {glasses.map((glass, index) => (
      <img
        key={index}
        src={glass.img}
        alt="faces"
        onClick={() => setSelectedEyes(glass.img)}
        className="glacesImg"
      />
    ))}
  </div>;
};

export default GlassesButton;
