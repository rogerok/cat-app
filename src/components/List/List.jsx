import React from "react";
import styled from "styled-components";

import ListItem from "../list-item/ListItem";

export const StyledList = styled.ul`
  display: flex;
  color: #000000;
`;

const List = () => {
  return (
    <StyledList>
      <ListItem></ListItem>
    </StyledList>
  );
};

export default List;
