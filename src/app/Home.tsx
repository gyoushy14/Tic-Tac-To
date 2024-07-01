"use client";
import { useState } from "react";
import Cell from "./components/cell";

export default function Home() {
  const [cell, setcell] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setgo] = useState("circle");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="border-solid border-4 border-white w-96 h-96 rounded flex justify-center flex-wrap">
        {cell.map((cell, index) => (
          <Cell
            id={index}
            go={go}
            setgo={setgo}
            cel={cell}
            setcells={setcell}
            key={index} cells={[]} winmessage={""}          />
        ))}
      </div>
    </main>
  );
}
