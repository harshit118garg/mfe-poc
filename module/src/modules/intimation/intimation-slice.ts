import IntimationAction from "./actions/intimation-actions";
import { IntimationDTO } from "./models/intimation-dto";
// @ts-ignore — resolved at runtime via MF
import { dynamicSliceFactory as createDynamicSlice } from "shell/store";

export const sliceName = "INTIMATION";

const IntimationSlice = createDynamicSlice(
  sliceName,
  {
    ...IntimationDTO(),
  },
  {
    ...IntimationAction,
  },
);

export default IntimationSlice;
