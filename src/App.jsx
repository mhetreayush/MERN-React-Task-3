import { useState } from "react";
import ColorPicker from "./components/ColorPicker";

const colors = [
  "#BEADFA",
  "#FFF8C9",
  "#EFB495",
  "#AEC3AE",
  "#FAF3F0",
  "#EEE3CB",
];

const App = () => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [showColorPicker, setShowColorPicker] = useState(false);
  return (
    <div
      style={{
        backgroundColor: currentColor,
      }}
      className="min-h-screen min-w-screen flex justify-center items-center transition-all duration-300"
    >
      <div className="flex items-center flex-col gap-8 w-full">
        {showColorPicker && (
          <ColorPicker
            colors={colors}
            pickColor={setCurrentColor}
            closeColorPicker={() => setShowColorPicker(!showColorPicker)}
          />
        )}
        <button
          onClick={() => setShowColorPicker(!showColorPicker)}
          className="rounded-md bg-green-400 p-2"
        >
          Select a color
        </button>
      </div>
    </div>
  );
};

export default App;
