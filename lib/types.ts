export interface Medicine {
  id: string;
  name: string;
  form: string;
  dosage: string;
  price: string;
  laboratory: string;
  description: string;
  category: string;
  prescription: boolean;
  alternatives: string[];
  indications: string;
  contraindications?: string;
}

export interface Pharmacy {
  id: string;
  name: string;
  address: string;
  phone: string;
  status: 'Ouverte' | 'Fermée' | 'Garde';
  distance?: string;
  latitude: number;
  longitude: number;
  medicines?: Medicine[];
}
