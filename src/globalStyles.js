import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import background from "./assets/background.png";
import TrebuchetMSRegular from "./fonts/TrebuchetMS.woff";
import TrebuchetMSBold from "./fonts/TrebuchetMS-Bold.woff";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
      font-family: 'Trebuchet MS';
      font-style: normal;
      font-weight: 400;
      src: local(''), local(''),
      url(${TrebuchetMSRegular}) format('woff');
  }
  @font-face {
      font-family: 'Trebuchet MS';
      font-style: normal;
      font-weight: 700;
      src: local(''), local(''),
      url(${TrebuchetMSBold}) format('woff');
  }
  html {
      background-color: #000000;
      font-family: 'Trebuchet MS', sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      color: #FFFFFF;
      background: url(${background}) no-repeat center center fixed;
      background-size: cover;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 1280px;
  width: 100%;
  @media (max-width: 961px) {
    width: 100%;
  }
`;
export const Section = styled.section`
  align-self: center;
  width: 100%;
  max-width: 1120px;
  padding: 37px 80px 70px 80px;
  @media (max-width: 961px) {
    max-width: 800px;
    padding: 20px 40px;
  }
`;
export const MainHeader = styled.h1`
  margin-bottom: 5px;
  text-align: center;
  font-size: calc((36 / 14) * 1rem);
  font-weight: 400;
`;
