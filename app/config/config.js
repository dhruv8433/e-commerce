export const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "pink",
  "purple",
  "aqua",
];

export const company_name = `eRequirement`;

// if provider id is inside this array than only return service regarding those provider
export const providersId = [21, 22, 23, 24, 25, 26, 27, 28, 29];
export const homeId = 21;
export const laundryId = 22;
export const fullServiceId = 23;
export const newBarberId = 24;
export const electricId = 25;
export const pestControlId = 26;
export const plumbingId = 27;
export const kitchenExprertId = 28;
export const carProviderId = 29;

// function that help us to open and close anything using boolean values
export function open(open) {
  open(true);
}
export function close(close) {
  close(false);
}
