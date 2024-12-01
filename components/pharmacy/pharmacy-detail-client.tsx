"use client";

import React from 'react';
import { ArrowLeft, Clock, MapPin, Phone, Navigation2 } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PharmacyMap } from './pharmacy-map';
import { PharmacySchedule } from './pharmacy-schedule';
import { PharmacyMedicines } from './pharmacy-medicines';
import { BottomNav } from '@/components/navigation/bottom-nav';
import type { Pharmacy } from '@/lib/data/pharmacies';

interface PharmacyDetailClientProps {
  pharmacy: Pharmacy;
}

export function PharmacyDetailClient({ pharmacy }: PharmacyDetailClientProps) {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <header className="bg-white shadow-sm fixed top-0 w-full z-40">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center">
          <Link href="/" className="mr-4">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-xl font-semibold">Détails de la Pharmacie</h1>
        </div>
      </header>

      <main className="pt-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 shadow-sm"
        >
          <h2 className="text-2xl font-bold text-gray-900">{pharmacy.name}</h2>
          <p className="text-gray-500 mt-1 flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            {pharmacy.address}, {pharmacy.city}
          </p>
          
          <div className="mt-4 flex items-center space-x-4">
            <a 
              href={`tel:${pharmacy.phone}`}
              className="flex-1 bg-emerald-600 text-white py-2 px-4 rounded-lg flex items-center justify-center hover:bg-emerald-700 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              Appeler
            </a>
            <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
              <Navigation2 className="w-4 h-4 mr-2" />
              Itinéraire
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="h-48 mt-4"
        >
          <PharmacyMap 
            position={pharmacy.coordinates}
            name={pharmacy.name}
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 bg-white p-6"
        >
          <h3 className="text-lg font-semibold flex items-center mb-4">
            <Clock className="w-5 h-5 mr-2" />
            Horaires d'ouverture
          </h3>
          <PharmacySchedule schedule={pharmacy.schedule} />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-4 bg-white p-6"
        >
          <h3 className="text-lg font-semibold mb-4">Médicaments disponibles</h3>
          <PharmacyMedicines medicines={pharmacy.medicines} />
        </motion.div>
      </main>

      <BottomNav />
    </div>
  );
}