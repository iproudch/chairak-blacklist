import { ECreditLevel } from "../constants/blacklist";

export interface IBlacklistResponse {
  id: string;
  name?: string;
  address?: string;
  }
  
export interface IBlacklist {
  creditLevel?: ECreditLevel;
  data: IBlacklistResponse[];
}