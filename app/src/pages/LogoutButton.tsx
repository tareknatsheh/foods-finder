import { useAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";

const LogoutButton = () => {
  const { isLoading, logout } = useAuth0();

  return (
    <Button disabled={isLoading} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      {
        isLoading ?
          "loading..." :
          "Log Out"
      }
    </Button>
  );
};

export default LogoutButton;