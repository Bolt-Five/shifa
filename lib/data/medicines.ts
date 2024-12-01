import { Medicine } from '@/lib/types';

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
  contraindications: string;
}

export const medicines: Medicine[] = [
  {
    id: '1',
    name: 'Doliprane',
    form: 'Comprimé',
    dosage: '1000mg',
    price: '25 DH',
    laboratory: 'Sanofi',
    description: 'Paracétamol pour le traitement de la douleur et de la fièvre',
    category: 'Antalgique',
    prescription: false,
    alternatives: ['Panadol', 'Efferalgan'],
    indications: 'Traitement symptomatique des douleurs d\'intensité légère à modérée et/ou des états fébriles. Particulièrement adapté en cas de douleurs dentaires, maux de tête, douleurs musculaires.',
    contraindications: 'Allergie au paracétamol, insuffisance hépatique sévère.'
  },
  {
    id: '2',
    name: 'Augmentin',
    form: 'Comprimé',
    dosage: '1g',
    price: '80 DH',
    laboratory: 'GSK',
    description: 'Antibiotique à large spectre associant amoxicilline et acide clavulanique',
    category: 'Antibiotique',
    prescription: true,
    alternatives: ['Clamoxyl', 'Amoxicilline'],
    indications: 'Traitement des infections bactériennes notamment ORL, respiratoires, urinaires et cutanées. Particulièrement efficace contre les bactéries résistantes à l\'amoxicilline seule.',
    contraindications: 'Allergie aux pénicillines, mononucléose infectieuse, insuffisance hépatique.'
  },
  {
    id: '3',
    name: 'Voltaren',
    form: 'Gel',
    dosage: '1%',
    price: '45 DH',
    laboratory: 'Novartis',
    description: 'Anti-inflammatoire local pour les douleurs articulaires et musculaires',
    category: 'Anti-inflammatoire',
    prescription: false,
    alternatives: ['Profenid Gel', 'Ketum Gel'],
    indications: 'Traitement local des douleurs d\'origine traumatique, tendinites, entorses. Soulagement des douleurs arthrosiques des petites et moyennes articulations.',
    contraindications: 'Ne pas appliquer sur les plaies ou lésions cutanées, éviter l\'exposition au soleil après application.'
  },
  {
    id: '4',
    name: 'Rhinathiol',
    form: 'Sirop',
    dosage: '200ml',
    price: '55 DH',
    laboratory: 'Sanofi',
    description: 'Traitement de la toux sèche',
    category: 'Antitussif',
    prescription: false,
    alternatives: ['Drill', 'Humex']
  },
  {
    id: '5',
    name: 'Maalox',
    form: 'Suspension buvable',
    dosage: '250ml',
    price: '30 DH',
    laboratory: 'Sanofi',
    description: 'Traitement des brûlures d\'estomac et remontées acides',
    category: 'Anti-acide',
    prescription: false,
    alternatives: ['Gaviscon', 'Xolaam']
  },
  {
    id: '6',
    name: 'Spasfon',
    form: 'Comprimé',
    dosage: '80mg',
    price: '35 DH',
    laboratory: 'Teva',
    description: 'Traitement des douleurs spasmodiques',
    category: 'Antispasmodique',
    prescription: false,
    alternatives: ['Buscopan', 'No-Spa']
  },
  {
    id: '7',
    name: 'Aerius',
    form: 'Comprimé',
    dosage: '5mg',
    price: '65 DH',
    laboratory: 'MSD',
    description: 'Traitement des symptômes d\'allergie',
    category: 'Antihistaminique',
    prescription: true,
    alternatives: ['Clarityne', 'Zyrtec']
  },
  {
    id: '8',
    name: 'Smecta',
    form: 'Poudre orale',
    dosage: '3g',
    price: '40 DH',
    laboratory: 'Ipsen',
    description: 'Traitement de la diarrhée',
    category: 'Anti-diarrhéique',
    prescription: false,
    alternatives: ['Imodium', 'Tiorfan']
  },
  {
    id: '9',
    name: 'Advil',
    form: 'Comprimé',
    dosage: '400mg',
    price: '35 DH',
    laboratory: 'Pfizer',
    description: 'Anti-inflammatoire non stéroïdien pour la douleur et la fièvre',
    category: 'Anti-inflammatoire',
    prescription: false,
    alternatives: ['Nurofen', 'Ibuprofène']
  },
  {
    id: '10',
    name: 'Amoxicilline',
    form: 'Gélule',
    dosage: '500mg',
    price: '45 DH',
    laboratory: 'Maphar',
    description: 'Antibiotique de la famille des pénicillines',
    category: 'Antibiotique',
    prescription: true,
    alternatives: ['Clamoxyl', 'Augmentin']
  },
  {
    id: '11',
    name: 'Ventoline',
    form: 'Aérosol',
    dosage: '100µg/dose',
    price: '70 DH',
    laboratory: 'GSK',
    description: 'Bronchodilatateur pour le traitement de l\'asthme',
    category: 'Bronchodilatateur',
    prescription: true,
    alternatives: ['Salbutamol', 'Airomir']
  },
  {
    id: '12',
    name: 'Omeprazole',
    form: 'Gélule',
    dosage: '20mg',
    price: '50 DH',
    laboratory: 'Cooper Pharma',
    description: 'Traitement du reflux gastro-œsophagien',
    category: 'Anti-ulcéreux',
    prescription: true,
    alternatives: ['Mopral', 'Lanzor']
  },
  {
    id: '13',
    name: 'Kardegic',
    form: 'Sachet',
    dosage: '160mg',
    price: '45 DH',
    laboratory: 'Sanofi',
    description: 'Antiagrégant plaquettaire',
    category: 'Antithrombotique',
    prescription: true,
    alternatives: ['Aspirine', 'Plavix']
  },
  {
    id: '14',
    name: 'Levothyrox',
    form: 'Comprimé',
    dosage: '100µg',
    price: '30 DH',
    laboratory: 'Merck',
    description: 'Hormone thyroïdienne de synthèse',
    category: 'Hormone thyroïdienne',
    prescription: true,
    alternatives: ['Euthyrox', 'L-Thyroxine']
  },
  {
    id: '15',
    name: 'Glucophage',
    form: 'Comprimé',
    dosage: '850mg',
    price: '40 DH',
    laboratory: 'Merck',
    description: 'Antidiabétique oral',
    category: 'Antidiabétique',
    prescription: true,
    alternatives: ['Metformine', 'Stagid']
  },
  {
    id: '16',
    name: 'Forlax',
    form: 'Sachet',
    dosage: '10g',
    price: '55 DH',
    laboratory: 'Ipsen',
    description: 'Traitement de la constipation',
    category: 'Laxatif',
    prescription: false,
    alternatives: ['Movicol', 'Transipeg']
  },
  {
    id: '17',
    name: 'Biseptine',
    form: 'Solution',
    dosage: '100ml',
    price: '35 DH',
    laboratory: 'Sanofi',
    description: 'Antiseptique local',
    category: 'Antiseptique',
    prescription: false,
    alternatives: ['Betadine', 'Hexomedine']
  },
  {
    id: '18',
    name: 'Celestene',
    form: 'Comprimé',
    dosage: '2mg',
    price: '45 DH',
    laboratory: 'MSD',
    description: 'Corticoïde pour les inflammations sévères',
    category: 'Corticoïde',
    prescription: true,
    alternatives: ['Solupred', 'Cortancyl']
  }
];