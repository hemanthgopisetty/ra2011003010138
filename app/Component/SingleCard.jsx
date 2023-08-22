import React from 'react'

const SingleCard = ({e}) => {
  return (
    <div className="h-[200px] w-[500px] m-1 p-5 flex flex-col rounded-xl  shadow bg-white shadow-black/50 
    hover:bg-gray-50 justify-between">

    <div className="flex gap-2 justify-between">

         {/* Train Name  */}
        <div className="text-black">
            <p className=" text-3xl font-bold">{e.trainName} 
                  <sub className="text-sm font-bold">({e.trainNumber})</sub>
            </p>
        </div>

        {/* depature time */}
      <div className="flex flex-col text-sm">

        <p className="text-black  font-bold">
          Departure : {e.departureTime.Hours} : {e.departureTime.Minutes} : {e.departureTime.Seconds}
          </p>

        <div className="text-black text-xs flex gap-2">
          <p className="opacity-80">Delayed by</p>
          <p>{e.delayedBy} (IST) </p>
        </div>
    
       </div>

    </div>
    
    <div className="flex justify-between ">

      {/* Sleepers */}
       {/* <div className="text-lg  bg-blue-200 rounded-lg p-2 m-2 w-36">
          <p className="font-medium">Sleeper</p>
          <p className="text-sm">
              Seats : {e.seatsAvailable.sleeper}
              <sub className="text-xs"> ${e.price.sleeper}</sub>
          </p>
       </div> */}

       {/* <div className="text-lg  bg-green-200 rounded-lg p-2 m-2 w-36">
          <p className="font-medium">AC</p>
          <p className="text-sm">
              Seats : {e.seatsAvailable.sleeper}
              <sub className="text-xs"> ${e.price.sleeper}</sub>
          </p>
       </div> */}
    </div>
  </div>  
  )
}

export default SingleCard
