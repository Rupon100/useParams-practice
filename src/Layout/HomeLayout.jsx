import { Outer } from "react-router-dom"

const HomeLayout = () => {
    return (
        <div>
            <nav>
                <h1>Navbar here</h1>
            </nav>
            <main>
                <Outer></Outer>
            </main>
        </div>
    );
};

export default HomeLayout;