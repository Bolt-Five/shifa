import React from 'react';
import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface Medicine {
  name: string;
  price: string;
  available: boolean;
}

interface PharmacyMedicinesProps {
  medicines: Medicine[];
}

export const PharmacyMedicines: React.FC<PharmacyMedicinesProps> = ({ medicines }) => {
  return (
    <div className="space-y-3">
      {medicines.map((medicine, index) => (
        <motion.div
          key={medicine.name}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <div>
            <h4 className="font-medium">{medicine.name}</h4>
            <p className="text-sm text-gray-500">{medicine.price}</p>
          </div>
          {medicine.available ? (
            <span className="flex items-center text-green-600">
              <Check size={20} className="mr-1" />
              Disponible
            </span>
          ) : (
            <span className="flex items-center text-red-600">
              <X size={20} className="mr-1" />
              Rupture
            </span>
          )}
        </motion.div>
      ))}
    </div>
  );
};