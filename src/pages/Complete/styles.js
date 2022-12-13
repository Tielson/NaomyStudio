import styled from "styled-components";

export const Container = styled.div`


height: 100vh;

scroll-behavior: smooth;

::-webkit-scrollbar-track {
background-color: transparent;
}
::-webkit-scrollbar {
background: transparent;
width: 1.0rem;   
}
::-webkit-scrollbar-thumb {
border-radius: 1.0rem;
background: ${({theme}) => theme.COLORS.PANTONE_1};
}
`