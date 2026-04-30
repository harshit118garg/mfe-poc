import { useDispatch, useSelector } from "react-redux";
import { DTONames, type CommonProps } from "../../shared";
import type { ProfileState } from "./profile-dto";
import type { RootState } from "../../store/store";
import { profileActionsNames } from "./profile-actions";

export default function useProfileFormController(props: CommonProps) {
  // Add your controller logic here

  const dispatch = useDispatch();

  const profileState = useSelector((state: RootState) => state[props.rootSliceName as keyof RootState]) as ProfileState;

  const { fieldsName, submitJson } = profileState;

  const handleClear = () => {
    dispatch({
      type: `${props.rootSliceName}/${profileActionsNames.RESETDTO}`,
    });
  };

  const handleSubmit = () => {
    const formData: Record<string, string> = {
      ...submitJson,
      ...fieldsName[DTONames.PERSONAL_INFO].submitJson,
      ...fieldsName[DTONames.EDUCATION_INFO].submitJson,
    };

    console.log("Form data to submit:", formData);
  };

  return { handleClear, handleSubmit, profileState };
}
