import { BoardContainer } from "./Board.styles";
import Box from "./Box/Box";

export type BoxType = {
  value: string;
  revealed: boolean;
  hidden: boolean;
};

type BoardProps = {
  array: BoxType[];
  width: number;
  height: number;
  onClick: (idx: number) => void;
  string?: boolean;
};

const Board: React.FC<BoardProps> = ({ width, height, array, onClick }) => {
  return (
    <BoardContainer width={width} height={height}>
      {array.map((box, i) => (
        <Box key={i} box={box} onClick={() => onClick(i)} />
      ))}
    </BoardContainer>
  );
};

export default Board;
