import { Container } from "react-bootstrap";

const Home = () => {
    return (
        <Container className="mt-4">
            <h4>This is a demo <strong>CRUD</strong> Full-Stack (MERN) web app - it's a fake restaurants review website</h4>
            <p>
                In this demo web app the user can view restaurant profiles, and if they log-in and authenticated they can create, update and delete.
            </p>
            <br />
            <p><strong>I've used the following:</strong></p>
            <ul>
                <li>React-Bootstrap for styling</li>
                <li>React Router Dom version 6.14.2 for the routing</li>
                <li>MongoDB with Mongoose for the database</li>
                <li>Auth0 for basic login and user authentication</li>
            </ul>
            <br />
            <p><strong>TODO:</strong></p>
            <ul>
                <li>Add unit testing for pages: Home, RestaurantProfile and EditRestProfile</li>
                <li>Allow users to create new restaurant profiles</li>
            </ul>
        </Container>
        
    );
}


export default Home;