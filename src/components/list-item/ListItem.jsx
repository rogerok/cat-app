import React from "react";
import useGetVariant from "../../hooks/useGetVariant";

import {
  AdditionalInfo,
  Circle,
  CardInner,
  Label,
  Card,
  Title,
  Description,
  Button,
  StyledListItem,
} from "./styles";

const ListItem = ({ data }) => {
  const {
    handleClick,
    handleMouseEnter,
    handleMouseLeave,
    variant,
    disabled,
    selected,
  } = useGetVariant(data.stock);

  const labelText =
    variant === "selectedUnHovered"
      ? "Котэ не одобряет?"
      : "Сказочное заморское яство";

  const getDescriptionContent = () => {
    if (disabled) return `Печалька, ${data.taste} закончился`;
    if (selected) return data.description;
    if (!selected)
      return (
        <>
          Чего сидишь? Порадуй котэ,
          <Button state={variant} onClick={handleClick}>
            купи
          </Button>
        </>
      );
  };

  const descriptionContent = getDescriptionContent();

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
          <Label>{labelText}</Label>
          <Title>
            Нямушка<span>{data.taste}</span>
          </Title>
          <AdditionalInfo>
            <span>
              <b>{data.portions}</b> порций
            </span>
            <span>{data.gift}</span>
          </AdditionalInfo>
          <Circle state={variant}>
            <p>
              {data.weight}
              <span>кг</span>
            </p>
          </Circle>
        </CardInner>
      </Card>
      <Description disabled={disabled}>{descriptionContent}</Description>
    </StyledListItem>
  );
};

export default ListItem;
