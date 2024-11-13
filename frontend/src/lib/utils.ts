export const roundNumber = (num: number) => {
  const order = Math.pow(10, Math.floor(Math.log10(num)) - 1);
  const rounded = Math.floor(num / order) * order;
  return rounded.toLocaleString();
};
