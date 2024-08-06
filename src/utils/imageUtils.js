const imgImport = import.meta.glob('/src/assets/*.jpg', { eager: true });

export const getImageUrl = (imageName) => {
  const image = imgImport[`/src/assets/${imageName}`];
  return image ? image.default : '';
};
