import { Link } from "react-router-dom";
import { Button } from "../shared";

function Services() {
  return (
    <div>
      <h1>Services Page</h1>
      <Link to={"/"}>
        <Button label="back to home" onClick={() => {}} />
      </Link>
    </div>
  );
}

Services.displayName = "Services";
export default Services;
