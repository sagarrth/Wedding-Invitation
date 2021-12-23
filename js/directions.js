export default function initDirections() {
  const directionsNode = document.getElementById('directions');

  const prepareDirectionsFromCurrentLocation = ({coords: {latitude, longitude}}) => {
    const url = `https://www.google.com/maps/dir/?api=1&parameters=origin=${latitude},${longitude}&destination=asmibanquet&travelmode=driving`;
    directionsNode.setAttribute('href', url);
  }

  setTimeout(() => {
    navigator.geolocation.getCurrentPosition(prepareDirectionsFromCurrentLocation);
  }, 3000);
}
