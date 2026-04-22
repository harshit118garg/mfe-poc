import type { DTO } from "../../../shared/definations/types";
import { ContactUSDTONames } from "../contactus-dto-name";


const { CONTACT_US } = ContactUSDTONames;

export function ContactUSFields() {
  return {
    name: "name",
    email: "email",
    phone: "phone",
    message: "message",
  };
};

export const ContactUSDTO = (): DTO => ({
  submitJson: {},
  displayJson: {},
  isValidJson: {},
  fieldError: {},
  helperText: {},
  fieldsName: ContactUSFields(),
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
  dtoName: CONTACT_US,
});

export type ContactUSState = ReturnType<typeof ContactUSDTO>