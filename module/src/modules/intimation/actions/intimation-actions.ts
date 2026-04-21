import type { PayloadAction } from "@reduxjs/toolkit";
import { IntimationDTO, type IntimationFieldKey, type IntimationState } from "../models/intimation-dto";
// @ts-ignore — resolved at runtime via MF
import { commonFunctions } from "shell/shared";
// @ts-ignore — resolved at runtime via MF
import { DTO } from "shell/shared";

interface ChangeTextPayload {
  key: IntimationFieldKey;
  value: string;
}

const IntimationAction = {
  onChangeTextFieldValue: (state: Record<string, unknown>, action: PayloadAction<ChangeTextPayload>) => {
    const { key, value } = action.payload;
    const { submitJson, displayJson } = state as unknown as IntimationState;
    commonFunctions.setStateObjValue(submitJson, key, value);
    commonFunctions.setStateObjValue(displayJson, key, value);
  },

  resetDTO: (_state: DTO) => IntimationDTO(),
};

export default IntimationAction;
