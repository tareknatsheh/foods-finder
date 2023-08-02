import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const RestaurantsRootLayout = () => {
    return (
        <Container className="mt-4">
            <h4>Restaurants Section</h4>
            <Outlet />
        </Container>
    );

}

export default RestaurantsRootLayout;