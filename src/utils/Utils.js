export const update = (date, options) => {
  return new Date(date).toLocaleDateString("ru-RU", options);
};
