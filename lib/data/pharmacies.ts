export interface Pharmacy {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  coordinates: [number, number];
  status: 'Ouverte' | 'Fermée' | 'Garde';
  distance?: string;
  schedule: {
    [key: string]: string;
  };
  medicines: {
    name: string;
    price: string;
    available: boolean;
  }[];
}

export const pharmacies: Pharmacy[] = [
  {
    id: '1',
    name: 'Pharmacie Centrale',
    address: '123 Avenue Hassan II',
    city: 'Casablanca',
    phone: '+212 522-123456',
    coordinates: [33.5731, -7.5898],
    status: 'Ouverte',
    distance: '350m',
    schedule: {
      'Lundi': '08:00 - 20:00',
      'Mardi': '08:00 - 20:00',
      'Mercredi': '08:00 - 20:00',
      'Jeudi': '08:00 - 20:00',
      'Vendredi': '08:00 - 20:00',
      'Samedi': '09:00 - 19:00',
      'Dimanche': '09:00 - 13:00'
    },
    medicines: [
      { name: 'Doliprane 1000mg', price: '25 DH', available: true },
      { name: 'Advil 400mg', price: '35 DH', available: true },
      { name: 'Augmentin 1g', price: '80 DH', available: false },
      { name: 'Voltaren Gel', price: '45 DH', available: true }
    ]
  },
  {
    id: '2',
    name: 'Pharmacie Al Shifa',
    address: '45 Rue Mohammed V',
    city: 'Casablanca',
    phone: '+212 522-789012',
    coordinates: [33.5892, -7.6115],
    status: 'Garde',
    distance: '1.2km',
    schedule: {
      'Lundi': '24h/24',
      'Mardi': '24h/24',
      'Mercredi': '24h/24',
      'Jeudi': '24h/24',
      'Vendredi': '24h/24',
      'Samedi': '24h/24',
      'Dimanche': '24h/24'
    },
    medicines: [
      { name: 'Doliprane 1000mg', price: '25 DH', available: true },
      { name: 'Amoxicilline 500mg', price: '45 DH', available: true },
      { name: 'Maalox', price: '30 DH', available: true },
      { name: 'Voltaren Gel', price: '45 DH', available: false }
    ]
  },
  {
    id: '3',
    name: 'Pharmacie Ibn Sina',
    address: '78 Boulevard Anfa',
    city: 'Casablanca',
    phone: '+212 522-345678',
    coordinates: [33.5933, -7.6321],
    status: 'Fermée',
    distance: '800m',
    schedule: {
      'Lundi': '09:00 - 19:00',
      'Mardi': '09:00 - 19:00',
      'Mercredi': '09:00 - 19:00',
      'Jeudi': '09:00 - 19:00',
      'Vendredi': '09:00 - 19:00',
      'Samedi': '09:00 - 18:00',
      'Dimanche': 'Fermé'
    },
    medicines: [
      { name: 'Panadol', price: '20 DH', available: true },
      { name: 'Rhinathiol', price: '55 DH', available: true },
      { name: 'Spasfon', price: '35 DH', available: true },
      { name: 'Smecta', price: '40 DH', available: true }
    ]
  },
  {
    id: '4',
    name: 'Pharmacie Al Fath',
    address: '156 Rue Abderrahman Sahraoui',
    city: 'Casablanca',
    phone: '+212 522-901234',
    coordinates: [33.5812, -7.6198],
    status: 'Ouverte',
    distance: '600m',
    schedule: {
      'Lundi': '08:00 - 21:00',
      'Mardi': '08:00 - 21:00',
      'Mercredi': '08:00 - 21:00',
      'Jeudi': '08:00 - 21:00',
      'Vendredi': '08:00 - 21:00',
      'Samedi': '09:00 - 20:00',
      'Dimanche': '09:00 - 14:00'
    },
    medicines: [
      { name: 'Doliprane 500mg', price: '15 DH', available: true },
      { name: 'Augmentin 1g', price: '80 DH', available: true },
      { name: 'Voltaren Gel', price: '45 DH', available: true },
      { name: 'Aerius', price: '65 DH', available: false }
    ]
  },
  {
    id: '5',
    name: 'Pharmacie Al Manar',
    address: '234 Boulevard Mohammed Zerktouni',
    city: 'Casablanca',
    phone: '+212 522-567890',
    coordinates: [33.5876, -7.6234],
    status: 'Garde',
    distance: '1.5km',
    schedule: {
      'Lundi': '24h/24',
      'Mardi': '24h/24',
      'Mercredi': '24h/24',
      'Jeudi': '24h/24',
      'Vendredi': '24h/24',
      'Samedi': '24h/24',
      'Dimanche': '24h/24'
    },
    medicines: [
      { name: 'Efferalgan 1g', price: '30 DH', available: true },
      { name: 'Advil 200mg', price: '25 DH', available: true },
      { name: 'Amoxicilline 1g', price: '55 DH', available: true },
      { name: 'Maalox', price: '30 DH', available: true }
    ]
  },
  {
    id: '6',
    name: 'Pharmacie Ain Diab',
    address: '89 Boulevard de l\'Ocean Atlantique',
    city: 'Casablanca',
    phone: '+212 522-234567',
    coordinates: [33.5943, -7.6654],
    status: 'Ouverte',
    distance: '2.1km',
    schedule: {
      'Lundi': '08:30 - 20:30',
      'Mardi': '08:30 - 20:30',
      'Mercredi': '08:30 - 20:30',
      'Jeudi': '08:30 - 20:30',
      'Vendredi': '08:30 - 20:30',
      'Samedi': '09:00 - 19:30',
      'Dimanche': '09:00 - 13:30'
    },
    medicines: [
      { name: 'Doliprane 1000mg', price: '25 DH', available: true },
      { name: 'Rhinathiol', price: '55 DH', available: false },
      { name: 'Spasfon', price: '35 DH', available: true },
      { name: 'Aerius', price: '65 DH', available: true }
    ]
  },
  {
    id: '7',
    name: 'Pharmacie Maarif',
    address: '67 Rue Jean Jaurès',
    city: 'Casablanca',
    phone: '+212 522-678901',
    coordinates: [33.5865, -7.6387],
    status: 'Ouverte',
    distance: '1.8km',
    schedule: {
      'Lundi': '08:00 - 20:00',
      'Mardi': '08:00 - 20:00',
      'Mercredi': '08:00 - 20:00',
      'Jeudi': '08:00 - 20:00',
      'Vendredi': '08:00 - 20:00',
      'Samedi': '09:00 - 19:00',
      'Dimanche': '09:00 - 13:00'
    },
    medicines: [
      { name: 'Smecta', price: '40 DH', available: true },
      { name: 'Rhinathiol', price: '55 DH', available: true },
      { name: 'Augmentin 1g', price: '80 DH', available: true },
      { name: 'Spasfon', price: '35 DH', available: false }
    ]
  },
  {
    id: '8',
    name: 'Pharmacie Ghandi',
    address: '145 Boulevard Ghandi',
    city: 'Casablanca',
    phone: '+212 522-345678',
    coordinates: [33.5723, -7.6432],
    status: 'Garde',
    distance: '2.5km',
    schedule: {
      'Lundi': '24h/24',
      'Mardi': '24h/24',
      'Mercredi': '24h/24',
      'Jeudi': '24h/24',
      'Vendredi': '24h/24',
      'Samedi': '24h/24',
      'Dimanche': '24h/24'
    },
    medicines: [
      { name: 'Doliprane 1000mg', price: '25 DH', available: true },
      { name: 'Maalox', price: '30 DH', available: true },
      { name: 'Aerius', price: '65 DH', available: true },
      { name: 'Voltaren Gel', price: '45 DH', available: true }
    ]
  }
];