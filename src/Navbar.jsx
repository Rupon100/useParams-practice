import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="bg-gray-900 text-white p-6 flex justify-between items-center">
            <h2 className="p bg-green-400 p-2 rounded text-black">UseParams</h2>
            <div>
                <ul className="space-x-3">
                    <Link to='/'>All Post</Link>
                    <Link to='/common/contact/true'>Contact</Link>
                    <Link to='/common/about'>About Us</Link>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;