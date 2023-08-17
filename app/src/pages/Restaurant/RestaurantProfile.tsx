import { Button, Card, Container, ListGroup } from "react-bootstrap";
import { Link, json, useRouteLoaderData, useSubmit, redirect } from "react-router-dom";
import { IRestaurant } from "../../interfaces";

const RestaurantProfile = () => {
    const restProfile = useRouteLoaderData("restaurant-details") as IRestaurant;
    const submitDelete = useSubmit();

    return (
        <Container className="d-flex justify-content-center my-2">
            <Card style={{ maxWidth: "800px" }}>
                <Card.Img src={restProfile.image} alt={restProfile.name} style={{ maxHeight: "300px" }} />
                <Card.Body>
                    <Card.Title>
                        {restProfile.name}
                    </Card.Title>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>{restProfile.description}</ListGroup.Item>
                        <ListGroup.Item>{restProfile.address}</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
                <div className="m-1">
                    <Link to="edit" className="btn btn-outline-dark mx-2">
                        Edit
                    </Link>
                    <Button onClick={() => {
                        submitDelete(null, { method: "DELETE" });
                    }} >
                        Delete
                    </Button>
                </div>

                <Card.Footer className="text-muted" >
                    Added 2 days ago
                </Card.Footer>
            </Card>
        </Container>
    );
}

export default RestaurantProfile;

export async function loader({ request, params }: { request: any, params: any }) {
    const resp = await fetch("/api/restaurants/" + params.id);

    if (!resp.ok) {
        throw json({ message: "Could not find the selected restaurant profile." },
            { status: 500 });
    }
    else {
        return resp;
    }
}

export async function action({ request, params }: { request: any, params: any }) {
    if (request.method === "DELETE") {
        const resp = await fetch("/api/restaurants/" + params.id, {
            method: "DELETE"
        });

        if (!resp.ok) {
            throw json({ message: `Could not delete restaurant profile: ${params.id}` },
                { status: 500 });
        }
        else {
            return redirect("/restaurants");
        }
    }
}
