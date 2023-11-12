const { httpAxios } = require("../helper/httpAxios");

// send data to api and procced order save into database
export async function placeOrderService(userToken, data) {
  const placeOrder = await httpAxios
    .post("/api/place-order", { userToken: userToken, data: data })
    .then((response) => response.data);

  return placeOrder;
}
