import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
 
mapboxgl.accessToken = 'pk.eyJ1IjoiaGFkYXJhayIsImEiOiJjbHQ0NTI1ZjExcXhxMmxucjA1ejBhZWMwIn0.O_97toRcaOU6xQKII4do3w';
 

function MapBox({lng_, lat_}) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(lng_);
  const [lat, setLat] = useState(lat_);
  const [zoom, setZoom] = useState(15);
 
  useEffect(() => {
    if (map.current) return; // initialize map only once
      map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/hadarak/clt5jx9ty002o01qreqighz8r',
      center: [lng_, lat_],
      zoom: zoom,
    });
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
      });
    map.current.on('click', (event) => {
        // If the user clicked on one of your markers, get its information.
        const features = map.current.queryRenderedFeatures(event.point, {
          layers: ['rock'] // replace with your layer name
        });
        if (!features.length) {
          return;
        }
        const feature = features[0];
        const popup = new mapboxgl.Popup({ offset: [0, -15] })
          .setLngLat(feature.geometry.coordinates)
          .setHTML(
            `<h3>${feature.properties.name}</h3><p></p>`
          )
          .addTo(map.current);
      });
  }, [lng_, lat_, zoom]);


    

  return (
    <div>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}

export default MapBox;