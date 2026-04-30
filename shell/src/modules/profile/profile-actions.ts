import type { DTO } from "../../shared";
import personalInfoAction from "../../shared/subcomponents/personalInfo/personal-info-actions";
import { ProfileDTO } from "./profile-dto";

export const profileActionsNames = {
  RESETDTO: "resetDTO",
} as const;

const profileActions = {
  ...personalInfoAction,
  [profileActionsNames.RESETDTO]: (_state: DTO) => ProfileDTO(),
};

export default profileActions;
