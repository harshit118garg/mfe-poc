// import type { DTO } from "../../definations/types";

import React from "react";
import type { CommonProps } from "../../definations";
import useRelativeInfoController from "./relative-info-controller";

// interface RelativeInfoProps {
//   relativeInfo: DTO;
//   onChangeField: (key: string, value: string) => void;
// }

const RelativeInfo = (props: CommonProps) => {

  const { relativeInfoState, onChangeField } = useRelativeInfoController(props);
  const { fieldsName, defaultsRules, submitJson } = relativeInfoState;

  return (
    <div style={{ margin: "0 auto", padding: "1rem" }}>
      <fieldset>
        <legend>
          <strong>Relative Info</strong>
        </legend>
        <div className="grid">
          <div className="inputBox">
            <label htmlFor={fieldsName.relativeName} style={{ display: "block", marginBottom: "0.25rem" }}>
              {defaultsRules[fieldsName.relativeName].label}
              {defaultsRules[fieldsName.relativeName].required && <span className="required"> *</span>}
            </label>
            <input
              type="text"
              id={fieldsName.relativeName}
              name={fieldsName.relativeName}
              value={submitJson[fieldsName.relativeName] as string ?? ""}
              onChange={(e) => onChangeField(fieldsName.relativeName, e.target.value)}
              style={{ width: "100%" }}
            />
          </div>
          <div className="inputBox">
            <label htmlFor={fieldsName.relativeType} style={{ display: "block", marginBottom: "0.25rem" }}>
              {defaultsRules[fieldsName.relativeType].label}
              {defaultsRules[fieldsName.relativeType].required && <span className="required"> *</span>}
            </label>
            <select
              id={fieldsName.relativeType}
              name={fieldsName.relativeType}
              value={submitJson[fieldsName.relativeType] as string ?? ""}
              onChange={(e) => onChangeField(fieldsName.relativeType, e.target.value)}
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

      {/* <h2>Hello Relative Info</h2> */}
    </div>
  );
}

export default React.memo(RelativeInfo);