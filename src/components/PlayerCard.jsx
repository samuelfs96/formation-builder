export default function PlayerCard({
    playername,
    country,
    img
}) {
  return (
    <div className="rounded-lg bg-mci_blue relative w-[90px] h-[120px] shadow-md">
        <img src={country} alt="country_img" className="absolute left-[-15px] top-[60px] z-10" />
        <img src={img} alt="player_img" className="absolute top-[-15px]"/>
        <div className="pb-1 absolute bottom-0 left-0 w-full bg-[#6697c5] rounded-br-lg">
            <h2 className="text-center text-white font-bold">{playername.last}</h2>
        </div>
    </div>
  )
}
