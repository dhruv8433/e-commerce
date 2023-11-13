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

// type of notification we recived
export const order_success = "order_success";
export const order_cancle = "order_cancle";
export const order_processed = "order_processed";

export const order_success_msg = "Your Service Order Placed Success 🥳";
export const order_canlce_msg = "Your order cancellation request recivied..!";
export const order_processed_msg = "Your Service order is processed 🥳";

export const order_success_details =
  "Hello, your service order has been received. We will send another text when it’s on the way home.";
export const order_canlce_details =
  "Your order will be canceling soon, we refund amount into your bank account";
export const order_processed_details =
  "Your Service order is currently processing, don't forgot to review it";
