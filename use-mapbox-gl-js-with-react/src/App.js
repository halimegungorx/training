import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiaGd1bmdvciIsImEiOiJjbGhzYWZydWcwbmYzM2lvYWZrMnRjc3lnIn0.6qtKL43P-0kBeyyyFrUXYg';

export default function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [hedefKonum, setHedefKonum] = useState(null);
  const [longitude, setLongitude] = useState(0); // longitude for starting position
  const [latitude, setLatitude] = useState(0); // Latitude for starting position

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [longitude, latitude], // starting position
      zoom: 9
    });
  }, [longitude, latitude]);

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize

    // target location is selected
    if (hedefKonum) {
      // add the marker
      const marker = new mapboxgl.Marker().setLngLat(hedefKonum).addTo(map.current);
      // zoom
      map.current.flyTo({ center: hedefKonum, zoom: 10 });
    }
  }, [hedefKonum]);

  return (
    <div>
      <div className="sidebar">
        Hedef Konum:
        {hedefKonum && (
          <span>
            Longitude: {hedefKonum[0].toFixed(4)} | Latitude: {hedefKonum[1].toFixed(4)}
          </span>
        )}
      </div>
      <div ref={mapContainer} className="map-container" />
      <button onClick={() => setHedefKonum([longitude, latitude])}>
        Hedef Konumu Seç
      </button>
    </div>
  );
}
