export default function PlayerCard({ playername, country, img, isCaptain }) {
  return (
    <div className="rounded-lg bg-mci_blue relative w-[90px] h-[120px] shadow-md">
      <img
        src={country}
        alt="country_img"
        className="absolute left-[-15px] top-[60px] z-10"
      />
      {isCaptain && (
        <div className="rounded-sm absolute right-[-10px] top-[60px] z-10 w-[25px] h-[25px] border-mci_blue bg-white border-y-4 flex justify-center items-center">
          <span className="text-mci_blue mb-[4.5px] font-bold text-lg">c</span>
        </div>
      )}
      <img src={img} alt="player_img" className="absolute top-[-15px]" />
      <div className="pb-1 absolute bottom-0 left-0 w-full bg-mci_blue_dark rounded-br-lg">
        <h2 className="text-center text-white font-bold">{playername.last}</h2>
      </div>
    </div>
  );
}
