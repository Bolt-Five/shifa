"use client";

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

// Default position (Casablanca city center)
const DEFAULT_POSITION: [number, number] = [33.5731, -7.5898];

interface PharmacyMapProps {
  position?: [number, number];
  name?: string;
}

export const PharmacyMap: React.FC<PharmacyMapProps> = ({ 
  position = DEFAULT_POSITION,
  name = 'Pharmacie'
}) => {
  // Ensure we have valid coordinates
  const mapPosition: [number, number] = Array.isArray(position) && 
    position.length === 2 && 
    typeof position[0] === 'number' && 
    typeof position[1] === 'number'
    ? position
    : DEFAULT_POSITION;

  // Custom marker icon
  const customIcon = new Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  return (
    <MapContainer
      center={mapPosition}
      zoom={15}
      style={{ height: '100%', width: '100%', minHeight: '200px' }}
      zoomControl={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={mapPosition} icon={customIcon}>
        <Popup>{name}</Popup>
      </Marker>
    </MapContainer>
  );
};