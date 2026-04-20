import { Button } from "../../shared";
import type { DefaultRulesType } from "../../shared/definations/types";
import useContactUSController from "./contactus-form-controller";
import type { ContactUSFieldKey } from "./model/contact-us-dto";

export default function ContactUsForm() {
  const { onChangeField, contactUsState, handleSubmit, handleClear } = useContactUSController();
  const { fieldsName, defaultsRules, submitJson } = contactUsState;

  const renderField = (key: ContactUSFieldKey) => {
    const rule = defaultsRules[key] as DefaultRulesType;
    const value = (submitJson[key] as string) ?? "";
    const isTextArea = rule.type === "textarea";

    return (
      <div key={key} style={{ marginBottom: "1rem" }}>
        <label htmlFor={key} style={{ display: "block", marginBottom: "0.25rem" }}>
          {rule.label}
          {rule.required && <span style={{ color: "red" }}> *</span>}
        </label>
        {isTextArea ? (
          <textarea id={key} name={key} value={value} onChange={(e) => onChangeField(key, e.target.value)} rows={4} style={{ width: "100%" }} />
        ) : (
          <input type={rule.type} id={key} name={key} value={value} onChange={(e) => onChangeField(key, e.target.value)} style={{ width: "100%" }} />
        )}
      </div>
    );
  };

  return (
    <div style={{ margin: "0 auto", padding: "1rem" }}>
      <fieldset>
        <legend>
          <strong>Contact Us</strong>
        </legend>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>{Object.values(fieldsName).map(renderField)}</div>
        <div style={{ display: "flex", justifyContent: "flex-end", width: "100%", gap: "1rem" }}>
          <Button label="Clear" onClick={handleClear} />
          <Button label="Submit" onClick={handleSubmit} />
        </div>
      </fieldset>
    </div>
  );
}
