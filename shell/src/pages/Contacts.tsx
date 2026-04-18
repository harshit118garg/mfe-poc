import { Link } from "react-router-dom";
import { Button } from "../shared";

function Contacts() {
  return (
    <div>
      <h1>Contacts Page</h1>
      <Link to={"/"}>
        <Button label="back to home" onClick={() => {}} />
      </Link>
    </div>
  );
}


Contacts.displayName = "Contacts";
export default Contacts