import { render, screen, waitFor } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom'
import Restaurants from './Restaurants';

const TEST_DATA = [
    {
        "_id": 1,
        "name": "Tasty Bites",
        "description": "A delightful fusion of flavors from around the world.",
        "address": "123 Main Street, Cityville, USA",
        "image": "https://plus.unsplash.com/premium_photo-1673830185613-fba8baacca0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "stars": 4.5
    },
    {
        "_id": 2,
        "name": "Cheesy Delights",
        "description": "The cheesiest dishes you'll ever taste.",
        "address": "456 Cheese Avenue, Townburg, USA",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "stars": 3.8
    }
];

test('renders restaurants page with some test restaurants cards', async () => {

    const routes = [
        {
            path: "/restaurants",
            element: <Restaurants />,
            loader: () => TEST_DATA
        },
    ];

    const router = createMemoryRouter(routes, {
        initialEntries: ["/", "/restaurants"]
    });

    render(<RouterProvider router={router} />);

    const restNameText = /tasty bites/i;
    const foundItem = await screen.findByText(restNameText);
    expect(foundItem).toBeInTheDocument();

    // Another way of doing it:
    // await waitFor(() => expect(screen.findByText(restNameText)).resolves.toBeInTheDocument());

});