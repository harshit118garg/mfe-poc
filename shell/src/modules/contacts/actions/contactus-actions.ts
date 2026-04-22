import { setStateObjValue } from "../../../shared";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { ContactUSState } from "../model/contact-us-dto";
import { ContactUSDTO } from "../model/contact-us-dto";
import type { DTO } from "../../../shared/definations/types";
import { RelativeInfoFields } from "../../../shared/subcomponents/relativeInfo/relative-info-dto";
import type { RelativeInfoDTOType } from "../../../shared/subcomponents/relativeInfo/relative-info-dto";

interface ChangeTextPayload {
  key: ContactUSState["fieldsName"][keyof ContactUSState["fieldsName"]] | RelativeInfoDTOType["fieldsName"][keyof RelativeInfoDTOType["fieldsName"]];
  value: string;
}

const relativeInfoFields = RelativeInfoFields();

const contactUSAction = {
  onChangeTextFieldValue: (state: Record<string, unknown>, action: PayloadAction<ChangeTextPayload>) => {
    const { key, value } = action.payload;
    const contactUsState = state as unknown as ContactUSState;
    const relativeInfoState = contactUsState.relativeInfo;

    // Check if key belongs to relativeInfo
    if ((Object.values(relativeInfoFields) as string[]).includes(key as string)) {
      setStateObjValue(relativeInfoState.submitJson, key, value);
      setStateObjValue(relativeInfoState.displayJson, key, value);
    } else {
      const { submitJson, displayJson } = contactUsState;
      setStateObjValue(submitJson, key, value);
      setStateObjValue(displayJson, key, value);
    }
  },

  resetDTO: (_state: DTO) => ContactUSDTO(),
};

export default contactUSAction;
