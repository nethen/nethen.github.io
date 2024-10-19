import * as d3 from "d3";
import { use } from "react";

export const useFetchData = async (csvURL: string) => {
  const fullData = await d3.csv(csvURL);
  return fullData;
};

export default useFetchData;
