// @ts-ignore — resolved at runtime via MF
import { useInjectSlice } from "shell/shared";
import IntimationSlice, { sliceName } from "./intimation-slice";
import IntimationForm from "./intimation-form";

export default function Intimation() {
  const isReady = useInjectSlice(sliceName, IntimationSlice);
  

  if (!isReady) {
    return null;
  }

  // const [motherName, setMotherName] = useState("");
  // const [fatherName, setFatherName] = useState("");

  

  // const handleClear = () => {
  //   setMotherName("");
  //   setFatherName("");
  //   setIntimationValue("");
  // };

  // const handleSubmit = () => {
  //   setIntimationValue(`${motherName} ${fatherName}`);
  //   setFatherName("");
  //   setMotherName("");
  // };

  return (
    <IntimationForm />
  );
}
