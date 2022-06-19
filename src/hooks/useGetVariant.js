import { useState, useEffect } from "react";

const useGetVariant = () => {
  const [selected, setSelected] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [selectedUnHovered, setSelectedUnHovered] = useState(false);
  const [variant, setVariant] = useState();

  console.log(variant);
  useEffect(() => {
    if (selected && !hovered && selectedUnHovered)
      return setVariant("selectedUnHovered");
    if (!selected && !hovered) return setVariant("default");
    if (!selected && hovered) return setVariant("defaultHovered");
    if (selected && hovered) return setVariant("selected");
    if (selected && !hovered && !selectedUnHovered)
      return setVariant("selected");
  }, [selected, hovered, selectedUnHovered]);

  const disabled = false;

  const activable = (cb) => {
    return function wrap(...args) {
      if (!disabled) return cb(...args);
    };
  };

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
  };
};

export default useGetVariant;
