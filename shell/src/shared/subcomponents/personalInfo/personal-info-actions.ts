import { getNestedValue, setStateObjValue } from "../..";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { PersonalInfoState } from "./personal-info-dto";
import relativeInfoAction from "../relativeInfo/relative-info-actions";

interface ChangeTextPayload {
  key: keyof PersonalInfoState["fieldsName"];
  value: string;
  parentSliceName: string;
}

export const personalInfoActionNames = {
  ON_CHANGE_PERSONAL_INFO_TEXT_FIELD: "onChangePersonalInfoTextField",
} as const;

const personalInfoAction = {
  [personalInfoActionNames.ON_CHANGE_PERSONAL_INFO_TEXT_FIELD]: (state: Record<string, unknown>, action: PayloadAction<ChangeTextPayload>) => {
    const { key, value, parentSliceName } = action.payload;

    const personalInfoState = getNestedValue(state, parentSliceName) as unknown as PersonalInfoState;

    const { submitJson, displayJson } = personalInfoState;
    setStateObjValue(submitJson, key as string, value);
    setStateObjValue(displayJson, key as string, value);
  },
  ...relativeInfoAction,
};

export default personalInfoAction;
