import React from 'react';

export const MedicineFilters: React.FC = () => {
  return (
    <div className="mt-4 bg-white p-4 rounded-xl shadow-sm">
      <h3 className="font-semibold mb-4">Filtres</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Forme
          </label>
          <select className="w-full rounded-lg border-gray-300 shadow-sm">
            <option value="">Toutes les formes</option>
            <option value="comprime">Comprimé</option>
            <option value="sirop">Sirop</option>
            <option value="gelule">Gélule</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Laboratoire
          </label>
          <select className="w-full rounded-lg border-gray-300 shadow-sm">
            <option value="">Tous les laboratoires</option>
            <option value="sanofi">Sanofi</option>
            <option value="gsk">GSK</option>
            <option value="novartis">Novartis</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Prix maximum
          </label>
          <input
            type="range"
            min="0"
            max="1000"
            step="10"
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span>0 DH</span>
            <span>1000 DH</span>
          </div>
        </div>
      </div>
    </div>
  );
};