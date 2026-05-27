/** Brighter Unsplash photos used across the site */
export const PHOTOS = {
  bfsi: 'photo-1556761175-5973dc0f32e7',
  telecom: 'photo-1516321318823-687547d67d65',
  automotive: 'photo-1494976388532-6f2ed50298ed',
  devops: 'photo-1498050108023-c5249f4dfdb9',
  legal: 'photo-1450101499163-c8848c66ca85',
  fintech: 'photo-1563013544-824ae1b704d3',
  casestudies: 'photo-1552664730-d307ca884978',
  retail: 'photo-1556742049-0cfed4f6a45d',
  manufacturing: 'photo-1581091226825-a6a2a5aee158',
  llm: 'photo-1620712943348-d21466881688',
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
};
