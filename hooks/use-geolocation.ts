import { useState, useCallback } from 'react';

interface GeolocationState {
  latitude: number | null;
  longitude: number | null;
  error: string | null;
}

export function useGeolocation() {
  const [state, setState] = useState<GeolocationState>({
    latitude: null,
    longitude: null,
    error: null,
  });

  const [isActive, setIsActive] = useState(false);

  const getLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setState(prev => ({ ...prev, error: "La géolocalisation n'est pas supportée par votre navigateur" }));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => {
        setState(prev => ({
          ...prev,
          error: "Impossible d'obtenir votre position. Veuillez autoriser l'accès à votre position."
        }));
      }
    );
  }, []);

  const toggleGps = useCallback(() => {
    if (!isActive) {
      getLocation();
    } else {
      setState({
        latitude: null,
        longitude: null,
        error: null,
      });
    }
    setIsActive(!isActive);
  }, [isActive, getLocation]);

  return {
    ...state,
    isActive,
    toggleGps,
  };
}
