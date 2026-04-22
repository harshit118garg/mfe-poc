import { Button } from "../../shared";
import type { CommonProps, DefaultRulesType } from "../../shared/definations/types";
import RelativeInfo from "../../shared/subcomponents/relativeInfo/relativeInfo";
import useContactUSController from "./contactus-form-controller";
import type { ContactUSState } from "./model/contact-us-dto";

export default function ContactUsForm(props: CommonProps) {
  const { onChangeField, contactUsState, handleSubmit, handleClear, relativeInfo } = useContactUSController(props);
  const { fieldsName, defaultsRules, submitJson } = contactUsState;

  const renderField = (key: ContactUSState["fieldsName"][keyof ContactUSState["fieldsName"]]) => {
    const rule = defaultsRules[key] as DefaultRulesType;
    const value = (submitJson[key] as string) ?? "";
    const isTextArea = rule.type === "textarea";

    return (
      <div key={key} style={{ marginBottom: ".5rem" }}>
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
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {[fieldsName.name, fieldsName.email, fieldsName.phone, fieldsName.message].map(renderField)}
        </div>
        <RelativeInfo relativeInfo={relativeInfo} onChangeField={onChangeField} />
        <div style={{ display: "flex", justifyContent: "flex-end", width: "100%", gap: "0.5rem" }}>
          <Button label="Clear" onClick={handleClear} />
          <Button label="Submit" onClick={handleSubmit} />
        </div>
      </fieldset>
    </div>
  );
}
