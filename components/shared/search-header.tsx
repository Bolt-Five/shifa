import React from 'react';
import { Search, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SearchHeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  gpsActive: boolean;
  onGpsToggle: () => void;
  placeholder?: string;
}

export function SearchHeader({
  searchQuery,
  onSearchChange,
  gpsActive,
  onGpsToggle,
  placeholder = "Rechercher..."
}: SearchHeaderProps) {
  return (
    <header className="bg-white shadow-sm fixed top-0 w-full z-40">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder={placeholder}
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
        </div>
        <button
          onClick={onGpsToggle}
          className={cn(
            "flex items-center justify-center p-2 rounded-xl border transition-colors duration-200",
            gpsActive 
              ? "bg-emerald-50 border-emerald-500 text-emerald-600" 
              : "border-gray-200 text-gray-500 hover:border-emerald-500 hover:text-emerald-600"
          )}
          title={gpsActive ? "Désactiver la localisation" : "Activer la localisation"}
        >
          <MapPin className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
