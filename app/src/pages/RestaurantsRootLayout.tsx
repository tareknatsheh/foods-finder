import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const RestaurantsRootLayout = () => {
    return (
        <Container className="mt-4">
            <Outlet />
        </Container>
    );

}

export default RestaurantsRootLayout;