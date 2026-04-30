import React from "react";
import type { CommonProps } from "../../definations";
import usePersonalInfoController from "./personal-info-controller";
import RelativeInfo from "../relativeInfo/relativeInfo";

const PersonalInfo = (props: CommonProps) => {
  const { personalInfoState, onChangeField, parentSliceName } = usePersonalInfoController(props);
  const { fieldsName, defaultsRules, submitJson } = personalInfoState;

  return (
    <div style={{ margin: "0 auto", padding: "1rem" }}>
      <fieldset>
        <legend>
          <strong>Personal Info</strong>
        </legend>
        <div className="grid">
          <div className="inputBox">
            <label htmlFor={fieldsName.fname}>
              {defaultsRules[fieldsName.fname].label}
              {defaultsRules[fieldsName.fname].required && <span className="required"> *</span>}
            </label>
            <input
              type="text"
              id={fieldsName.fname}
              name={fieldsName.fname}
              value={submitJson[fieldsName.fname] ?? ""}
              onChange={(e) => onChangeField(fieldsName.fname, e.target.value)}
            />
          </div>
          <div className="inputBox">
            <label htmlFor={fieldsName.mName}>
              {defaultsRules[fieldsName.mName].label}
              {defaultsRules[fieldsName.mName].required && <span className="required"> *</span>}
            </label>
            <input
              type="text"
              id={fieldsName.mName}
              name={fieldsName.mName}
              value={submitJson[fieldsName.mName] ?? ""}
              onChange={(e) => onChangeField(fieldsName.mName, e.target.value)}
            />
          </div>
          <div className="inputBox">
            <label htmlFor={fieldsName.lName}>
              {defaultsRules[fieldsName.lName].label}
              {defaultsRules[fieldsName.lName].required && <span className="required"> *</span>}
            </label>
            <input
              type="text"
              id={fieldsName.lName}
              name={fieldsName.lName}
              value={submitJson[fieldsName.lName] ?? ""}
              onChange={(e) => onChangeField(fieldsName.lName, e.target.value)}
            />
          </div>
        </div>
        <RelativeInfo parentSliceName={parentSliceName} rootSliceName={props.rootSliceName} />
        <div className="grid">
          <div className="inputBox">
            <label htmlFor={fieldsName.email}>
              {defaultsRules[fieldsName.email].label}
              {defaultsRules[fieldsName.email].required && <span className="required"> *</span>}
            </label>
            <input
              type="text"
              id={fieldsName.email}
              name={fieldsName.email}
              value={submitJson[fieldsName.email] ?? ""}
              onChange={(e) => onChangeField(fieldsName.email, e.target.value)}
            />
          </div>
          <div className="inputBox">
            <label htmlFor={fieldsName.phone}>
              {defaultsRules[fieldsName.phone].label}
              {defaultsRules[fieldsName.phone].required && <span className="required"> *</span>}
            </label>
            <input
              type="text"
              id={fieldsName.phone}
              name={fieldsName.phone}
              value={submitJson[fieldsName.phone] ?? ""}
              onChange={(e) => onChangeField(fieldsName.phone, e.target.value)}
            />
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default React.memo(PersonalInfo);
