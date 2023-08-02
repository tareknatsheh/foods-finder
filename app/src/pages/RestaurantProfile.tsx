import { useLoaderData, json } from "react-router-dom";

interface IRestaurant {
    name: string,
    description: string,
    address: string,
    stars?: number,
    _id: string
}

const RestaurantProfile = () => {
    const restProfile = useLoaderData() as IRestaurant;

    return (
        <>
        <p><strong>{restProfile.name}</strong></p>
        <p>{restProfile.description}</p>
        <p>Address: {restProfile.address}</p>
        </>
    );
}

export default RestaurantProfile;

export async function loader({request, params}: { request: any, params: any })
{
    const resp = await fetch("/api/restaurants/" + params.id);
    if(!resp.ok)
    {
        throw json({ message: "Could not find the selected restaurant profile."},
        {status: 500});
    }
    else
    {
        return resp;
    }
}
