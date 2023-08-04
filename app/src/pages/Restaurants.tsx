import { Card, Col, Container, Row } from "react-bootstrap";
import { Link, json, useLoaderData } from "react-router-dom";

interface IRestaurants {
    _id: string,
    name: string,
    description: string,
    address: string,
    stars?: string
}

const Restaurants = () => {
    const rests = useLoaderData() as IRestaurants[];

    return (
        <Container className="my-3">
            <Row xs={1} md={4} className="g-4">
                {
                    rests.length !== 0 ?
                        rests.map(item =>
                            <Col key={item._id}>
                                <Link to={item._id} style={{textDecoration: "none"}}>
                                    <Card>
                                        <Card.Img variant="top" src="../generic-restaurant-pic.jpg" />
                                        <Card.Body>
                                            <Card.Title>{item.name}</Card.Title>
                                            <Card.Text>
                                                {item.description}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>

                        ) :
                        <p>No Restaurants registered yet!</p>
                }
            </Row>
        </Container>
    );
}

export default Restaurants;

// Note: any component under the <Restaurants /> component can also use the loader
// The same as here, you just need to call "useLoaderData"

// Note: no need to do await resp.json(), the react-router does it for us.
export async function loader() {
    const resp = await fetch("/api/restaurants");
    if (!resp.ok) {
        throw json({ message: "Could not fetch all restaurants data from server" },
            { status: 500 }
        );
    }
    else {
        return resp;
    }
}