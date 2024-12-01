"use client";

import React from 'react';
import { Navigation2, Clock, Search, Home } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

export function BottomNav() {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="bg-white fixed bottom-0 w-full border-t border-gray-200 shadow-lg z-50">
      <div className="flex justify-around py-3">
        <button
          onClick={() => router.push('/pharmacies')}
          className={cn(
            "flex flex-col items-center transition-colors",
            isActive('/pharmacies') ? 'text-emerald-600' : 'text-gray-600 hover:text-gray-900'
          )}
        >
          <Navigation2 size={24} />
          <span className="text-xs mt-1">Proche</span>
        </button>
        <button
          onClick={() => router.push('/garde')}
          className={cn(
            "flex flex-col items-center transition-colors",
            isActive('/garde') ? 'text-emerald-600' : 'text-gray-600 hover:text-gray-900'
          )}
        >
          <Clock size={24} />
          <span className="text-xs mt-1">Garde</span>
        </button>
        <button
          onClick={() => router.push('/medicaments')}
          className={cn(
            "flex flex-col items-center transition-colors",
            isActive('/medicaments') ? 'text-emerald-600' : 'text-gray-600 hover:text-gray-900'
          )}
        >
          <Search size={24} />
          <span className="text-xs mt-1">Recherche</span>
        </button>
        <button
          onClick={() => router.push('/')}
          className={cn(
            "flex flex-col items-center transition-colors",
            isActive('/') ? 'text-emerald-600' : 'text-gray-600 hover:text-gray-900'
          )}
        >
          <Home size={24} />
          <span className="text-xs mt-1">Accueil</span>
        </button>
      </div>
    </nav>
  );
}