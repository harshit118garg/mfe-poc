import { Link } from "react-router-dom";
import { Button } from "../shared";

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <Link to={"/"}>
        <Button label="back to home" onClick={() => {}} />
      </Link>
    </div>
  );
}

About.displayName = "About";
export default About;
