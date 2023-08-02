import Container from 'react-bootstrap/Container';
import NavigationBar from '../components/NavigationBar';
import { useRouteError } from 'react-router-dom';

interface IError {
    data: {
        message: string
    },
    status: number,
    error?: any
}

const ErrorPage = () => {
    const error = useRouteError() as IError;
    console.log(error);
    
    let msg = error.data.message || error.error.message;
    let status = error.status;
    return (
        <>
        <NavigationBar />
        <Container className='center flex-column'>
            <h2>{status}</h2>
            <h1>Hmmm, something went wrong</h1>
            <p>{msg}</p>
        </Container>
        </>
    );
}

export default ErrorPage;