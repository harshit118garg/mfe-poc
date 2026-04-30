import { useDispatch, useSelector } from "react-redux";
import type { Action } from "@reduxjs/toolkit";
import type { RelativeInfoDTOType } from "./relative-info-dto";
import { DTONames, type CommonProps } from "../../definations";
import { getNestedValue } from "../../utils/commonFunctions";
import type { RootState } from "../../../store/store";
import { useParentSliceName } from "../../hooks";

interface RelativeInfoAction extends Action {
  payload: { key: keyof RelativeInfoDTOType["fieldsName"]; value: string; parentSliceName: string };
}


export function useRelativeInfoController(props: CommonProps) {
  const dispatch = useDispatch();
  const parentSliceName = useParentSliceName(DTONames.RELATIVE_INFO, props.parentSliceName!);

  const relativeInfoState = useSelector((state: RootState) => getNestedValue(state, parentSliceName)) as unknown as RelativeInfoDTOType;
  console.log("🚀 ~ useRelativeInfoController ~ relativeInfoState:", relativeInfoState)

  
  const onChangeField = (key: keyof RelativeInfoDTOType["fieldsName"], value: string) => {
    (dispatch as (action: RelativeInfoAction) => RelativeInfoAction)({
      type: `${props.rootSliceName}/onChangeRelativeInfoTextField`,
      payload: { key, value, parentSliceName },
    });
  };


  return { relativeInfoState, onChangeField };
}

export default useRelativeInfoController;
