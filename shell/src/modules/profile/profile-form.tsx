import { Button, useParentSliceName, type CommonProps } from "../../shared";
import PersonalInfo from "../../shared/subcomponents/personalInfo/personalInfo";
import useProfileFormController from "./profile-form-controller";

export default function ProfileForm(props: CommonProps) {
  const { handleClear, handleSubmit } = useProfileFormController(props);

  const parentSliceName = useParentSliceName(props.rootSliceName);

  return (
    <div>
      <div style={{ margin: "0 auto", padding: "1rem" }}>
        <fieldset>
          <legend>
            <strong>Profile Form</strong>
          </legend>
          <PersonalInfo parentSliceName={parentSliceName} rootSliceName={props.rootSliceName} />
          <div style={{ display: "flex", justifyContent: "flex-end", width: "100%", gap: "0.5rem" }}>
            <Button label="Clear" onClick={handleClear} />
            <Button label="Submit" onClick={handleSubmit} />
          </div>
        </fieldset>
      </div>
    </div>
  );
}
