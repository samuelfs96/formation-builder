import "./App.css";
import PlayerCard from "./components/PlayerCard";

import Aside from "./components/Aside";
import useDraggablePlayers from "./hooks/useDraggablePlayers";
import { useMemo } from "react";

function App() {
  const STARTS = useMemo(() => [31, 2, 3, 24, 6, 47, 16, 17, 20, 9, 19], []);
  const {
    starters: { gk, def, mid, fw },
    subs
  } = useDraggablePlayers({ starts: STARTS });

  return (
    <div>
      <div className="bg-bg_premier w-screen h-screen bg-center bg-cover"></div>
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full pt-8 flex gap-8">
        <div className="flex flex-col gap-y-12 w-[66%]">
          <div
            ref={gk.ref}
            className="flex justify-center items-center gap-x-24 h-[120px]"
          >
            
            {gk.items.map((player) => (
              <PlayerCard
                key={player.number}
                playername={{
                  first: player.firstName,
                  last: player.lastName,
                }}
                country={player.country}
                img={player.img}
                isCaptain={player?.isCaptain}
              />
            ))}
            
          </div>
          <div
            ref={def.ref}
            className="flex justify-center items-center gap-x-24 h-[120px]"
          >
            {def.items.map((player) => (
              <PlayerCard
                key={player.number}
                playername={{
                  first: player.firstName,
                  last: player.lastName,
                }}
                country={player.country}
                img={player.img}
                isCaptain={player?.isCaptain}
              />
            ))}
          </div>
          <div
            ref={mid.ref}
            className="flex justify-center items-center gap-x-24 h-[120px]"
          >
            {mid.items.map((player) => (
              <PlayerCard
                key={player.number}
                playername={{
                  first: player.firstName,
                  last: player.lastName,
                }}
                country={player.country}
                img={player.img}
                isCaptain={player?.isCaptain}
              />
            ))}
          </div>
          <div
            ref={fw.ref}
            className="flex justify-center items-center gap-x-24 h-[120px]"
          >
            {fw.items.map((player) => (
              <PlayerCard
                key={player.number}
                playername={{
                  first: player.firstName,
                  last: player.lastName,
                }}
                country={player.country}
                img={player.img}
                isCaptain={player?.isCaptain}
              />
            ))}
          </div>
        </div>
        <div className="w-[33%]">
          <Aside players={subs} />
        </div>
      </div>
    </div>
  );
}

export default App;
