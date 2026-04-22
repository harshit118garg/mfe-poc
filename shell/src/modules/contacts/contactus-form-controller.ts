import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { sliceName } from "./contactus-slice";
import type { ContactUSState } from "./model/contact-us-dto";
import type { CommonProps } from "../../shared/definations/types";
import type { Action } from "@reduxjs/toolkit";
import type { RelativeInfoDTOType } from "../../shared/subcomponents/relativeInfo/relative-info-dto";

interface ContactUSAction extends Action {
  payload: { key: ContactUSState["fieldsName"][keyof ContactUSState["fieldsName"]] | RelativeInfoDTOType["fieldsName"][keyof RelativeInfoDTOType["fieldsName"]]; value: string };
}

interface ClearAction extends Action {
  payload?: undefined;
}

export function useContactUSController(props: CommonProps) {
  const dispatch = useDispatch();
  const contactUsState = useSelector((state: RootState) => state[props.sliceName! as keyof RootState]) as ContactUSState;
  const { fieldsName, submitJson, relativeInfo } = contactUsState;

  const onChangeField = (key: ContactUSState["fieldsName"][keyof ContactUSState["fieldsName"]] | RelativeInfoDTOType["fieldsName"][keyof RelativeInfoDTOType["fieldsName"]], value: string) => {
    (dispatch as (action: ContactUSAction) => ContactUSAction)({
      type: `${sliceName}/onChangeTextFieldValue`,
      payload: { key, value },
    });
  };

  const handleSubmit = async () => {
    const formData: Record<string, string> = {};

    // Contact us fields
    Object.values(fieldsName).forEach((key) => {
      formData[key] = submitJson[key] as string;
    });

    // Relative info fields
    const relativeInfoFields = relativeInfo.fieldsName;
    Object.values(relativeInfoFields).forEach((key) => {
      formData[key] = relativeInfo.submitJson[key] as string;
    });

    console.log("Form data to submit:", formData);
  };

  const handleClear = () => {
    (dispatch as (action: ClearAction) => ClearAction)({
      type: `${sliceName}/resetDTO`,
    });
  };

  return { contactUsState, onChangeField, handleSubmit, handleClear, relativeInfo };
}

export default useContactUSController;
