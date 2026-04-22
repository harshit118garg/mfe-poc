import type { DTO } from "../../../shared/definations/types";
import { ContactUSDTONames } from "../contactus-dto-name";
import { RelativeInfoDTO, type RelativeInfoDTOType } from "../../../shared/subcomponents/relativeInfo/relative-info-dto";

export const ContactUSFields = () => {
  return {
    name: "name",
    email: "email",
    phone: "phone",
    message: "message",
  } as const;
};

export interface ContactUSData extends DTO {
  relativeInfo: RelativeInfoDTOType;
}

export const ContactUSDTO = (): ContactUSData => ({
  submitJson: {},
  displayJson: {},
  isValidJson: {},
  fieldError: {},
  helperText: {},
  fieldsName: ContactUSFields(),
  relativeInfo: RelativeInfoDTO(),
  defaultsRules: {
    [ContactUSFields().name]: {
      label: "Name",
      required: true,
      type: "text",
      minLength: 3,
      maxLength: 50,
    },
    [ContactUSFields().email]: {
      label: "Email",
      required: true,
      type: "email",
      minLength: 3,
      maxLength: 50,
    },
    [ContactUSFields().phone]: {
      label: "Phone",
      required: true,
      type: "tel",
      minLength: 10,
      maxLength: 10,
    },
    [ContactUSFields().message]: {
      label: "Message",
      required: true,
      type: "textarea",
      minLength: 3,
      maxLength: 500,
    },
  },
  dtoName: ContactUSDTONames.CONTACT_US,
});

export type ContactUSState = ReturnType<typeof ContactUSDTO>;