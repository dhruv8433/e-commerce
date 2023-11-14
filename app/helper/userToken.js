import { useSelector } from "react-redux";

// This service fetches the authentication token state from Redux store or any other means
function token() {
  const userTokens = useSelector((state) => state.isAuthenticate.user.token);
  // retrieve the state from Redux store;
  return userTokens;
}

export { token };
