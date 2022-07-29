export default interface Stock {
  name: string;
  todayChange: string | number;
  currentPrice: number;
  openingPrice: number;
  highPrice: number;
  symbol: string;
}
