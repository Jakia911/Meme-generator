import { hats } from "@/data/Placeholder";

const HatsButton = () => {
  return (
    <>
      <div>
        <h3>Hats</h3>

        <button>Hats</button>
        {hats.map((hat, index) => (
          <img
            key={index}
            src={hat.img}
            alt="Hat"
            onClick={() => setSelectedHat(hat.img)}
            className="hatImg"
          />
        ))}
      </div>
    </>
  );
};

export default HatsButton;
