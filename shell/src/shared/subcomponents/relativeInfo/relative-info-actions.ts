import { getNestedValue, setStateObjValue } from "../..";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RelativeInfoDTOType } from "./relative-info-dto";

interface ChangeTextPayload {
  key: keyof RelativeInfoDTOType["fieldsName"];
  value: string;
  parentSliceName: string;
}

const relativeInfoAction = {
  onChangeRelativeInfoTextField: (state: Record<string, unknown>, action: PayloadAction<ChangeTextPayload>) => {
    const { key, value, parentSliceName } = action.payload;

    const relativeInfoState = getNestedValue(state, parentSliceName) as unknown as RelativeInfoDTOType;

    const { submitJson, displayJson } = relativeInfoState;
    setStateObjValue(submitJson, key, value);
    setStateObjValue(displayJson, key, value);
  },
};

export default relativeInfoAction;
