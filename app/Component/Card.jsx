const Card = ({e}) => {
  return (
    <div className="h-[150px] w-[500px] m-4 p-4 flex flex-col rounded-lg shadow bg-white shadow-slate-100 hover:bg-blue-200">

    <div className="flex gap-2 justify-between">

         {/* Train Name  */}
        <div className="flex gap-1">
        <p className="text-left text-black text-2xl font-bold">{e.trainName}</p>
        <p className="text-left text-black text-2xl font-bold">({e.trainNumber})</p>
        </div>

        {/* depature time */}
        <div className="flex">
    <p className="text-black text-lg">Departure </p>
    <p className="text-black text-lg">: {e.departureTime.Hours}:{e.departureTime.Minutes}:{e.departureTime.Seconds}</p>
    </div>

    </div>
    
    <div className="flex flex-col">

    <div className="flex text-black text-lg">

          <p className="bg-light-blue-300 py-2 px-4 w-32 rounded-lg">
              Sleeper : {e.seatsAvailable.sleeper}
          </p>
    <div>
          <p className="bg-light-green-300 py-2 px-4 w-32 rounded-lg">
              AC : {e.seatsAvailable.AC}
          </p>
      </div>
    </div>
    </div>

    <div className="text-black text-lg flex gap-2">
      <p className="opacity-80">Delayed by</p>
      <p>{e.delayedBy}(IST)</p>
    </div>

  </div>  
  )
}

export default Card;
