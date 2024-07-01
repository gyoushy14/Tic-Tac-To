import { Dispatch, SetStateAction } from "react";

type pop = {
  id: number;
  go: string;
  setgo: Dispatch<SetStateAction<string>>;
  cells: string[];
  setcells: Dispatch<SetStateAction<string[]>>;
  cel: string;
  winmessage: string;
};

const cellapp = ({ go, setgo, id, cells, setcells, cel, winmessage }: pop) => {
  const click = () => {
    if (winmessage) {
      return;
    }
    let nottaken = !cells[id];
    if (nottaken) {
      if (go === "circle") {
        cellchalange("circle");
        setgo("cross");
      } else if (go === "cross") {
        cellchalange("cross");
        setgo("circle");
      }
    }
  };
  const cellchalange = (val: string) => {
    let copycells = [...cells];
    copycells[id] = val;
    setcells(copycells);
  };
  return (
    <div
      className=" border-4 border-white square flex items-center text-center justify-center"
      onClick={click}
    >
      <div className=" text-5xl font-bold">
        <div className={cel}>{cel ? (cel === "circle" ? "O" : "X") : ""}</div>
      </div>
    </div>
  );
};
export default cellapp;
