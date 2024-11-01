import { hats } from "@/data/Placeholder";
import styles from "../MemeGenerator.module.css";

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
            className={styles.thumbnail}
          />
        ))}
      </div>
    </>
  );
};

export default HatsButton;
