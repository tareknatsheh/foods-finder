import { useAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";

const LoginButton = () => {
  const { isLoading, loginWithRedirect } = useAuth0();

  return <Button disabled={isLoading} onClick={() => loginWithRedirect()}>
    {
      isLoading ?
        "loading..." :
        "Log In"
    }
  </Button>;
};

export default LoginButton;