import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from '../pages/LoginButton';
import LogoutButton from '../pages/LogoutButton';

const NavigationBar = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    // console.log("isAuthenticated", isAuthenticated);
    // console.log("user", user);
    // console.log("isLoading", isLoading);


    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">FoodyFinder</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/restaurants">Restaurants</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                    </Nav>
                    {
                        isAuthenticated ?
                            <Nav>
                                <>
                                    <span className='my-auto me-2'>
                                        {user?.nickname}
                                    </span>
                                    <LogoutButton />
                                </>
                            </Nav> :
                            <Nav>
                                <LoginButton />
                            </Nav>

                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;