import type { DTO } from "../../definations/types";

interface RelativeInfoProps {
  relativeInfo: DTO;
  onChangeField: (key: string, value: string) => void;
}

export default function RelativeInfo({ relativeInfo, onChangeField }: RelativeInfoProps) {
  const { fieldsName, defaultsRules, submitJson } = relativeInfo;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChangeField(name, value);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    onChangeField(name, value);
  };

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
