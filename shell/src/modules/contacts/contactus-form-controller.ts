import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../shared";
import { sliceName } from "./contactus-slice";
import type { ContactUSFieldKey } from "./model/contact-us-dto";
import type { DTO } from "../../shared/definations/types";
import type { Action } from "@reduxjs/toolkit";

interface ContactUSAction extends Action {
  payload: { key: ContactUSFieldKey; value: string };
}

interface ClearAction extends Action {
  payload?: undefined;
}

function useContactUSController() {
  const dispatch = useDispatch();
  const contactUsState = useSelector((state: RootState) => state[sliceName]) as DTO;
  const { fieldsName, submitJson } = contactUsState;

  const onChangeField = useCallback(
    (key: ContactUSFieldKey, value: string) => {
      (dispatch as (action: ContactUSAction) => ContactUSAction)({
        type: `${sliceName}/onChangeTextFieldValue`,
        payload: { key, value },
      });
    },
    [dispatch]
  );

  const handleSubmit = useCallback(async () => {
    const formData: Record<string, string> = {};
    Object.values(fieldsName).forEach((key) => {
      formData[key] = submitJson[key] as string;
    });
    console.log("Form submitted:", formData);
  }, [fieldsName, submitJson]);

  const handleClear = useCallback(() => {
    (dispatch as (action: ClearAction) => ClearAction)({
      type: `${sliceName}/resetDTO`,
    });
  }, [dispatch]);

  return { contactUsState, onChangeField, handleSubmit, handleClear };
}

export default useContactUSController;