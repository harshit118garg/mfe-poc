import { DTONames } from "../../shared";
import { PersonalInfoDTO } from "../../shared/subcomponents/personalInfo/personal-info-dto";

export const EducationInfoFields = () => {
  return {
    highestQualification: "highestQualification",
    university: "university",
    graduationYear: "graduationYear",
  };
};

export const EducationInfoDTO = () => {
  return {
    submitJson: {},
    displayJson: {},

    isValidJson: {},
    fieldError: {},
    helperText: {},
    fieldsName: EducationInfoFields(),
    defaultsRules: {
      [EducationInfoFields().highestQualification]: {
        label: "Highest Qualification",
        required: true,
        type: "text",
      },
      [EducationInfoFields().university]: {
        label: "University",
        required: true,
        type: "text",
      },
      [EducationInfoFields().graduationYear]: {
        label: "Graduation Year",
        required: true,
        type: "number",
        min: 1900,
        max: new Date().getFullYear(),
      },
    },
  };
};

export type EducationInfoState = ReturnType<typeof EducationInfoDTO>;

export const ProfileFields = () => {
  return {
    [DTONames.PERSONAL_INFO]: PersonalInfoDTO(),
    [DTONames.EDUCATION_INFO]: EducationInfoDTO(),
  } as const;
};

export const ProfileDTO = () => {
  return {
    submitJson: {},
    displayJson: {},
    isValidJson: {},
    fieldError: {},
    helperText: {},
    fieldsName: ProfileFields(),
    defaultsRules: {},
  };
};


export type ProfileState = ReturnType<typeof ProfileDTO>;