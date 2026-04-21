// @ts-ignore — resolved at runtime via MF
import { Button } from "shell/shared";
import useIntimationController from "./intimation-form-controller";

export default function IntimationForm() {
  const { handleClear, handleSubmit, intimationState, onChangeField } = useIntimationController();

  const { fieldsName, submitJson, defaultsRules } = intimationState;

  const { mothersName, fathersName } = fieldsName;

  return (
    <div>
      <fieldset>
        <legend>
          <strong>Intimation</strong>
        </legend>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor={"motherName"} style={{ display: "block" }}>
              {defaultsRules[mothersName].label}
            </label>
            <input
              id={mothersName}
              value={submitJson[mothersName] ?? ""}
              onChange={(e) => onChangeField(mothersName, e.target.value)}
              placeholder="Enter mother's name..."
              style={{ flex: 1, padding: "8px", borderRadius: "6px", border: "1px solid #d1d5db" }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor={"fatherName"} style={{ display: "block" }}>
              {defaultsRules[fathersName].label}
            </label>
            <input
              id={fathersName}
              value={submitJson[fathersName] ?? ""}
              onChange={(e) => onChangeField(fathersName, e.target.value)}
              placeholder="Enter father's name..."
              style={{ flex: 1, padding: "8px", borderRadius: "6px", border: "1px solid #d1d5db" }}
            />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", width: "100%", gap: "1rem", marginTop: "1rem" }}>
          <Button label="Clear" onClick={handleClear} />
          <Button label="Submit" onClick={handleSubmit} />
        </div>
      </fieldset>
    </div>
  );
}
