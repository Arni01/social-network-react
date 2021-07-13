export const requiredField = (value) => {
  if (value) return undefined;

  return 'Field is requred';
};

export const maxLenght = (max) => {
  return (value) => {
    if (value.length < max) return undefined;

    return 'Max lenght' + max;
  };
};
