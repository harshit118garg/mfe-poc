import { DTONames } from "../../definations";
import { RelativeInfoDTO } from "../relativeInfo/relative-info-dto";

export const RelativeInfoDTOName = "RelativeInfo";

export const PersonalInfoFields = () => {
  return {
    fname: "firstName",
    mName: "middleName",
    lName: "lastName",
    email: "email",
    phone: "phone",
    [DTONames.RELATIVE_INFO]: RelativeInfoDTO(),
  };
};

export const PersonalInfoDTO = () => {
  return {
    submitJson: {} as Record<string, string | number>,
    displayJson: {} as Record<string, string | number>,
    isValidJson: {} as Record<string, boolean>,
    fieldError: {} as Record<string, string>,
    helperText: {} as Record<string, string | number>,
    fieldsName: PersonalInfoFields(),
    defaultsRules: {
      [PersonalInfoFields().fname]: {
        label: "First Name",
        required: true,
        type: "text",
        minLength: 3,
        maxLength: 50,
      },
      [PersonalInfoFields().mName]: {
        label: "Middle Name",
        required: false,
        type: "text",
        minLength: 3,
        maxLength: 50,
      },
      [PersonalInfoFields().lName]: {
        label: "Last Name",
        required: true,
        type: "text",
        minLength: 3,
        maxLength: 50,
      },
      [PersonalInfoFields().email]: {
        label: "Email",
        required: true,
        type: "email",
        minLength: 3,
        maxLength: 50,
      },
      [PersonalInfoFields().phone]: {
        label: "Phone",
        required: true,
        type: "phone",
        minLength: 10,
        maxLength: 10,
      },
    },
  };
};

export type PersonalInfoState = ReturnType<typeof PersonalInfoDTO>;
