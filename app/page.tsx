'use client';

import { BottomNav } from '@/components/navigation/bottom-nav';
import { MapPin, Pill, Moon } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <main className="max-w-3xl mx-auto px-4 pt-8 pb-8">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Bienvenue sur Shifa Maroc 🌟
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Trouvez facilement vos médicaments et localisez les pharmacies proches.
          </p>
          <p className="text-gray-600">
            Avec Shifa Maroc, simplifiez votre recherche de médicaments et accédez à des informations précises et fiables en un clic.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Pharmacies Proches */}
          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-emerald-100 p-3 rounded-lg">
                <MapPin className="w-6 h-6 text-emerald-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Pharmacies Proches</h2>
            </div>
            <p className="text-gray-600">
              Découvrez les pharmacies les plus proches de votre localisation. Trouvez rapidement celle qui répond à vos besoins grâce à notre carte interactive.
            </p>
          </div>

          {/* Médicaments */}
          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-emerald-100 p-3 rounded-lg">
                <Pill className="w-6 h-6 text-emerald-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Médicaments</h2>
            </div>
            <p className="text-gray-600">
              Consultez la disponibilité des médicaments dans différentes pharmacies. Obtenez des informations détaillées, y compris les prix, les indications et les instructions médicales.
            </p>
          </div>

          {/* Pharmacies de Garde */}
          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-emerald-100 p-3 rounded-lg">
                <Moon className="w-6 h-6 text-emerald-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Pharmacies de Garde</h2>
            </div>
            <p className="text-gray-600">
              Besoin d'une pharmacie ouverte tard ou le week-end ? Accédez à la liste des pharmacies de garde à tout moment.
            </p>
          </div>
        </div>

        {/* Footer Message */}
        <div className="text-center mt-12">
          <p className="text-lg font-medium text-emerald-600">
            Shifa Maroc, votre compagnon santé en toute simplicité !
          </p>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}