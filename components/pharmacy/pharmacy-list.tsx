import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { Pharmacy } from '@/lib/types';
import { cn } from '@/lib/utils';

interface PharmacyListProps {
  pharmacies: Pharmacy[];
  searchQuery?: string;
  onPharmacyClick?: (pharmacy: Pharmacy) => void;
  variant?: 'default' | 'sidebar';
}

export function PharmacyList({ 
  pharmacies, 
  searchQuery = '',
  onPharmacyClick,
  variant = 'default'
}: PharmacyListProps) {
  const filteredPharmacies = pharmacies.filter(pharmacy =>
    pharmacy.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pharmacy.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const gridCols = variant === 'sidebar' 
    ? "grid-cols-1 sm:grid-cols-2" 
    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={cn("grid gap-4", gridCols)}>
      {filteredPharmacies.map((pharmacy) => (
        <div
          key={pharmacy.id}
          className={cn(
            "bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow duration-200",
            onPharmacyClick && "cursor-pointer"
          )}
          onClick={() => onPharmacyClick?.(pharmacy)}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-semibold text-gray-900">{pharmacy.name}</h3>
              <span
                className={cn(
                  "px-2 py-1 rounded-full text-xs font-medium",
                  pharmacy.status === 'Ouverte' && "bg-emerald-100 text-emerald-800",
                  pharmacy.status === 'Fermée' && "bg-red-100 text-red-800",
                  pharmacy.status === 'Garde' && "bg-blue-100 text-blue-800"
                )}
              >
                {pharmacy.status}
              </span>
            </div>

            <div className="space-y-2 flex-grow">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 text-gray-400 mt-1 mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-600 line-clamp-2">{pharmacy.address}</span>
              </div>

              <div className="flex items-center">
                <Phone className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-600">{pharmacy.phone}</span>
              </div>

              {pharmacy.distance && (
                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{pharmacy.distance}</span>
                </div>
              )}
            </div>

            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${pharmacy.latitude},${pharmacy.longitude}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full flex items-center justify-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <MapPin className="w-4 h-4 mr-2" />
              Itinéraire
            </a>
          </div>
        </div>
      ))}
      {filteredPharmacies.length === 0 && (
        <div className="col-span-full text-center py-8 text-gray-500">
          Aucune pharmacie trouvée {searchQuery && `pour "${searchQuery}"`}
        </div>
      )}
    </div>
  );
}
