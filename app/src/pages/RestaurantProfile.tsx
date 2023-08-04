import { Container } from "react-bootstrap";
import { Link, json, useRouteLoaderData } from "react-router-dom";

interface IRestaurant {
    name: string,
    description: string,
    address: string,
    stars?: number,
    _id: string
}

const RestaurantProfile = () => {
    const restProfile = useRouteLoaderData("restaurant-details") as IRestaurant;
    
    return (
        <Container>
            <div>
                <p><strong>{restProfile.name}</strong></p>
                <p>{restProfile.description}</p>
                <p>{restProfile.address}</p>
            </div>
            <Link to="edit" className="btn btn-outline-dark">
                Edit
            </Link>
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
