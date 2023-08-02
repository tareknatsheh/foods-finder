import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

const RootLayout = () => {
    return (
        <div className="d-flex flex-column vh-100">
            <NavigationBar />
            <Outlet />
            <Footer />
        </div>
    );
}

export default RootLayout;