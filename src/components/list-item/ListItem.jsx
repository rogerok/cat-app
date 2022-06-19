import React, { useEffect, useState } from "react";
import useGetVariant from "../../hooks/useGetVariant";

import {
  AdditionalInfo,
  Circle,
  CardInner,
  Label,
  Card,
  Title,
  Order,
  Button,
  StyledListItem,
} from "./styles";

const ListItem = () => {
  const { handleClick, handleMouseEnter, handleMouseLeave, variant, disabled } =
    useGetVariant();
  /*   const [selected, setSelected] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [selectedUnHovered, setSelectedUnHovered] = useState(false);
  const [variant, setVariant] = useState();

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
  }); */

  return (
    <StyledListItem>
      <Card
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        state={variant}
        disabled={disabled}
      >
        <CardInner>
          <Label>Сказочное заморское яство</Label>
          <Title>
            Нямушка<span>с фуа-гра</span>
          </Title>
          <AdditionalInfo>
            <span>
              <b>10</b> порций
            </span>
            <span>
              <b></b>мышь в подарок
            </span>
          </AdditionalInfo>
          <Circle state={variant}>
            <p>
              0,5
              <span>кг</span>
            </p>
          </Circle>
        </CardInner>
      </Card>
      <Order>
        Чего сидишь? Порадуй котэ, <Button state={variant}>купи</Button>
      </Order>
    </StyledListItem>
  );
};

export default ListItem;
