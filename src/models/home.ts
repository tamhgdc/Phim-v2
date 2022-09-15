import { recommendItems } from "./movie";

export interface HomeData {
  page: number;
  recommendItems: recommendItems[];
  searchKeyWord: string;
}
