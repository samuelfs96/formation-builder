import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import { animations } from "@formkit/drag-and-drop";
import { players } from "../utils/players";
import { useMemo } from "react";

function useDraggablePlayers({ starts }) {
  const gkconfig = (parent) => {
    console.log(parent);
    return !(parent.data.enabledNodes.length + 1 > 2);
  };
  const config = (parent) => {
    return !(parent.data.enabledNodes.length + 1 > 5);
  };
  const starterPlayers = useMemo(
    () => players.filter((player) => starts.includes(player.number)),
    [starts]
  );
  const subPlayers = useMemo(
    () => players.filter((player) => !starts.includes(player.number)),
    [starts]
  );

  const [gkzone, goalkeeper] = useDragAndDrop(
    starterPlayers.filter((player) => player.position === "goalkeeper"),
    {
      accepts: gkconfig,
      group: "subzone",
      plugins: [animations()],
    }
  );
  const [defzone, defenders] = useDragAndDrop(
    starterPlayers.filter((player) => player.position === "defender"),
    {
      accepts: config,
      group: "subzone",
      plugins: [animations()],
    }
  );
  const [midzone, midfielders] = useDragAndDrop(
    starterPlayers.filter((player) => player.position === "midfielder"),
    {
      accepts: config,
      group: "subzone",
      plugins: [animations()],
    }
  );
  const [fwzone, forwards] = useDragAndDrop(
    starterPlayers.filter((player) => player.position === "forward"),
    {
      accepts: config,
      group: "subzone",
      plugins: [animations()],
    }
  );
  const [subzone, subslist] = useDragAndDrop(subPlayers, {
    group: "subzone",
    plugins: [animations()],
  });

  const starters = {
    gk: { ref: gkzone, items: goalkeeper },
    def: { ref: defzone, items: defenders },
    mid: { ref: midzone, items: midfielders },
    fw: { ref: fwzone, items: forwards },
  };

  const subs = { ref: subzone, items: subslist };

  return {
    starters,
    subs,
  };
}

export default useDraggablePlayers;
