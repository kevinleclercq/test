import { useEffect, useRef, useState } from 'react';

function Map({ center, zoom, markers }) {
  const mapRef = useRef(null);
  const [mapInstance, setMapInstance] = useState(null);

  useEffect(() => {
    const mapOptions = {
      center,
      zoom,
      mapTypeControl: false,
      fullscreenControl: false,
      streetViewControl: false,
      zoomControl: true,
    };

    console.log('mark', markers);


    const map = new window.google.maps.Map(mapRef.current, mapOptions);
    setMapInstance(map);

    return () => {
      window.google.maps.event.clearInstanceListeners(map);
    };
  }, [center, zoom]);

  useEffect(() => {
    if (!mapInstance) {
      return;
    }
    const markersArray =
      Array.isArray(markers) ? markers : typeof markers === "object" && markers !== null ? [markers] : [];

    const googleMarkers = markersArray.map((marker) => {
      const title = marker.name;
      const position = {
        lat: marker.address.location.coordinates[1],
        lng: marker.address.location.coordinates[0],
      };
      return new window.google.maps.Marker({
        position,
        map: mapInstance,
        title,
      });
    });

    return () => {
      googleMarkers.forEach((marker) => {
        marker.setMap(null);
      });
    };
  }, [mapInstance, markers]);

  return <div ref={mapRef} style={{ height: '100%', width: '100%' }}></div>;
}

export default Map;
