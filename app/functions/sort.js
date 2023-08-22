export function sortdata(data)
{
    data.sort((a, b) => {
        const priceA = a.price.sleeper + a.price.AC;
        const priceB = b.price.sleeper + b.price.AC;
        if (priceA !== priceB) {
          return priceA - priceB;
        }
        const ticketsA = a.seatsAvailable.sleeper + a.seatsAvailable.AC;
        const ticketsB = b.seatsAvailable.sleeper + b.seatsAvailable.AC;
        if (ticketsA !== ticketsB) {
          return ticketsB - ticketsA;
        }
      
        const departureTimeA = a.departureTime.Hours * 60 + a.departureTime.Minutes;
        const departureTimeB = b.departureTime.Hours * 60 + b.departureTime.Minutes;
        return departureTimeA - departureTimeB;
      });
}