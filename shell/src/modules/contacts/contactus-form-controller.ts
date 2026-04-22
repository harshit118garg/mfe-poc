import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { sliceName } from "./contactus-slice";
import type { ContactUSState } from "./model/contact-us-dto";
import type { CommonProps, DTO } from "../../shared/definations/types";
import type { Action } from "@reduxjs/toolkit";

interface ContactUSAction extends Action {
  payload: { key: ContactUSState["fieldsName"][keyof ContactUSState["fieldsName"]]; value: string };
}

interface ClearAction extends Action {
  payload?: undefined;
}

export function useContactUSController(props: CommonProps) {
  const dispatch = useDispatch();
  const contactUsState = useSelector((state: RootState) => state[props.sliceName!]) as DTO;
  const { fieldsName, submitJson } = contactUsState;

  const onChangeField = (key: ContactUSState["fieldsName"][keyof ContactUSState["fieldsName"]], value: string) => {
    (dispatch as (action: ContactUSAction) => ContactUSAction)({
      type: `${sliceName}/onChangeTextFieldValue`,
      payload: { key, value },
    });
  };

  const handleSubmit = async () => {
    const formData: Record<string, string> = {};
    Object.values(fieldsName).forEach((key) => {
      formData[key] = submitJson[key] as string;
    });
  };

  const handleClear = () => {
    (dispatch as (action: ClearAction) => ClearAction)({
      type: `${sliceName}/resetDTO`,
    });
  };

  return { contactUsState, onChangeField, handleSubmit, handleClear };
}

export default useContactUSController;
