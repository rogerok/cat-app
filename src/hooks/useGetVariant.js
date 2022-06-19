import { useState, useEffect } from "react";

const useGetVariant = (inStock) => {
  const [selected, setSelected] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [selectedUnHovered, setSelectedUnHovered] = useState(false);
  const [variant, setVariant] = useState();
  const disabled = !inStock;
  console.log(inStock, disabled);

  const activable = (cb) => {
    return function wrap(...args) {
      if (!disabled) return cb(...args);
    };
  };

  useEffect(() => {
    if (selected && !hovered && selectedUnHovered)
      return setVariant("selectedUnHovered");

    if (!selected && !hovered) return setVariant("default");

    if (!selected && hovered) return setVariant("defaultHovered");

    if (selected && hovered) return setVariant("selected");

    if (selected && !hovered && !selectedUnHovered)
      return setVariant("selected");
  }, [selected, hovered, selectedUnHovered]);

  const handleClick = activable(() => {
    setSelected((prev) => !prev);
  });

  const handleMouseEnter = activable(() => {
    if (!selected) setHovered(true);
    if (selected) setSelectedUnHovered(false);
  });

  const handleMouseLeave = activable(() => {
    if (selected && hovered) setSelectedUnHovered((prev) => !prev);
    setHovered(false);
  });

  return {
    handleClick,
    handleMouseEnter,
    handleMouseLeave,
    variant,
    disabled,
    selected,
  };
};

export default useGetVariant;
