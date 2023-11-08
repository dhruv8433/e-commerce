import { useSelector } from "react-redux";

// This service fetches the authentication state from Redux store or any other means
function isAuthenticated() {
  const isAuthenticate = useSelector(
    (state) => state.isAuthenticate.isAuthenticated
  );
  // retrieve the state from Redux store;
  return isAuthenticate;
}

export { isAuthenticated };
