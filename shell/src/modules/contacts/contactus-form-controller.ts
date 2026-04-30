import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { sliceName } from "./contactus-slice";
import type { ContactUSState } from "./model/contact-us-dto";
import type { CommonProps } from "../../shared/definations/types";

export function useContactUSController(props: CommonProps) {
  const dispatch = useDispatch();
  const contactUsState = useSelector((state: RootState) => state[props.rootSliceName as keyof RootState]) as ContactUSState;
  const { fieldsName, submitJson } = contactUsState;

  const onChangeField = (key: keyof ContactUSState["fieldsName"], value: string) => {
    dispatch({
      type: `${sliceName}/onChangeTextFieldValue`,
      payload: { key, value },
    });
  };

  const handleSubmit = async () => {
    const formData: Record<string, string> = {
      ...submitJson,
      ...fieldsName.relativeInfo.submitJson,
    };

    console.log("Form data to submit:", formData);
  };

  const handleClear = () => {
    dispatch({
      type: `${sliceName}/resetDTO`,
    });
  };

  return { contactUsState, onChangeField, handleSubmit, handleClear };
}

export default useContactUSController;
