import React, { useState, useEffect } from 'react';
import { Pill, MapPin } from 'lucide-react';
import axios from 'axios';
import { cn } from '@/lib/utils';

interface Medicine {
  id: number;
  CODE: number;
  SPECIALITE: string;
  DOSAGE: string;
  FORME: string;
  PRESENTATION: string;
  SUBSTANCE_ACTIVE: string;
  CLASSE_THERAPEUTIQUE: string;
  PPV: number;
  PH: number;
  STATUT_AMM: string;
  STATUT_COMMERCIALISATION: string;
}

interface MedicineListProps {
  searchQuery?: string;
  onMedicineClick?: (medicine: Medicine) => void;
  onNearbyClick?: (medicine: Medicine) => void;
}

export function MedicineList({
  searchQuery = '',
  onMedicineClick,
  onNearbyClick,
}: MedicineListProps) {
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(30);

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:8003/medecines/`, {
          params: {
            skip: page * rowsPerPage,
            limit: rowsPerPage,
          },
        });
        setMedicines(response.data);
        setError(null);
      } catch (err) {
        setError('Error fetching medicines data. Please try again later.');
        console.error('Error fetching medicines:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMedicines();
  }, [page, rowsPerPage]);

  const filteredMedicines = medicines.filter((medicine) =>
    medicine.SPECIALITE.toLowerCase().includes(searchQuery.toLowerCase()) ||
    medicine.CLASSE_THERAPEUTIQUE.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredMedicines.map((medicine) => (
          <div
            key={medicine.id}
            className={cn(
              "bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow duration-200",
              onMedicineClick && "cursor-pointer"
            )}
            onClick={() => onMedicineClick?.(medicine)}
          >
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <h3 className="font-semibold text-gray-900">{medicine.SPECIALITE}</h3>
                
                <div className="flex items-center text-gray-600">
                  <Pill className="w-4 h-4 mr-1" />
                  <span className="text-sm">{medicine.DOSAGE}</span>
                </div>
                
                <p className="text-sm text-gray-500">{medicine.FORME}</p>
                
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-semibold text-emerald-600">
                    {medicine.PPV} DH
                  </span>
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-800 text-xs rounded-full">
                    {medicine.STATUT_AMM}
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">
                  {medicine.CLASSE_THERAPEUTIQUE}
                </span>
              </div>
            </div>

            {onNearbyClick && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNearbyClick(medicine);
                }}
                className="mt-4 w-full flex items-center justify-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200"
              >
                <MapPin className="w-4 h-4 mr-2" />
                À proximité
              </button>
            )}
          </div>
        ))}
        {filteredMedicines.length === 0 && (
          <div className="text-center py-8 text-gray-500 col-span-full">
            Aucun médicament trouvé pour "{searchQuery}"
          </div>
        )}
      </div>
      
      <div className="mt-4 flex justify-center space-x-2">
        <button
          onClick={() => setPage(Math.max(0, page - 1))}
          disabled={page === 0}
          className="px-4 py-2 bg-gray-100 rounded-lg disabled:opacity-50"
        >
          Précédent
        </button>
        <button
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 bg-gray-100 rounded-lg"
        >
          Suivant
        </button>
      </div>
    </div>
  );
}