import type { DTO } from "../definations";

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
}

export function setStateObjValue(state: Record<string, unknown>, key: string, value: unknown) {
  state[key] = value;
}

export function constructParentSliceName(sliceName: string, parentSliceName: string = ""): string {
  return parentSliceName ? `${parentSliceName}.${sliceName}` : sliceName;
}

export function getNestedValue(obj: Record<string, unknown>, path: string) {
  console.log("🚀 ~ getNestedValue ~ path:", path)
  const keys = path.split(".");

  const returnState = keys.reduce((acc: Record<string, unknown>, key: string) => {
    if (key in acc) {
      return acc[key];
    } else if (key in (acc as unknown as DTO).fieldsName) {
      return (acc as unknown as DTO).fieldsName[key];
    }else
    return acc
  }, obj);

  return returnState;
}

const commonFunctions = {
  formatDate,
  setStateObjValue,
  constructParentSliceName,
  getNestedValue,
};

// export { commonFunctions };
export default commonFunctions;
