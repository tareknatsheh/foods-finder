import { Container } from "react-bootstrap";

const Home = () => {
    return (
        <Container className="mt-4">
            <h4>This is a demo web app - it's a fake restaurants review platform</h4>
            <p>I've used the following:</p>
            <ul>
                <li>React-Bootstrap for styling</li>
                <li>React Router Dom version 6.14.2 for the routing</li>
                <li>MongoDB with Mongoose for the database</li>
            </ul>
            <br />
            <p>TODO:</p>
            <ul>
                <li>Add unit testing</li>
                <li>Replace the placeholder image with unique ones using a url for each restaurant</li>
                <li>Create users login system and add authentication</li>
                <li>Allow users to create and delete restaurants</li>
            </ul>
        </Container>
        
    );
}


export default Home;