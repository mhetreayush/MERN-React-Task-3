const ColorPicker = ({ colors, pickColor, closeColorPicker }) => {
  const handleClick = (color) => {
    pickColor(color);
    closeColorPicker();
  };
  return (
    <div className="flex gap-4">
      {colors.map((color, idx) => (
        <button
          className="h-10 w-10 rounded-md border border-black shadow-lg "
          style={{
            backgroundColor: color,
          }}
          onClick={() => handleClick(color)}
        />
      ))}
    </div>
  );
};

export default ColorPicker;
