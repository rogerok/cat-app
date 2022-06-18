import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import TrebuchetMSRegular from "./fonts/TrebuchetMS.woff";
import TrebuchetMSBold from "./fonts/TrebuchetMS-Bold.woff";

export default createGlobalStyle`
    ${reset}
    @font-face {
    font-family: 'Trebuchet MS Regular';
    src: local('Trebuchet MS Regular'), local('TrebuchetMSRegular'),
    url(${TrebuchetMSRegular}) format('woff');
    font-weight: 400;
    font-style: normal;
    }
    @font-face {
    font-family: 'Trebuchet MS Bold';
    src: local('Trebuchet MS Bold'), local('TrebuchetMSBold'),
    url(${TrebuchetMSBold}) format('woff');
    font-weight: 700;
    font-style: normal;
    }
    font-family: 'Trebuchet', sans-serif;
    font-size: 14px;
`;

export const Container = styled.div``;
export const MainHeading = styled.h1``;
export const Heading = styled.h3;
