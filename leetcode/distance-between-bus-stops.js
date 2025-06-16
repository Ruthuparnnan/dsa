function distanceBetweenBusStops(distance, start, destination) {
  if (start > destination) [start, destination] = [destination, start];

  let clockWiseDistance = 0;
  let totalDistance = 0;

  for (let i = 0; i < distance.length; i++) {
    if (i >= start && i < destination) {
      clockWiseDistance += distance[i];
    }

    totalDistance += distance[i];
  }

  const antiClockWiseDistance = totalDistance - clockWiseDistance;

  return Math.min(clockWiseDistance, antiClockWiseDistance);
}
