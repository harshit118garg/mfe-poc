import { useDispatch, useSelector } from "react-redux";
import { useInjectSlice } from "../../hooks";
import type { CommonProps } from "../../definations";
import { useMemo, useState } from "react";
import createDynamicSlice from "../../../store/dynamicSliceFactory";
import { RelativeInfoDTO, type RelativeInfoDTOType } from "./relative-info-dto";
import relativeInfoAction from "./relative-info-actions";

function useRelativeInfoController(props: CommonProps) {
  const [sliceName] = useState(() => `relativeInfo_${Date.now()}`);

  const relativeInfoSlice = useMemo(() => {
    return createDynamicSlice(
      sliceName,
      { ...RelativeInfoDTO() },
      {
        ...relativeInfoAction,
      },
    );
  }, [sliceName]);

  const isReady = useInjectSlice(sliceName, relativeInfoSlice);

  const dispatch = useDispatch();

  const relativeInfoState = useSelector((state: any) => state[sliceName]) as RelativeInfoDTOType;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    // dispatch(relativeInfoAction.onChangeTextFieldValue({ name, value }));
    dispatch({ type: `${sliceName}/onChangeTextFieldValue`, payload: { key: name, value } });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    dispatch({ type: `${sliceName}/onChangeSelectFieldValue`, payload: { key: name, value } });
  };

  return { relativeInfoState, isReady, handleChange, handleSelectChange };
}

export default useRelativeInfoController;
