
import type { ICaseList } from "./scripts/types";

// Specify the file extension you want to import
declare module "templates/*.yml" {
  const value: ICaseList
  export default value;
}