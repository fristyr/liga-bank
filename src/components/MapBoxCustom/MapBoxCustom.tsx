import React, { FC, useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { cities, defaultCoordinates, regions } from './data';
import './MapBoxCustom.scss';

interface Props {
  countries: {
    russia: boolean;
    cis: boolean;
    europe: boolean;
  };
}

interface SelectedCountry {
  name: string;
  latitude: number;
  longitude: number;
}

export const MapBoxCustom: FC<Props> = ({
  countries: { russia, cis, europe },
}) => {
  const [viewport, setViewport] = useState(defaultCoordinates);
  const [selectedCity, setSelectedCity] = useState<SelectedCountry | null>(
    null
  );

  const {
    regioRussia,
    regioCis,
    regioEurope,
    regioRussiaAndCis,
    regioRussiaAndEurope,
    regioCisAndEurope,
  } = regions;

  useEffect(() => {
    if (!russia && !cis && !europe) setViewport(defaultCoordinates);

    if (russia) setViewport(regioRussia);

    if (cis) setViewport(regioCis);

    if (europe) setViewport(regioEurope);

    if (russia && cis) setViewport(regioRussiaAndCis);

    if (russia && europe) setViewport(regioRussiaAndEurope);

    if (europe && cis) setViewport(regioCisAndEurope);

    if (russia && cis && europe) setViewport(defaultCoordinates);
  }, [russia, cis, europe]);

  const size = 40;
  return (
    <div>
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
            key={coordinates.name}
            latitude={coordinates.latitude}
            longitude={coordinates.longitude}
          >
            <button
              type="button"
              style={{ transform: `translate(${-size / 2}px,${-size}px)` }}
              onClick={() => {
                setSelectedCity(coordinates);
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/location.svg`}
                alt="Location-icon"
              />
            </button>
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
