import { Navigate } from "react-router-dom";

const AuthProvider = ({ children }) => {
  const auth = sessionStorage.getItem("token");
  if (!auth) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default AuthProvider;
