import { setStateObjValue } from "../../../shared";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { ContactUSFieldKey, ContactUSState } from "../model/contact-us-dto";
import { ContactUSDTO } from "../model/contact-us-dto";
import type { DTO } from "../../../shared/definations/types";

interface ChangeTextPayload {
  key: ContactUSFieldKey;
  value: string;
}

const contactUSAction = {
  onChangeTextFieldValue: (state: Record<string, unknown>, action: PayloadAction<ChangeTextPayload>) => {
    const { key, value } = action.payload;
    const { submitJson, displayJson } = state as unknown as ContactUSState;
    setStateObjValue(submitJson, key, value);
    setStateObjValue(displayJson, key, value);
  },

  resetDTO: (_state: DTO) => ContactUSDTO(),
};

export default contactUSAction;
