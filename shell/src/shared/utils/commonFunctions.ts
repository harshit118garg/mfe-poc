
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

const commonFunctions = {
  formatDate,
  setStateObjValue
};

export { commonFunctions };
export default commonFunctions;
