import ProfileForm from "../modules/profile/profile-form";
import profileSlice from "../modules/profile/profile-slice";
import { Button, DTONames, useInjectSlice } from "../shared";
import { Link } from "react-router-dom";

function Profile() {
  const isReady = useInjectSlice(DTONames.PROFILE, profileSlice);

  if (!isReady) return null;

  return (
    <div>
      <h1>Profile Page</h1>
      <ProfileForm rootSliceName={DTONames.PROFILE} />
      <Link to={"/"}>
        <Button label="back to home" onClick={() => {}} />
      </Link>
    </div>
  );
}

Profile.displayName = "Profile";
export default Profile;
