import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const RestaurantsRootLayout = () => {
    return (
        <Container>
            <Outlet />
        </Container>
    );

}

export default RestaurantsRootLayout;