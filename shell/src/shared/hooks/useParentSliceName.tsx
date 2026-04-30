import { useMemo } from "react";
import { constructParentSliceName } from "../utils/commonFunctions";

export function useParentSliceName(sliceName: string, parentSliceName?: string): string {
  return useMemo(() => constructParentSliceName(sliceName, parentSliceName), [sliceName, parentSliceName]);
}
