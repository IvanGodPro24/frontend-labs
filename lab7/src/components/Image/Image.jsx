import { useState } from "react";
import img from "../../assets/1.jpg";

const Image = () => {
  const [visible, setVisible] = useState(true);
  const [scale, setScale] = useState(1);

  return (
    <div className="image-container">
      {visible && (
        <a href="https://www.city.kharkiv.ua/" target="_blank">
          <img
            id="main-image"
            src={img}
            alt="main"
            style={{
              transform: `scale(${scale})`,
              transition: "transform 0.3s",
            }}
            width="500"
          />
        </a>
      )}

      <div className="buttons">
        <button onClick={() => setVisible(true)}>Add</button>
        <button onClick={() => setScale(scale * 1.3)}>Increase</button>
        <button onClick={() => setScale(scale * 0.8)}>Decrease</button>
        <button onClick={() => setVisible(false)}>Remove</button>
      </div>
    </div>
  );
};

export default Image;
