import { useDispatch, useSelector } from "react-redux";
import type { Action } from "@reduxjs/toolkit";
import type { PersonalInfoState } from "./personal-info-dto";
import { DTONames, type CommonProps } from "../../definations";
import { getNestedValue } from "../../utils/commonFunctions";
import type { RootState } from "../../../store/store";
import { useParentSliceName } from "../../hooks";
import { personalInfoActionNames } from "./personal-info-actions";

interface PersonalInfoAction extends Action {
  payload: { key: keyof PersonalInfoState["fieldsName"]; value: string; parentSliceName: string };
}

function usePersonalInfoController(props: CommonProps) {
  const dispatch = useDispatch();
  const parentSliceName = useParentSliceName(DTONames.PERSONAL_INFO, props.parentSliceName!);
  console.log("🚀 ~ usePersonalInfoController ~ parentSliceName:", parentSliceName)

  const personalInfoState = useSelector((state: RootState) => getNestedValue(state, parentSliceName)) as unknown as PersonalInfoState;
  console.log("🚀 ~ usePersonalInfoController ~ personalInfoState:", personalInfoState);

  const onChangeField = (key: keyof PersonalInfoState["fieldsName"], value: string) => {
    (dispatch as (action: PersonalInfoAction) => PersonalInfoAction)({
      type: `${props.rootSliceName}/${personalInfoActionNames.ON_CHANGE_PERSONAL_INFO_TEXT_FIELD}`,
      payload: { key, value, parentSliceName },
    });
  };

  return { personalInfoState, onChangeField, parentSliceName };
}

export default usePersonalInfoController;
