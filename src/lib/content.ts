import media from '../data/media.json';
export type Media = (typeof media)[number];
export const normalise = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
export function collectionMedia(matchers: string[]) {
  return media.filter(item => matchers.some(matcher => normalise(item.collection || '').includes(normalise(matcher))));
}
export function photoFor(year?: number, city?: string) {
  return media.find(item => item.type === 'photo' && item.year === year && (!city || item.city === city) && item.featured)
    || media.find(item => item.type === 'photo' && item.year === year && (!city || item.city === city))
    || media.find(item => item.type === 'photo' && item.year === 2024);
}
