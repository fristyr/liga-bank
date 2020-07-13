import React, { FC, useState, useRef, useEffect } from 'react';
import * as mapboxgl from 'mapbox-gl';

export const MapBoxCustom: FC = () => {
  const mapboxElRef = useRef(null); // DOM element to render map

  // Initialize our map
  useEffect(() => {
    // You can store the map instance with useRef too
    const map = new mapboxgl.Map({
      container:' mapboxElRef.current',
      style: 'mapbox://styles/notalemesa/ck8dqwdum09ju1ioj65e3ql3k',
      center: [16, 27], // initial geo location
      zoom: 2, // initial zoom
    });

    // Add navigation controls to the top right of the canvas
    map.addControl(new mapboxgl.NavigationControl());
  }, []);

  return <div className="mapBox" ref={mapboxElRef} />;
};
