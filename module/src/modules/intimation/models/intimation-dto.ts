import { INTIMATION } from "../contants";
// @ts-ignore — resolved at runtime via MF
import { DTO } from "shell/shared";

export const IntimationFieldKeys = {
  mothersName: "mothersName",
  fathersName: "fathersName",
} as const;

export type IntimationFieldKey = (typeof IntimationFieldKeys)[keyof typeof IntimationFieldKeys];

export const IntimationFields = () => {
  return {
    mothersName: IntimationFieldKeys.mothersName,
    fathersName: IntimationFieldKeys.fathersName,
  } as const;
};

export const IntimationDTO = (): DTO => ({
  submitJson: {},
  displayJson: {},
  isValidJson: {},
  fieldError: {},
  helperText: {},
  fieldsName: IntimationFields(),
  defaultsRules: {
    [IntimationFieldKeys.mothersName]: {
      label: "Mothers Name",
      required: true,
      type: "text",
      minLength: 3,
      maxLength: 50,
    },
    [IntimationFieldKeys.fathersName]: {
      label: "Fathers Name",
      required: true,
      type: "text",
      minLength: 3,
      maxLength: 50,
    },
  },
  dtoName: INTIMATION,
});

export type IntimationState = ReturnType<typeof IntimationDTO>;
