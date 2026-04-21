import { useDispatch, useSelector } from "react-redux";
// @ts-ignore — resolved at runtime via MF
import type { RootState } from "shell/store";
// @ts-ignore — resolved at runtime via MF
import { DTO } from "shell/shared";
import type { Action } from "@reduxjs/toolkit";
import type { IntimationFieldKey } from "./models/intimation-dto";
import { sliceName } from "./intimation-slice";

interface IntimationAction extends Action {
  payload: { key: IntimationFieldKey; value: string };
}

interface ClearAction extends Action {
  payload?: undefined;
}

function useIntimationController() {
  const dispatch = useDispatch();
  const intimationState = useSelector((state: RootState) => state[sliceName]) as DTO;

  const { fieldsName, submitJson } = intimationState;

  const onChangeField = (key: IntimationFieldKey, value: string) => {
    (dispatch as (action: IntimationAction) => IntimationAction)({
      type: `${sliceName}/onChangeTextFieldValue`,
      payload: { key, value },
    });
  };

  const handleSubmit = async () => {
    const formData: Record<string, string> = {};
    (Object.values(fieldsName) as string[]).forEach((key) => {
      formData[key] = submitJson[key] as string;
    });
    console.log("Form submitted:", formData);
  };

  const handleClear = () => {
    (dispatch as (action: ClearAction) => ClearAction)({
      type: `${sliceName}/resetDTO`,
    });
  };

  return {
    intimationState,
    onChangeField,
    handleSubmit,
    handleClear,
  };
}

export default useIntimationController;
