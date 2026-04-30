import relativeInfoAction from "../../shared/subcomponents/relativeInfo/relative-info-actions";
import createDynamicSlice from "../../store/dynamicSliceFactory";
import contactUSAction from "./actions/contactus-actions";
import { ContactUSDTO } from "./model/contact-us-dto";

export const sliceName = "contactUs";

const contactUsSlice = createDynamicSlice(
  sliceName,
  {
    ...ContactUSDTO(),
  },
  {
    ...contactUSAction,
    ...relativeInfoAction
  },
);

export default contactUsSlice;
