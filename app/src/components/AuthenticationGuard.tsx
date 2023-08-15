import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Container } from "react-bootstrap";

export const AuthenticationGuard = ({ component }: {component: React.ComponentType<object>}) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <Container className="d-flex flex-column justify-content-center my-2">
        <h2>Unautherized!</h2>
        <p>Please Log In to access this page</p>
      </Container>
    ),
  });

  return <Component />;
};