import type { DTO } from "../../definations";

export const RelativeInfoDTOName = "RelativeInfo";

export const RelativeInfoFields = () => {
  return {
    relativeName: "relativeName",
    relativeType: "relativeType",
  } as const;
};

export const RelativeInfoDTO = (): DTO => ({
  submitJson: {},
  displayJson: {},
  isValidJson: {},
  fieldError: {},
  helperText: {},
  fieldsName: RelativeInfoFields(),
  defaultsRules: {
    [RelativeInfoFields().relativeName]: {
      label: "Relative Name",
      required: true,
      type: "text",
      minLength: 3,
      maxLength: 50,
    },
    [RelativeInfoFields().relativeType]: {
      label: "Relative Type",
      required: true,
      type: "select",
    },
  },
  dtoName: RelativeInfoDTOName,
});

export type RelativeInfoDTOType = ReturnType<typeof RelativeInfoDTO>;
