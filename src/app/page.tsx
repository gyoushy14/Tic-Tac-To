// npm run dev
"use client";

import { useEffect, useState } from "react";
import Cell from "./components/cell";
import RefreshButton from "./components/refresh";
const wins=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
]

function Home() {
  const [cell, setcell] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setgo] = useState("circle");
  const [winmessage,setwinmessage]=useState("");
useEffect(()=>{
wins.forEach((combo)=>{
  const circ_wins = combo.every((celll)=>cell[celll]=== 'circle' )
  const cross_wins = combo.every((celll)=>cell[celll]=== 'cross' )
  if (circ_wins) {
    setwinmessage("Circle Wins ")
  }else if (cross_wins){
    setwinmessage("Cross Wins ")
  }
})
},[cell])
useEffect(()=>{
if (cell.every((celll)=> celll !== "") && !winmessage){
  setwinmessage("Draw ")
}
},[winmessage,cell]);

return (
    <main className="flex  flex-col items-center justify-between mt-5">
      <h1 className=" font-bold text-4xl mb-5 bg-white rounded p-2 text-black">Tic-Tac-Toc</h1>
      <div className="border-solid border-4 border-white w-96 h-96 rounded flex justify-center flex-wrap">
        {cell.map((cel, index) => (
          <Cell
            id={index}
            go={go}
            setgo={setgo}
            key={index}
            cells={cell}
            setcells={setcell}
            cel={cel}
            winmessage={winmessage}
          />
        ))}
                  <RefreshButton />
      </div>

      <div className="mt-16 font-bold">
      <div className="mt-4 text-3xl">{winmessage}</div>
      {!winmessage && <div className="mt-4 text-3xl">{`Its now ${go} turn`}</div>}
      </div>

    </main>

  );
}

export default Home;
