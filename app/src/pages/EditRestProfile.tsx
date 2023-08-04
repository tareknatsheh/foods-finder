import { Link, json, useRouteLoaderData, redirect, Form } from "react-router-dom";
import Button from 'react-bootstrap/Button';

interface IRestaurant {
    name: string,
    description: string,
    address: string,
    stars?: number,
    _id: string
}

const EditRestProfile = () => {
    const restProfile = useRouteLoaderData("restaurant-details") as IRestaurant;

    return (
        <Form method="PUT">
            <div className="mb-3 form-group" >
                <label htmlFor="restName1">Restaurant Name</label>
                <input type="text" className="form-control" id="restName1" placeholder="Enter restaurant name" name="restName" defaultValue={restProfile.name} />
            </div>
            <div className="mb-3 form-group" >
                <label htmlFor="restDesc1">Description</label>
                <textarea rows={4} className="form-control" id="restDesc1" placeholder="Enter Description" name="description" defaultValue={restProfile.description} />
            </div>
            <div className="mb-3 form-group" >
                <label htmlFor="restAddress1">Address</label>
                <input type="text" className="form-control" id="restAddress1" placeholder="Enter Address" name="address" defaultValue={restProfile.address} />
            </div>

            <Button variant="primary" type="submit">
                Save
            </Button>
            <Link to=".." className="btn btn-outline-dark mx-3" >Cancel</Link>
        </Form>
    );
}

export default EditRestProfile;

export async function action({ request, params }: { request: any, params: any }) {

    /*
"name": "Sushi Sensation",
        "description": "Savor the artistry of our sushi creations.",
        "address": "987 Seaweed Street, Fishville, USA",
        "stars": 4.2
    */
    const data = await request.formData();
    const reqBody = {
        name: data.get("restName"),
        description: data.get("description"),
        address: data.get("address"),
        stars: data.get("stars") || 5,
    }
    const resp = await fetch("/api/restaurants/" + params.id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reqBody)
    });

    if (!resp.ok) {
        throw json({ message: "Could not edit restaurant profile." },
            { status: 500 });
    }
    else {
        return redirect("/restaurants");
    }



}