import { PropsWithChildren, createContext, useState, useContext } from "react";
import { Track } from "../types";

type PlayerContextType = {
  track?: Track | undefined;
  setTrack: (track: Track) => void;
};

const PlayerContext = createContext<PlayerContextType>({
  setTrack: () => {},
});

export default function PlayerProvider({ children }: PropsWithChildren) {
  const [track, setTrack] = useState<Track>();

  return (
    <PlayerContext.Provider value={{ track, setTrack }}>
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayerContext() {
  return useContext(PlayerContext);
}
