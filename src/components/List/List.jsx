import React from "react";
import data from "../../data";
import ListItem from "../list-item/ListItem";
import { StyledList } from "./styles";

const List = () => {
  return (
    <StyledList>
      {data.map((item) => (
        <ListItem data={item} />
      ))}
    </StyledList>
  );
};

export default List;
