import Container from "react-bootstrap/Container";
import { Outlet } from "react-router-dom";

const RestaurantsRootLayout = () => {
    return (
        <Container>
            <Outlet />
        </Container>
    );
}

export default RestaurantsRootLayout;