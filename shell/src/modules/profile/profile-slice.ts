import { DTONames } from "../../shared";
import createDynamicSlice from "../../store/dynamicSliceFactory";
import profileActions from "./profile-actions";
import { ProfileDTO } from "./profile-dto";

const profileSLice = createDynamicSlice(
  DTONames.PROFILE,
  {
    ...ProfileDTO(),
  },
  {
    ...profileActions,
  },
);

export default profileSLice;
