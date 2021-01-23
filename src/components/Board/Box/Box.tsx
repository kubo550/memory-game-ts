import { BoxType } from "../Board";
import { BoxContainer } from "./Box.style";

type BoxPtops = {
  box: BoxType;
  onClick: () => void;
};
const Box: React.FC<BoxPtops> = ({ box, onClick }) => {
  return (
    <BoxContainer isHidden={box.hidden} isRevealed={box.revealed} onClick={onClick}>
      <img
        style={{
          width: "100%",

          objectFit: "fill",
        }}
        src={
          box.revealed
            ? box.value
            : "https://static.wikia.nocookie.net/breakingbad/images/e/e7/BB-S5B-Walt-590.jpg/revision/latest?cb=20130928055404"
        }
        alt={box.value}
      />
    </BoxContainer>
  );
};

export default Box;
