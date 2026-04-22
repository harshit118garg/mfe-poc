export type FieldType = "text" | "number" | "email" | "password" | "date" | "select" | "checkbox" | "radio" | "file" | "textarea" | "tel";

export type MenuTextColorType = "primary" | "error" | "inherit";

export type DefaultRulesType = {
  label: string;
  required: boolean;
  type: FieldType;
  minLength?: number;
  maxLength?: number;
};

export interface DTO {
  fieldsName: Record<string, any>;
  submitJson: Record<string, unknown>;
  displayJson: Record<string, unknown>;
  isValidJson: Record<string, true | false>;
  defaultsRules: Record<string, DefaultRulesType>;
  fieldError: Record<string, unknown>;
  helperText: Record<string, unknown>;
  dtoName: string;
  menuTextColor?: MenuTextColorType;
}

export interface CommonProps {
  sliceName?: string;
  parentSliceName?: string;
}