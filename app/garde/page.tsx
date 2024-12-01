'use client';

import React, { useState } from 'react';
import { PharmacyList } from '@/components/pharmacy/pharmacy-list';
import { PharmacyDetails } from '@/components/pharmacy/pharmacy-details';
import { BottomNav } from '@/components/navigation/bottom-nav';
import { pharmacies } from '@/lib/data/pharmacies';
import { Pharmacy } from '@/lib/types';
import { SearchHeader } from '@/components/shared/search-header';
import { useGeolocation } from '@/hooks/use-geolocation';

function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth's radius in kilometers
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

export default function GardePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPharmacy, setSelectedPharmacy] = useState<Pharmacy | null>(null);
  const { latitude, longitude, isActive, toggleGps, error } = useGeolocation();

  const sortedPharmacies = React.useMemo(() => {
    // Filter pharmacies that are "Garde"
    let result = pharmacies.filter(p => p.status === 'Garde');
    
    if (isActive && latitude && longitude) {
      result = result.map(pharmacy => ({
        ...pharmacy,
        distance: `${calculateDistance(latitude, longitude, pharmacy.latitude, pharmacy.longitude).toFixed(1)} km`
      })).sort((a, b) => {
        const distA = parseFloat(a.distance!);
        const distB = parseFloat(b.distance!);
        return distA - distB;
      });
    }

    return result;
  }, [pharmacies, latitude, longitude, isActive]);

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <SearchHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        gpsActive={isActive}
        onGpsToggle={toggleGps}
        placeholder="Rechercher une pharmacie de garde..."
      />

      <main className="pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          {error && (
            <div className="mb-4 p-4 bg-red-50 text-red-600 rounded-lg">
              {error}
            </div>
          )}
          <PharmacyList
            pharmacies={sortedPharmacies}
            searchQuery={searchQuery}
            onPharmacyClick={setSelectedPharmacy}
          />
        </div>
      </main>

      {selectedPharmacy && (
        <PharmacyDetails
          pharmacy={selectedPharmacy}
          isOpen={!!selectedPharmacy}
          onClose={() => setSelectedPharmacy(null)}
        />
      )}

      <BottomNav />
    </div>
  );
}