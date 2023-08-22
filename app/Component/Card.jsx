const Card = ({e}) => {
  return (
    <div className="h-[500px] min-h-[400px] font-sans">

    <div className="flex gap-2">
        <p className="tnam text-left text-black text-2xl font-bold">{e.trainName}</p>
        <p className="tno text-left text-black text-2xl font-bold">({e.trainNumber})</p>
    </div>
    
    <p className="dptm text-left text-black text-lg">Departure : {e.departureTime.Hours}</p>
    
    <div className="flex gap-10 text-black text-lg">
      <div>
          <p className="bg-light-blue-300 py-2 px-4 w-32 rounded-lg">
              Sleeper  <br/> {e.seatsAvailable.sleeper}
          </p>
      </div>
      <div>
          <p className="bg-light-green-300 py-2 px-4 w-32 rounded-lg">
              AC <br/> {e.seatsAvailable.AC}
          </p>
      </div>
    </div>

    <div className="text-black text-lg">
      <p className="opacity-80">Delayed by</p>
      <p>{e.delayedBy}(IST)</p>
    </div>
</div>
  )
}

export default Card;
