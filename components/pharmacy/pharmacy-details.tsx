import React from 'react';
import dynamic from 'next/dynamic';
import { X, MapPin, Phone, Clock } from 'lucide-react';
import { Pharmacy } from '@/lib/types';
import { cn } from '@/lib/utils';
import { medicines } from '@/lib/data/medicines';

// Import map component dynamically to avoid SSR issues
const PharmacyMap = dynamic(
  () => import('./pharmacy-map').then(mod => mod.PharmacyMap),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-[200px] bg-gray-100 animate-pulse rounded-lg" />
    )
  }
);

interface PharmacyDetailsProps {
  pharmacy: Pharmacy;
  isOpen: boolean;
  onClose: () => void;
}

export function PharmacyDetails({ pharmacy, isOpen, onClose }: PharmacyDetailsProps) {
  // Get list of medicines not available at this pharmacy
  const unavailableMedicines = medicines.filter(medicine => 
    !pharmacy.medicines?.some(pharMed => pharMed.name === medicine.name)
  );

  return (
    <div
      className={cn(
        "fixed top-0 right-0 h-full w-full md:w-[400px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      <div className="h-full overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white z-10 border-b border-gray-200">
          <div className="flex items-center justify-between p-4">
            <h2 className="text-xl font-semibold text-gray-900">{pharmacy.name}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        <div className="p-4 space-y-6">
          {/* Map */}
          <div className="h-[200px] rounded-lg overflow-hidden border border-gray-200">
            <PharmacyMap 
              position={pharmacy.latitude && pharmacy.longitude ? [pharmacy.latitude, pharmacy.longitude] : undefined}
              name={pharmacy.name}
            />
          </div>

          {/* Status and Info */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span
                className={cn(
                  "px-3 py-1 rounded-full text-sm font-medium",
                  pharmacy.status === 'Ouverte' && "bg-emerald-100 text-emerald-800",
                  pharmacy.status === 'Fermée' && "bg-red-100 text-red-800",
                  pharmacy.status === 'De Garde' && "bg-blue-100 text-blue-800"
                )}
              >
                {pharmacy.status}
              </span>
              {pharmacy.distance && (
                <span className="text-sm text-gray-500">
                  <Clock className="w-4 h-4 inline mr-1" />
                  {pharmacy.distance}
                </span>
              )}
            </div>

            <div className="space-y-2">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-600">{pharmacy.address}</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0" />
                <span className="text-gray-600">{pharmacy.phone}</span>
              </div>
            </div>
          </div>

          {/* Directions Button */}
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${pharmacy.latitude},${pharmacy.longitude}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-4 py-2 bg-emerald-600 text-white text-center rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <MapPin className="w-4 h-4 inline mr-2" />
            Obtenir l'itinéraire
          </a>

          {/* Unavailable Medicines */}
          {unavailableMedicines.length > 0 && (
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Médicaments indisponibles ({unavailableMedicines.length})
              </h3>
              <div className="space-y-2">
                {unavailableMedicines.map((medicine) => (
                  <div
                    key={medicine.id}
                    className="p-2 bg-red-50 text-red-700 rounded-lg text-sm"
                  >
                    {medicine.name} - {medicine.dosage}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
