import React, { FC, useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { cities } from './data';
import './MapBoxCustom.scss';

interface Props {
  countries: {
    russia: boolean;
    sng: boolean;
    europa: boolean;
  };
}

export const MapBoxCustom: FC<Props> = ({ countries }) => {
  const [viewport, setViewport] = useState({
    latitude: 51.60609795796509,
    longitude: 46.470268747132216,
    zoom: 2.91984440124643,
  });
  const [selectedCity, setSelectedCity] = useState<any>(null);

  useEffect(() => {
    if (countries.russia)
      setViewport({
        latitude: 55.68198844838635,
        longitude: 56.14266938202361,
        zoom: 3.923957425514986,
      });
  }, [countries]);

  let size = 40;
  return (
    <div>
      {console.log(viewport)}
      <ReactMapGL
        width="100%"
        height="460px"
        mapStyle="mapbox://styles/fristyr/ckclpx3ha0w2f1imowm8uiduk"
        mapboxApiAccessToken="pk.eyJ1IjoiZnJpc3R5ciIsImEiOiJja2Nna3J4eDQwNDllMnBvM3FzZTljOTZ1In0.U22CKeBPhN6XP3pLR3h9OQ"
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        {cities.map(({ coordinates }) => (
          <Marker
            latitude={coordinates.latitude}
            longitude={coordinates.longitude}
          >
            <div
              style={{ transform: `translate(${-size / 2}px,${-size}px)` }}
              onClick={(e) => {
                setSelectedCity(coordinates);
              }}
            >
              <img
                src={process.env.PUBLIC_URL + '/assets/location.svg'}
                alt="Location-icon"
              />
            </div>
          </Marker>
        ))}

        {selectedCity && (
          <Popup
            latitude={selectedCity.latitude}
            longitude={selectedCity.longitude}
            onClose={() => {
              setSelectedCity(null);
            }}
          >
            <div>{selectedCity.name}</div>
          </Popup>
        )}
      </ReactMapGL>
    </div>
  );
};
