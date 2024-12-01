'use client';

import React, { useState } from 'react';
import { MedicineList } from '@/components/medicine/medicine-list';
import { MedicineDetails } from '@/components/medicine/medicine-details';
import { PharmacyList } from '@/components/pharmacy/pharmacy-list';
import { BottomNav } from '@/components/navigation/bottom-nav';
import { SearchHeader } from '@/components/shared/search-header';
import { useGeolocation } from '@/hooks/use-geolocation';
import { medicines } from '@/lib/data/medicines';
import { pharmacies } from '@/lib/data/pharmacies';
import { Medicine, Pharmacy } from '@/lib/types';

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

export default function MedicamentsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMedicine, setSelectedMedicine] = useState<Medicine | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showNearbyPharmacies, setShowNearbyPharmacies] = useState(false);
  const { latitude, longitude, isActive, toggleGps, error } = useGeolocation();

  const handleMedicineClick = (medicine: Medicine) => {
    setSelectedMedicine(medicine);
    setShowDetails(true);
    setShowNearbyPharmacies(false);
  };

  const handleNearbyClick = (medicine: Medicine) => {
    setSelectedMedicine(medicine);
    setShowNearbyPharmacies(true);
    setShowDetails(false);
    if (!isActive) {
      toggleGps();
    }
  };

  const nearbyPharmacies = React.useMemo(() => {
    if (!selectedMedicine || !isActive || !latitude || !longitude) return [];

    return pharmacies
      .map(pharmacy => ({
        ...pharmacy,
        distance: `${calculateDistance(latitude, longitude, pharmacy.latitude, pharmacy.longitude).toFixed(1)} km`
      }))
      .sort((a, b) => {
        const distA = parseFloat(a.distance!);
        const distB = parseFloat(b.distance!);
        return distA - distB;
      });
  }, [selectedMedicine, isActive, latitude, longitude]);

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <SearchHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        gpsActive={isActive}
        onGpsToggle={toggleGps}
        placeholder="Rechercher un médicament..."
      />

      <main className="pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          {error && (
            <div className="mb-4 p-4 bg-red-50 text-red-600 rounded-lg">
              {error}
            </div>
          )}
          <MedicineList
            medicines={medicines}
            searchQuery={searchQuery}
            onMedicineClick={handleMedicineClick}
            onNearbyClick={handleNearbyClick}
          />
        </div>
      </main>

      {/* Medicine Details Sidebar */}
      {selectedMedicine && showDetails && (
        <MedicineDetails
          medicine={selectedMedicine}
          isOpen={showDetails}
          onClose={() => setShowDetails(false)}
        />
      )}

      {/* Nearby Pharmacies List */}
      {showNearbyPharmacies && selectedMedicine && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
          <div className="fixed top-0 right-0 h-full w-full md:w-[500px] bg-white shadow-lg flex flex-col z-50">
            <div className="sticky top-0 bg-emerald-600 text-white border-b border-emerald-700 p-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">
                  Pharmacies avec {selectedMedicine.name}
                </h2>
                <button
                  onClick={() => setShowNearbyPharmacies(false)}
                  className="p-2 hover:bg-emerald-700 rounded-full"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto">
              <div className="p-4 pb-20">
                {error ? (
                  <div className="p-4 bg-red-50 text-red-600 rounded-lg">
                    {error}
                  </div>
                ) : !isActive ? (
                  <div className="p-4 bg-yellow-50 text-yellow-600 rounded-lg">
                    Veuillez activer la géolocalisation pour voir les pharmacies à proximité
                  </div>
                ) : nearbyPharmacies.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    Aucune pharmacie trouvée à proximité
                  </div>
                ) : (
                  <PharmacyList
                    pharmacies={nearbyPharmacies}
                    onPharmacyClick={() => {}}
                    variant="sidebar"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
}