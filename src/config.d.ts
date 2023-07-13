
import type { IDataCaseList } from "./scripts/types";

// Specify the file extension you want to import
declare module "templates/*.yml" {
  const value: IDataCaseList
  export default value;
}