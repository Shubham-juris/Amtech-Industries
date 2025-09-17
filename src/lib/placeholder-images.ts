import placeholderData from './placeholder-images.json';

export const placeholderImages = placeholderData.placeholderImages;

export const getImage = (id: string, seed?: string) => {
  const image = placeholderImages.find(img => img.id === id);
  return {
    url: image?.imageUrl ?? `https://picsum.photos/seed/${seed ?? id}/600/400`,
    hint: image?.imageHint ?? 'placeholder'
  }
}
