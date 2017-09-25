import accounting from 'accounting';

export const formatPrice = (price) => {
  return accounting.formatMoney(price, {symbol: '£', precision: 0});
}