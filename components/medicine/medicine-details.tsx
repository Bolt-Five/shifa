import React from 'react';
import { X, Pill, AlertCircle, Check, Ban } from 'lucide-react';
import { Medicine } from '@/lib/types';
import { cn } from '@/lib/utils';

interface MedicineDetailsProps {
  medicine: Medicine;
  isOpen: boolean;
  onClose: () => void;
}

export function MedicineDetails({ medicine, isOpen, onClose }: MedicineDetailsProps) {
  return (
    <div
      className={cn(
        "fixed top-0 right-0 h-full w-full md:w-[400px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      <div className="h-full overflow-y-auto">
        <div className="sticky top-0 bg-white z-10 border-b border-gray-200">
          <div className="flex items-center justify-between p-4">
            <h2 className="text-xl font-semibold text-gray-900">{medicine.name}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        <div className="p-4 space-y-6">
          {/* Basic Information */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Pill className="w-5 h-5 mr-2 text-emerald-600" />
                <span className="text-gray-900">{medicine.dosage}</span>
              </div>
              <span className="text-lg font-semibold text-emerald-600">
                {medicine.price}
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Forme:</span> {medicine.form}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Laboratoire:</span> {medicine.laboratory}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Catégorie:</span> {medicine.category}
              </p>
            </div>
          </div>

          {/* Prescription Status */}
          <div className="flex items-center space-x-2 py-2 px-3 rounded-lg bg-gray-50">
            {medicine.prescription ? (
              <>
                <AlertCircle className="w-5 h-5 text-amber-500" />
                <span className="text-sm font-medium text-gray-900">
                  Médicament sous ordonnance
                </span>
              </>
            ) : (
              <>
                <Check className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-medium text-gray-900">
                  Médicament sans ordonnance
                </span>
              </>
            )}
          </div>

          {/* Description and Indications */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {medicine.description}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Indications</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {medicine.indications}
              </p>
            </div>
          </div>

          {/* Alternatives */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Alternatives disponibles
            </h3>
            <div className="space-y-2">
              {medicine.alternatives.map((alternative, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 py-2 px-3 bg-gray-50 rounded-lg"
                >
                  <span className="text-sm text-gray-900">{alternative}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contraindications if available */}
          {medicine.contraindications && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                <Ban className="w-5 h-5 mr-2 text-red-500" />
                Contre-indications
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {medicine.contraindications}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
