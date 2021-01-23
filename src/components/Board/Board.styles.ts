import styled from "styled-components"
interface BoardProps {
    width: number;
    height: number;
}
export const BoardContainer = styled.div<BoardProps>`
    display: grid;
    grid-template: repeat(${({ height }) => height}, 1fr) / repeat(${({ width }) => width}, 1fr);
    gap: 2px;
`;