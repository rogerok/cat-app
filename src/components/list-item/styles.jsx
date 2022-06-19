import styled, { css } from "styled-components";
import catBackgound from "../../assets/cat.png";

const disabledStyle = css`
  filter: grayscale(100%);
  cursor: none;
`;

const getDisabledStyle = (props) => {
  if (props.disabled === true) return disabledStyle;
};

export const StyledListItem = styled.li`
  width: calc((320 / 1120) * 100%);
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 80px;
  margin-bottom: 14px;
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
export const CardInner = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  height: 100%;
  padding: 20px 10px 16px 45px;
  border-radius: 10px;
  clip-path: polygon(15% 0%, 100% 0%, 100% 100%, 0 100%, 0 10%);
  background-color: #ffffff;
  background-image: url(${catBackgound});
  background-repeat: no-repeat;
  background-position: -18px 240px;
  background-size: contain;
`;

export const Label = styled.h4`
  margin-bottom: 20px;
  color: #666666;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: calc((16 / 14) * 1rem);
`;

export const Title = styled.h3`
  font-size: calc((48 / 14) * 1rem);
  font-weight: 700;
  margin-bottom: 18px;
  span {
    display: block;
    font-size: calc((24 / 14) * 1rem);
    font-weight: 700;
  }
`;

export const AdditionalInfo = styled.p`
  color: #666666;
  font-size: calc((16 / 14) * 1rem);
  margin-bottom: 214px;
  span {
    display: block;
  }
`;

export const Circle = styled.div`
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

export const Order = styled.p`
  font-size: 13px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

export const Button = styled.button`
  border: 0;
  padding: 0;
  background: transparent;
  color: ${(props) => props.theme.state[props.state]};
  text-decoration: underline dotted;
`;
