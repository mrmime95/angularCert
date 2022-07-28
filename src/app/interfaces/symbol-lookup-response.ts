import SymbolLookup from './symbol-lookup';

export default interface SymbolLookupResponse {
  count: number;
  result: SymbolLookup[];
}
