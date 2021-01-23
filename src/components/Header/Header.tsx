import { Typography } from "@material-ui/core";
import { HeaderWrapper } from "./Header.styles";

interface HeaderProps {
  moves: number;
}

const Header: React.FC<HeaderProps> = ({ moves }) => {
  return (
    <HeaderWrapper>
      <Typography variant='h4'>⏱ 00:00</Typography>

      <Typography variant='h4'>Memory Game</Typography>

      <Typography variant='h4'>🧠 {moves}</Typography>
    </HeaderWrapper>
  );
};

export default Header;
