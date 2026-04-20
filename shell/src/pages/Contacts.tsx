import { Link } from "react-router-dom";
import { Button } from "../shared";
import ContactUs from "../modules/contacts/contactus-form";
import contactUsSlice, { sliceName } from "../modules/contacts/contactus-slice";
import { useInjectSlice } from "../shared/hooks";

function Contacts() {
  const isReady = useInjectSlice(sliceName, contactUsSlice);

  if (!isReady) return null;

  return (
    <div>
      <h1>Contacts Page</h1>
      <ContactUs />
      <Link to={"/"}>
        <Button label="back to home" onClick={() => {}} />
      </Link>
    </div>
  );
}

Contacts.displayName = "Contacts";
export default Contacts;
