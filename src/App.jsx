import "./App.css";
import PlayerCard from "./components/PlayerCard";
import countryimg from "./assets/img/countries/BE.png";
import playerimg from "./assets/img/players/17.png";
import Aside from "./components/Aside";

function App() {
  return (
    <div>
      <div className="bg-bg_premier w-screen h-screen bg-center bg-cover"></div>
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full pt-8 flex gap-8">
        <div className="flex flex-col gap-y-12 w-[66%]">
          <div className="flex justify-center items-center gap-x-24">
            <PlayerCard
              playername={{
                first: "Kevin",
                last: "De Bruyne",
              }}
              country={countryimg}
              img={playerimg}
            />
          </div>
          <div className="flex justify-center items-center gap-x-24">
            <PlayerCard
              playername={{
                first: "Kevin",
                last: "De Bruyne",
              }}
              country={countryimg}
              img={playerimg}
            />
            <PlayerCard
              playername={{
                first: "Kevin",
                last: "De Bruyne",
              }}
              country={countryimg}
              img={playerimg}
            />
            <PlayerCard
              playername={{
                first: "Kevin",
                last: "De Bruyne",
              }}
              country={countryimg}
              img={playerimg}
            />
            <PlayerCard
              playername={{
                first: "Kevin",
                last: "De Bruyne",
              }}
              country={countryimg}
              img={playerimg}
            />
          </div>
          <div className="flex justify-center items-center gap-x-24">
            <PlayerCard
              playername={{
                first: "Kevin",
                last: "De Bruyne",
              }}
              country={countryimg}
              img={playerimg}
            />
            <PlayerCard
              playername={{
                first: "Kevin",
                last: "De Bruyne",
              }}
              country={countryimg}
              img={playerimg}
              isCaptain
            />
            <PlayerCard
              playername={{
                first: "Kevin",
                last: "De Bruyne",
              }}
              country={countryimg}
              img={playerimg}
            />
          </div>
          <div className="flex justify-center items-center gap-x-24">
            <PlayerCard
              playername={{
                first: "Kevin",
                last: "De Bruyne",
              }}
              country={countryimg}
              img={playerimg}
            />
            <PlayerCard
              playername={{
                first: "Kevin",
                last: "De Bruyne",
              }}
              country={countryimg}
              img={playerimg}
            />
            <PlayerCard
              playername={{
                first: "Kevin",
                last: "De Bruyne",
              }}
              country={countryimg}
              img={playerimg}
            />
          </div>
        </div>
        <div className="w-[33%]">
          <Aside/>
        </div>
      </div>
    </div>
  );
}

export default App;
