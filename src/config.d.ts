
import type { ICaseListV2 } from "./scripts/types";

// Specify the file extension you want to import
declare module "templates/*.yml" {
  const value: ICaseListV2
  export default value;
}