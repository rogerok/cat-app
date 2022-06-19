import React, { useState } from "react";

import {
  AdditionalInfo,
  Circle,
  ListItemInner,
  Label,
  StyledListItem,
  Title,
} from "./styles";

const ListItem = () => {
  const [selected, setSelected] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [selectedUnHovered, setSelectedUnHovered] = useState(false);

  const handleClick = () => {
    setSelected((prev) => !prev);
  };

  const handleMouseEnter = () => {
    if (!selected) setHovered(true);
  };
  const handleMouseLeave = () => {
    if (selected && hovered) setSelectedUnHovered((prev) => !prev);
    if (!selected && hovered) setHovered(false);
  };
  console.log(selected, hovered, selectedUnHovered);

  return (
    <StyledListItem
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      state={(hovered, selected, selectedUnHovered)}
    >
      <ListItemInner>
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
        <Circle>
          <p>
            0,5
            <span>кг</span>
          </p>
        </Circle>
      </ListItemInner>
    </StyledListItem>
  );
};

export default ListItem;
