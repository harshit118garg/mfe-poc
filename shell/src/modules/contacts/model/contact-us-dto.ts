import type { DTO } from "../../../shared/definations/types";
import { ContactUSDTONames } from "../contactus-dto-name";

const { CONTACT_US } = ContactUSDTONames;

export const ContactUSFieldKeys = {
  NAME: "name",
  EMAIL: "email",
  PHONE: "phone",
  MESSAGE: "message",
} as const;

export type ContactUSFieldKey = (typeof ContactUSFieldKeys)[keyof typeof ContactUSFieldKeys];

export const ContactUSFields = () => {
  return {
    name: ContactUSFieldKeys.NAME,
    email: ContactUSFieldKeys.EMAIL,
    phone: ContactUSFieldKeys.PHONE,
    message: ContactUSFieldKeys.MESSAGE,
  } as const;
};

export const ContactUSDTO = (): DTO => ({
  submitJson: {},
  displayJson: {},
  isValidJson: {},
  fieldError: {},
  helperText: {},
  fieldsName: ContactUSFields(),
  defaultsRules: {
    [ContactUSFieldKeys.NAME]: {
      label: "Name",
      required: true,
      type: "text",
      minLength: 3,
      maxLength: 50,
    },
    [ContactUSFieldKeys.EMAIL]: {
      label: "Email",
      required: true,
      type: "email",
      minLength: 3,
      maxLength: 50,
    },
    [ContactUSFieldKeys.PHONE]: {
      label: "Phone",
      required: true,
      type: "tel",
      minLength: 10,
      maxLength: 10,
    },
    [ContactUSFieldKeys.MESSAGE]: {
      label: "Message",
      required: true,
      type: "textarea",
      minLength: 3,
      maxLength: 500,
    },
  },
  dtoName: CONTACT_US,
});

export type ContactUSState = ReturnType<typeof ContactUSDTO>