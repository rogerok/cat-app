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
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: url(${background}) center center no-repeat;
`;
export const Section = styled.section`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 36px 80px 67px 80px;
`;
export const MainHeader = styled.h1`
  margin-bottom: 24px;
  text-align: center;
  font-size: calc((36 / 14) * 1rem);
`;
