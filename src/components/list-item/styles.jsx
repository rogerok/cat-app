import styled, { css } from "styled-components";
import catBackgound from "../../assets/cat.png";

const getListItemsStyle = ({ selected, hovered, selectedHovered, theme }) => {
  if (!selected && !hovered) return "default";
  if (!selected && hovered) return "defaultHover";
  if (selected && !hovered) return "selected";
  if (selectedHovered) return "selectedHovered";
  return "default";
};

const getListItemsStyle2 = ({ state, theme }) => {
  const { selected, hovered, selectedUnHovered } = state;
  /*   console.log(
    `selected: ${selected}`,
    `hovered: ${hovered}`,
    `selectedUnHovered: ${selectedUnHovered}`,
    theme
  ); */

  /*   if (selected && !hovered && selectedUnHovered)
    return theme.state.selectedUnHovered;
  if (!selected && !hovered) return theme.state.default;
  if (!selected && hovered) return theme.state.defaultHovered;
  if (selected && hovered) return theme.state.selected;
  if (selected && !hovered && !selectedUnHovered) return theme.state.selected;
 */
  /*   return theme.state.default;
   */
};

const getListItemsStyle3 = (theme) => theme.state.selected;
const disabledStyle = css`
  filter: grayscale(100%);
  cursor: none;
`;

const getDisabledStyle = (props) => {
  if (props.disabled === true) return disabledStyle;
};

export const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  margin-right: 80px;
  width: calc((320 / 1280) * 100%);
  /*  height: 477px; */
  clip-path: polygon(15% 0%, 100% 0%, 100% 100%, 0 100%, 0 10%);
  border: 3px solid ${(props) => props.theme.state[props.state]};

  border-radius: 10px;
  background-color: ${(props) => props.theme.state[props.state]};
  ${getDisabledStyle}
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
`;
export const ListItemInner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  height: 100%;
  padding: 21px 16px 16px 4rem;
  border-radius: 10px;
  clip-path: polygon(15% 0%, 100% 0%, 100% 100%, 0 100%, 0 10%);
  background-color: #ffffff;
  background-image: url(${catBackgound});
  background-repeat: no-repeat;
  background-position: -18px 240px;
  background-size: contain;
`;

export const Label = styled.h4`
  margin-bottom: 12px;
  color: #666666;
  font-size: calc((16 / 14) * 1rem);
`;

export const Title = styled.h3`
  font-size: calc((48 / 14) * 1rem);
  font-weight: 700;
  margin-bottom: calc((20 / 14) * 1rem);
  span {
    display: block;
    font-size: calc((24 / 14) * 1rem);
    font-weight: 700;
  }
`;

export const AdditionalInfo = styled.p`
  color: #666666;
  font-size: calc((16 / 14) * 1rem);
  margin-bottom: 221px;
  span {
    display: block;
  }
`;

export const Circle = styled.div`
  /*   position: absolute;
  right: 16px;
  bottom: 16px; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  margin: auto 0 0 auto;
  background-color: ${(props) => props.theme.state[props.state]};
  border-radius: 100%;
  text-align: center;
  color: white;
  p {
    position: absolute;
    font-size: calc((42 / 14) * 1rem);
  }
  span {
    display: block;
    font-size: calc((20 / 14) * 1rem);
  }
`;
