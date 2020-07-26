import React, { FC, useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup, NavigationControl } from 'react-map-gl';
import { cities, defaultCoordinates, regions } from './data';
import useWindowSize from '../../utlis/useWindowSize';
import { publicSrc } from '../../constants/publicSource';

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
  const [filterRegions, setFilterRegions] = useState(cities);

  const { width } = useWindowSize();

  const {
    regioRussia,
    regioCis,
    regioEurope,
    regioRussiaAndCis,
    regioRussiaAndEurope,
    regioCisAndEurope,
  } = regions;

  const remove = (arr, ...args) => {
    return arr.filter((item) => {
      return !args.some((arg, index) => {
        return arr.indexOf(item) === arg;
      });
    });
  };

  useEffect(() => {
    if (!russia && !cis && !europe) {
      setViewport(defaultCoordinates);
      setFilterRegions(cities);
    };

    if (russia) {
      setViewport(regioRussia);
      setFilterRegions( cities.slice(0, 6));
    }

    if (cis) {
      setViewport(regioCis);
      setFilterRegions(cities.slice(6, 10));
    }

    if (europe) {
      setViewport(regioEurope);
      setFilterRegions(cities.slice(10));
    } ;

    if (russia && cis) {
      setViewport(regioRussiaAndCis);
      setFilterRegions(cities.slice(0,10));
    };

    if (russia && europe) {
      setViewport(regioRussiaAndEurope);
      setFilterRegions(remove(cities, 6,7,8,9) );
      
      
    };

    if (europe && cis) {
      setViewport(regioCisAndEurope);
      setFilterRegions(cities.slice(6));
    };

    if (russia && cis && europe) {
      setViewport(defaultCoordinates);
      setFilterRegions(cities);
    };

    // eslint-disable-next-line
  }, [russia, cis, europe]);

  const size = 40;

  

  return (
    <div>
      {console.log('delete elements', remove(cities, 6,7,8,9) )}
      {console.log(viewport)}
      <ReactMapGL
        width="100%"
        height={width <= 767 ? '381px' : '460px'}
        mapStyle="mapbox://styles/fristyr/ckclpx3ha0w2f1imowm8uiduk"
        mapboxApiAccessToken="pk.eyJ1IjoiZnJpc3R5ciIsImEiOiJja2Nna3J4eDQwNDllMnBvM3FzZTljOTZ1In0.U22CKeBPhN6XP3pLR3h9OQ"
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        <div className="map-controls">
          <NavigationControl
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
          />
        </div>
        {filterRegions.map(({ coordinates }) => (
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
                src={`${publicSrc}/assets/location.svg`}
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
