import styled from "styled-components"

interface BoxContainerProps {
    isRevealed: boolean,
    isHidden: boolean
}

export const BoxContainer = styled.div<BoxContainerProps>`
    width: 100%;
    opacity: ${({ isHidden }) => isHidden ? '0' : '1'};
    /* background-color: ${({ isRevealed }) => isRevealed ? "pink" : 'rgb(80, 0, 166)'}; */
    /* background: linear-gradient(40deg, ${({ isRevealed }) => isRevealed ? "rgba(33,198,99,0.7)" : "rgba(80,0,166,0.7)"} 21%, ${({ isRevealed }) => isRevealed ? "rgba(33,198,99,0.7)" : "rgba(115,166,0,0.7)"} 100%); */
    position: relative;
    overflow: hidden;
`;