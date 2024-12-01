import React from 'react';
import { pharmacies } from '@/lib/data/pharmacies';
import { PharmacyDetailClient } from '@/components/pharmacy/pharmacy-detail-client';

export function generateStaticParams() {
  return pharmacies.map((pharmacy) => ({
    id: pharmacy.id,
  }));
}

export default function PharmacyDetail({ params }: { params: { id: string } }) {
  const pharmacy = pharmacies.find(p => p.id === params.id);

  if (!pharmacy) {
    return <div>Pharmacie non trouvée</div>;
  }

  return <PharmacyDetailClient pharmacy={pharmacy} />;
}