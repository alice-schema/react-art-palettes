import { prominent } from "color.js";
import { useState, useEffect } from "react";

const palette_config = {
  amount: 5, // size of the palette
  format: "hex", // return hex color codes: '#f1dd3f'
  group: 40, // similar colors to combine into one color
  sample: 10, // sample based on every nth pixel
};

const Palette = ({ url }) => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    prominent(url, palette_config).then(colors => setColors(colors))
  }, [url]);

  return (
    <div className="palette">
      {colors.map(c => (
        <div
          className="colorbox"
          key={c}
          style={{backgroundColor: c }}
        >
          {c}
        </div>
      ))}
    </div>
  );
};

export default Palette;