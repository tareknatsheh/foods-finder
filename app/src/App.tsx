import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import RestaurantProfile, { loader as restProfileLoader, action as deleteRestAction } from './pages/Restaurant/RestaurantProfile';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import Restaurants, { loader as restaurantsLoader, action as resetAction } from './pages/Restaurant/Restaurants';
import RestaurantsRootLayout from './pages/Restaurant/RestaurantsRootLayout';
import EditRestProfile, { action as editProfileAction } from './pages/Restaurant/EditRestProfile';
import About from './pages/About';
import { AuthenticationGuard } from './components/AuthenticationGuard';

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
          { index: true, element: <Restaurants />, loader: restaurantsLoader, action: resetAction },
          // If you put / before the path name, it becames an absolute path (here it's relative path)
          {
            path: ":id",
            id: "restaurant-details",
            loader: restProfileLoader,
            children: [
              { index: true, element: <RestaurantProfile />, action: deleteRestAction },
              {
                path: "edit",
                element: <AuthenticationGuard component={EditRestProfile} />,
                action: editProfileAction
              }
            ]
          }
        ]
      },
      { path: "about", element: <About /> }
    ]
  }
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
