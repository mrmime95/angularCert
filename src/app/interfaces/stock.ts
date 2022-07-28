export default interface Stock {
  name: string;
  todayChange: string | number;
  currentPrice: number;
  openingPrice: number;
  highPrice: number;
}

export const defaultStock: Stock = {
  name: '',
  todayChange: 0,
  currentPrice: 0,
  openingPrice: 0,
  highPrice: 0,
};
