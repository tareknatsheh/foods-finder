import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { Link, json, useLoaderData, redirect, useSubmit } from "react-router-dom";
import { IRestaurant } from "../../interfaces";

const Restaurants = () => {
    const rests = useLoaderData() as IRestaurant[];
    const resetDataSubmit = useSubmit();

    return (
        <Container className="my-3">
            <Row className="my-2">
                <Col>
                    <Button variant="success" onClick={() => { resetDataSubmit(null, { method: "POST" }) }}>Reset data</Button>
                </Col>
            </Row>
            <Row xs={1} md={4} className="g-4">
                {
                    rests.length !== 0 ?
                        rests.map(item =>
                            <Col key={item._id}>
                                <Link to={item._id} style={{ textDecoration: "none" }}>
                                    <Card>
                                        <Card.Img variant="top" src={item.image} style={{ height: '200px', objectFit: 'cover' }} />
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

export async function action(){
    const resp = await fetch("/api/seed", {method: "POST"});
    if (!resp.ok) {
        throw json({ message: "Could not RESET restaurant profiles." },
            { status: 500 });
    }
    else {
        return redirect(`/restaurants/`);
    }
}