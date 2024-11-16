import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;