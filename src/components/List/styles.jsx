import styled from "styled-components";

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  grid-gap: 80px;
  color: #000000;
  padding-top: 30px;
  @media (max-width: 961px) {
    grid-gap: 6rem;
    align-items: start;
    & li:first-child {
      grid-column-start: 1;
      grid-column-end: 4;
    }
    & li:nth-child(2) {
      grid-column-start: 1;
      grid-column-end: 2;
    }
    & li:nth-child(3) {
      grid-column-start: 2;
      grid-column-end: 4;
    }
  }
  @media (max-width: 480px) {
    display: block;
  }
`;
