/** Brighter Unsplash photos used across the site */
export const PHOTOS = {
  bfsi: 'photo-1556761175-5973dc0f32e7',
  telecom: 'photo-1562408590-e32931084e23',
  automotive: 'photo-1503376780353-7e6692767b70',
  devops: 'photo-1498050108023-c5249f4dfdb9',
  legal: 'photo-1450101499163-c8848c66ca85',
  fintech: 'photo-1563013544-824ae1b704d3',
  casestudies: 'photo-1552664730-d307ca884978',
  retail: 'photo-1441986300917-64674bd600d8',
  manufacturing: 'photo-1581091226825-a6a2a5aee158',
  llm: 'photo-1620712943348-d21466881688',
  publicSector: 'photo-1541872703-74c5e44368f9',
  healthcare: 'photo-1538108149393-fdfd81215362',
  insurance: 'photo-1454165804606-c3d57bc86b40',
  energy: 'photo-1466611653911-95081537e5b7',
  saas: 'photo-1460925895917-afdab827c52f',
};

export function unsplash(id, w = 1920) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
}

/** Lighter hero overlay so photography stays visible */
export const HERO_OVERLAY = 'linear-gradient(135deg,rgba(13,17,23,.62),rgba(20,30,46,.55))';

export const INDUSTRY_PHOTOS = {
  BFSI: PHOTOS.bfsi,
  Automotive: PHOTOS.automotive,
  Telecom: PHOTOS.telecom,
  'Retail & E-com': PHOTOS.retail,
  LegalTech: PHOTOS.llm,
  Manufacturing: PHOTOS.manufacturing,
  'Public Sector': PHOTOS.publicSector,
  Healthcare: PHOTOS.healthcare,
  Insurance: PHOTOS.insurance,
  Energy: PHOTOS.energy,
  'Enterprise SaaS': PHOTOS.saas,
};
