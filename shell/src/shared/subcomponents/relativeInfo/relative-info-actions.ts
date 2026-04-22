import type { PayloadAction } from "@reduxjs/toolkit";
import type { RelativeInfoDTOType } from "./relative-info-dto";
import { setStateObjValue } from "../../utils/commonFunctions";

interface ChangeTextPayload {
  key: RelativeInfoDTOType["fieldsName"][keyof RelativeInfoDTOType["fieldsName"]];
  value: string;
}

const relativeInfoAction = {
  onChangeTextFieldValue: (state: Record<string, unknown>, action: PayloadAction<ChangeTextPayload>) => {
    const { key, value } = action.payload;
    const { submitJson, displayJson } = state as unknown as RelativeInfoDTOType;

    setStateObjValue(submitJson, key, value);
    setStateObjValue(displayJson, key, value);
  },

  onChangeSelectFieldValue: (state: Record<string, unknown>, action: PayloadAction<ChangeTextPayload>) => {
    const { key, value } = action.payload;
    const { submitJson, displayJson } = state as unknown as RelativeInfoDTOType;
    setStateObjValue(submitJson, key, value);
    setStateObjValue(displayJson, key, value);
  },
};

export default relativeInfoAction;
