"use client";

import React from 'react';
import { Search, Map, Clock, Navigation2, Phone, Menu, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { pharmacies } from '@/lib/data/pharmacies';
import { BottomNav } from '@/components/navigation/bottom-nav';

const DynamicPharmacyMap = dynamic(
  () => import('@/components/pharmacy/pharmacy-map').then(mod => mod.PharmacyMap),
  { ssr: false }
);

export const HomePage = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handlePhoneClick = (e: React.MouseEvent, phone: string) => {
    e.stopPropagation();
    window.location.href = `tel:${phone}`;
  };

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <header className="bg-white shadow-sm fixed top-0 w-full z-40">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold text-emerald-700"
          >
            Shifa Maroc
          </motion.h1>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <span className="sr-only">Menu</span>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <main className="pt-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-4 py-6 bg-emerald-700"
        >
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Rechercher un médicament ou une pharmacie..."
              className="w-full px-4 py-3 pl-12 rounded-xl border-0 focus:ring-2 focus:ring-emerald-500 shadow-lg"
            />
            <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
          </div>
        </motion.div>

        <div className="grid grid-cols-3 gap-4 px-4 py-6">
          {isClient && (
            <>
              <QuickActionButton onClick={() => navigateTo('/pharmacies')}>
                <QuickActionCard
                  icon={<Navigation2 size={24} />}
                  title="Pharmacies Proches"
                  color="bg-blue-500"
                  delay={0.1}
                />
              </QuickActionButton>
              <QuickActionButton onClick={() => navigateTo('/garde')}>
                <QuickActionCard
                  icon={<Clock size={24} />}
                  title="Pharmacies de Garde"
                  color="bg-red-500"
                  delay={0.2}
                />
              </QuickActionButton>
              <QuickActionButton onClick={() => navigateTo('/medicaments')}>
                <QuickActionCard
                  icon={<Search size={24} />}
                  title="Médicaments"
                  color="bg-purple-500"
                  delay={0.3}
                />
              </QuickActionButton>
            </>
          )}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="px-4 mb-4"
        >
          <div className="relative w-full h-48 bg-gray-200 rounded-xl overflow-hidden shadow-md">
            {isClient && (
              <DynamicPharmacyMap 
                position={[33.5731, -7.5898]}
                name="Pharmacies à proximité"
              />
            )}
          </div>
        </motion.div>

        <section className="px-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl font-semibold mb-4"
          >
            Pharmacies à proximité
          </motion.h2>
          <div className="space-y-4">
            {pharmacies.map((pharmacy, index) => (
              <PharmacyCard
                key={pharmacy.id}
                pharmacy={pharmacy}
                index={index}
                onPhoneClick={(e) => handlePhoneClick(e, pharmacy.phone)}
                onClick={() => navigateTo(`/pharmacies/${pharmacy.id}`)}
              />
            ))}
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
};

interface QuickActionButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const QuickActionButton: React.FC<QuickActionButtonProps> = ({ onClick, children }) => (
  <div onClick={onClick} className="cursor-pointer h-full">
    {children}
  </div>
);

const QuickActionCard = ({ icon, title, color, delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="flex flex-col items-center p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow h-full"
  >
    <div className={cn("p-3 rounded-full text-white mb-2", color)}>{icon}</div>
    <span className="text-sm font-medium text-gray-700 text-center">{title}</span>
  </motion.div>
);

interface PharmacyCardProps {
  pharmacy: any;
  index: number;
  onPhoneClick: (e: React.MouseEvent) => void;
  onClick: () => void;
}

const PharmacyCard = ({ pharmacy, index, onPhoneClick, onClick }: PharmacyCardProps) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.6 + index * 0.1 }}
    onClick={onClick}
    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1 cursor-pointer"
  >
    <div className="flex justify-between items-start mb-3">
      <div>
        <h3 className="font-semibold text-lg text-gray-900">{pharmacy.name}</h3>
        <p className="text-sm text-gray-500 mt-1 flex items-center">
          <MapPin className="w-4 h-4 mr-1" />
          {pharmacy.address}
        </p>
      </div>
      <span className={cn(
        "px-3 py-1 rounded-full text-xs font-medium",
        pharmacy.status === 'De Garde' ? 'bg-red-100 text-red-800' : 
        pharmacy.status === 'Ouverte' ? 'bg-green-100 text-green-800' :
        'bg-gray-100 text-gray-800'
      )}>
        {pharmacy.status}
      </span>
    </div>
    <div className="flex items-center justify-between mt-4">
      <span className="text-sm text-gray-500 flex items-center">
        <Navigation2 size={16} className="mr-1" />
        {pharmacy.distance}
      </span>
      <button
        onClick={onPhoneClick}
        className="flex items-center text-emerald-600 font-medium text-sm hover:text-emerald-700 transition-colors"
      >
        <Phone size={16} className="mr-1" />
        Appeler
      </button>
    </div>
  </motion.div>
);