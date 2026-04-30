import { setStateObjValue } from "../../../shared";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { ContactUSState } from "../model/contact-us-dto";
import { ContactUSDTO } from "../model/contact-us-dto";
import type { DTO } from "../../../shared/definations/types";

interface ChangeTextPayload {
  key: keyof ContactUSState["fieldsName"];
  value: string;
}

const contactUSAction = {
  onChangeTextFieldValue: (state: Record<string, unknown>, action: PayloadAction<ChangeTextPayload>) => {

    const { key, value } = action.payload;
    const contactUsState = state as unknown as ContactUSState;

    const { submitJson, displayJson } = contactUsState;
    setStateObjValue(submitJson, key, value);
    setStateObjValue(displayJson, key, value);
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resetDTO: (_state: DTO) => ContactUSDTO(),
};

export default contactUSAction;
