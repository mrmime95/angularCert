export default interface Stock {
  name: string;
  symbol: string;
  todayChange?: number;
  currentPrice?: number;
  openingPrice?: number;
  highPrice?: number;
}
