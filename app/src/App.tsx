import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import RestaurantProfile, { loader as restProfileLoader } from './pages/RestaurantProfile';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import Restaurants, { loader as restaurantsLoader} from './pages/Restaurants';
import RestaurantsRootLayout from './pages/RestaurantsRootLayout';
import EditRestProfile, {action as editProfileAction} from './pages/EditRestProfile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> }, // index: true is like we say path: ""
      {
        path: "restaurants",
        element: <RestaurantsRootLayout />,
        children: [
          {index: true, element: <Restaurants />, loader: restaurantsLoader},
          // If you put / before the path name, it becames an absolute path (here it's relative path)
          {
            path: ":id",
            id: "restaurant-details",
            loader:  restProfileLoader,
            children: [
              {index: true,  element: <RestaurantProfile />},
              {path: "edit", element: <EditRestProfile />, action: editProfileAction }
            ]
          }
        ]
      },
      { path: "about", element: <p>Under construction</p>}
    ]
  }
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
