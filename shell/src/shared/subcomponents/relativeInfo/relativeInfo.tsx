import useRelativeInfoController from "./relative-info-controller";
import type { CommonProps } from "../../definations";

export default function RelativeInfo(props: CommonProps) {
  const { isReady, relativeInfoState, handleChange, handleSelectChange } = useRelativeInfoController(props);
  console.log("🚀 ~ RelativeInfo ~ relativeInfoState:", relativeInfoState);

  if (!isReady) return null;

  const { defaultsRules, submitJson, fieldsName } = relativeInfoState;

  return (
    <div style={{ margin: "0 auto", padding: "1rem" }}>
      <fieldset>
        <legend>
          <strong>Relative Info</strong>
        </legend>
        <div style={{ display: "flex", flexDirection: "row", width: "100%", alignItems: "center", gap: "1rem" }}>
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor={fieldsName.relativeName} style={{ display: "block", marginBottom: "0.25rem" }}>
              {defaultsRules[fieldsName.relativeName].label}
              {defaultsRules[fieldsName.relativeName].required && <span style={{ color: "red" }}> *</span>}
            </label>
            <input
              type="text"
              id={fieldsName.relativeName}
              name={fieldsName.relativeName}
              value={submitJson[fieldsName.relativeName] as string ?? ""}
              onChange={handleChange}
              style={{ width: "100%" }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor={fieldsName.relativeType} style={{ display: "block", marginBottom: "0.25rem" }}>
              {defaultsRules[fieldsName.relativeType].label}
              {defaultsRules[fieldsName.relativeType].required && <span style={{ color: "red" }}> *</span>}
            </label>
            <select
              id={fieldsName.relativeType}
              name={fieldsName.relativeType}
              value={submitJson[fieldsName.relativeType] as string ?? ""}
              onChange={handleSelectChange}
              style={{ width: "100%" }}
            >
              <option value="">Select Relation</option>
              <option value="father">Father</option>
              <option value="mother">Mother</option>
              <option value="brother">Brother</option>
              <option value="sister">Sister</option>
            </select>
          </div>
        </div>
      </fieldset>
    </div>
  );
}
